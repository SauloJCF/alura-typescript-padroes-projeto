import { Validation } from "../interfaces";
import { MissingParamError } from "../presentations/api/errors";

export class RequiredFieldValidation implements Validation {
    constructor(private readonly field: string) {}
    validate(data: any): Error | void {
        if (!data[this.field]) {
            return new MissingParamError(this.field);
        }
    } 
}