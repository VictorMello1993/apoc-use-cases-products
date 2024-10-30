import { Entidade, EntidadeProps } from "../../shared/Entidade";
import { PrecoVO } from "../../shared/PrecoVO";
import { Usuario, UsuarioProps } from "../../usuario/model/Usuario";
import { ItemPedido, ItemPedidoProps } from "./ItemPedido";
import { PedidoStatus, TipoPedidoStatus } from "./PedidoStatus";

export interface PedidoProps extends EntidadeProps {
	cliente?: UsuarioProps;
	data?: Date;
	valorTotal?: number;
	itens?: ItemPedidoProps[];
	status?: TipoPedidoStatus;
}

export class Pedido extends Entidade<Pedido, PedidoProps> {
	readonly cliente: Usuario;
	readonly data: Date;
	readonly valorTotal: PrecoVO;
	readonly itens: ItemPedido[];
	readonly status: PedidoStatus;

	constructor(props: PedidoProps) {
		super({ ...props, valorTotal: Pedido.calcularValorTotal(props) });
		this.cliente = new Usuario(props.cliente!);
		this.data = props.data!;
		this.valorTotal = new PrecoVO(this.props.valorTotal!);
		this.itens = (props.itens ?? []).map((item) => new ItemPedido(item));
		this.status = new PedidoStatus(props.status!);
	}

	static novo(cliente: Usuario, ...itens: ItemPedido[]): Pedido {
		return new Pedido({
			cliente: cliente.props,
			data: new Date(),
			itens: itens.map((item) => item.props),
			status: PedidoStatus.ABERTO,
		});
	}

	adicionarItem(item: ItemPedido): Pedido {
		if (!item) {
			return this;
		}

		const itemJaAdicionado = this.itens.find((itemPedido) =>
			itemPedido.produto.igual(item.produto),
		);

		if (!itemJaAdicionado) {
			return this.clone({
				itens: [...this.itens, item].map((item) => item.props),
			});
		}

		return this.clone({
			itens: this.itens
				.map((itemPedido) => {
					return itemPedido.produto.igual(item.produto)
						? itemPedido.adicionarQuantidade(item.quantidade)
						: itemPedido;
				})
				.map((item) => item.props),
		});
	}

	removerItem(item: ItemPedido): Pedido {
		if (!item) {
			return this;
		}

		const itemJaAdicionado = this.itens.find((itemPedido) =>
			itemPedido.produto.igual(item.produto),
		);

		if (!itemJaAdicionado) {
			return this;
		}

		if (itemJaAdicionado.quantidade.valor - item.quantidade.valor <= 0) {
			return this.clone({
				itens: this.itens
					.filter((itemPedido) => itemPedido.diferente(item))
					.map((item) => item.props),
			});
		}

		return this.clone({
			itens: this.itens
				.map((itemPedido) => {
					return itemPedido.igual(item)
						? itemPedido.removerQuantidade(item.quantidade)
						: itemPedido;
				})
				.map((item) => item.props),
		});
	}

	pagar(): Pedido {
		return this.clone({ status: this.status.pagar().value });
	}

	cancelar(): Pedido {
		return this.clone({ status: this.status.cancelar().value });
	}

	finalizar(): Pedido {
		return this.clone({ status: this.status.finalizar().value });
	}

	private static calcularValorTotal(props: PedidoProps): number {
		if (!props.itens || props.itens.length === 0) {
			return props.valorTotal!;
		}

		return props.itens
			.map((item) => new ItemPedido(item))
			.map((item) => item.valorTotal.valor)
			.reduce((a, b) => a + b);
	}
}
