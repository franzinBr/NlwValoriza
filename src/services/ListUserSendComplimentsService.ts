import { getCustomRepository } from 'typeorm';
import { ComplimentsRepositories } from '../repositories/ComplimentsRepositories';
import { UsersRepositories } from '../repositories/UsersRepositories';
import { ErrorResponse } from '../utils/ErrorResponse';


class ListUserSendComplimentsService {
    async execute(username: string) {
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
        const usersRepositories = getCustomRepository(UsersRepositories)

        const user = await usersRepositories.findOne({username})
        if(!user) throw new ErrorResponse("Invalid user", 403)
        
        /*const compliments = await complimentsRepositories.find({
            where: {
                user_sender: user.id
            },
            //relations: ["userSender", "userReceiver", "tag"]
        })*/
        const compliments = await complimentsRepositories.relationsSmallSender(user.id);

        return compliments
    }
}

export { ListUserSendComplimentsService }