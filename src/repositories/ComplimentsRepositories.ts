import { EntityRepository, Repository } from "typeorm"
import { Compliment } from "../entities/Compliment"


@EntityRepository(Compliment)
class ComplimentsRepositories extends Repository<Compliment> {
    
    relationsCompleteSender(id: string)
    {
        return this.createQueryBuilder("compliments")
            .where({
                user_sender: id
            })
            .select(['compliments.id', 'compliments.message', 'users.id', 'users.name', "users.username", "tags.id", "tags.name", 
                    "userReceiver.id", "userReceiver.name",  "userReceiver.username"])
            .leftJoin('compliments.userSender', 'users')
            .leftJoin('compliments.userReceiver', 'userReceiver')
            .leftJoin('compliments.tag', "tags")
            .getMany();
    }

    relationsCompleteReceiver(id: string)
    {
        return this.createQueryBuilder("compliments")
            .where({
                user_receiver: id
            })
            .select(['compliments.id', 'compliments.message', 'users.id', 'users.name', "users.username", "tags.id", "tags.name", 
                    "userReceiver.id", "userReceiver.name",  "userReceiver.username"])
            .leftJoin('compliments.userSender', 'users')
            .leftJoin('compliments.userReceiver', 'userReceiver')
            .leftJoin('compliments.tag', "tags")
            .getMany();
    }

    relationsSmallSender(id: string)
    {
        return this.createQueryBuilder("compliments")
            .where({
                user_sender: id
            })
            .select(['compliments.id', 'compliments.message', 'users.id', 'users.name', "users.username", "tags.id", "tags.name"])
            .leftJoin('compliments.userReceiver', 'users')
            .leftJoin('compliments.tag', "tags")
            .getMany();
    }

    relationsSmallReceiver(id: string)
    {
        return this.createQueryBuilder("compliments")
            .where({
                user_receiver: id
            })
            .select(['compliments.id', 'compliments.message', 'users.id', 'users.name', "users.username", "tags.id", "tags.name"])
            .leftJoin('compliments.userSender', 'users')
            .leftJoin('compliments.tag', "tags")
            .getMany();
    }
}

export { ComplimentsRepositories }