import { Validation } from "../interfaces/validation";
import { ValidationComposite } from "../validations/validationComposite";

export const addTaskValidationCompositeFactory = (): ValidationComposite => {
    const validations: Validation[] = [];

    return new ValidationComposite(validations);
}