import { ProdutoProps } from "../../core/produto/model/Produto";

export interface ProdutoDTO extends ProdutoProps {
	precoFormatado?: string;
}
