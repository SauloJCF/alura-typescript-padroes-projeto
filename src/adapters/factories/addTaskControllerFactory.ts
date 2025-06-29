import { DbAddTask } from "../../dataSources";
import { LogErrorMongoRepository, TaskMongoRepository } from "../../dataSources/db/repository";
import { AddTaskController } from "../controllers/task/addTask";
import LogErrorControllerDecorator from "../decorators/logErrorControllerDecorator";
import { addTaskValidationCompositeFactory } from "./addTaskValidationCompositeFactory";

export  const addTaskControllerFactory = () => {
  const taskMongoRepository = new TaskMongoRepository(); // repositório
  const dbAddTask = new DbAddTask(taskMongoRepository); // serviço

  const addTasksController = new AddTaskController(dbAddTask, addTaskValidationCompositeFactory());
  const logErrorRepository = new LogErrorMongoRepository();
  return new LogErrorControllerDecorator(addTasksController, logErrorRepository);
}