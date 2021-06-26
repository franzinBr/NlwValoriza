import { sign } from "jsonwebtoken"

interface IGenerateRefreshTokenService{
    email: string,
    id: string
}

class GenerateRefreshTokenService {
    execute({email, id}: IGenerateRefreshTokenService) {
        
        const token = sign({
            email: email
        }, process.env.REFRESH_TOKEN_SECRET, {
            subject: id,
            expiresIn: process.env.REFRESH_TOKEN_EXPIRE
        })

        return token;
    }

}

export { GenerateRefreshTokenService }