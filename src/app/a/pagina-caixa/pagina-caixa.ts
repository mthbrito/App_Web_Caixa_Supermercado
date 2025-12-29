import { Component, signal } from '@angular/core';
import { CabecalhoCaixa } from '../cabecalho-caixa/cabecalho-caixa';
import { ListaItensCarrinho } from '../lista-itens-carrinho/lista-itens-carrinho';
import { FormularioProduto } from '../formulario-produto/formulario-produto';
import { TotalCarrinho } from '../total-carrinho/total-carrinho';
import { AcoesCaixa } from '../acoes-caixa/acoes-caixa';
import { FinalizarCompraModal } from '../finalizar-compra-modal/finalizar-compra-modal';
import { VendaService } from '../../shared/venda-service';
import { GerenciarProdutosModal } from '../gerenciar-produtos-modal/gerenciar-produtos-modal';
import { CompraService } from '../../service/compra-service';
import { Compra } from '../../model/compra';
import { Produto } from '../../model/produto';
import { FormaPagamento } from '../../model/forma-pagamento';
import { CartService } from '../../shared/cart-service';
import { MensagemToast } from '../mensagem-toast/mensagem-toast';
import { ProdutoService } from '../../service/produto-service';

@Component({
  selector: 'app-pagina-caixa',
  imports: [
    CabecalhoCaixa,
    ListaItensCarrinho,
    FormularioProduto,
    TotalCarrinho,
    AcoesCaixa,
    FinalizarCompraModal,
    GerenciarProdutosModal,
    MensagemToast,
  ],
  templateUrl: './pagina-caixa.html',
  styleUrl: './pagina-caixa.scss',
})
export class PaginaCaixa {
  finalizarCompraModalAberto = signal<boolean>(false);
  gerenciarProdutosModalAberto = signal<boolean>(false);
  mensagemToast = signal<string>('');
  tipoToast = signal<'sucesso' | 'erro'>('sucesso');

  produtosCadastrados = signal<Produto[]>([]);
  modoFormulario = signal<'CRIAR' | 'EDITAR'>('CRIAR');
  produtoSelecionado = signal<Produto | null>(null);

  constructor(
    private vendaService: VendaService,
    private compraService: CompraService,
    private produtoService: ProdutoService,
    private cartService: CartService
  ) {}

  public iniciarCompra(): void {
    this.vendaService.iniciarVenda();
  }

  public concluirCompra(formaPagamento: FormaPagamento): void {
    const produtos: Produto[] = this.cartService.listaProdutos();
    if (produtos.length === 0) {
      this.mensagemToast.set(
        '❌ Não é possível concluir a compra - Carrinho vazio'
      );
      this.tipoToast.set('erro');
      this.finalizarCompraModalAberto.set(false);
      return;
    }
    const compra: Compra = {
      produtosCompra: produtos,
      formaPagamento: formaPagamento,
    };
    this.compraService.postCompra(compra).subscribe({
      next: () => {
        this.mensagemToast.set(
          '✅ Compra concluída com sucesso - Total: R$ ' +
            this.cartService.total().toFixed(2) +
            ' - Forma de Pagamento: ' +
            formaPagamento
        );
        this.tipoToast.set('sucesso');
      },
      error: () => {
        this.mensagemToast.set('❌ Erro ao concluir a compra');
        this.tipoToast.set('erro');
      },
    });
    this.finalizarCompraModalAberto.set(false);
  }

  public abrirFinalizarCompraModal(): void {
    if (!this.vendaService.vendaIniciada()) return;
    this.finalizarCompraModalAberto.set(true);
  }
  public fecharFinalizarCompraModal(): void {
    this.finalizarCompraModalAberto.set(false);
  }

  public abrirGerenciarProdutosModal(): void {
    this.gerenciarProdutosModalAberto.set(true);

    this.produtoService.getProdutos().subscribe({
      next: (produtos) => this.produtosCadastrados.set(produtos),
      error: () => this.produtosCadastrados.set([]),
    });

    this.modoFormulario.set('CRIAR');
    this.produtoSelecionado.set(null);
  }

  public fecharGerenciarProdutosModal(): void {
    this.gerenciarProdutosModalAberto.set(false);
  }

  public fecharConcluirCompra(): void {
    this.mensagemToast.set('');
    this.cartService.limparCarrinho();
    this.vendaService.finalizarVenda();
  }
}
