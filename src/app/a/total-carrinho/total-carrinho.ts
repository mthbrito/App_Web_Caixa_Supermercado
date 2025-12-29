import { Component } from '@angular/core';
import { CartService } from '../../shared/cart-service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-total-carrinho',
  imports: [CurrencyPipe],
  templateUrl: './total-carrinho.html',
  styleUrl: './total-carrinho.scss',
})
export class TotalCarrinho {
  constructor(public cartService: CartService) {}
}
