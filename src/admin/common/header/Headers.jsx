import React, { useContext, useState } from "react";
import {
  AccountCircle,
  AccountCircleOutlined,
  ChatBubble,
  ChatBubbleOutline,
  Logout,
  Message,
  Notifications,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  IconButton,
  Stack,
  Typography,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import "./header.css";
import { useNavigate } from "react-router-dom";
const Headers = (props) => {
  const ProfileMenu = () => {
    props.updates();
  };
  const MessageMenu = () => {
    props.redirectChatPage();
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
  const [OwnerChatMenuAnchorEl, setOwnerChatMenuAnchorEl] = useState(null);
  const openOwnerChatMenu = Boolean(OwnerChatMenuAnchorEl);
  const handleShowOwnerChatMenu = (event) => {
    setOwnerChatMenuAnchorEl(event.currentTarget);
  };
  const handleCloseOwnerChatMenu = () => {
    setOwnerChatMenuAnchorEl(null);
  };
  /*************************************************
   *NOTIFICATION MENU OPTION CONTROLL HERE
   *************************************************/
  const [OwnerNotifyMenuAnchorEl, setOwnerNotifyMenuAnchorEl] = useState(null);
  const openOwnerNotifyMenu = Boolean(OwnerNotifyMenuAnchorEl);
  const handleShowOwnerNotifyMenu = (event) => {
    setOwnerNotifyMenuAnchorEl(event.currentTarget);
  };
  const handleCloseOwnerNotifyMenu = () => {
    setOwnerNotifyMenuAnchorEl(null);
  };
  return (
    <>
      <header className="owner_admin_header">
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
            <IconButton onClick={handleShowOwnerNotifyMenu}>
              <Notifications htmlColor="green" />
            </IconButton>
            {/*MESSAGE ICON*/}
            <IconButton onClick={handleShowOwnerChatMenu}>
              <Message htmlColor="green" />
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
          <MenuItem onClick={ProfileMenu}>
            <AccountCircleOutlined />
            <Typography>Profile</Typography>
          </MenuItem>
          <MenuItem>
            <Logout />
            <Typography>Logout</Typography>
          </MenuItem>
        </Menu>
      </Box>
      {/*HEADER OWNER CHATS OPTIONS MENU START HERE*/}
      <Box>
        <Menu
          id="basic-menu"
          anchorEl={OwnerChatMenuAnchorEl}
          open={openOwnerChatMenu}
          onClose={handleCloseOwnerChatMenu}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={MessageMenu}>
            <ChatBubbleOutline color="success" /> Start Message
          </MenuItem>
        </Menu>
      </Box>
      {/*HEADER OWNER NOTIFICATION OPTIONS MENU START HERE*/}
      <Box>
        <Menu
          id="basic-menu"
          anchorEl={OwnerNotifyMenuAnchorEl}
          open={openOwnerNotifyMenu}
          onClose={handleCloseOwnerNotifyMenu}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <Box
            sx={{
              padding: "10px",
              width: "320px",
              backgroundColor: "#fff",
              margin: "5px",
              borderRadius: "5px",
              boxShadow: "2px 2px 5px #eee,-2px -2px 5px #eee",
            }}
          >
            <Typography
              sx={{
                backgroundColor: "black",
                color: "white",
                borderRadius: "30px",
                padding: "5px",
                textTransform: "capitalize",
                textAlign: "center",
                fontSize: "14px",
              }}
            >
              anouncements (20/06/2023)
            </Typography>
            <Divider sx={{ pt: 1 }} variant="p" component="p" />
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, atque.
            </Typography>
          </Box>
        </Menu>
      </Box>
    </>
  );
};

export default Headers;
