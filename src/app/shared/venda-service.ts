import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VendaService {
  private readonly _vendaIniciada = signal<boolean>(false);
  public readonly vendaIniciada = this._vendaIniciada.asReadonly();

  public iniciarVenda(): void {
    this._vendaIniciada.set(true);
  }

  public finalizarVenda(): void {
    this._vendaIniciada.set(false);
  }
}
