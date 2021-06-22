import {Request, response, Response} from "express"
import { CreateUserService } from "../services/CreateUserService";


class CreateUserController {

    async handle(req: Request, res: Response){
        const { name, email, admin } = req.body;

        const createUserService = new CreateUserService();

        try {
            const user = await createUserService.execute({name, email, admin});
            return res.status(200).json({
                success: true,
                user
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            });
        }
    }
}

export { CreateUserController }