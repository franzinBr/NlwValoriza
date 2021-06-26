import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"
import { UsersRepositories } from "../repositories/UsersRepositories";
import { EmailSender } from "../utils/emailSender";
import { ErrorResponse } from "../utils/ErrorResponse";

interface iComplimentRequest{
    tag_id: string,
    user_sender: string,
    user_receiver: string,
    message: string
}

class CreateComplimentService {

    async execute({tag_id, user_sender, user_receiver, message}: iComplimentRequest){
        
        if(user_sender === user_receiver) throw new ErrorResponse("Impossible to create self-praise", 400)
        
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
        const usersRepositories = getCustomRepository(UsersRepositories)

        const userReceiverExists = await usersRepositories.findOne(user_receiver)
        if(!userReceiverExists) throw new ErrorResponse("User Receiver doesn't exists!", 404);

        const compliment = complimentsRepositories.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        })

        await complimentsRepositories.save(compliment);

        const messageEmail = `
        <h1>Hello ${userReceiverExists.name}</h1>
        <p>You just received a compliment, check your profile</p>
        `
        EmailSender.send({
            to: userReceiverExists.email,
            subject: "Compliment",
            text: messageEmail,
        })

        return compliment;

    }
}

export { CreateComplimentService }