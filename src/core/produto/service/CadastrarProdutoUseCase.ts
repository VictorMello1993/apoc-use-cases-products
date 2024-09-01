import { IUseCase } from "../../shared/IUseCase";
import { Produto } from "../model/Produto";
import { IProdutoRepository } from "../provider/IProdutoRepository";

export class CadastrarProdutoUseCase implements IUseCase<Produto, void> {
	constructor(private repository: IProdutoRepository) {}
	async execute(produto: Produto): Promise<void> {
		await this.repository.salvar(produto);
	}
}
