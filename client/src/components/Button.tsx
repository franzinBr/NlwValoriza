import { ButtonStyled } from "../styles/components/Button"

type Props = {
    children?: React.ReactNode;
}


const Button: React.FC = ({children}: Props) => {
    return <ButtonStyled>{children}</ButtonStyled>
}

export default Button