/* eslint-disable prettier/prettier */

import { Injectable } from "@nestjs/common";
import { Notification } from "@application/entities/notification";
import { NotificationsRepositoy } from "../repositories/notification-repository";

interface GetRecipientNotificationsRequest{
    recipientId: string;
}

interface GetRecipientNotificationsResponse {
    notifications: Notification[];
};

@Injectable()
export class GetRecipientNotifications{

    constructor(private notificationRepository: NotificationsRepositoy){}
    
    async execute(request: GetRecipientNotificationsRequest): Promise<GetRecipientNotificationsResponse>{
        const { recipientId } = request;

        const notifications = await this.notificationRepository.findManyByRecipientId(recipientId);


        return {
            notifications
        };

   
    }
}