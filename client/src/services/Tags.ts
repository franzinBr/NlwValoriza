import { api } from './api';


export async function listTagsRequest(){
    const res = await api.get('/tags');
    return res
}