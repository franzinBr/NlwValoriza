import Link from "next/link"
import Button from "../../components/Button"
import Input from "../../components/Input"
import { Div } from "../../styles/pages/user/Login"


const SignUp: React.FC = () => {
    return (
        <Div>
            <form>
                <Input label="Email" type="text" name="username" />
                <Input label="Password" type="text" name="password" />
                <Input label="Confirm Password" type="text" name="confirmpassword" />
                <Button>Sign Up</Button>
            </form>
            <div className="change">
                <p>have an account?</p>
                <Link href="/user/login"><a>Login</a></Link>
            </div>
        </Div>
    )
}

export default SignUp