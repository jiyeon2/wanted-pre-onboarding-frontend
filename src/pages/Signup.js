import SignupForm from "../components/signup/SignupForm";
import { Heading, Stack } from "@chakra-ui/react";

export function Signup() {
  return (
    <Stack as="section" spacing={4}>
      <Heading as="h2">회원가입 페이지</Heading>
      <SignupForm />
    </Stack>
  );
}
