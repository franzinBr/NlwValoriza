import { api } from './api';


const options = {
    headers: {"content-type": "application/json"},
}

interface compliment {
    tag_id: string,
    user_receiver: string,
    message: string,
}

export async function createComplimentRequest(compliment: compliment){
    const res = await api.post('/compliments', compliment);
    return res
}

export async function complimentsSendRequest(username: string){
    const res = await api.get(`/users/compliments/send/${username}`);
    return res
}

export async function complimentsReceiveRequest(username: string){
    const res = await api.get(`/users/compliments/receive/${username}`);
    return res
}