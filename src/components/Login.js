import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signin } = useAuth();
  const history = useHistory();

  const email = useRef();
  const password = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    try {
      setError("");
      setLoading(true);
      await signin(enteredEmail, enteredPassword);
      history.push("/");
    } catch (e) {
      setError("Login Failed");
    }
    setLoading(false);
  };

  return (
    <>
      <Card className="col-md-8 mx-auto my-5">
        <Card.Body>
          <h2 className="mb-4">Login</h2>
          {error && <Alert variant="danger"> {error} </Alert>}
          <Form onSubmit={submitHandler}>
            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control ref={email} id="email" type="email" required />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                ref={password}
                id="password"
                type="password"
                required
              />
            </Form.Group>
            <Button disabled={loading} type="submit" className="mt-4">
              Login
            </Button>
          </Form>
          <div className="w-100 ml-2 mt-3">
            Need an account? <Link to="/signup">Signup</Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Login;
