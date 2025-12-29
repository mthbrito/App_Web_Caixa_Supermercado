import { Component, output } from '@angular/core';
import { VendaService } from '../../shared/venda-service';

@Component({
  selector: 'app-acoes-caixa',
  imports: [],
  templateUrl: './acoes-caixa.html',
  styleUrl: './acoes-caixa.scss',
})
export class AcoesCaixa {
  iniciarCompra = output<void>();
  finalizarCompra = output<void>();
  gerenciarProdutos = output<void>();

  public onIniciarCompra(): void {
    this.iniciarCompra.emit();
  }
  public onFinalizarCompra(): void {
    this.finalizarCompra.emit();
  }
  public onGerenciarProdutos(): void {
    this.gerenciarProdutos.emit();
  }
}
