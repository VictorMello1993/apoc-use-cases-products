import { Produto, ProdutoProps } from "../../produto/model/Produto";
import { Entidade, EntidadeProps } from "../../shared/Entidade";
import { PrecoVO } from "../../shared/PrecoVO";
import { QuantidadeVO } from "../../shared/QuantidadeVO";

export interface ItemPedidoProps extends EntidadeProps {
	quantidade?: number;
	valor?: number;
	produto?: ProdutoProps;
}

export class ItemPedido extends Entidade<ItemPedido, ItemPedidoProps> {
	readonly quantidade: QuantidadeVO;
	readonly valor: PrecoVO;
	readonly produto: Produto;

	constructor(props: ItemPedidoProps) {
		super(props);
		this.quantidade = new QuantidadeVO(props.quantidade);
		this.valor = new PrecoVO(props.valor!);
		this.produto = new Produto(props.produto!);
	}

	static novo(
		produto: Produto,
		quantidade: QuantidadeVO = new QuantidadeVO(),
	): ItemPedido {
		return new ItemPedido({
			produto: produto.props,
			quantidade: quantidade.valor,
			valor: produto.preco.valor,
		});
	}

	get valorTotal(): PrecoVO {
		return new PrecoVO(this.valor.valor * this.quantidade.valor);
	}

	adicionarQuantidade(quantidade: QuantidadeVO): ItemPedido {
		return this.clone({
			quantidade: this.quantidade.somar(quantidade).valor,
		});
	}

	removerQuantidade(quantidade: QuantidadeVO): ItemPedido {
		return this.clone({
			quantidade: this.quantidade.subtrair(quantidade).valor,
		});
	}
}
