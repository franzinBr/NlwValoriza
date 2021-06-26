import { api } from './api';


const options = {
    headers: {"content-type": "application/json"},
}

export async function listUsersRequest(){
    const res = await api.get('/users');
    return res
}

export async function listUserRequest(username: string | string[]){
    const res = await api.get(`/users/${username}`);
    return res
}