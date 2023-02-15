import { FormControl, FormLabel, Input, Button, Stack } from "@chakra-ui/react";

export default function SignupForm() {
  return (
    <form>
      <Stack spacing={4}>
        <FormControl>
          <FormLabel>이메일</FormLabel>
          <Input type="email" dataTestId="email-input" />
        </FormControl>
        <FormControl>
          <FormLabel>비밀번호</FormLabel>
          <Input type="password" dataTestId="password-input" />
        </FormControl>
        <Button dataTestId="signup-button">회원가입</Button>
      </Stack>
    </form>
  );
}
