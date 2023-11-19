import React, { useState } from "react";
import "./login.css";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import {
  AccountCircle,
  Email,
  EmailOutlined,
  Google,
  Key,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPasswrod] = useState("");
  let [PassType, setPassType] = useState("password");
  const Loginhandler = () => {
    let data = {
      email,
      password,
    };
    console.log(data);
  };
  const PassHideShow = () => {
    PassType == "password" ? setPassType("text") : setPassType("password");
  };

  return (
    <div className="login">
      <div className="container">
        <div className="login_wrapper">
          <div className="form_box">
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
            <Box>
              <Typography style={{ float: "right" }}>
                <NavLink>forgot password</NavLink>
              </Typography>
            </Box>
            <Box sx={{ float: "left" }}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Remember me"
              />
            </Box>
            <Box mt={3}>
              <Button fullWidth variant="contained">
                Login
              </Button>
              <Typography pt={3} textTransform={"capitalize"} fontSize={"14px"}>
                don't have an account? <NavLink to={'/signup'}>SignUp</NavLink>
              </Typography>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
