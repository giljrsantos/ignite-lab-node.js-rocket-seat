/* eslint-disable prettier/prettier */

import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository";
import { NotificationNotFound } from './errors/notification-not-found';
import { UnReadNotification } from "./unread-notification";
import { makeNotifications } from "@test/factories/notification-factory";

describe('UnRead notificação', () => {
    it('should be able to unread a notification', async() => {

        const notificationsRepository = new InMemoryNotificationsRepository();
        const unreadNotification = new UnReadNotification(notificationsRepository);

        const notification = makeNotifications({
            readAt: new Date(),
        });

        await notificationsRepository.create(notification);

        await unreadNotification.execute({
            notificationId: notification.id,
        });

        
        expect(notificationsRepository.notifications[0].readAt).toBeNull();
    
    });


    it('should not be able to unread a non existing notification', async () => {

        const notificationsRepository = new InMemoryNotificationsRepository();
        const unreadNotification = new UnReadNotification(notificationsRepository);

        expect(() => {

            return unreadNotification.execute({
                notificationId:'fake-notification-id,'
            });        
    
        }).rejects.toThrow(NotificationNotFound)
    })
});