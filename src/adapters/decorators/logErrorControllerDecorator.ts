import { Controller } from "../interfaces/controller";
import { HttpRequest, HttpResponse } from "../interfaces/http";
import { LogErrorRepository } from "../../usecases/repository/logErrorRepository";

export default class LogErrorControllerDecorator implements Controller {
    constructor(private readonly controller: Controller, private readonly logErrorRepository: LogErrorRepository) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const response = await this.controller.handle(httpRequest);

        if (response.statusCode === 500)
            this.logErrorRepository.log(response.body.stack);

        return response;
    }

}