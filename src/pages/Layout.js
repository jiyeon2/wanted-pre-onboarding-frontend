import { Link, Stack, Divider } from "@chakra-ui/react";
import { Outlet, Link as ReactRouterLink } from "react-router-dom";

export function Layout() {
  return (
    <Stack>
      <Stack direction="row" spacing={10}>
        <Link as={ReactRouterLink} to="/signup">
          회원가입
        </Link>
        <Link as={ReactRouterLink} to="/signin">
          로그인
        </Link>
      </Stack>

      <Divider />
      <Outlet />
    </Stack>
  );
}
