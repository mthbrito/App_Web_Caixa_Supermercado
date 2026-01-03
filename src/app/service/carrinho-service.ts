import { computed, Injectable, signal } from '@angular/core';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  private readonly _listaProdutos = signal<Produto[]>([]);
  readonly listaProdutos = this._listaProdutos.asReadonly();
  readonly total = computed(() =>
    this._listaProdutos().reduce((total, produto) => total + produto.preco, 0)
  );

  public adicionarProduto(produto: Produto): void {
    if (produto === null) {
      alert('Nenhum produto selecionado para adicionar.');
      return;
    }
    this._listaProdutos.update((lista) => [...lista, produto]);
  }

  public removerProduto(index: number) {
    this._listaProdutos.update((lista) => lista.filter((_, i) => i !== index));
  }

  public limparCarrinho(): void {
    this._listaProdutos.set([]);
  }
}
