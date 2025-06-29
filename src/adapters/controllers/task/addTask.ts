import { HttpRequest, HttpResponse } from "../../interfaces/http";
import {
  badRequest,
  created,
  serverError,
} from "../../presentations/api/httpResponses/httpResponses";
import { Controller, Validation } from "../../interfaces";
import { AddTask } from "../../../usecases";

export class AddTaskController implements Controller {
  constructor(private readonly addTask: AddTask, private validation: Validation) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body);

      if (error) {
        return badRequest(error);
      }

      const { title, description, date } = httpRequest.body;

      const task = await this.addTask.add({ title, description, date });
      
      return created(task);
    }
    catch (error: any) {
      return serverError(error);
    }
  }
}
