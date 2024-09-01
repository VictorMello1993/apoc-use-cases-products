import type { Usuario } from "../model/Usuario";

export interface IUsuarioRepository {
	obterPorEmail(email: string): Promise<Usuario | null>;
	obterTodos(): Promise<Usuario[]>;
	salvar(usuario: Usuario): Promise<void>;
}
