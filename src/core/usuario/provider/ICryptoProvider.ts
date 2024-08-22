export interface ICryptoProvider {
	crypto(senha: string): string;
	compare(hash: string, senha: string): boolean;
}
