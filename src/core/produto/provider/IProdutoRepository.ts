import { Produto } from "../model/Produto";

export interface IProdutoRepository {
	obterPorId(id: string): Promise<Produto | null>;
	obterTodos(): Promise<Produto[]>;
	salvar(produto: Produto): Promise<void>;
}
