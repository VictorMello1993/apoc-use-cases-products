export class SenhaHashVO {
	constructor(
		readonly hash: string,
		atributo = "senha",
	) {
		const HASH_PASSWORD_REGEX = /^\$2[ayb]\$[0-9]{2}\$[A-Za-z0-9\.\/]{53}$/;
		if (!hash) {
			throw new Error(`O campo ${atributo} é obrigatório`);
		}

		if (!hash.match(HASH_PASSWORD_REGEX)) {
			throw new Error(`${atributo} não é um hash válido`);
		}
	}
}
