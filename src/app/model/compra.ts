import { FormaPagamento } from "./forma-pagamento";

export interface Compra {
  produtosCompra: number[];
  formaPagamento: FormaPagamento;
}
