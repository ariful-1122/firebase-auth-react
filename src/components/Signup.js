import React, { useRef, useState } from "react";
import { Alert, Button, Card, Cart, Form } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory();
  const { signup } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  async function submitHandler(e) {
    e.preventDefault();
    const enteredPassword = passwordRef.current.value;
    const confirmEnteredPassword = passwordConfirmRef.current.value;

    if (enteredPassword !== confirmEnteredPassword) {
      return setError("password don't match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/login");
    } catch (error) {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <>
      <Card className="col-md-6 mx-auto my-4">
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>

          {error && <Alert variant="danger"> {error} </Alert>}
          <Form onSubmit={submitHandler}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control ref={emailRef} type="email" required />
            </Form.Group>

            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control ref={passwordRef} type="password" required />
            </Form.Group>

            <Form.Group id="confirmationPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control ref={passwordConfirmRef} type="password" required />
            </Form.Group>
            <Button disabled={loading} className="mt-3" type="submit">
              Sign up
            </Button>
          </Form>
          <div className="w-100 ml-2 mt-3">
            Already Have an Account? <Link to="/login">Log In</Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Signup;
