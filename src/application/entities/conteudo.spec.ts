/* eslint-disable prettier/prettier */

import { Conteudo } from './conteudo';

describe('Notification Conteudo', () => {

    it('deve ser capaz de criar uma notificação conteudo', () => {
        const conteudo = new Conteudo('Você recebeu uma solicitação de amizade!');
    
        expect(conteudo).toBeTruthy();
        
    });
    

    it('não deve ser capaz de criar um conteúdo de notificação com menos de 5 caracteres', () => {
        
        expect(() => new Conteudo('Você')).toThrow();

    });

    it('não deve ser capaz de criar um conteúdo de notificação com mais de 240 caractere', () => {
        
        expect(() => new Conteudo('a'.repeat(241))).toThrow();

    });
    
});
