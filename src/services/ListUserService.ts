import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';
import { classToPlain } from 'class-transformer';
import { ErrorResponse } from '../utils/ErrorResponse';



class ListUserService {
    async execute(username: string){
        const usersRepositories = getCustomRepository(UsersRepositories);
        const user = await usersRepositories.findOne({username});
        if(!user) throw new ErrorResponse(`${username} does not exists`, 404)

        return classToPlain(user)

    }
}

export { ListUserService }