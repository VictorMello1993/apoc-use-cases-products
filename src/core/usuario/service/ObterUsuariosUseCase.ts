import { IUseCase } from "../../shared/IUseCase";
import { Usuario } from "../model/Usuario";
import { IUsuarioRepository } from "../provider/IUsuarioRepository";

export class ObterUsuariosUseCase implements IUseCase<void, Usuario[]> {
	constructor(private repository: IUsuarioRepository) {}
	async execute(): Promise<Usuario[]> {
		return this.repository.obterTodos();
	}
}
