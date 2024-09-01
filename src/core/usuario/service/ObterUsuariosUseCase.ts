import type { IUseCase } from "../../shared/IUseCase";
import type { Usuario } from "../model/Usuario";
import type { IUsuarioRepository } from "../provider/IUsuarioRepository";

export class ObterUsuariosUseCase implements IUseCase<void, Usuario[]> {
	constructor(private repository: IUsuarioRepository) {}
	async execute(): Promise<Usuario[]> {
		return this.repository.obterTodos();
	}
}
