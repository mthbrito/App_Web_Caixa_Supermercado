import { FormaPagamento } from "./forma-pagamento";
import { Produto } from "./produto";

export interface Compra {
  // id?: number;
  // data?: string;
  produtosCompra: Produto[];
  // valorCompra: number;
  formaPagamento: FormaPagamento;
}
