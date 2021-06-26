import ProfileImg from '../assets/Profile.svg'
import { DivUser } from '../styles/components/User'
import Link from 'next/link';

type Props = {
    name: string,
    username: string
}


const User: React.FC<Props> = ({name, username}) => {
    return (
        <DivUser>
            <div className="img"><ProfileImg /></div>
            <Link href={username}><a>{`@${username}`}</a></Link>
            <h3>{name}</h3>
        </DivUser>
    )
}

export default User