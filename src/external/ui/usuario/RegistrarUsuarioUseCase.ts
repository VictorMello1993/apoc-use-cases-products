import { Usuario } from "../../../core/usuario/model/Usuario";
import { Terminal } from "../utils/Terminal";

export async function RegistrarUsuarioUseCase() {
	Terminal.titulo("Registrar Usuário");

	const nome = await Terminal.campoObrigatorio("Nome", {
		default: "Fulano de Tal",
	});

	const email = await Terminal.campoObrigatorio("E-mail", {
		default: "fulano@teste.com",
	});

	const senha = await Terminal.campoObrigatorio("Senha", {
		echo: false,
		default: "123456",
	});

	try {
		const usuario = new Usuario({ nome, email, senha });
		Terminal.sucesso(`O usuário ${usuario.nome.ultimoNome} registrado com sucesso!`);
	} catch (e: any) {
		Terminal.erro(e.message);
	} finally {
		await Terminal.esperarEnter();
	}

	// Terminal.sucesso(`Usuário ${nome} registrado com sucesso!`);
	// Terminal.sucesso(`Email: ${email}`);
	// Terminal.sucesso(`Senha: ${senha}`);
}
