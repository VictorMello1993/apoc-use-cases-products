import { Usuario } from "../../../core/usuario/model/Usuario";
import { RegistrarUsuarioUseCase } from "../../../core/usuario/service/RegistrarUsuarioUseCase";
import { Terminal } from "../utils/Terminal";

export async function RegistrarUsuario() {
	Terminal.titulo("Registrar Usuário");

	const nome = await Terminal.campoObrigatorio("Nome", {
		default: "Fulano de Tal",
	});

	const email = await Terminal.campoObrigatorio("E-mail", {
		default: "fulano@teste.com",
	});

	const senha = await Terminal.campoObrigatorio("Senha", {
		echo: true,
		default: "123456",
	});

	try {
		const useCase = new RegistrarUsuarioUseCase();
		await useCase.execute({ nome, email, senha });
		Terminal.sucesso("Usuário registrado com sucesso");
	} catch (e: any) {
		Terminal.erro(e.message);
	} finally {
		await Terminal.esperarEnter();
	}
}