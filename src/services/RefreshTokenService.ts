import { verify } from "jsonwebtoken"
import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from "../repositories/UsersRepositories";
import { GenerateAuthTokenService } from "./GenerateAuthTokenService";

interface IPayload {
    email: string
    sub: string;
}

class RefreshTokenService {
    async execute(refreshToken: string) {
        
        try {
            const {email, sub } = verify(refreshToken, process.env.REFRESH_TOKEN_SECRET) as IPayload;
            const usersRepositories = getCustomRepository(UsersRepositories);
            const user = await usersRepositories.findOne(sub)
            if(!user) return {authToken: false, user: false}

            const generateAuthTokenService = new GenerateAuthTokenService();
            const authToken = generateAuthTokenService.execute({email, id: sub})
            
            return {authToken, userInfo: {
                id: user.id,
                name: user.name,
                username: user.username,
                admin: user.admin,
            }};

        } catch (error) {
            return {authToken: false, user: false}
        }

    }

}

export { RefreshTokenService }