import { ItemPedidoProps } from "../../core/pedido/model/ItemPedido";

export interface ItemPedidoDTO extends ItemPedidoProps {
	valorFormatado?: string;
}
