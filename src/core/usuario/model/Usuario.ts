import { EmailVO } from "../../shared/EmailVO";
import { Entidade, type EntidadeProps } from "../../shared/Entidade";
import { NomePessoaVO } from "../../shared/NomePessoaVO";

export interface UsuarioProps extends EntidadeProps {
	nome?: string;
	email?: string;
	senha?: string;
}

export class Usuario extends Entidade<Usuario, UsuarioProps> {
	readonly nome: NomePessoaVO;
	readonly email: EmailVO;
	// readonly senha?: SenhaHashVO

	constructor(props: UsuarioProps) {
		super(props);
		this.nome = new NomePessoaVO(props.nome!);
		this.email = new EmailVO(props.email!);
	}
}
