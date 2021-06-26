import Link from "next/link"
import Router from 'next/router';
import { useForm, SubmitHandler  } from "react-hook-form";
import Button from "../../components/Button"
import Input from "../../components/Input"
import { Div } from "../../styles/pages/user/SignUp"
import { useState, useContext, useEffect } from 'react';
import { AuthContext } from "../../contexts/AuthContext";
import { registerRequest } from "../../services/auth";

type Inputs = {
    name: string;
    username: string,
    email: string,
    password: string,
    confirmpassword: string
  };


const SignUp: React.FC = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [error, setError] = useState<String | null>(null);
    const {isAuthenticated, login, loading} = useContext(AuthContext);

    useEffect(() => {
        if(isAuthenticated) Router.push("/");
    }, [isAuthenticated])

    const onSubmit: SubmitHandler<Inputs> = async data => {
        if(data.password === data.confirmpassword){
            try {
                const res = await registerRequest({
                    name: data.name,
                    username: data.username,
                    email: data.email,
                    password: data.password
                });

                if(!res.data.success) throw new Error(res.data.message);

                Router.push("/user/login");

            } catch (error) {
                setError(error.message);
            }
        }


        
    }

        
    if(loading) return null
    if(isAuthenticated) return null
    if(!loading && !isAuthenticated) return (
        <Div className="animeLeft">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input label="Name" type="text" name="name" register={register} error={errors["name"]} />
                <Input label="Username" type="text" name="username" register={register} error={errors["username"]} />
                <Input label="Email" type="text" name="email" register={register} error={errors["email"]} />
                <Input label="Password" type="text" name="password" register={register} error={errors["password"]} />
                <Input label="Confirm Password" type="text" name="confirmpassword" register={register} error={errors["confirmpassword"]} />
                <Button>Sign Up</Button>
                {error && <span>{error}</span>}
            </form>
            <div className="change">
                <p>have an account?</p>
                <Link href="/user/login"><a>Login</a></Link>
            </div>
        </Div>
    )
    return null;
}

export default SignUp