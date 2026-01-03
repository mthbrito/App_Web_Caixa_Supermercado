import { computed, Injectable, signal } from '@angular/core';
import { Produto } from '../model/produto';
import { CaixaService } from './caixa-service';
import { CarrinhoService } from './carrinho-service';
import { CompraService } from './compra-service';
import { ProdutoService } from './produto-service';
import { Compra } from '../model/compra';
import { FormaPagamento } from '../model/forma-pagamento';
type ToastTipo = 'sucesso' | 'erro';

@Injectable({
  providedIn: 'root',
})
export class CaixaFacadeService {
  private readonly _produtos = signal<Produto[]>([]);
  private readonly _gerenciarProdutosModalAberto = signal(false);
  private readonly _finalizarCompraModalAberto = signal(false);
  private readonly _mensagemToast = signal<string | null>(null);
  private readonly _tipoToast = signal<ToastTipo>('sucesso');
  readonly produtos = this._produtos.asReadonly();
  readonly gerenciarProdutosModalAberto =
    this._gerenciarProdutosModalAberto.asReadonly();
  readonly finalizarCompraModalAberto =
    this._finalizarCompraModalAberto.asReadonly();
  readonly mensagemToast = this._mensagemToast.asReadonly();
  readonly tipoToast = this._tipoToast.asReadonly();
  readonly possuiProdutosNoCarrinho = computed(
    () => this.carrinhoService.listaProdutos().length > 0
  );

  constructor(
    private readonly caixaService: CaixaService,
    private readonly compraService: CompraService,
    private readonly produtoService: ProdutoService,
    private readonly carrinhoService: CarrinhoService
  ) {}

  iniciarCompra(): void {
    this.caixaService.iniciarCompra();
  }

  abrirFinalizarCompraModal(): void {
    if (!this.caixaService.compraIniciada()) return;
    this._finalizarCompraModalAberto.set(true);
  }

  fecharFinalizarCompraModal(): void {
    this._finalizarCompraModalAberto.set(false);
  }

  concluirCompra(formaPagamento: FormaPagamento): void {
    const produtosIds = this.carrinhoService
      .listaProdutos()
      .map((p) => p.id!)
      .filter(Boolean);

    if (produtosIds.length === 0) {
      this.exibirToast(
        'Não é possível concluir a compra — carrinho vazio',
        'erro'
      );
      this._finalizarCompraModalAberto.set(false);
      return;
    }

    const compra: Compra = {
      produtosCompra: produtosIds,
      formaPagamento,
    };

    this.compraService.salvarCompra(compra).subscribe({
      next: () => {
        this.exibirToast(
          `Compra concluída com sucesso — Total: R$ ${this.carrinhoService
            .total()
            .toFixed(2)} — ${formaPagamento}`,
          'sucesso'
        );
        this.carrinhoService.limparCarrinho();
        this.caixaService.finalizarCompra();
      },
      error: () => {
        this.exibirToast('Erro ao concluir a compra', 'erro');
      },
      complete: () => {
        this._finalizarCompraModalAberto.set(false);
      },
    });
  }

  abrirGerenciarProdutosModal(): void {
    this._gerenciarProdutosModalAberto.set(true);
    this.carregarProdutos();
  }

  fecharGerenciarProdutosModal(): void {
    this._gerenciarProdutosModalAberto.set(false);
  }

  salvarProduto(produto: Produto): void {
    const request = {
      nome: produto.nome,
      preco: produto.preco,
      unidade: produto.unidade,
    };

    const acao$ = produto.id
      ? this.produtoService.atualizarProduto(produto.id, request)
      : this.produtoService.salvarProduto(request);

    acao$.subscribe({
      next: () => {
        this.exibirToast(
          produto.id
            ? 'Produto atualizado com sucesso'
            : 'Produto criado com sucesso',
          'sucesso'
        );
        this.carregarProdutos();
      },
      error: () => {
        this.exibirToast('Erro ao salvar produto', 'erro');
      },
    });
  }

  removerProduto(id: number): void {
    this.produtoService.removerProduto(id).subscribe({
      next: () => {
        this.exibirToast('Produto removido com sucesso', 'sucesso');
        this.carregarProdutos();
      },
      error: () => {
        this.exibirToast('Erro ao remover produto', 'erro');
      },
    });
  }

  private carregarProdutos(): void {
    this.produtoService.listarProdutos().subscribe({
      next: (produtos) => this._produtos.set(produtos),
      error: () => this._produtos.set([]),
    });
  }

  fecharToast(): void {
    this._mensagemToast.set(null);
  }

  private exibirToast(mensagem: string, tipo: ToastTipo): void {
    this._mensagemToast.set(mensagem);
    this._tipoToast.set(tipo);
  }
}
