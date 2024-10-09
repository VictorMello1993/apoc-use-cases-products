export class QuantidadeVO {
	constructor(
		readonly valor: number = 1,
		atributo = "quantidade",
	) {
		if (!valor) {
			throw new Error(`O campo ${atributo} é obrigatório`);
		}

		if (valor <= 0) {
			throw new Error("A quantidade deve ser maior que zero");
		}
	}

	somar(quantidade: QuantidadeVO) {
		return new QuantidadeVO(this.valor + quantidade.valor);
	}

	subtrair(quantidade: QuantidadeVO) {
		return new QuantidadeVO(this.valor - quantidade.valor);
	}
}
