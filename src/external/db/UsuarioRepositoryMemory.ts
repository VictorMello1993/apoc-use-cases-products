import type { Usuario } from "../../core/usuario/model/Usuario";
import type { IUsuarioRepository } from "../../core/usuario/provider/IUsuarioRepository";

export class UsuarioRepositoryMemory implements IUsuarioRepository {
	static readonly instance = new UsuarioRepositoryMemory();
	private constructor(private usuarios: Usuario[] = []) {}

	async buscarPorEmail(email: string): Promise<Usuario | null> {
		return this.usuarios.find((u) => u.email.valor === email) ?? null;
	}
	async buscarTodos(): Promise<Usuario[]> {
		return this.usuarios;
	}
	async salvar(usuario: Usuario): Promise<void> {
		this.usuarios.push(usuario);
	}
}
