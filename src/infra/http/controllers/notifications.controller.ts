/* eslint-disable prettier/prettier */
import { CancelNotification } from '@application/use-cases/cancel-notification';
import { CountRecipientNotifications } from '@application/use-cases/count-recipient-notifications';
import { GetRecipientNotifications } from '@application/use-cases/get-recipient-notifications';
import { ReadNotification } from '@application/use-cases/read-notification';
import { SendNotification } from '@application/use-cases/send-notification';
import { UnReadNotification } from '@application/use-cases/unread-notification';
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { NotificationViewModel } from '../view-models/notification-view-model';


@Controller('notifications')
export class NotificationsController {

  constructor(
    private sendNotification: SendNotification,
    private cancelNotification: CancelNotification,
    private readNotification: ReadNotification,
    private unreadNotification: UnReadNotification,
    private countRecipientNotification: CountRecipientNotifications,
    private getRecipientNotification: GetRecipientNotifications,
    ){}

  @Patch(':id/cancel')
  async cancel(@Param('id') id: string){
    await this.cancelNotification.execute({
      notificationId: id
    });
  }

  @Get('count/from/:recipientId')
  async countFromRecipient(@Param('recipintId') recipientId: string){
    const {count} = await this.countRecipientNotification.execute({
      recipientId,
    });

    return {
      count,
    }
  }

  

  @Get('from/:recipientId')
  async getFromRecipient(@Param('recipintId') recipientId: string){
    const {notifications} = await this.getRecipientNotification.execute({
      recipientId,
    });

    return {
      notifications: notifications.map(NotificationViewModel.toHTTP),
    }
  }

  @Patch(':id/read')
  async read(@Param('id') id: string){
    await this.readNotification.execute({
      notificationId: id
    });
  }


  @Patch(':id/unread')
  async unread(@Param('id') id: string){
    await this.unreadNotification.execute({
      notificationId: id
    });
  }


  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, category, conteudo } = body;

    const { notification } = await this.sendNotification.execute({
      recipientId,
      conteudo,
      category
    });
    

    return {
      notification: NotificationViewModel.toHTTP(notification),
    };
      
  }
}
