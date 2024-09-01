import type { IUseCase } from "../../shared/IUseCase";
import type { Produto } from "../model/Produto";
import type { IProdutoRepository } from "../provider/IProdutoRepository";

export class ObterProdutosUseCase implements IUseCase<void, Produto[]> {
	constructor(private readonly repository: IProdutoRepository) {}
	async execute(): Promise<Produto[]> {
		return this.repository.obterTodos();
	}
}
