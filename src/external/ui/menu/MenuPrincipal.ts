import { FinalizarPedido } from "../pedido/FinalizarPedido";
import { CadastrarProduto } from "../produto/CadastrarProduto";
import { ListarProdutos } from "../produto/ListarProdutos";
import { ListarUsuarios } from "../usuario/ListarUsuarios";
import { LoginUsuario } from "../usuario/LoginUsuario";
import { RegistrarUsuario } from "../usuario/RegistrarUsuario";
import { Carrinho } from "../utils/Carrinho";
import { Terminal } from "../utils/Terminal";
import { UsuarioSessao } from "../utils/UsuarioSessao";

export class MenuPrincipal {
	async renderizar() {
		const usuario = UsuarioSessao.usuario;
		const totalCarrinho = Carrinho.pedido?.valorTotalFormatado ?? "R$ 0,00";

		const [_, texto] = await Terminal.menu(
			`Menu Principal ${usuario ? ` - ${usuario.email.valor} - ${totalCarrinho}` : ""}`,
			usuario
				? [
						"Listar Usuários",
						"Cadastrar Produto",
						"Listar Produtos",
						"Finalizar Pedido",
						"Logout",
					]
				: ["Registrar Usuário", "Login Usuário", "Sair"],
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
			case "Finalizar Pedido":
				await FinalizarPedido();
				break;
			case "Sair":
				process.exit(0);
		}

		//Chamada recursiva para manter o menu principal aberto enquanto que o usuário não sai
		await this.renderizar();
	}
}
