import { IConverter } from "../../shared/IConverter";
import { IUseCase } from "../../shared/IUseCase";
import { Produto } from "../model/Produto";
import { IProdutoRepository } from "../provider/IProdutoRepository";

export class ObterProdutosUseCase implements IUseCase<void, any[]> {
	constructor(
		private readonly repository: IProdutoRepository,
		private readonly converter: IConverter<Produto, any>,
	) {}
	async execute(): Promise<any[]> {
		const produtos = await this.repository.obterTodos();
		return produtos.map((p) => this.converter.convert(p));
	}
}
