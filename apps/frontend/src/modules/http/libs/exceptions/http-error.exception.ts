import { HTTPError as LibraryHTTPError } from '@thread-js/shared';

import { type ServerErrorType } from '~/libs/enums/enums.js';
import {
  type ServerValidationErrorResponse,
  type ValueOf
} from '~/libs/types/types.js';

import { type HTTPCode } from '../enums/enums.js';

type Constructor = {
  cause?: unknown;
  details: ServerValidationErrorResponse['details'];
  errorType: ValueOf<typeof ServerErrorType>;
  message: string;
  status: ValueOf<typeof HTTPCode>;
};

class HTTPError extends LibraryHTTPError {
  public details: ServerValidationErrorResponse['details'];

  public errorType: ValueOf<typeof ServerErrorType>;

  public constructor({
    cause,
    details,
    errorType,
    message,
    status
  }: Constructor) {
    super({
      cause,
      message,
      status
    });

    this.errorType = errorType;
    this.details = details;
  }
}

export { HTTPError };
