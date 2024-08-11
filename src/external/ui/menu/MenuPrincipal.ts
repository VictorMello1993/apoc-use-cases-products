import { Terminal } from "../utils/Terminal";

export class MenuPrincipal {
	async renderizar() {
		const [_, texto] = await Terminal.menu("Menu Principal", ["Opção 1", "Opção 2", "Sair"]);

		switch (texto) {
			case "Opção 1":
				console.log("Opção 1");
				break;
			case "Opção 2":
				console.log("Opção 2");
				break;
			case "Sair":
				process.exit(0);
		}

		await this.renderizar();
	}
}
