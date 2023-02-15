import { Link, Stack, Button, Text } from "@chakra-ui/react";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import { getJWT, removeJWT } from "../../utils/localStorage";

function NavigationBar() {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Stack direction="row" spacing={10} alignItems="center">
        <Link as={ReactRouterLink} to="/">
          <Text fontSize="3rem">🦛</Text>
        </Link>
        <Link as={ReactRouterLink} to="/signup">
          회원가입
        </Link>
        <Link as={ReactRouterLink} to="/signin">
          로그인
        </Link>
        <Link as={ReactRouterLink} to="/todo">
          투두
        </Link>
      </Stack>

      <LogoutButton />
    </Stack>
  );
}
export default NavigationBar;

function LogoutButton() {
  let navigate = useNavigate();
  const token = getJWT();

  const logout = () => {
    removeJWT();
    navigate("/signin");
  };
  if (!token) return null;
  return <Button onClick={logout}>로그아웃</Button>;
}
