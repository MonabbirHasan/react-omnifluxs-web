import React from "react";
import "./signup.css";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Box, Button, Stack, Typography } from "@mui/material";
import {
  AccountCircle,
  ArrowDownward,
  ArrowLeft,
  Code,
  Email,
  Facebook,
  Google,
  JoinFull,
  JoinFullOutlined,
  Key,
  Phone,
  Refresh,
} from "@mui/icons-material";
const Signup = () => {
  return (
    <div className="signup">
      <Container>
        <div className="signup_wrapper">
          <div className="signup_form">
            <Typography
              mb={3}
              sx={{
                fontSize: "2rem",
                textTransform: "capitalize",
                fontWeight: "600",
                color: "black",
                textAlign: "center",
                borderBottom: "3px solid #2196f3",
                borderRadius: "1px",
              }}
            >
              Omni
              <span
                style={{
                  color: "#2196f3",
                }}
              >
                Fluxs
              </span>
            </Typography>
            {/******************************************
             * SIGNUP FORM
             *******************************************/}
            <Stack direction={"row"} spacing={2}>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <AccountCircle />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Enter Name"
                  aria-label="Enter Name"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <Email />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Enter Email"
                  aria-label="Enter Email"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Stack>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <Key />
              </InputGroup.Text>
              <Form.Control
                placeholder="Enter Password"
                aria-label="Enter Password"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <JoinFullOutlined />
              </InputGroup.Text>
              <Form.Control
                placeholder="Enter Referral Code"
                aria-label="Enter Referral Code"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <Stack direction={"row"} spacing={2}>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Enter capcha"
                  aria-label="Enter capcha"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <Form.Control
                  readOnly
                  aria-readonly
                  placeholder="OMN323423"
                  aria-label="OMN323423"
                  aria-describedby="basic-addon1"
                />
                <InputGroup.Text id="basic-addon1">
                  <Refresh />
                </InputGroup.Text>
              </InputGroup>
            </Stack>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <Phone />
              </InputGroup.Text>
              <Form.Control
                placeholder="Enter Phone"
                aria-label="Enter Phone"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <Button variant="contained" fullWidth sx={{ marginBottom: "10px" }}>
              signup
            </Button>
            <Typography textAlign={"center"} textTransform={"uppercase"} pb={1}>
              or
            </Typography>
            <Box sx={{ display: "flex" }} gap={3}>
              <Button
                sx={{ flexBasis: "50%", padding: "10px" }}
                variant="contained"
              >
                <Google />
              </Button>
              <Button
                sx={{ flexBasis: "50%", padding: "10px" }}
                variant="contained"
              >
                <Facebook />
              </Button>
            </Box>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Signup;
