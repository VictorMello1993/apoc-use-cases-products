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
		default: "$2y$11$wch6X5X/8rqz9k4.tysKGeZ9ydw7l/byEqzlle/MUaCjRusE.Ah5G",
	});

	try {
		const usuario = new Usuario({ nome, email, senha });
		Terminal.sucesso(`O usuário ${usuario.nome.primeiroNome} registrado com sucesso!`);
		Terminal.sucesso(`O e-mail tem domínio ${usuario.email.nomeDominio}`);
	} catch (e: any) {
		Terminal.erro(e.message);
	} finally {
		await Terminal.esperarEnter();
	}
}
