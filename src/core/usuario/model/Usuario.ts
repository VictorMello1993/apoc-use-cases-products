import { Entidade, type EntidadeProps } from "../../shared/Entidade";
import { NomePessoaVO } from "../../shared/NomePessoaVO";
import type { NomeVO } from "../../shared/NomeVO";

export interface UsuarioProps extends EntidadeProps {
	nome?: string;
	email?: string;
	senha?: string;
}

export class Usuario extends Entidade<Usuario, UsuarioProps> {
	readonly nome: NomePessoaVO;
	// readonly email: EmailVO
	// readonly senha?: SenhaHashVO

	constructor(props: UsuarioProps) {
		super(props);
		this.nome = new NomePessoaVO(props.nome!);
	}
}
