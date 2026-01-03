import { FormsModule } from '@angular/forms';
import { Component, signal } from '@angular/core';
import { Produto } from '../../model/produto';
import { ProdutoService } from '../../service/produto-service';
import { CurrencyPipe } from '@angular/common';
import { CaixaService } from '../../service/caixa-service';
import { CarrinhoService } from '../../service/carrinho-service';

@Component({
  selector: 'app-formulario-produto',
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './formulario-produto.html',
  styleUrl: './formulario-produto.scss',
})
export class FormularioProduto {
  constructor(
    public caixaService: CaixaService,
    private produtoService: ProdutoService,
    private carrinhoService: CarrinhoService
  ) {}

  codigoProduto = signal<number | null>(null);
  produto = signal<Produto | null>(null);

  buscarProduto(codigo: number | null): void {
    if (!codigo) {
      this.produto.set(null);
      return;
    }
    this.produtoService.buscarProdutoPorId(codigo).subscribe({
      next: this.produto.set,
      error: () => this.produto.set(null),
    });
  }

  adicionarProduto(): void {
    this.carrinhoService.adicionarProduto(this.produto()!);
    console.table(this.carrinhoService.listaProdutos());
    this.codigoProduto.set(null);
    this.produto.set(null);
  }
}
