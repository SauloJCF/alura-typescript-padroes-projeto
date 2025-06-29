import { DateValidator, Validation } from "../interfaces";
import { InvalidParamError } from "../presentations/api/errors";

export class DateValidation implements Validation {
    constructor(private readonly field: string, private readonly dateValidator: DateValidator) { }

    validate(data: any): Error | void {
        const isValid = this.dateValidator.isValid(data[this.field]);

        if (!isValid) {
            return new InvalidParamError(this.field);
        }
    }
}