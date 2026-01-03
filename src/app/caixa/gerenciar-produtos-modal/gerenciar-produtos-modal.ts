import { Component, output, signal, input, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { Produto } from '../../model/produto';

@Component({
  selector: 'app-gerenciar-produtos-modal',
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './gerenciar-produtos-modal.html',
  styleUrl: './gerenciar-produtos-modal.scss',
})
export class GerenciarProdutosModal {
  produtosCadastrados = input<Produto[]>();
  produtoEmEdicao = signal<Produto | null>(null);
  nome = '';
  preco: number | null = null;
  unidade = '';
  modoFormulario = computed(() =>
    this.produtoEmEdicao() ? 'EDITAR' : 'CRIAR'
  );
  confirmar = output<Produto>();
  remover = output<number>();
  fechar = output<void>();

  confirmarProduto() {
    const produto: Produto = {
      id: this.produtoEmEdicao()?.id,
      nome: this.nome,
      preco: this.preco!,
      unidade: this.unidade,
    };
    this.confirmar.emit(produto);
  }

  editarProduto(produto: Produto) {
    this.produtoEmEdicao.set(produto);
    this.nome = produto.nome;
    this.preco = produto.preco;
    this.unidade = produto.unidade;
  }

  cancelarEdicao() {
    this.produtoEmEdicao.set(null);
    this.nome = '';
    this.preco = null;
    this.unidade = '';
  }
}
