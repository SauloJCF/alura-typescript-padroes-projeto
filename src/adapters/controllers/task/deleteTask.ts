import { HttpRequest, HttpResponse } from "../../interfaces/http";
import {
  badRequest,
  noContent,
  notFound,
  serverError,
} from "../../presentations/api/httpResponses/httpResponses";
import { Controller } from "../../interfaces/controller";
import { Validation } from "../../interfaces/validation";
import { DeleteTask } from "../../../usecases/deleteTask";

export class DeleteTaskController implements Controller {
  constructor(private readonly deleteTask: DeleteTask, private validation: Validation) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.params);

      if (error) {
        return badRequest(error);
      }

      const { id } = httpRequest.params;

      const success = await this.deleteTask.delete(id);

      if (success) {
        return noContent();
      } else {
        return notFound({message: 'Não foi possível excluir o registro!'})
      }      
    }
    catch (error: any) {
      return serverError(error);
    }
  }
}
