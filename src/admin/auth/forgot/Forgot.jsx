import React from "react";
import "./forgot.css";
import { Container, Form, InputGroup } from "react-bootstrap";
import { Button } from "@mui/material";
import { Email } from "@mui/icons-material";
const Forgot = () => {
  return (
    <div className="forgot">
      <Container>
        <div className="forgot_wrapper">
          <InputGroup>
            <InputGroup.Text>
              <Email />
            </InputGroup.Text>
            <Form.Control placeholder="Enter Email" />
          </InputGroup>
          <Button fullWidth sx={{ mt: 3 }} variant="contained">
            login
          </Button>
          <Button fullWidth sx={{ mt: 3 }} variant="contained" color="error">
            cancel
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Forgot;
