import { IUseCase } from "../../shared/IUseCase";
import { Produto } from "../model/Produto";
import { IProdutoRepository } from "../provider/IProdutoRepository";

export class ObterProdutosUseCase implements IUseCase<void, Produto[]> {
	constructor(private readonly repository: IProdutoRepository) {}
	async execute(): Promise<Produto[]> {
		return this.repository.obterTodos();
	}
}
