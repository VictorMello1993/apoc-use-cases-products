import { Usuario } from "../../core/usuario/model/Usuario";
import { IUsuarioRepository } from "../../core/usuario/provider/IUsuarioRepository";

export class UsuarioRepositoryMemory implements IUsuarioRepository {
	static readonly instance = new UsuarioRepositoryMemory();
	private constructor(private usuarios: Usuario[] = []) {}

	async obterPorEmail(email: string): Promise<Usuario | null> {
		return this.usuarios.find((u) => u.email.valor === email) ?? null;
	}
	async obterTodos(): Promise<Usuario[]> {
		return this.usuarios;
	}
	async salvar(usuario: Usuario): Promise<void> {
		this.usuarios.push(usuario);
	}
}
