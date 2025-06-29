import { DeleteTask } from "../../usecases";
import { DeleteTaskRepository } from "../../usecases/repository";

export class DbDeleteTask implements DeleteTask {
  constructor(private readonly deleteTaskRepository: DeleteTaskRepository) {}
    async delete(id: string): Promise<boolean> {
      const success = await this.deleteTaskRepository.delete(id);

      return success;
    }
}
