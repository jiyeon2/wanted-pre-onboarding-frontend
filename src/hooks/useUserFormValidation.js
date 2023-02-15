export const errorMessage = {
  email: `이메일은 @ 문자를 포함해야 합니다`,
  password: `비밀번호는 8자 이상이어야 합니다`,
};

export function useUserFormValidation(formState) {
  const errors = { email: null, password: null };
  const isValid = { email: true, password: true };

  if (!formState.email.includes("@")) {
    errors.email = errorMessage.email;
    isValid.email = false;
  }
  if (formState.password.length < 8) {
    errors.password = errorMessage.password;
    isValid.password = false;
  }
  const isAllValid = isValid.email && isValid.password;
  return { errors, isValid, isAllValid };
}
