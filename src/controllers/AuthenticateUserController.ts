import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";
import { ConvertTimes } from "../utils/convertTimes";


class AuthenticateUserController {

    async handle(req: Request, res: Response) {
        const { email, password } = req.body;

        const authenticateUserService = new AuthenticateUserService();
        const {authToken, refreshToken, userInfo: user} = await authenticateUserService.execute({email, password})
        
        res.cookie('refreshtoken', refreshToken, {
            httpOnly: true,
            path: '/refresh', 
            maxAge: ConvertTimes.convert(process.env.REFRESH_TOKEN_EXPIRE)
        })
        res.cookie('aux', true, {
            path: '/', 
            maxAge: ConvertTimes.convert(process.env.REFRESH_TOKEN_EXPIRE)
        })

        return res.status(200).json({
            success: true,
            authToken, 
            user})
    }
}

export { AuthenticateUserController }