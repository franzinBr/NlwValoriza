import { Request, Response } from "express";
import { LogoutUserService } from "../services/LogoutUserService";



class LogoutUserController {

    async handle(req: Request, res: Response){
        const logoutUserService = new LogoutUserService();
        logoutUserService.execute(res)

        return res.status(200).json({
            success: true,
            message: "user logged out successfully"
        })
    }

}

export { LogoutUserController }