/* eslint-disable prettier/prettier */

import { Notification } from "@application/entities/notification";

export class NotificationViewModel{
    static toHTTP(notification: Notification){
        return {
            id: notification.id,
            conteudo: notification.conteudo,
            category: notification.category,
            recipientId: notification.recipientId,
          }
    }
}