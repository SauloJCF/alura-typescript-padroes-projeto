import { Validation } from "../interfaces";
import { RequiredFieldValidation, ValidationComposite } from "../validations";

export const deleteTaskValidationCompositeFactory = (): ValidationComposite => {
    const validations: Validation[] = [];

    validations.push(new RequiredFieldValidation('id'))

    return new ValidationComposite(validations);
}