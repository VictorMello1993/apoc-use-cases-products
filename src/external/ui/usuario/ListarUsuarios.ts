import { ObterUsuariosUseCase } from "../../../core/usuario/service/ObterUsuariosUseCase";
import { UsuarioRepositoryMemory } from "../../db/UsuarioRepositoryMemory";
import { Terminal } from "../utils/Terminal";

export async function ListarUsuarios() {
	Terminal.titulo("Listar Usuários");

	try {
		//Padrão singleton
		const repository = UsuarioRepositoryMemory.instance;
		const useCase = new ObterUsuariosUseCase(repository);

		const usuarios = await useCase.execute();

		Terminal.tabela(
			usuarios.map((u) => ({
				id: u.id.valor,
				nome: u.nome.completo,
				email: u.email.valor,
			})),
		);
	} catch (e: any) {
		Terminal.erro(e.message);
	} finally {
		await Terminal.esperarEnter();
	}
}
