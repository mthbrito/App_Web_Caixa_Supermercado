import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Compra } from '../model/compra';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompraService {
  private apiUrl = 'http://localhost:8080/api/mercado/compras';

  constructor(private http: HttpClient) {}

  public salvarCompra(compra?: Compra): Observable<Compra> {
    return this.http.post<Compra>(this.apiUrl, compra);
  }

  public buscarCompraPorId(id: number): Observable<Compra> {
    return this.http.get<Compra>(`${this.apiUrl}/${id}`);
  }

  public listarCompras(): Observable<Compra[]> {
    return this.http.get<Compra[]>(this.apiUrl);
  }

  public atualizarCompra(id: number, compra: Compra): Observable<Compra> {
    return this.http.put<Compra>(`${this.apiUrl}/${id}`, compra);
  }

  public removerCompra(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
