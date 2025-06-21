import { DbAddTask } from "../../dataSources/db/dbAddTask";
import { TaskMongoRepository } from "../../dataSources/db/repository/taskMongoRepository";
import { AddTaskController } from "../controllers/task/addTask";
import { DateValidatorAdapter } from "../dateValidatorAdapter";

export  const taskControllerFactory = (): AddTaskController => {
  const dateValidatorAdapter = new DateValidatorAdapter();
  const taskMongoRepository = new TaskMongoRepository(); // repositório
  const dbAddTask = new DbAddTask(taskMongoRepository); // serviço

  return new AddTaskController(dbAddTask, dateValidatorAdapter);
}