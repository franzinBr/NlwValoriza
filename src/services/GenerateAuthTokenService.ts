import { sign } from "jsonwebtoken"

interface IGenerateAuthTokenService{
    email: string,
    id: string
}

class GenerateAuthTokenService {
    execute({email, id}: IGenerateAuthTokenService) {
        
        const token = sign({
            email: email
        }, process.env.AUTH_TOKEN_SECRET, {
            subject: id,
            expiresIn: process.env.AUTH_TOKEN_EXPIRE
        })

        return token;
    }

}

export { GenerateAuthTokenService }