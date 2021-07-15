import { Container } from "react-bootstrap";
import { AuthProvider } from "../context/AuthContext";
import Signup from "./Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Container>
          <Switch>
            <Route path="/" component={Dashboard} exact />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/reset-password" component={ForgotPassword} />
          </Switch>
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
