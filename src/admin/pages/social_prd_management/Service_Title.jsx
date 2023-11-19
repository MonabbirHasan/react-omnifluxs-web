import { Typography } from "@mui/material";
import React from "react";

const Service_Title = (props) => {
  return (
    <Typography
      sx={{
        pb: 2,
        textTransform: "capitalize",
        color: "#919191",
        fontFamily: "fantasy!important",
        letterSpacing: "2px",
        fontSize: "2rem",
      }}
    >
     {props.title}
    </Typography>
  );
};

export default Service_Title;
