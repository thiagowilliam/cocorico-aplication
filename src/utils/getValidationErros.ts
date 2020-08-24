import { ValidationError } from 'yup';

interface Errors {
  [Key: string]: string;
}

export default function getValidationErros(err: ValidationError): Errors {
  const validationErrors: Errors = {};

  err.inner.forEach((error) => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}
