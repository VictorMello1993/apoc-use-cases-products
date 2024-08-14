import { Entidade, EntidadeProps } from "../../shared/Entidade";

export interface UsuarioProps extends EntidadeProps {
  nome?: string,
  email?: string,
  senha?: string
}

export class Usuario extends Entidade<Usuario, UsuarioProps> {
  // readonly nome: NomeVO
  // readonly email: EmailVO
  // readonly senha?: SenhaHashVO

  constructor(props: UsuarioProps) {
    super(props)
  }
}