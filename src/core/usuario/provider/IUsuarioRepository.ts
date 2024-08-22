import type { Usuario } from "../model/Usuario";

export interface IUsuarioRepository {
	buscarPorEmail(email: string): Promise<Usuario | null>;
	buscarTodos(): Promise<Usuario[]>;
	salvar(usuario: Usuario): Promise<void>;
}
