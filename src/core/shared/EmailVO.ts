export class EmailVO {
	constructor(
		readonly valor: string,
		atributo = "e-mail",
	) {
		const EMAIL_VALIDO_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

		if (!valor) {
			throw Error(`O campo ${atributo} é obrigatório`);
		}

		if (!valor.match(EMAIL_VALIDO_REGEX)) {
			throw Error(`${atributo} informado está inválido`);
		}
	}

	get nomeUsuario(): string {
		return this.valor.split("@")[0];
	}

	get nomeDominio(): string {
		return this.valor.split("@")[1];
	}
}
