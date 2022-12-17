/* eslint-disable prettier/prettier */

import { CountRecipientNotifications } from "./count-recipient-notifications";
import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository";
import { makeNotifications } from "@test/factories/notification-factory";

describe('Count recipients notificações', () => {
    it('should be able to count recipient notifications', async() => {

        const notificationsRepository = new InMemoryNotificationsRepository();
        const countRecipientNotifications = new CountRecipientNotifications(notificationsRepository);

        

        await notificationsRepository.create(makeNotifications({recipientId: 'recipient-1'}));

        await notificationsRepository.create(makeNotifications({recipientId: 'recipient-1'}));

        await notificationsRepository.create(makeNotifications({recipientId: 'recipient-2'}));

        const {count} = await countRecipientNotifications.execute({
            recipientId: 'recipient-1'
        });

        
        expect(count).toEqual(2);
    
    });


});