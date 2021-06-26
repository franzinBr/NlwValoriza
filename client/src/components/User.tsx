import ProfileImg from '../assets/Profile.svg'
import { DivUser } from '../styles/components/User'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

type Props = {
    name: string,
    username: string
}


const User: React.FC<Props> = ({name, username}) => {
    const {isAuthenticated, user: userData} = useContext(AuthContext)
    return (
        <DivUser>
                {userData?.username === username && <div className="user"></div>}
                <div className="img"><ProfileImg /></div>
                <Link href={`/${username}`}><a>{`@${username}`}</a></Link>
                <h3>{name}</h3>
        </DivUser>
    )
}

export default User