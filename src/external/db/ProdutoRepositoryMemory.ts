import { Produto } from "../../core/produto/model/Produto";
import { IProdutoRepository } from "../../core/produto/provider/IProdutoRepository";

export class ProdutoRepositoryMemory implements IProdutoRepository {
	static readonly instance = new ProdutoRepositoryMemory();
	private constructor(private produtos: Produto[] = []) {}

	async obterPorId(id: string): Promise<Produto | null> {
		return this.produtos.find((p) => p.id.valor === id) ?? null;
	}
	async obterTodos(): Promise<Produto[]> {
		return this.produtos;
	}
	async salvar(produto: Produto): Promise<void> {
		this.produtos.push(produto);
	}
}
