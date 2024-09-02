import { ObterProdutosController } from "../../../adapters/controllers/ObterProdutosController";
import { ObterProdutosUseCase } from "../../../core/produto/service/ObterProdutosUseCase";
import { ProdutoRepositoryMemory } from "../../db/ProdutoRepositoryMemory";
import { Terminal } from "../utils/Terminal";

export async function ListarProdutos() {
	Terminal.titulo("Listagem de Produtos");

	try {
		//Padrão singleton
		const repository = ProdutoRepositoryMemory.instance;

		const controller = new ObterProdutosController(repository);
		const produtos = await controller.execute();

		Terminal.tabela(produtos);
	} catch (e: any) {
		Terminal.erro(e.message);
	} finally {
		await Terminal.esperarEnter();
	}
}
