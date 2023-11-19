import { Message, Notifications } from "@mui/icons-material";
import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import "./header.css";
const Headers = () => {
  return (
    <header className="header">
      <Stack
        width={"100%"}
        direction={"row"}
        justifyContent={"space-between"}
        position={"absolute"}
        right="0"
        sx={{
          verticalAlign: "middle",
          px: 3,
        }}
      >
        <Typography></Typography>
        <Box>
          {/*NOTIFICATION ICON*/}
          <IconButton>
            <Notifications />
          </IconButton>
           {/*MESSAGE ICON*/}
          <IconButton>
            <Message />
          </IconButton>
           {/*PROFILE ICON*/}
          <IconButton>
            <Avatar src="https://cdn.pixabay.com/photo/2023/03/24/14/23/ai-generated-7874140_1280.jpg" />
          </IconButton>
        </Box>
      </Stack>
    </header>
  );
};

export default Headers;
