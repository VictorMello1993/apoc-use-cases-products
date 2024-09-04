import { Produto } from "../../core/produto/model/Produto";
import { IConverter } from "../../core/shared/IConverter";
import { ProdutoDTO } from "../dto/ProdutoDTO";

export class ProdutoToDTO implements IConverter<Produto, ProdutoDTO> {
	constructor(private hasId = true) {}
	convert(produto: Produto): ProdutoDTO {
		const produtoDTO: ProdutoDTO = {
			nome: produto.nome.completo,
			precoFormatado: produto.preco.formatado(),
		};

		if (this.hasId) {
			produtoDTO.id = produto.id.valor;
		}

		return produtoDTO;
	}
}
