import bcrypt from "bcrypt";
import type { ICryptoProvider } from "../../core/usuario/provider/ICryptoProvider";

export class Crypto implements ICryptoProvider {
	crypto(senha: string): string {
		const salt = bcrypt.genSaltSync(10);
		return bcrypt.hashSync(senha, salt);
	}
	compare(hash: string, senha: string): boolean {
		throw new Error("Method not implemented.");
	}
}
