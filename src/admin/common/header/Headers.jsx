import React, { useContext, useState } from "react";
import { Message, Notifications } from "@mui/icons-material";
import {
  Avatar,
  Box,
  IconButton,
  Stack,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import "./header.css";
import { useNavigate } from "react-router-dom";
const Headers = (props) => {
  const ProfileMenu = () => {
    props.updates();
  };
  const navigate = useNavigate();
  /*************************************************
   *OWNER PROFILE MENU OPTION CONTROLL HERE
   *************************************************/
  const [OwnerProfileMenuAnchorEl, setOwnerProfileMenuAnchorEl] =
    useState(null);
  const openOwnerProfileMenu = Boolean(OwnerProfileMenuAnchorEl);
  const handleShowOwnerProfileMenu = (event) => {
    setOwnerProfileMenuAnchorEl(event.currentTarget);
  };
  const handleCloseOwnerProfileMenu = () => {
    setOwnerProfileMenuAnchorEl(null);
  };
  /*************************************************
   *MESSAGE MENU OPTION CONTROLL HERE
   *************************************************/
  /*************************************************
   *NOTIFICATION MENU OPTION CONTROLL HERE
   *************************************************/
  return (
    <>
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
            <IconButton onClick={() => {}}>
              <Notifications />
            </IconButton>
            {/*MESSAGE ICON*/}
            <IconButton onClick={() => {}}>
              <Message />
            </IconButton>
            {/*PROFILE ICON*/}
            <IconButton onClick={handleShowOwnerProfileMenu}>
              <Avatar src="https://cdn.pixabay.com/photo/2023/03/24/14/23/ai-generated-7874140_1280.jpg" />
            </IconButton>
          </Box>
        </Stack>
      </header>
      {/*HEADER OWNER PROFILE OPTIONS MENU START HERE*/}
      <Box>
        <Menu
          id="basic-menu"
          anchorEl={OwnerProfileMenuAnchorEl}
          open={openOwnerProfileMenu}
          onClose={handleCloseOwnerProfileMenu}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={ProfileMenu}>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </Box>
    </>
  );
};

export default Headers;
