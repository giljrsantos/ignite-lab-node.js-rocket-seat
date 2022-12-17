/* eslint-disable prettier/prettier */

import { Injectable } from "@nestjs/common";
import { Notification } from "@application/entities/notification";
import { NotificationsRepositoy } from "@application/repositories/notification-repository"
import { PrismaNotificationMapper } from "../mappers/prisma-notification-mapper";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepositoy{
    constructor(private prisma: PrismaService){}


    async findById(notificationId: string): Promise<Notification> {
        const notification = await this.prisma.notification.findUnique({
            where: {
                id: notificationId
            }
        });

        return PrismaNotificationMapper.toDomain(notification)
    } 
    
    async countManyByRecipientId(recipientId: string): Promise<number> {
        const count = await this.prisma.notification.count({
            where: {
                recipientId,
            }
        });

        return count;
    }
      

   async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
        const notifications = await this.prisma.notification.findMany({
            where: {
                recipientId
            }
        });

        return notifications.map(PrismaNotificationMapper.toDomain)
    }

   async create(notification: Notification): Promise<void> {

        const  raw =PrismaNotificationMapper.toPrisma(notification);
        await this.prisma.notification.create({
            data: raw ,
        })
    }


   async save(notification: Notification): Promise<void> {
    const  raw =PrismaNotificationMapper.toPrisma(notification);

    await this.prisma.notification.update({
        where: {
            id: raw.id,
        },
        data: raw,
    });
    }    
    
}