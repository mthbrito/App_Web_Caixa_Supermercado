import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-mensagem-toast',
  imports: [],
  templateUrl: './mensagem-toast.html',
  styleUrl: './mensagem-toast.scss',
})
export class MensagemToast {

  tipoToast = input<'sucesso' | 'erro'>();
  mensagemToast = input<string>();

  fecharToast = output<void>();

  public onFecharManual(): void {
    this.fecharToast.emit();
  }
}
