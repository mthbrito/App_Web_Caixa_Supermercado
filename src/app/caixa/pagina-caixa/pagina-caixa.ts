import { Component } from '@angular/core';
import { CabecalhoCaixa } from '../cabecalho-caixa/cabecalho-caixa';
import { ListaItensCarrinho } from '../lista-itens-carrinho/lista-itens-carrinho';
import { FormularioProduto } from '../formulario-produto/formulario-produto';
import { TotalCarrinho } from '../total-carrinho/total-carrinho';
import { AcoesCaixa } from '../acoes-caixa/acoes-caixa';
import { FinalizarCompraModal } from '../finalizar-compra-modal/finalizar-compra-modal';
import { GerenciarProdutosModal } from '../gerenciar-produtos-modal/gerenciar-produtos-modal';
import { MensagemToast } from '../mensagem-toast/mensagem-toast';
import { CaixaFacadeService } from '../../service/caixa-facade-service';

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
  constructor(public readonly facade: CaixaFacadeService) {}
}
