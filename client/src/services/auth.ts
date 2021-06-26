import { api } from './api';

type LoginRequestType = {
    email: string;
    password: string;
}

type RegisterRequestType = {
    name: string;
    username: string,
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

export async function logoutRequest() {
    const res = await api.post("/logout")
    return res;
}

export async function registerRequest(data: RegisterRequestType){
    const res = await api.post("/users", data)
    return res
}