import LoginForm from "../components/signin/LoginForm";
import { Heading, Stack } from "@chakra-ui/react";
export function Signin() {
  return (
    <Stack as="section" spacing={4}>
      <Heading as="h2">로그인 페이지</Heading>
      <LoginForm />
    </Stack>
  );
}
