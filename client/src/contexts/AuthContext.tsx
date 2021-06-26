import Router from "next/router";
import { createContext, useState } from "react";
import { loginRequest, refreshRequest } from "../services/auth";
import { useEffect } from "react";
import { parseCookies } from 'nookies'
import { api } from "../services/api";


type User = {
    id: string;
    name: string;
    username: string;
    admin: boolean;
  }


type loginType =  {
    email: string;
    password: string;
}

type AuthContextType = {
    isAuthenticated: boolean;
    user: User;
    token: string | null;
    loading: boolean | null;
    login: (data: loginType) => Promise<void>;
    refresh: () => Promise<void>;
}


export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ( { children } ) => {

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [token, setToken] = useState<string | null>(null)
    const [user, setUser] = useState<User | null>(null)




    useEffect(() => {
        async function refresh() {
            const { aux } = parseCookies()
            if(aux){
                setLoading(true)
                const res = await refreshRequest();
                if(res.data.success){
                    setToken(res.data.authToken);
                    api.defaults.headers['Authorization'] = `Bearer ${res.data.authToken}`;
                    setUser(res.data.user)
                    setIsAuthenticated(true);
                }
                setLoading(false)
            }
        }
        refresh();


    }, [])

    const refresh = async () => {
        const { aux } = parseCookies()
        if(aux){
            setLoading(true)
            const res = await refreshRequest();
            if(res.data.success){
                setToken(res.data.authToken);
                api.defaults.headers['Authorization'] = `Bearer ${res.data.authToken}`;
                setUser(res.data.user)
                setIsAuthenticated(true);
            }
            if(!res.data.success){
                setIsAuthenticated(false);
                setUser(null);
                setToken(null);
                
            }
            setLoading(false)
        }
    }

    api.interceptors.response.use(response => {
        return response;
    }, err => {
        const originalReq = err.config 
        if(err.response.status == 401 && err.config && !err.config._retry)
        {
            originalReq._retry = true;
            const ref = async () => {
                await refresh()
                if(isAuthenticated) return api(originalReq);
            }
            ref();
            
        }
        return err.response
    })

    const login = async ({email, password}: loginType) => {
        setLoading(true)
        const res = await loginRequest({email, password});
        setLoading(false)
        if(!res.data.success) throw new Error(res.data.message);

        Router.push(`/${res.data.user.username}`);
        setToken(res.data.authToken);
        setUser(res.data.user)
        setIsAuthenticated(true);
        
    }



    return (
        <AuthContext.Provider value={{isAuthenticated, user, token, loading , login, refresh}}>
            {children}
        </AuthContext.Provider>
    )

}