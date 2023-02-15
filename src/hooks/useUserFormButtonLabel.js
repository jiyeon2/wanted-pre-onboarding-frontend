const values = {
  signin: { label: "로그인", [`data-testid`]: "signin-button" },
  signup: { label: "회원가입", [`data-testid`]: "signup-button" },
};

export function useUserFormButtonLabel(type) {
  if (!["signin", "signup"].includes(type))
    throw new Error("type은 `signin`,`signup` 중 하나여야 합니다");

  return values[type];
}
