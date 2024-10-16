import { PedidoDTO } from "../../../adapters/dto/PedidoDTO";

export class Carrinho {
	private static _pedido: PedidoDTO | null = null;

	static atualizar(pedido: PedidoDTO) {
		this._pedido = pedido;
	}

	static limpar() {
		this._pedido = null;
	}

	static get pedido(): PedidoDTO | null {
		return this._pedido;
	}
}
