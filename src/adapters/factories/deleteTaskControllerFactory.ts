import { DbDeleteTask } from "../../dataSources/db/dbDeleteTask";
import { LogErrorMongoRepository } from "../../dataSources/db/repository/logErrorMongoRepository";
import { TaskMongoRepository } from "../../dataSources/db/repository/taskMongoRepository";
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