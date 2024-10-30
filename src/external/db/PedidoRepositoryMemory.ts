import { Pedido } from "../../core/pedido/model/Pedido";
import { IPedidoRepository } from "../../core/pedido/provider/IPedidoRepository";

export class PedidoRepositoryMemory implements IPedidoRepository {
	static readonly instance = new PedidoRepositoryMemory();

	private constructor(private pedidos: Pedido[] = []) {}

	async salvar(pedido: Pedido): Promise<void> {
		this.pedidos.push(pedido);
	}
}
