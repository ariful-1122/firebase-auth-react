import { Container } from "react-bootstrap";
import { AuthProvider } from "../context/AuthContext";
import Signup from "./Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Container>
          <Switch>
            <Route path="/" component={Dashboard} exact />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
          </Switch>
        </Container>
      </AuthProvider>
    </Router>
  );
}

export default App;
