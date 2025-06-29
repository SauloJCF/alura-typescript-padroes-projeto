import { LogErrorRepository } from "../../../usecases/repository";
import { MongoManager } from "../../config/mongoManager";

export class LogErrorMongoRepository implements LogErrorRepository {
    async log(stack: string): Promise<void> {
        const logErrosCollection = MongoManager.getInstance().getCollection('errors');
        await logErrosCollection.insertOne({stack, date: new Date()});
    }

}