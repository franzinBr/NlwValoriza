import Link from 'next/link'

import { HeaderContainer} from "../styles/components/Header"
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';



const Header: React.FC = () => {

    const {isAuthenticated, logout} = useContext(AuthContext)

    async function handleClick() {
        logout();
    }

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
                        </>) : <a onClick={handleClick}>Logout</a> }
                </div>
            </nav>
        </HeaderContainer>
    )
}

export default Header