import { Request, Response } from 'express';
import { RefreshTokenService } from '../services/RefreshTokenService';



class RefreshTokenController {
    async handle(req: Request, res: Response)
    {
        const refreshToken =  req.cookies.refreshtoken;
        if(!refreshToken) return res.status(401).end();

        const refreshTokenService = new RefreshTokenService();
        const {authToken, userInfo} = await refreshTokenService.execute(refreshToken);

        if(authToken === false) return res.status(401).end();

        return res.status(200).json({
            success: true,
            authToken, 
            user: userInfo})
    }
}

export { RefreshTokenController }