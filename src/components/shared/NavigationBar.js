import { Link, Stack, Button, Text } from "@chakra-ui/react";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import { getJWT, removeJWT } from "../../utils/localStorage";

function NavigationBar() {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Stack direction="row" spacing={10} alignItems="center">
        <Link as={ReactRouterLink} to="/">
          <Text fontSize="3rem">π¦</Text>
        </Link>
        <Link as={ReactRouterLink} to="/signup">
          νμκ°μ
        </Link>
        <Link as={ReactRouterLink} to="/signin">
          λ‘κ·ΈμΈ
        </Link>
        <Link as={ReactRouterLink} to="/todo">
          ν¬λ
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
  return <Button onClick={logout}>λ‘κ·Έμμ</Button>;
}
