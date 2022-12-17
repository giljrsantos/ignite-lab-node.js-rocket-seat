/* eslint-disable prettier/prettier */
export class Conteudo {
    private readonly conteudo: string;

    get value(): string {
        return this.conteudo
    }

    private validateConteudoLength(conteudo: string): boolean{
        return conteudo.length > 5 && conteudo.length < 240;
    }

    constructor(conteudo: string){

        const isConteudoLengthValid = this.validateConteudoLength(conteudo);
        if(!isConteudoLengthValid){
            throw new Error('Conteudo length Error.');
        }
        this.conteudo = conteudo;
    }
}