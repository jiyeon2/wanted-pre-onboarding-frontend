import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Stack,
} from "@chakra-ui/react";

export default function LoginForm() {
  return (
    <form>
      <Stack spacing={4}>
        <FormControl>
          <FormLabel>이메일</FormLabel>
          <Input type="email" data-test-id="email-input" />
        </FormControl>
        <FormControl>
          <FormLabel>비밀번호</FormLabel>
          <Input type="password" data-test-id="password-input" />
        </FormControl>
        <Button data-test-id="signin-button">로그인</Button>
      </Stack>
    </form>
  );
}
