import { Produto } from "../../../core/produto/model/Produto";
import { CadastrarProdutoUseCase } from "../../../core/produto/service/CadastrarProdutoUseCase";
import { ProdutoRepositoryMemory } from "../../db/ProdutoRepositoryMemory";
import { Terminal } from "../utils/Terminal";

export async function CadastrarProduto() {
	Terminal.titulo("Cadastro de Produto");

	const nome = await Terminal.campoObrigatorio("Nome");
	const preco = await Terminal.campoObrigatorio("Preço");

	try {
		//Padrão singleton
		const repository = ProdutoRepositoryMemory.instance;

		const useCase = new CadastrarProdutoUseCase(repository);

		await useCase.execute(new Produto({ nome, preco: Number(preco) }));

		Terminal.sucesso("Produto registrado com sucesso");
	} catch (e: any) {
		Terminal.erro(e.message);
	} finally {
		await Terminal.esperarEnter();
	}
}
