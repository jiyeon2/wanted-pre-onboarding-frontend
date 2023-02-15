import { Stack, Divider } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../components/shared/NavigationBar";

export function Layout() {
  return (
    <Stack>
      <NavigationBar />
      <Divider />
      <Outlet />
    </Stack>
  );
}
