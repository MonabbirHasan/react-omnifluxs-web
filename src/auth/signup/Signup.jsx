import React, { useState } from "react";
import "./signup.css";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";

import {
  AccountCircle,
  ArrowDownward,
  ArrowLeft,
  Code,
  ConfirmationNumber,
  Email,
  Facebook,
  Google,
  JoinFull,
  JoinFullOutlined,
  Key,
  Phone,
  Refresh,
} from "@mui/icons-material";
import ReCAPTCHA from "react-google-recaptcha";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [refferCode, setReferCode] = useState("");
  const [captcha, setCapcha] = useState("");
  const [errors, setErrors] = useState({});
  const [captchaValue, setCaptchaValue] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  /********************************************
   * FORM VALIDATION FUNCTION START HERE
   ********************************************/
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Username validation (example: should not be empty)
    if (username.trim() === "") {
      newErrors.username = "Username is required";
      valid = false;
    }

    // Email validation (basic email format)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!emailRegex.test(email)) {
      newErrors.email = "Enter a valid email address";
      valid = false;
    }

    // Phone validation (example: numeric and 10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
      valid = false;
    }

    // Password validation (example: at least 8 characters)
    if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
      valid = false;
    }

    // Confirm Password validation
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      valid = false;
    }

    // Captcha validation (example: not empty)
    if (captcha.trim() === "") {
      newErrors.captcha = "Captcha is required";
      valid = false;
    }
    // refferCode validation (example: not empty)
    if (refferCode.length < 8) {
      newErrors.refferCode = "refferCode must be at least 8 characters long";
      valid = false;
    }

    // Set errors if any, or clear errors if the form is valid
    setErrors(newErrors);

    return valid;
  };
  /********************************************
   * FORM SUBMITION FUNCTION START HERE
   ********************************************/
  const handleSignup = (e) => {
    e.preventDefault();
    // Check if captchaValue is empty to determine if the user has completed the captcha
    // if (!captchaValue) {
    //   setCaptchaError("Please complete the captcha");
    //   return; // Prevent form submission if captcha is not completed
    // }
    const isValid = validateForm();

    if (isValid) {
      // Form submission logic when the form is valid
      // For example, send data to backend or perform necessary actions
      console.log("Form submitted:");
    } else {
      // Form has validation errors; handle them accordingly
      console.log("Form has validation errors");
      alert("Form has validation errors");
    }
  };
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
            <Row>
              <Col sm={2} md={6} lg={6}>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <AccountCircle />
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Enter Your Name"
                    aria-label="Enter Name"
                    aria-describedby="basic-addon1"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </InputGroup>
              </Col>
              <Col sm={2} md={6} lg={6}>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <Email />
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Enter Your Email"
                    aria-label="Enter Email"
                    aria-describedby="basic-addon1"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col sm={2} md={6} lg={6}>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <Key />
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Enter Password"
                    aria-label="Enter Password"
                    aria-describedby="basic-addon1"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </InputGroup>
              </Col>
              <Col sm={2} md={6} lg={6}>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <ConfirmationNumber />
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Confirm Password"
                    aria-label="Enter Password"
                    aria-describedby="basic-addon1"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </InputGroup>
              </Col>
            </Row>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <JoinFullOutlined />
              </InputGroup.Text>
              <Form.Control
                placeholder="Enter Referral Code"
                aria-label="Enter Referral Code"
                aria-describedby="basic-addon1"
                onChange={(e) => setReferCode(e.target.value)}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <Phone />
              </InputGroup.Text>
              <Form.Control
                placeholder="Enter Phone"
                aria-label="Enter Phone"
                aria-describedby="basic-addon1"
                onChange={(e) => setPhone(e.target.value)}
              />
            </InputGroup>
            {/* <Row>
              <Col sm={2} md={6} lg={6}>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Enter capcha"
                    aria-label="Enter capcha"
                    aria-describedby="basic-addon1"
                    onChange={(e) => setCapcha(e.target.value)}
                  />
                </InputGroup>
              </Col>
              <Col sm={2} md={6} lg={6}>
                <InputGroup className="mb-3">
                  <Form.Control
                    readOnly
                    aria-readonly
                    placeholder="OMN323423"
                    aria-label="OMN323423"
                    aria-describedby="basic-addon1"
                    style={{ fontFamily: "cursive", fontWeight: "600" }}
                  />
                  <InputGroup.Text id="basic-addon1">
                    <IconButton sx={{ p: 0 }}>
                      <Refresh />
                    </IconButton>
                  </InputGroup.Text>
                </InputGroup>
              </Col>
            </Row> */}
            {/* <ReCAPTCHA
              theme="dark"
              sitekey={'6LeuyBwpAAAAAI8CpYPKKDt_h9-UvEo1AlDJLrSq'}
              onChange={onChange}
              size="invisible"
            /> */}
          
            <Button
              onClick={handleSignup}
              variant="contained"
              fullWidth
              sx={{ marginBottom: "10px" }}
            >
              signup
            </Button>
            <Typography textAlign={"center"} textTransform={"uppercase"} pb={1}>
              or
            </Typography>
            <Box sx={{ display: "flex" }} gap={3}>
              <Button
                sx={{
                  flexBasis: "50%",
                  padding: "10px",
                  textTransform: "capitalize",
                }}
                variant="outlined"
              >
                <Google />
                Google
              </Button>
              <Button
                sx={{
                  flexBasis: "50%",
                  padding: "10px",
                  textTransform: "capitalize",
                }}
                variant="outlined"
              >
                <Facebook /> Facebook
              </Button>
            </Box>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Signup;
