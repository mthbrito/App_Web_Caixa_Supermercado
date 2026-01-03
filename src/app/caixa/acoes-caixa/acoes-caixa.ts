import { Component, output } from '@angular/core';

@Component({
  selector: 'app-acoes-caixa',
  imports: [],
  templateUrl: './acoes-caixa.html',
  styleUrl: './acoes-caixa.scss',
})
export class AcoesCaixa {
  iniciarCompra = output<void>();
  finalizarCompra = output<void>();
  gerenciarProdutos = output<void>();
}
