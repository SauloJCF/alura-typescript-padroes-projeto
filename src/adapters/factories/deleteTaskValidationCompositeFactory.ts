import { Validation } from "../interfaces/validation";
import { RequiredFieldValidation } from "../validations/requiredFieldValidation";
import { ValidationComposite } from "../validations/validationComposite";

export const deleteTaskValidationCompositeFactory = (): ValidationComposite => {
    const validations: Validation[] = [];

    validations.push(new RequiredFieldValidation('id'))

    return new ValidationComposite(validations);
}