import { STRINGS } from '../constants';

const validateConfirmPassword = (
  password: string,
  confirmPassword: string,
  errorText: string,
): string => {
  if (!password || !confirmPassword) {
    return STRINGS.EMPTY;
  }

  if (password !== confirmPassword) {
    return errorText;
  }
  return STRINGS.EMPTY;
};
