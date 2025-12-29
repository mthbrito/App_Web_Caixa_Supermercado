import { Component } from '@angular/core';
import { CartService } from '../../shared/cart-service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-lista-itens-carrinho',
  imports: [CurrencyPipe],
  templateUrl: './lista-itens-carrinho.html',
  styleUrl: './lista-itens-carrinho.scss',
})
export class ListaItensCarrinho {
  constructor(public cartService: CartService) {}
}
