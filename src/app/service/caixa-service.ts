import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CaixaService {
  private readonly _compraIniciada = signal<boolean>(false);
  public readonly compraIniciada = this._compraIniciada.asReadonly();

  public iniciarCompra(): void {
    this._compraIniciada.set(true);
  }

  public finalizarCompra(): void {
    this._compraIniciada.set(false);
  }
}
