import { DbDeleteTask } from "../../dataSources";
import { LogErrorMongoRepository, TaskMongoRepository } from "../../dataSources/db/repository";
import { DeleteTaskController } from "../controllers/task/deleteTask";
import LogErrorControllerDecorator from "../decorators/logErrorControllerDecorator";
import { deleteTaskValidationCompositeFactory } from "./deleteTaskValidationCompositeFactory";

export  const deleteTaskControllerFactory = () => {
  const taskMongoRepository = new TaskMongoRepository(); // repositório
  const dbDeleteTask = new DbDeleteTask(taskMongoRepository); // serviço

  const deleteTasksController = new DeleteTaskController(dbDeleteTask, deleteTaskValidationCompositeFactory());
  const logErrorRepository = new LogErrorMongoRepository();
  return new LogErrorControllerDecorator(deleteTasksController, logErrorRepository);
}