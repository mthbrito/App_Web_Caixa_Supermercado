import { Component, computed } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CarrinhoService } from '../../service/carrinho-service';

@Component({
  selector: 'app-total-carrinho',
  imports: [CurrencyPipe],
  templateUrl: './total-carrinho.html',
  styleUrl: './total-carrinho.scss',
})
export class TotalCarrinho {
  readonly total = computed(() => this.carrinhoService.total());
  constructor(public carrinhoService: CarrinhoService) {}
}
