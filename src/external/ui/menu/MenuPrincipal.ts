import { RegistrarUsuarioUseCase } from "../usuario/RegistrarUsuarioUseCase";
import { Terminal } from "../utils/Terminal";

export class MenuPrincipal {
	async renderizar() {
		const [_, texto] = await Terminal.menu("Menu Principal", ["Registrar Usuário", "Opção 2", "Sair"]);

		switch (texto) {
			case "Registrar Usuário":
				await RegistrarUsuarioUseCase();
				break;
			case "Opção 2":
				console.log("Opção 2");
				break;
			case "Sair":
				process.exit(0);
		}

		//Chamada recursiva para manter o menu principal aberto enquanto que o usuário não sai
		await this.renderizar();
	}
}
