import { DeleteTask } from "../../usecases/deleteTask";
import { DeleteTaskRepository } from "../../usecases/repository/deleteTaskRepository";

export class DbDeleteTask implements DeleteTask {
  constructor(private readonly deleteTaskRepository: DeleteTaskRepository) {}
    async delete(id: string): Promise<boolean> {
      const success = await this.deleteTaskRepository.delete(id);

      return success;
    }
}
