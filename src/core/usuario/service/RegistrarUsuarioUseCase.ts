import { IUseCase } from "../../shared/IUseCase";
import { SenhaForteVO } from "../../shared/SenhaForteVO";
import { Usuario } from "../model/Usuario";
import { ICryptoProvider } from "../provider/ICryptoProvider";
import { IUsuarioRepository } from "../provider/IUsuarioRepository";

type Input = {
	nome: string;
	email: string;
	senha: string;
};

export class RegistrarUsuarioUseCase implements IUseCase<Input, void> {
	constructor(
		private cryptoProvider: ICryptoProvider,
		private repository: IUsuarioRepository,
	) {}
	async execute(input: Input): Promise<void> {
		const senha = new SenhaForteVO(input.senha);

		const usuario = new Usuario({
			nome: input.nome,
			email: input.email,
			senha: this.cryptoProvider.crypto(senha.valor),
		});

		await this.repository.salvar(usuario);
	}
}
