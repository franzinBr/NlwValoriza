import { ICompliment } from '../Interfaces/ComplimentInterface';
import ProfileImg from '../assets/Profile.svg'
import { DivCompliment } from '../styles/components/Compliment';
import Link from 'next/link';


type Props = {
    compliment: ICompliment
}


const Compliment: React.FC<Props> = ({compliment}) => {
    return (
        <DivCompliment>
            <div className="img">
                <ProfileImg />
            </div>
            <div className="text">
                <Link href={`/${compliment.userSender.username}`}><a>{`@${compliment.userSender.username}`}</a></Link>
                <p>{compliment.message}</p>
                <span>Tag: {compliment.tag.name}</span>
            </div>
            
            
        </DivCompliment>
    )
}

export default Compliment