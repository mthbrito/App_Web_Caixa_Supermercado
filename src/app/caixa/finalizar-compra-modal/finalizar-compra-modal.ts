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
  fechar = output<void>();
  concluir = output<FormaPagamento>();

  selecionar(forma: FormaPagamento): void {
    this.formaPagamento.set(forma);
  }

  confirmar(): void {
    const forma = this.formaPagamento();
    if (forma) this.concluir.emit(forma);
  }
}
