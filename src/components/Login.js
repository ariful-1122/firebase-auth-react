import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const email = useRef();
  const password = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    console.log(enteredEmail, enteredPassword);
  };

  return (
    <>
      <Card className="col-md-8 mx-auto my-5">
        <Card.Body>
          <h2 className="mb-4">Login</h2>

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
            <Button type="submit" className="mt-4">
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
