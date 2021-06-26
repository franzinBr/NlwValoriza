import { DeepMap, FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"
import { InputStyled, Wrapper } from "../styles/components/Input"


type Props = {
    label: string,
    type: string,
    name: string,
    register?: UseFormRegister<FieldValues>,
    error?: DeepMap<FieldValues, FieldErrors> 
}


const Input: React.FC<Props> = ({label, type, name, register, error}) => {
    return (
        <Wrapper>
            <label htmlFor={name}>{label}</label>
            <InputStyled 
                id={name}
                name={name}
                type={type}
                {...register(name, { required: true })}
            />
            <div className="underline"></div>
            {error && <span className="error">This field is required</span>}
        </Wrapper>
    )
}

export default Input