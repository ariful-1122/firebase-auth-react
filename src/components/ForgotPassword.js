import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ForgotPassword = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useAuth();

  const email = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    const enteredEmail = email.current.value;

    try {
      setError("");
      setLoading(true);
      await resetPassword(enteredEmail);
      setMessage("Check your inbox for further instructions");
    } catch (e) {
      setError("Failed to reset password");
    }
    setLoading(false);
  };

  return (
    <>
      <Card className="col-md-8 mx-auto my-5 ">
        <Card.Body>
          <h2 className="mb-4 text-center">Reset Password</h2>
          {error && <Alert variant="danger"> {error} </Alert>}
          {message && <Alert variant="danger"> {message} </Alert>}
          <Form onSubmit={submitHandler}>
            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control ref={email} id="email" type="email" required />
            </Form.Group>

            <Button
              disabled={loading}
              type="submit"
              className=" mt-4 text-center"
            >
              Reset Password
            </Button>
          </Form>
          <Link className="mt-4 text-center " to="/login">
            Login
          </Link>
          <div className="w-100 ml-2 mt-3">
            Need an account? <Link to="/signup">Signup</Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ForgotPassword;
