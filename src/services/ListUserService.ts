import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';
import { classToPlain } from 'class-transformer';



class ListUserService {
    async execute(username: string){
        const usersRepositories = getCustomRepository(UsersRepositories);
        const user = await usersRepositories.findOne({username});
        if(!user) throw new Error(`${username} does not exists`)

        return classToPlain(user)

    }
}

export { ListUserService }