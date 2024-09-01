import { ObterProdutosUseCase } from "../../../core/produto/service/ObterProdutosUseCase";
import { ProdutoRepositoryMemory } from "../../db/ProdutoRepositoryMemory";
import { Terminal } from "../utils/Terminal";

export async function ListarProdutos() {
	Terminal.titulo("Listagem de Produtos");

	try {
		//Padrão singleton
		const repository = ProdutoRepositoryMemory.instance;

		const useCase = new ObterProdutosUseCase(repository);
		const produtos = await useCase.execute();

		Terminal.tabela(
			produtos.map((p) => ({
				id: p.id.valor,
				nome: p.nome.completo,
				preco: p.preco.valor,
			})),
		);
	} catch (e: any) {
		Terminal.erro(e.message);
	} finally {
		await Terminal.esperarEnter();
	}
}
