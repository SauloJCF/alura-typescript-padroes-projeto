import { DateValidatorAdapter } from "../dateValidatorAdapter";
import { Validation } from "../interfaces/validation";
import { DateValidation } from "../validations/dateValidation";
import { RequiredFieldValidation } from "../validations/requiredFieldValidation";
import { ValidationComposite } from "../validations/validationComposite";

export const addTaskValidationCompositeFactory = (): ValidationComposite => {
    const validations: Validation[] = [];

    for (const field of ['title', 'description', 'date']) {
        validations.push(new RequiredFieldValidation(field))
    }

    validations.push(new DateValidation('date', new DateValidatorAdapter()));

    return new ValidationComposite(validations);
}