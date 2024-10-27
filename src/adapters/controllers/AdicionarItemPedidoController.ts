import { ItemPedido } from "../../core/pedido/model/ItemPedido";
import { Pedido } from "../../core/pedido/model/Pedido";
import { AdicionarItemPedidoUseCase } from "../../core/pedido/service/AdicionarItemPedidoUseCase";
import { Produto } from "../../core/produto/model/Produto";
import { IConverter } from "../../core/shared/IConverter";
import { QuantidadeVO } from "../../core/shared/QuantidadeVO";
import { Usuario } from "../../core/usuario/model/Usuario";
import { PedidoDTO } from "../dto/PedidoDTO";
import { ProdutoDTO } from "../dto/ProdutoDTO";
import { UsuarioDTO } from "../dto/UsuarioDTO";

type Input = {
	pedido: PedidoDTO | null;
	produto: ProdutoDTO;
	quantidade: number;
	cliente: UsuarioDTO;
};

export class AdicionarItemPedidoController {
	async execute(input: Input): Promise<PedidoDTO> {
		const inputConverter: IConverter<Input, any> = {
			convert(input: Input) {
				return {
					pedido: input.pedido ? new Pedido(input.pedido) : undefined,
					cliente: new Usuario(input.cliente),
					item: ItemPedido.novo(
						new Produto(input.produto),
						new QuantidadeVO(input.quantidade),
					),
				};
			},
		};

		const outputConverter: IConverter<Pedido, PedidoDTO> = {
			convert(pedido: Pedido) {
				return {
					...pedido.props,
					valorTotalFormatado: pedido.valorTotal.formatado(),
					itens: pedido.itens.map((item) => ({
						...item.props,
						valorFormatado: item.valor.formatado(),
					})),
				} as PedidoDTO;
			},
		};

		const useCase = new AdicionarItemPedidoUseCase(
			inputConverter,
			outputConverter,
		);

		return useCase.execute(input);
	}
}
