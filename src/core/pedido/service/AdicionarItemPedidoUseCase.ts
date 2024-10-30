import { IConverter } from "../../shared/IConverter";
import { IUseCase } from "../../shared/IUseCase";
import { Usuario } from "../../usuario/model/Usuario";
import { ItemPedido } from "../model/ItemPedido";
import { Pedido } from "../model/Pedido";

export type Input = {
	pedido?: Pedido;
	item: ItemPedido;
	cliente: Usuario;
};

export class AdicionarItemPedidoUseCase implements IUseCase<any, any> {
	constructor(
		private readonly inputConverter: IConverter<any, Input>,
		private readonly outputConverter: IConverter<Pedido, any>,
	) {}

	async execute(input: any): Promise<any> {
		const { pedido, cliente, item } = this.inputConverter.convert(input);
		if (!cliente) {
			throw new Error("Cliente não informado");
		}

		if (!pedido) {
			return this.outputConverter.convert(Pedido.novo(cliente, item));
		}

		if (pedido.cliente.id.diferente(cliente.id)) {
			throw new Error("Cliente diferente do pedido");
		}

		return this.outputConverter.convert(pedido.adicionarItem(item));
	}
}
