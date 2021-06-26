import { Request, Response } from "express"
import { CreateUserService } from "../services/CreateUserService";


class CreateUserController {

    async handle(req: Request, res: Response){
        const { name, username, email, admin, password } = req.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({name, username, email, admin, password});
        return res.status(200).json({
            success: true,
            message: "account created successfully"
        });

    }
}

export { CreateUserController }