/* eslint-disable prettier/prettier */

import { Notification, NotificationProps } from "@application/entities/notification";

import { Conteudo } from "@application/entities/conteudo";

type Overrid = Partial<NotificationProps>;

export function makeNotifications(overrid: Overrid = {}){
    return new Notification({
        category: 'social',
        conteudo: new Conteudo('Nova solicitação Amizade'),
        recipientId: 'recipint-1',
        createdAt:  new Date(),
        ...overrid,
    })
}