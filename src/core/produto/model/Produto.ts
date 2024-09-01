import { Entidade, type EntidadeProps } from "../../shared/Entidade";
import { NomeVO } from "../../shared/NomeVO";
import { PrecoVO } from "../../shared/PrecoVO";

export interface ProdutoProps extends EntidadeProps {
	nome?: string;
	preco?: number;
}

export class Produto extends Entidade<Produto, ProdutoProps> {
	readonly nome: NomeVO;
	readonly preco: PrecoVO;

	constructor(props: ProdutoProps) {
		super(props);
		this.nome = new NomeVO(props.nome!);
		this.preco = new PrecoVO(props.preco!);
	}
}
