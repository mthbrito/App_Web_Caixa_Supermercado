import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaginaCaixa } from "./a/pagina-caixa/pagina-caixa";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PaginaCaixa],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('app-web-caixa-supermercado');
}
