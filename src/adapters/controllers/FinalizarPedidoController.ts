import { Pedido } from "../../core/pedido/model/Pedido";
import { IPedidoRepository } from "../../core/pedido/provider/IPedidoRepository";
import { FinalizarPedidoUseCase } from "../../core/pedido/service/FinalizarPedidoUseCase";
import { IConverter } from "../../core/shared/IConverter";
import { PedidoDTO } from "../dto/PedidoDTO";

export class FinalizarPedidoController {
	constructor(private readonly repository: IPedidoRepository) {}

	async execute(pedido: PedidoDTO): Promise<void> {
		const inputConverter: IConverter<PedidoDTO, Pedido> = {
			convert(pedido: PedidoDTO) {
				return new Pedido(pedido);
			},
		};

		const useCase = new FinalizarPedidoUseCase(this.repository, inputConverter);
		return useCase.execute(pedido);
	}
}
