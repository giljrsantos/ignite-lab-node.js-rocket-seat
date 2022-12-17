/* eslint-disable prettier/prettier */

import { Conteudo } from '@application/entities/conteudo';
import { Notification } from "@application/entities/notification";
import { Notification as RawNotification } from '@prisma/client'

export class PrismaNotificationMapper{
    static toPrisma(notification: Notification){

        return {
            id: notification.id,
            category: notification.category,
            conteudo: notification.conteudo.value,
            recipientId: notification.recipientId,
            readAt: notification.readAt,
            createdAt: notification.createdAt

        };
        
    }

    static toDomain(raw: RawNotification): Notification{
        return new Notification ({
            category: raw.category,
            recipientId: raw.recipientId,
            conteudo: new Conteudo(raw.conteudo),
            readAt: raw.readAt,
            canceledAt: raw.canceledAt,
            createdAt: raw.createdAt
        }, raw.id)
    }
}