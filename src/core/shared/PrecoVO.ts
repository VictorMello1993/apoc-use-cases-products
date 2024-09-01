export class PrecoVO {
	constructor(
		readonly valor: number,
		atributo = "preço",
	) {
		if (!valor) {
			throw new Error(`O campo ${atributo} é obrigatório`);
		}

		if (valor <= 0) {
			throw new Error("Preço deve ser maior que zero");
		}
	}

	formatado(padrao = "pt-BR", moeda = "BRL"): string {
		return Intl.NumberFormat(padrao, {
			style: "currency",
			currency: moeda,
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		}).format(this.valor);
	}
}
