import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken"
import { GenerateAuthTokenService } from "./GenerateAuthTokenService";
import { GenerateRefreshTokenService } from "./GenerateRefreshTokenService";
import { ErrorResponse } from "../utils/ErrorResponse";

interface IAuthenticateUserService{
    email: string,
    password: string
}

class AuthenticateUserService {
    async execute({email, password}: IAuthenticateUserService) {
        const usersRepository = getCustomRepository(UsersRepositories)

        const user = await usersRepository.findOne({email})
        if(!user) throw new ErrorResponse("Invalid Credentials", 400);

        const passwordMatch = await compare(password, user.password);
        if(!passwordMatch) throw new ErrorResponse("Invalid Credentials", 400);

        const generateAuthTokenService = new GenerateAuthTokenService();
        const generateRefreshTokenService = new GenerateRefreshTokenService();

        const {id} = user;
        const authToken = generateAuthTokenService.execute({email, id});
        const refreshToken = generateRefreshTokenService.execute({email, id});
        
        return {authToken, refreshToken, userInfo: {
            id: user.id,
            name: user.name,
            username: user.username,
            admin: user.admin,
        }};
    }
}

export  { AuthenticateUserService };