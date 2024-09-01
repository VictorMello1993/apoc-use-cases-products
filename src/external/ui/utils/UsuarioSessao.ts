import type { Usuario } from "../../../core/usuario/model/Usuario";

export class UsuarioSessao {
	private static _usuario: Usuario | null = null;

	static iniciar(usuario: Usuario) {
		this._usuario = usuario;
	}

	static finalizar() {
		this._usuario = null;
	}

	static get usuario(): Usuario | null {
		return this._usuario;
	}
}
