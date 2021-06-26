import { ICompliment } from './ComplimentInterface';


export interface IUser {
    id: string,
    name: string,
    username: string
    compliments?: ICompliment[]
}