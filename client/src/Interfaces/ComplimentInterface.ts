import { ITag } from "./TagInterface";

interface ISmallUser {
    id: string,
    name: string,
    username: string,
}

export interface ICompliment{
    id: string,
    message: string
    userSender: ISmallUser,
    tag: ITag;
    
}