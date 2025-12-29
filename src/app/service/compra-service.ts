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

  public postCompra(compra?: Compra): Observable<Compra> {
    return this.http.post<Compra>(this.apiUrl, compra);
  }

  public getCompra(id: number): Observable<Compra> {
    return this.http.get<Compra>(`${this.apiUrl}/${id}`);
  }

  public putCompra(id: number, compra: Compra): Observable<Compra> {
    return this.http.put<Compra>(`${this.apiUrl}/${id}`, compra);
  }

  public deleteCompra(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  public getCompras(): Observable<Compra[]> {
    return this.http.get<Compra[]>(this.apiUrl);
  }

  public addProdutoToCompra(compraId: number, produtoId: number): Observable<Compra> {
    return this.http.post<Compra>(`${this.apiUrl}/${compraId}/produtos/${produtoId}`, {});
  }

  public removeProdutoFromCompra(compraId: number, produtoId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${compraId}/produtos/${produtoId}`);
  }

  public setPagamentoFromCompra(compraId: number, pagamento: string): Observable<Compra> {
    return this.http.put<Compra>(`${this.apiUrl}/${compraId}/pagamento/${pagamento}`, {});
  }

}
