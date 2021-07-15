import React, { useState } from "react";
import { Alert, Card, Button } from "react-bootstrap";

const Dashboard = () => {
  const [error, setError] = useState("");

  const logoutHandler = (e) => {
    console.log("logout");
  };

  return (
    <>
      <h2 className="text-center">Dashboard</h2>
      <Card className="col-md-6 mx-auto my-5">
        <Card.Body>
          <h2>Profile</h2>
          {error && <Alert> {error} </Alert>}
        </Card.Body>
        <Button onClick={logoutHandler} className="btn-small btn btn-danger">
          Logout
        </Button>
      </Card>
    </>
  );
};

export default Dashboard;
