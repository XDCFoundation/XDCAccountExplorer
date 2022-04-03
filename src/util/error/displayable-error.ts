export default class DisplayableError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'DisplayableError';
  }
}

export function isDisplayableError(error: unknown): error is DisplayableError {
  return error instanceof DisplayableError;
}
