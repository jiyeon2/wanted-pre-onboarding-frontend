import { Container } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { Layout } from "./pages/Layout";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";

function App() {
  return (
    <Container className="App" py={10}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
