/* eslint-disable prettier/prettier */

import { Injectable } from "@nestjs/common";
import { NotificationNotFound } from "./errors/notification-not-found";
import { NotificationsRepositoy } from "../repositories/notification-repository";

interface ReadNotificationRequest{
    notificationId: string;
}

type ReadNotificationResponse = void;

@Injectable()
export class ReadNotification{

    constructor(private notificationRepository: NotificationsRepositoy){}
    
    async execute(request: ReadNotificationRequest): Promise<ReadNotificationResponse>{
        const { notificationId } = request;

        const notification = await this.notificationRepository.findById(notificationId);


        if(!notification){
            throw new NotificationNotFound()
        }

        notification.read();

        await this.notificationRepository.save(notification);

   
    }
}