import { Pedido } from "../model/Pedido";

export interface IPedidoRepository {
	salvar(pedido: Pedido): Promise<void>;
}
