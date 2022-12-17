/* eslint-disable prettier/prettier */

import { Conteudo } from './conteudo';
import { randomUUID } from 'node:crypto'

export interface NotificationProps{
    recipientId: string;
    conteudo: Conteudo;
    category: string;
    readAt?: Date | null;
    canceledAt?: Date | null;
    createdAt: Date;
}
export class Notification{
    private _id: string;
    private props: NotificationProps;
    

    constructor(props: NotificationProps, id?:string){
        this._id = id ?? randomUUID();
        this.props = props;
    }

    public get id(){
        return this._id;
    }

    //set recipientId
    public set recipientId(recipientId: string){
        this.props.recipientId = recipientId;
    }
    //get recipientId
    public get recipientId(): string{
        return this.props.recipientId;
    }

    //set conteudo
    public set conteudo(conteudo: Conteudo){
        this.props.conteudo = conteudo;
    }
    //get conteudo
    public get conteudo(): Conteudo{
        return this.props.conteudo;
    }

    //set category
    public set category(category: string){
        this.props.category = category;
    }
    //get category
    public get category(): string{
        return this.props.category;
    }

    // função public read
    public read(){
        this.props.readAt = new Date();
    }

    // função public remove a leitura
    public unread(){
        this.props.readAt = null;
    }
    //get readAt
    public get readAt(): Date | null | undefined{
        return this.props.readAt;
    }

    public cancel(){
        this.props.canceledAt = new Date();
    }

    //get canceledAt
    public get canceledAt(): Date | null | undefined{
        return this.props.canceledAt;
    }

    //get createdId
    public get createdAt(): Date{
        return this.props.createdAt;
    }
}