import { Component, computed } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CarrinhoService } from '../../service/carrinho-service';

@Component({
  selector: 'app-lista-itens-carrinho',
  imports: [CurrencyPipe],
  templateUrl: './lista-itens-carrinho.html',
  styleUrl: './lista-itens-carrinho.scss',
})
export class ListaItensCarrinho {
  readonly produtos = computed(() => this.carrinhoService.listaProdutos());
  constructor(private carrinhoService: CarrinhoService) {}
  removerProduto(indice: number): void {
    this.carrinhoService.removerProduto(indice);
  }
}
