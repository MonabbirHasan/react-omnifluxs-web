import React, { useState } from "react";
import {
  AccountCircleOutlined,
  ChatBubble,
  Logout,
  Message,
  Notifications,
  Settings,
} from "@mui/icons-material";
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
  const admin_notification = () => {
    props.set_notification_page();
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
          sx={{ marginRight: "10px", mt: "10px" }}
        >
          {/* onClick={MessageMenu} */}
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            paddingX={2}
          >
            <IconButton onClick={admin_notification}>
              <ChatBubble />
            </IconButton>
            <Typography mt={1} textTransform={"capitalize"} fontWeight={"600"}>
              Recent Message
            </Typography>
          </Stack>

          {Array.from({ length: 5 }, (x) => {
            return (
              <MenuItem>
                <Box
                  sx={{
                    padding: "10px",
                    backgroundColor: "#fff",
                    margin: "5px",
                    borderRadius: "5px",
                    // boxShadow: "2px 2px 5px #eee,-2px -2px 5px #eee",
                  }}
                >
                  <Stack direction={"row"} spacing={2}>
                    <Box pt={1}>
                      <Avatar src="https://quomodothemes.website/html/dashra/img/chat-author1.png" />
                    </Box>
                    <Box>
                      <Typography
                        fontSize={16}
                        fontWeight={"bold"}
                        textTransform={"capitalize"}
                      >
                        Jhonny Room
                      </Typography>
                      <Typography fontSize={13} textTransform={"capitalize"}>
                        your account has been....
                      </Typography>
                    </Box>
                    <Stack>
                      <Typography>10:30PM</Typography>
                    </Stack>
                  </Stack>
                </Box>
              </MenuItem>
            );
          })}
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
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            paddingX={2}
          >
            <IconButton onClick={admin_notification}>
              <Settings />
            </IconButton>
            <Typography mt={1} textTransform={"capitalize"} fontWeight={"600"}>
              Recent Notification
            </Typography>
          </Stack>
          {Array.from({ length: 5 }, (x) => {
            return (
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
                <Stack direction={"row"} spacing={2}>
                  <Box pt={1}>
                    <Avatar
                      sx={{ backgroundColor: "#27AE60" }}
                      src="https://quomodothemes.website/html/dashra/img/notify-1.png"
                    />
                  </Box>
                  <Box>
                    <Typography fontSize={13} textTransform={"capitalize"}>
                      your account has been created successfully don
                    </Typography>
                    <Typography fontSize={12}>2 days ago</Typography>
                  </Box>
                </Stack>
              </Box>
            );
          })}
        </Menu>
      </Box>
    </>
  );
};

export default Headers;
