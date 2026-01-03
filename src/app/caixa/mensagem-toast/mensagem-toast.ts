import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-mensagem-toast',
  imports: [],
  templateUrl: './mensagem-toast.html',
  styleUrl: './mensagem-toast.scss',
})
export class MensagemToast {
  tipo = input<'sucesso' | 'erro'>('sucesso');
  mensagem = input.required<string>();
  fechar = output<void>();
}
