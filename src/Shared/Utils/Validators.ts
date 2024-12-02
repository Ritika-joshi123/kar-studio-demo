export const validatePassword = (value: string | undefined): string | null => {
  if (value === undefined || value.trim() === '') {
    return 'Password is required!';
  }

  if (value.length < 8) {
    return 'Password must be at least 8 characters long.';
  }

  // Check for at least one lowercase letter
  if (!/[a-z]/.test(value)) {
    return 'Password must contain at least one lowercase letter.';
  }

  // Check for at least one uppercase letter
  if (!/[A-Z]/.test(value)) {
    return 'Password must contain at least one uppercase letter.';
  }

  // Check for at least one digit
  if (!/\d/.test(value)) {
    return 'Password must contain at least one digit.';
  }

  // Check for at least one special character
  if (!/[!@#$%^&*()_+={}[\]:;"'<>,.?/-]/.test(value)) {
    return 'Password must contain at least one special character.';
  }

  return null;
};
