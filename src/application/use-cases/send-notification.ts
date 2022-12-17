/* eslint-disable prettier/prettier */

import { Conteudo } from "../entities/conteudo";
import { Injectable } from "@nestjs/common";
import { Notification } from "../entities/notification";
import { NotificationsRepositoy } from "../repositories/notification-repository";

interface SendNotificationRequest{
    recipientId: string;
    conteudo: string;
    category: string;
}

interface SendNotificationResponse{
    notification: Notification
}

@Injectable()
export class SendNotification{

    constructor(private notificationRepository: NotificationsRepositoy){}
    
    async execute(request: SendNotificationRequest): Promise<SendNotificationResponse>{
        const { recipientId, conteudo, category } = request;

        const notification = new Notification({
            recipientId,
            conteudo: new Conteudo(conteudo),
            category,
            createdAt: new Date(),
        });

        // Persistir essa notificação no banco de dados
        await this.notificationRepository.create(notification);

        return {
            notification,
        }
    }
}