/* eslint-disable prettier/prettier */

import { Injectable } from "@nestjs/common";
import { NotificationNotFound } from "./errors/notification-not-found";
import { NotificationsRepositoy } from "../repositories/notification-repository";

interface UnReadNotificationRequest{
    notificationId: string;
}

type UnReadNotificationResponse = void;

@Injectable()
export class UnReadNotification{

    constructor(private notificationRepository: NotificationsRepositoy){}
    
    async execute(request: UnReadNotificationRequest): Promise<UnReadNotificationResponse>{
        const { notificationId } = request;

        const notification = await this.notificationRepository.findById(notificationId);


        if(!notification){
            throw new NotificationNotFound()
        }

        notification.unread();

        await this.notificationRepository.save(notification);

   
    }
}