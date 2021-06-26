import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";
import { ErrorResponse } from "../utils/ErrorResponse";


class CreateTagService {

    async execute(name: string) {
        if(!name) throw new ErrorResponse("Invalid name!", 400);

        const tagsRepositories = getCustomRepository(TagsRepositories);
        const tagAlreadyExists = await tagsRepositories.findOne({name});
        if(tagAlreadyExists) throw new ErrorResponse(`${name} Tag already exist!`, 422);

        const tag = tagsRepositories.create({name});
        await tagsRepositories.save(tag);

        return tag;
    }
}

export { CreateTagService }