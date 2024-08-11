import { terminal } from "terminal-kit";

export class Terminal {
	static titulo(texto: string) {
		terminal.clear();
		terminal.bold.magenta(`${texto}\n`);
		terminal.bold.magenta("-".repeat(texto.length));
	}

	static async menu(titulo: string, opcoes: string[]): Promise<[number, string]> {
		Terminal.titulo(titulo);
		const opcao = await terminal.singleColumnMenu(opcoes).promise;
		return [opcao.selectedIndex, opcao.selectedText];
	}
}
