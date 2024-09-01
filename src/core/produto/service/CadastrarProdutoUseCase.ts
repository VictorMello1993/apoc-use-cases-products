import type { IUseCase } from "../../shared/IUseCase";
import type { Produto } from "../model/Produto";
import type { IProdutoRepository } from "../provider/IProdutoRepository";

export class CadastrarProdutoUseCase implements IUseCase<Produto, void> {
	constructor(private repository: IProdutoRepository) {}
	async execute(produto: Produto): Promise<void> {
		await this.repository.salvar(produto);
	}
}
