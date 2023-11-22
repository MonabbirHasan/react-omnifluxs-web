import React from "react";
import "./adminlogin.css";
import { Container, Form, InputGroup } from "react-bootstrap";
import { AccountCircleOutlined, Key } from "@mui/icons-material";
import { Avatar, Button, Typography } from "@mui/material";
import logo from "../../../assets/img/logo.png";
import { NavLink } from "react-router-dom";
const AdminLogin = () => {
  return (
    <div className="adminlogin">
      <Container>
        <div className="adminlogin_wrapper">
          <Avatar
            src={logo}
            sx={{ m: "auto", my: 3, width: "70px", height: "70px" }}
          />
          <InputGroup>
            <InputGroup.Text>
              <AccountCircleOutlined />
            </InputGroup.Text>
            <Form.Control placeholder="Enter Email or Name" />
          </InputGroup>
          <Typography py={1}></Typography>
          <InputGroup>
            <InputGroup.Text>
              <Key />
            </InputGroup.Text>
            <Form.Control placeholder="Enter Passowrd" />
          </InputGroup>
          <Button fullWidth sx={{ mt: 3 }} variant="contained">
            login
          </Button>
          <Typography py={1} textTransform={"capitalize"}>
           <NavLink to={"/super-forgot"}>forgot password</NavLink>
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default AdminLogin;
