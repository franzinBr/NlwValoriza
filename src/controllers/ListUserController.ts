import { Request, Response } from 'express';
import { ListUserService } from '../services/ListUserService';



class ListUserController {
    async handle(req: Request, res: Response){
        const { username } = req.params;

        const listUserService = new ListUserService();
        const user = await listUserService.execute(username);

        return res.status(200).json({
            success: true,
            user
        })
    }
}

export { ListUserController }