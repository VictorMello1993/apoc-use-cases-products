import type { IUseCase } from "../../shared/IUseCase";
import { SenhaForteVO } from "../../shared/SenhaForteVO";
import { Usuario } from "../model/Usuario";

type Input = {
	nome: string;
	email: string;
	senha: string;
};

export class RegistrarUsuarioUseCase implements IUseCase<Input, void> {
	async execute(input: Input): Promise<void> {
		const senha = new SenhaForteVO(input.senha);

		const usuario = new Usuario({
			nome: input.nome,
			email: input.email,
			senha: senha.valor,
		});

		console.log("fim");
	}
}
