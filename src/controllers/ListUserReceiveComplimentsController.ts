import { Request, response, Response } from 'express';
import { ListUserReceiveComplimentsService } from '../services/ListUserReceiveComplimentsService';



class ListUserReceiveComplimentsController {

    async handle(req: Request, res: Response) {
        //const { user_id } = req; 
        const { username } = req.params

        const listUserReceiveComplimentsService = new ListUserReceiveComplimentsService();

        const compliments = await listUserReceiveComplimentsService.execute(username)
    
        return res.status(200).json({
            success: true,
            compliments
        })
    }
}

export { ListUserReceiveComplimentsController }