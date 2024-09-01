import { LoginUsuarioUseCase } from "../../../core/usuario/service/LoginUsuarioUseCase";
import { Crypto } from "../../auth/Crypto";
import { UsuarioRepositoryMemory } from "../../db/UsuarioRepositoryMemory";
import { Terminal } from "../utils/Terminal";

export async function LoginUsuario() {
	Terminal.titulo("Login Usuário");

	const email = await Terminal.campoObrigatorio("E-mail", {
		default: "fulano@teste.com",
	});

	const senha = await Terminal.campoObrigatorio("Senha", {
		echo: false,
		default: "!Senha123",
	});

	try {
		//Padrão singleton
		const repository = UsuarioRepositoryMemory.instance;

		const crypto = new Crypto();
		const useCase = new LoginUsuarioUseCase(crypto, repository);
		const usuario = await useCase.execute({ email, senha });

		Terminal.sucesso(`Bem-vindo, ${usuario.nome.primeiroNome}!`);
	} catch (e: any) {
		Terminal.erro(e.message);
	} finally {
		await Terminal.esperarEnter();
	}
}
