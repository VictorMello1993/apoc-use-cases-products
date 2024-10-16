import { AdicionarItemPedidoController } from "../../../adapters/controllers/AdicionarItemPedidoController";
import { ProdutoDTO } from "../../../adapters/dto/ProdutoDTO";
import { Carrinho } from "../utils/Carrinho";
import { Terminal } from "../utils/Terminal";
import { UsuarioSessao } from "../utils/UsuarioSessao";

export async function AdicionarItemNoCarrinho(produto: ProdutoDTO) {
	Terminal.titulo(`Produto ${produto.nome} - ${produto.precoFormatado}`);

	const confirmacao = await Terminal.confirmacao(
		"Deseja adicionar o item no carrinho?",
	);

	if (!confirmacao) return;

	const quantidade = await Terminal.campoObrigatorio("Quantidade", {
		default: "1",
	});

	try {
		const controller = new AdicionarItemPedidoController();

		const pedidoAtualizado = await controller.execute({
			pedido: Carrinho.pedido,
			produto,
			quantidade: +quantidade,
			cliente: UsuarioSessao.usuario!.props,
		});

		Carrinho.atualizar(pedidoAtualizado);

		Terminal.sucesso("Item adicionado no carrinho!");
	} catch (error: any) {
		Terminal.erro(error.message);
	}
}
