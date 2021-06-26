import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"
import { UsersRepositories } from "../repositories/UsersRepositories";

interface iComplimentRequest{
    tag_id: string,
    user_sender: string,
    user_receiver: string,
    message: string
}

class CreateComplimentService {

    async execute({tag_id, user_sender, user_receiver, message}: iComplimentRequest){
        
        if(user_sender === user_receiver) throw new Error("Impossible to create self-praise")
        
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
        const usersRepositories = getCustomRepository(UsersRepositories)

        const userReceiverExists = await usersRepositories.findOne(user_receiver)
        if(!userReceiverExists) throw new Error("User Receiver doesn't exists!");

        const compliment = complimentsRepositories.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        })

        await complimentsRepositories.save(compliment);

        return compliment;

    }
}

export { CreateComplimentService }