import React, { useRef } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Card className="col-md-8 mx-auto my-5">
        <Card.Body>
          <h2 className="mb-4">Login</h2>
          <Form>
            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control id="email" type="email" required />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control id="password" type="email" required />
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
