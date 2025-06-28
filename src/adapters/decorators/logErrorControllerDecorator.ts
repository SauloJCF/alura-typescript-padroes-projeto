import { log } from "node:console";
import { Controller } from "../interfaces/controller";
import { HttpRequest, HttpResponse } from "../interfaces/http";

export default class LogErrorControllerDecorator implements Controller {
    constructor(private controller: Controller) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const response = await this.controller.handle(httpRequest);

        if (response.statusCode === 500)
            console.log('Erro de requisição!');

        return response;
    }

}