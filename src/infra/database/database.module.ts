/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { NotificationsRepositoy } from '@application/repositories/notification-repository';
import { PrismaNotificationsRepository } from './prisma/repositories/prisma-notifications-repository';
import { PrismaService } from './prisma/prisma.service';

@Module({
    providers: [PrismaService, 
        {
            provide: NotificationsRepositoy,
            useClass: PrismaNotificationsRepository,
        },
    ],
    exports: [NotificationsRepositoy],
})
export class DatabaseModule {}