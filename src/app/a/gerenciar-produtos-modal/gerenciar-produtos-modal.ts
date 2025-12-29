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
  // modoFormulario = input<'CRIAR' | 'EDITAR'>();
  // produtoSelecionado = input<Produto | null>();
  modoFormulario = signal<'CRIAR' | 'EDITAR'>('CRIAR');
  produtoSelecionado = signal<Produto | null>(null);
  nomeProduto = signal<string>('');
  precoProduto = signal<number | null>(null);
  unidadeProduto = signal<string>('');

  onRemoverProduto(arg0: any) {
    throw new Error('Method not implemented.');
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
  onSalvarProduto() {
    throw new Error('Method not implemented.');
  }

  onFechar() {
    throw new Error('Method not implemented.');
  }
  atualizarProduto() {
    throw new Error('Method not implemented.');
  }
  adicionarNovoProduto() {
    throw new Error('Method not implemented.');
  }

  fecharGerenciarProdutosModal = output<void>();
  onFecharGerenciarProdutosModal() {
    this.fecharGerenciarProdutosModal.emit();
  }
  salvarProdutos() {
    throw new Error('Method not implemented.');
  }
}
