import { ObterProdutosController } from "../../../adapters/controllers/ObterProdutosController";
import { ObterProdutosUseCase } from "../../../core/produto/service/ObterProdutosUseCase";
import { ProdutoRepositoryMemory } from "../../db/ProdutoRepositoryMemory";
import { AdicionarItemNoCarrinho } from "../pedido/adicionarItemNoCarrinho";
import { Terminal } from "../utils/Terminal";

export async function ListarProdutos() {
	Terminal.titulo("Listagem de Produtos");

	try {
		//Padrão singleton
		const repository = ProdutoRepositoryMemory.instance;
		const controller = new ObterProdutosController(repository);
		const produtos = await controller.execute();

		if (produtos.length) {
			const [index] = await Terminal.menu("Lista de produtos", [
				...produtos.map(
					(produto) => `${produto.nome!} - ${produto.precoFormatado}`,
				),
				"Voltar",
			]);

			const produto = produtos[index];

			if (!produto) {
				return;
			}

			await AdicionarItemNoCarrinho(produtos[index]);
		}
	} catch (e: any) {
		Terminal.erro(e.message);
	} finally {
		await Terminal.esperarEnter();
	}
}
