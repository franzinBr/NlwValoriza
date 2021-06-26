import axios from "axios";


export function getAPIClient(ctx?: any) {

    const api = axios.create({
        baseURL: 'http://localhost:3080'
    })

    api.defaults.withCredentials = true;



    return api;
}