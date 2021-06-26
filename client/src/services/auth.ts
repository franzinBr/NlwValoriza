import { api } from './api';

type LoginRequestType = {
    email: string;
    password: string;
}

const options = {
    headers: {"content-type": "application/json"},
}

export async function loginRequest(data: LoginRequestType){
    const res = await api.post('/login', data, options);
    return res
}

export async function refreshRequest() {
    const res = await api.post('/refresh');
    return res
}