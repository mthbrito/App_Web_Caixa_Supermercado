import { Component, output, signal, input } from '@angular/core';
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
  modoFormulario = signal<'CRIAR' | 'EDITAR'>('CRIAR');
  produtoSelecionado = signal<Produto | null>(null);
  nomeProduto = signal<string>('');
  precoProduto = signal<number | null>(null);
  unidadeProduto = signal<string>('');
  salvarProduto = output<{ produto: Produto; modo: 'CRIAR' | 'EDITAR' }>();
  removerProduto = output<number>();

  onSalvarProduto() {
    const produto: Produto = {
      id: this.produtoSelecionado()?.id,
      nome: this.nomeProduto(),
      preco: this.precoProduto()!,
      unidade: this.unidadeProduto(),
    };

    this.salvarProduto.emit({
      produto,
      modo: this.modoFormulario(),
    });
  }

  onRemoverProduto(id: number) {
    this.removerProduto.emit(id);
  }

  onSelecionarProduto(produto: Produto) {
    if (!produto) return;
    this.produtoSelecionado.set(produto);
    this.modoFormulario.set('EDITAR');
    this.nomeProduto.set(produto.nome);
    this.precoProduto.set(produto.preco);
    this.unidadeProduto.set(produto.unidade);
  }
  produtosCadastrados = input<Produto[]>();
  onCancelarEdicao() {
    this.modoFormulario.set('CRIAR');
    this.produtoSelecionado.set(null);
    this.nomeProduto.set('');
    this.precoProduto.set(null);
    this.unidadeProduto.set('');
  }

  fecharGerenciarProdutosModal = output<void>();
  onFecharGerenciarProdutosModal() {
    this.fecharGerenciarProdutosModal.emit();
  }
}
