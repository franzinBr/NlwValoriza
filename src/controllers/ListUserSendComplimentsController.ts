import { Request, response, Response } from 'express';
import { ListUserSendComplimentsService } from '../services/ListUserSendComplimentsService';


class ListUserSendComplimentsController {

    async handle(req: Request, res: Response) {
        //const { user_id } = req; 
        const { username } = req.params
    
        const listUserSendComplimentsService = new ListUserSendComplimentsService();

        const compliments = await listUserSendComplimentsService.execute(username)
    
        return res.status(200).json({
            success: true,
            compliments
        })
    }
}

export { ListUserSendComplimentsController }