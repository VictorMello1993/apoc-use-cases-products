import { IProdutoRepository } from "../../core/produto/provider/IProdutoRepository";
import { ObterProdutosUseCase } from "../../core/produto/service/ObterProdutosUseCase";
import { ProdutoDTO } from "../dto/ProdutoDTO";

export class ObterProdutosController {
	constructor(private readonly repository: IProdutoRepository) {}

	async execute(): Promise<ProdutoDTO[]> {
		const useCase = new ObterProdutosUseCase(this.repository);
		const produtos = await useCase.execute();
		return produtos.map((p) => ({
			id: p.id.valor,
			nome: p.nome.completo,
			precoFormatado: p.preco.formatado(),
		}));
	}
}
