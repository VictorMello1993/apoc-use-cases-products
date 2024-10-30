import { FinalizarPedidoController } from "../../../adapters/controllers/FinalizarPedidoController";
import { PedidoRepositoryMemory } from "../../db/PedidoRepositoryMemory";
import { Carrinho } from "../utils/Carrinho";
import { Terminal } from "../utils/Terminal";

export async function FinalizarPedido() {
	Terminal.titulo("Finalizar Pedido");

	if (!Carrinho.pedido) {
		return;
	}

	const pedido = Carrinho.pedido;

	Terminal.sucesso(`Id: ${pedido.id}`);
	Terminal.sucesso(`Cliente: ${pedido.cliente!.nome}`);
	Terminal.sucesso(`Valor: ${pedido.valorTotalFormatado}`);
	Terminal.sucesso(`Status: ${pedido.status}`);

	//Mostrando os itens do pedido
	Terminal.tabela(
		pedido.itens.map((item) => ({
			nome: item.produto!.nome,
			quantidade: item.quantidade,
			valor: item.valorFormatado,
		})),
	);

	const confirmacao = await Terminal.confirmacao("Deseja finalizar o pedido?");

	if (!confirmacao) {
		return;
	}

	try {
		const repository = PedidoRepositoryMemory.instance;
		const controller = new FinalizarPedidoController(repository);

		await controller.execute(pedido);
		Carrinho.limpar();
		Terminal.sucesso("Pedido finalizado com sucesso!");
	} catch (error: any) {
		Terminal.erro(error.message);
	} finally {
		await Terminal.esperarEnter();
	}
}
