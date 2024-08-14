import { NomeVO } from "./NomeVO";

export class NomePessoaVO extends NomeVO {
	constructor(
		readonly completo: string,
		atributo = "nome",
		min = 3,
		max = 120,
	) {
		super(completo, atributo, min, max);

		if (this.completo.split(" ").length < 2) {
			throw new Error(`O ${atributo} deve possuir sobrenome`);
		}
	}

	get primeiroNome(): string {
		return this.completo.split(" ")[0];
	}

	get ultimoNome(): string {
		return this.completo.split(" ")[this.completo.split(" ").length - 1];
	}

	get nomeMeio(): string {
		return this.completo.split(" ")[1];
	}
}
