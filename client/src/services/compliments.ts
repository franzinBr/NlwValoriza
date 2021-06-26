import { api } from './api';


const options = {
    headers: {"content-type": "application/json"},
}

export async function complimentsSendRequest(username: string){
    const res = await api.get(`/users/compliments/send/${username}`);
    return res
}

export async function complimentsReceiveRequest(username: string){
    const res = await api.get(`/users/compliments/receive/${username}`);
    return res
}