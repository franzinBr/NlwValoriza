import Link from 'next/link'
import { useForm, SubmitHandler  } from "react-hook-form";

import Input from "../../components/Input"
import Button from "../../components/Button"
import { Div } from "../../styles/pages/user/Login"
import { AuthContext } from '../../contexts/AuthContext';
import { useContext, useEffect, useState } from 'react';
import Router from 'next/router';

type Inputs = {
    email: string,
    password: string,
  };
  

const Login: React.FC = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [error, setError] = useState<String | null>(null);
    const {isAuthenticated, login, loading} = useContext(AuthContext);

    useEffect(() => {
        if(isAuthenticated) Router.push("/");
    }, [isAuthenticated])
    
    const onSubmit: SubmitHandler<Inputs> = async data => {
        try {
            await login(data);
        } catch (error) {
            setError(error.message);
        }
        
    }
    
    if(loading) return null
    if(isAuthenticated) return null
    if(!loading && !isAuthenticated)
    return (
        <Div className="animeLeft">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input label="Email" type="text" name="email" register={register} error={errors["email"]}/>
                <Input label="Password" type="password" name="password" register={register} error={errors["password"]}/>
                <Button>Login</Button>
                {error && <span className="error">{error}</span>}
            </form>
            <div className="change">
                <p>Don't have an account?</p>
                <Link href="/user/signup"><a>SignUp</a></Link>
            </div>
        </Div>
    )
    return null;
}

export default Login