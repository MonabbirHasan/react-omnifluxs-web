import React from "react";
import "./forgot.css";
import { Container, Form, InputGroup } from "react-bootstrap";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { ArrowCircleLeftRounded, Email } from "@mui/icons-material";
const Forgot = () => {
  return (
    <div className="forgot">
      <Container>
        <div className="forgot_wrapper">
          <Stack pb={4} direction={"row"} spacing={3}>
            <IconButton sx={{ marginBottom: "10px" }}>
              <ArrowCircleLeftRounded htmlColor="black" />
            </IconButton>
            <Typography
              variant="body1"
              color="initial"
              fontSize={20}
              textTransform={"capitalize"}
              style={{ marginTop: "5px" }}
              fontWeight={"600"}
            >
              reset password
            </Typography>
          </Stack>
          <InputGroup>
            <InputGroup.Text>
              <Email />
            </InputGroup.Text>
            <Form.Control placeholder="Enter Email" />
          </InputGroup>
          <Button color="success" fullWidth sx={{ mt: 3 }} variant="contained">
            login
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Forgot;
