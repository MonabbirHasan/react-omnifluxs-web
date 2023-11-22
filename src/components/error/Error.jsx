import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import errorimg from "../../assets/img/404.svg";
import { Box, Typography } from "@mui/material";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Error = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        padding: "30px",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        textAlign: "center",
        width: "100%",
        height: "100vh",
        backgroundColor: "#2196f3",
      }}
    >
      <Box>
        <LazyLoadImage
          style={{
            width: "100%",
            height: "400px",
          }}
          src={errorimg}
        />
        <Typography
          textTransform={"uppercase"}
          fontSize={"3rem"}
          fontWeight={700}
          textAlign={"center"}
          color={"white"}
        >
          Page not found!
        </Typography>
        <Button onClick={() => navigate("/")} className="text-capitalize">
          back home
        </Button>
      </Box>
    </div>
  );
};

export default Error;
