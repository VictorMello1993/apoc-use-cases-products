export class SenhaForteVO {
	constructor(readonly valor: string) {
		if (!valor) {
			throw new Error("A senha deve ser informada");
		}

		if (valor.length < 8) {
			throw new Error("A senha deve ter no mínimo 8 caracteres");
		}

		if (!valor.match(/[a-z]/)) {
			throw new Error("A senha deve conter uma letra minúscula");
		}

		if (!valor.match(/[A-Z]/)) {
			throw new Error("A senha deve conter uma letra maiúscula");
		}

		if (!valor.match(/[0-9]/)) {
			throw new Error("A senha deve conter um número");
		}

		if (!valor.match(/[^A-Za-z0-9]/)) {
			throw new Error("A senha deve conter um caracter especial");
		}
	}
}
