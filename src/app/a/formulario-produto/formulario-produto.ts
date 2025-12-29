import { FormsModule } from '@angular/forms';
import { Component, signal } from '@angular/core';
import { Produto } from '../../model/produto';
import { ProdutoService } from '../../service/produto-service';
import { CartService } from '../../shared/cart-service';
import { CurrencyPipe } from '@angular/common';
import { VendaService } from '../../shared/venda-service';

@Component({
  selector: 'app-formulario-produto',
  imports: [FormsModule,CurrencyPipe],
  templateUrl: './formulario-produto.html',
  styleUrl: './formulario-produto.scss',
})
export class FormularioProduto {
  constructor(
    public vendaService: VendaService,
    private produtoService: ProdutoService,
    private cartService: CartService
  ) {}

  codigoProduto = signal<number | null>(null);
  produto = signal<Produto | null>(null);

  public buscarProduto(valor: number | null): void {
    this.codigoProduto.set(valor);
    this.produto.set(null);
    if (!valor) return;
    this.produtoService.getProduto(valor).subscribe({
      next: (produto) => this.produto.set(produto),
      error: () => this.produto.set(null),
    });
  }

  public adicionarProduto(): void {
    this.cartService.adicionarProduto(this.produto()!);
    console.table(this.cartService.listaProdutos());
    this.codigoProduto.set(null);
    this.produto.set(null);
  }
}
