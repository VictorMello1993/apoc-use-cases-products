export class NomeVO {
	constructor(
		readonly completo: string,
		atributo = "nome",
		min = 3,
		max = 120,
	) {
		if (min > max) {
			throw new Error("O valor mínimo não pode ser maior do que valor máximo.");
		}

		if (!completo) {
			throw new Error(`O campo ${atributo} é obrigatório.`);
		}

		if (completo.length < min || completo.length > max) {
			throw new Error(`O campo ${atributo} deve ter ${min} e ${max} caracteres.`);
		}
	}
}
