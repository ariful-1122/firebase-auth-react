import React, { useState, useEffect } from "react";
import { Alert, Card, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const history = useHistory();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { logout, currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser) {
      history.push("/login");
    }
  }, [currentUser]);

  const logoutHandler = async (e) => {
    try {
      setError("");
      setLoading(true);
      await logout();
      history.push("/login");
    } catch (error) {
      setError("Logout failed!");
    }
    setLoading(false);
  };

  return (
    <>
      <h2 className="text-center">Dashboard</h2>
      <Card className="col-md-6 mx-auto my-5 text-center p-5 ">
        <Card.Body>
          <h2>Profile</h2>
          <strong>Email:</strong> {error && <Alert> {error} </Alert>}
          {currentUser ? currentUser.email : null}
        </Card.Body>
        <Link className="btn btn-info text-white mb-3" to="/update-profile">
          Update profile
        </Link>
        <div className="text-center">
          <Button
            onClick={logoutHandler}
            className="btn btn-danger text-center"
          >
            Logout
          </Button>
        </div>
      </Card>
    </>
  );
};

export default Dashboard;
