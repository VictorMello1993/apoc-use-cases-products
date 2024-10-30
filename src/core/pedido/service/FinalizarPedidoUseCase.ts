import { IConverter } from "../../shared/IConverter";
import { IUseCase } from "../../shared/IUseCase";
import { Pedido } from "../model/Pedido";
import { IPedidoRepository } from "../provider/IPedidoRepository";

export class FinalizarPedidoUseCase implements IUseCase<any, void> {
	constructor(
		private readonly repository: IPedidoRepository,
		private readonly inputConverter: IConverter<any, Pedido>,
	) {}
	async execute(input: any): Promise<any> {
		const pedido = this.inputConverter.convert(input);
		const pedidoFinalizado = pedido.finalizar();
		await this.repository.salvar(pedidoFinalizado);
	}
}
