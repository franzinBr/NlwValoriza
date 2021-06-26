import ProfileImg from '../assets/Profile.svg'
import { DivProfile } from '../styles/components/Profile'

type Props = {
    id: string,
    name: string,
    username: string
}


const Profile: React.FC<Props> = ({id, name, username}) => {
    return (
        <DivProfile>
            <ProfileImg />
            <p>@{username}</p>
            <h3>{name}</h3>
        </DivProfile>
    )
}

export default Profile