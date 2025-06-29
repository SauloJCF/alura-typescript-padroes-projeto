import { ObjectId } from "mongodb";
import { Task } from "../../../entities/task";
import { AddATaskModel } from "../../../usecases";
import { AddTaskRepository, DeleteTaskRepository } from "../../../usecases/repository";
import { MongoManager } from "../../config/mongoManager";

export class TaskMongoRepository implements AddTaskRepository, DeleteTaskRepository {
  async add(taskData: AddATaskModel): Promise<Task> {
    const taskCollection = MongoManager.getInstance().getCollection('tasks');

    const { insertedId } = await taskCollection.insertOne(taskData);

    const taskById = await taskCollection.findOne({ _id: insertedId });

    if (!taskById) {
      throw new Error("Task not found!");
    }

    const task: Task = {
      id: taskById._id.toHexString(),
      title: taskById.title,
      description: taskById.description,
      date: taskById.date
    };

    return task;
  }

  async delete(id: string) : Promise<boolean> {
    const taskCollection = MongoManager.getInstance().getCollection('tasks');

    const {deletedCount} = await taskCollection.deleteOne({_id: new ObjectId(id)});

    return deletedCount > 0;
  }
}
