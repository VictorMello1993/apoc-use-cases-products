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
		echo: false,
		default: "123456",
	});

	Terminal.sucesso(`Usuário ${nome} registrado com sucesso!`);
	Terminal.sucesso(`Email: ${email}`);
	Terminal.sucesso(`Senha: ${senha}`);

	await Terminal.esperarEnter();
}
