import { Container } from "react-bootstrap";
import { AuthProvider } from "../context/AuthContext";
import Signup from "./Signup";

function App() {
  
  return (
    <AuthProvider>
      <Container>
        <Signup />
      </Container>
    </AuthProvider>
  );
}

export default App;
