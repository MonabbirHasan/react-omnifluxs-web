import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { ArrowRightAlt } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./user_logout.css";
const UserLogout = () => {
  const navigate = useNavigate();
  return (
    <div className="logout_page">
      <Container>
        <div className="logout_wrapper">
          <Typography
            variant="h3"
            style={{ textTransform: "capitalize", padding: "10px 0" }}
          >
            are you leaving?
          </Typography>
          <Typography
            variant="p"
            style={{ textTransform: "capitalize", padding: "10px 0" }}
          >
            are you sure want to log out?
          </Typography>
          <Box sx={{ padding: "10px" }}>
            <Button
              variant="outlined"
              sx={{ mr: "10px" }}
              onClick={() => navigate("/seller_dashboard")}
            >
              Cancel
            </Button>
            <Button
              variant=""
              style={{ background: "#9FC32D", color: "white" }}
              onClick={() => {
                location.href = "/";
              }}
            >
              Yes <ArrowRightAlt />
            </Button>
          </Box>
        </div>
      </Container>
    </div>
  );
};

export default UserLogout;
