import { IProdutoRepository } from "../../core/produto/provider/IProdutoRepository";
import { ObterProdutosUseCase } from "../../core/produto/service/ObterProdutosUseCase";
import { ProdutoDTO } from "../dto/ProdutoDTO";
import { ProdutoToDTO } from "../presenters/ProdutoToDTO";

export class ObterProdutosController {
	constructor(private readonly repository: IProdutoRepository) {}

	async execute(): Promise<ProdutoDTO[]> {
		const outputConverter = new ProdutoToDTO();
		const useCase = new ObterProdutosUseCase(this.repository, outputConverter);

		return await useCase.execute();
	}
}
