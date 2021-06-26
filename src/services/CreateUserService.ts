import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories"
import { hash, genSalt } from "bcryptjs"
import { ErrorResponse } from "../utils/ErrorResponse";

interface IUserRequest {
    name: string,
    username: string,
    email: string,
    admin?: boolean,
    password: string
}

class CreateUserService {

    async execute({name, username, email, admin = false, password} : IUserRequest) {
        if(!email) throw new Error("Email invalid");
        if(!username) throw new Error("Username invalid");

        const usersRepository = getCustomRepository(UsersRepositories);
        let userAlreadyExists = await usersRepository.findOne({email});
        if(userAlreadyExists) throw new Error("User already exits");
        userAlreadyExists = await usersRepository.findOne({username});
        if(userAlreadyExists) throw new Error("User already exits");

        let passwordRegex = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
        if(!passwordRegex.test(password)) 
            throw new ErrorResponse("the password must contain at least 8 characters, with at least one digit, one lowercase letter, one uppercase letter and one special character", 400)
        
        const salt = await genSalt(10);
        password = await hash(password, salt)

        const user = usersRepository.create({name, username, email, admin, password});
        await usersRepository.save(user);

        return user;
    }
}

export { CreateUserService }