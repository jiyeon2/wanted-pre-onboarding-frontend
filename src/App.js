import { Container } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { Layout } from "./pages/Layout";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { Todo } from "./pages/Todo";
import RequireToken from "./components/shared/RequireToken";
import CheckHasToken from "./components/shared/CheckHasToken";

function App() {
  return (
    <Container className="App" py={10}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/signin"
            element={
              <CheckHasToken>
                <Signin />
              </CheckHasToken>
            }
          />
          <Route
            path="/signup"
            element={
              <CheckHasToken>
                <Signup />
              </CheckHasToken>
            }
          />
          <Route
            path="/todo"
            element={
              <RequireToken>
                <Todo />
              </RequireToken>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
