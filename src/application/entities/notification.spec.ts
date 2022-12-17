/* eslint-disable prettier/prettier */

import { Conteudo } from './conteudo';
import { Notification } from './notification';

describe('Notification', () => {

    it('deve ser capaz de criar uma notificação', () => {
        const notification = new Notification({
            conteudo: new Conteudo('Nova solicitação de Amizade'),
            category: 'social',
            recipientId: 'fadfafdafa',
            createdAt: new Date()
        });
    
        expect(notification).toBeTruthy();
        
    });
    

    it('não deve ser capaz de criar um conteúdo de notificação com menos de 5 caracteres', () => {
        
        expect(() => new Conteudo('Você')).toThrow();

    });

    it('não deve ser capaz de criar um conteúdo de notificação com mais de 240 caractere', () => {
        
        expect(() => new Conteudo('a'.repeat(241))).toThrow();

    });
    
});
