import { v4 as uuid, validate } from "uuid";

export class IdVO {
	readonly valor: string;

	constructor(valor?: string) {
		this.valor = valor ?? uuid();

		if (!validate(this.valor)) {
			throw new Error("Id inválido");
		}
	}

	igual(id: IdVO): boolean {
		return this.valor === id.valor;
	}

	diferente(id: IdVO): boolean {
		return !this.igual(id);
	}
}
