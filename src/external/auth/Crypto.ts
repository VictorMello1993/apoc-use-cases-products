import bcrypt from "bcrypt";
import type { ICryptoProvider } from "../../core/usuario/provider/ICryptoProvider";

export class Crypto implements ICryptoProvider {
	crypto(senha: string): string {
		const salt = bcrypt.genSaltSync(10);
		return bcrypt.hashSync(senha, salt);
	}
	compare(senha: string, hash: string): boolean {
		return bcrypt.compareSync(senha, hash);
	}
}
