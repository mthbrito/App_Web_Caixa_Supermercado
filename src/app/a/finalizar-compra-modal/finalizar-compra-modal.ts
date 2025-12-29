import { Component, output, signal } from '@angular/core';
import { FormaPagamento } from '../../model/forma-pagamento';

@Component({
  selector: 'app-finalizar-compra-modal',
  imports: [],
  templateUrl: './finalizar-compra-modal.html',
  styleUrl: './finalizar-compra-modal.scss',
})
export class FinalizarCompraModal {
  readonly FormaPagamento = FormaPagamento;
  formaPagamento = signal<FormaPagamento | null>(null);
  fecharFinalizarCompraModal = output<void>();
  concluirCompra = output<FormaPagamento>();
  public onFecharFinalizarCompraModal(): void {
    this.fecharFinalizarCompraModal.emit();
  }

  public selecionarFormaPagamento(forma: FormaPagamento): void {
    this.formaPagamento.set(forma);
    console.log('Forma de pagamento selecionado:', forma);
  }
  public onConcluirCompra(): void {
    const forma = this.formaPagamento();
    if (!forma) return;
    this.concluirCompra.emit(forma);
  }
}
