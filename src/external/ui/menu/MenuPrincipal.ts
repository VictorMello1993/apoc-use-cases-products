import { CadastrarProduto } from "../produto/CadastrarProduto";
import { ListarProdutos } from "../produto/ListarProdutos";
import { ListarUsuarios } from "../usuario/ListarUsuarios";
import { LoginUsuario } from "../usuario/LoginUsuario";
import { RegistrarUsuario } from "../usuario/RegistrarUsuario";
import { Terminal } from "../utils/Terminal";
import { UsuarioSessao } from "../utils/UsuarioSessao";

export class MenuPrincipal {
	async renderizar() {
		const usuario = UsuarioSessao.usuario;
		const [_, texto] = await Terminal.menu(
			`Menu Principal ${usuario ? ` - ${usuario.email.valor}` : ""}`,
			usuario
				? ["Listar Usuários", "Cadastrar Produto", "Listar Produtos", "Logout"]
				: ["Registrar Usuário", "Login Usuário", "Opção 2", "Sair"],
		);

		switch (texto) {
			case "Registrar Usuário":
				await RegistrarUsuario();
				break;
			case "Login Usuário":
				await LoginUsuario();
				break;
			case "Logout":
				UsuarioSessao.finalizar();
				break;
			case "Listar Usuários":
				await ListarUsuarios();
				break;
			case "Cadastrar Produto":
				await CadastrarProduto();
				break;
			case "Listar Produtos":
				await ListarProdutos();
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
