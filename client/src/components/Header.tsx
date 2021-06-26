import Link from 'next/link'

import { HeaderContainer} from "../styles/components/Header"
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';



const Header: React.FC = () => {

    const {isAuthenticated} = useContext(AuthContext)

    return (
        <HeaderContainer>
            <nav>
                <div className="center"></div>
                <div className="logo">
                    <Link href="/">
                        <h1><span>\</span>Valoriza<span>\</span></h1>
                    </Link>
                </div>
                <div className="links">
                    {!isAuthenticated ? (<>
                            <Link href="/user/login">
                                <a>Login</a>
                            </Link>
                            <Link href="/user/signup">
                                <a>Sign Up</a>
                            </Link>
                        </>) : <a>Logout</a> }
                </div>
            </nav>
        </HeaderContainer>
        /*<HeaderContainer>
            <NavContainer>
                <LogoContainer>
                    <Link href="/">
                        <h1><Span>\</Span>Valoriza<Span>\</Span></h1>
                    </Link>
                    {!isAuthenticated ? (<>
                        <Link href="/user/login">
                            <a>Login</a>
                        </Link>
                        <Link href="/user/login">
                            <a>SignUp</a>
                        </Link>
                    </>) : <p>Logout</p> }
                </LogoContainer>
            </NavContainer>
             
        </HeaderContainer>*/
    )
}

export default Header