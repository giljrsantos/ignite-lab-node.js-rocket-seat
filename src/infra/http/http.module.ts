/* eslint-disable prettier/prettier */

import { CancelNotification } from '@application/use-cases/cancel-notification';
import { CountRecipientNotifications } from '@application/use-cases/count-recipient-notifications';
import { DatabaseModule } from '../database/database.module';
import { GetRecipientNotifications } from '@application/use-cases/get-recipient-notifications';
import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notifications.controller';
import { ReadNotification } from '@application/use-cases/read-notification';
import { SendNotification } from '@application/use-cases/send-notification';
import { UnReadNotification } from '@application/use-cases/unread-notification';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
    ReadNotification,
    UnReadNotification,
  ]

})
export class HttpModule {}