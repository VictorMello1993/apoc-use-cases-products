import { UsuarioSessao } from "../../../external/ui/utils/UsuarioSessao";
import { EmailVO } from "../../shared/EmailVO";
import { IUseCase } from "../../shared/IUseCase";
import { Usuario } from "../model/Usuario";
import { ICryptoProvider } from "../provider/ICryptoProvider";
import { IUsuarioRepository } from "../provider/IUsuarioRepository";

type Input = {
	email: string;
	senha: string;
};

export class LoginUsuarioUseCase implements IUseCase<Input, Usuario> {
	constructor(
		private cryptoProvider: ICryptoProvider,
		private repository: IUsuarioRepository,
	) {}

	async execute(input: Input): Promise<Usuario> {
		const email = new EmailVO(input.email);

		const usuario = await this.repository.obterPorEmail(email.valor);

		if (!usuario) {
			throw new Error("Usuário não encontrado");
		}

		const senhaCorreta = this.cryptoProvider.compare(
			input.senha,
			usuario.senha!.hash,
		);

		if (!senhaCorreta) {
			throw new Error("E-mail ou senha inválido(s)");
		}

		UsuarioSessao.iniciar(usuario);

		return usuario.semSenha();
	}
}
