/* eslint-disable prettier/prettier */

import { IsNotEmpty, IsUUID, Length } from "class-validator";

/* eslint-disable prettier/prettier */
export class CreateNotificationBody{
    @IsNotEmpty()
    @IsUUID()
    recipientId: string;

    @IsNotEmpty()
    @Length(5, 240)
    conteudo: string;

    @IsNotEmpty()
    category: string;
}