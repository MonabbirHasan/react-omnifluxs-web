import React, { useState } from "react";
import {
  AccountBox,
  Apps,
  Balance,
  BalanceSharp,
  Close,
  DashboardOutlined,
  Drafts,
  Email,
  Help,
  Inbox,
  InboxOutlined,
  Language,
  LeakAddRounded,
  Logout,
  Message,
  Money,
  MoneyOutlined,
  Notifications,
  NotificationsOutlined,
  Settings,
  SupportAgent,
  VolumeUp,
  WalletOutlined,
  WalletRounded,
} from "@mui/icons-material";
import { Avatar, Badge, IconButton, Typography } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ListItemButton from "@mui/material/ListItemButton";
import client1 from "../../../assets/img/client1.jpg";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Button as MuiButton } from "@mui/material";
import { Button, ListGroup } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import Navbar from "react-bootstrap/Navbar";
import Divider from "@mui/material/Divider";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Stack from "@mui/material/Stack";
import Nav from "react-bootstrap/Nav";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
function DashboardHeader(props) {
  let [user_notification_option, setUser_notification_option] = useState(false);
  let [user_profile_option, setUsert_profile_option] = useState(false);
  let [user_message_option, setUser_message] = useState(false);
  let [page_name, setPageName] = useState(false);
  let navigate = useNavigate();
  /**********************************************
   * LANGUAGE MODAL OPEN STATE HERE
   **********************************************/
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  /**********************************************
   * SIDEBAR OPEN FUNCTION START HERE
   **********************************************/
  const handleItemClick = () => {
    props.openSidebars();
  };
  /***********************************************************
   * USER ALERT OF THE ADMIN SITE FUNCTION START HERE
   ************************************************************/
  const profile_options = (user_name) => {
    setUser_notification_option(false);
    user_profile_option == false
      ? setUsert_profile_option(true)
      : setUsert_profile_option(false);
  };

  const notification_option = () => {
    setUsert_profile_option(false);

    user_notification_option == false
      ? setUser_notification_option(true)
      : setUser_notification_option(false);
  };
  const [ShowChateMessageOptionModal, setShowChateMessageOptionModal] =
    useState(false);
  const handleCloseChateMessageOptionModal = () =>
    setShowChateMessageOptionModal(false);
  const handleShowChateMessageOptionModal = () =>
    setShowChateMessageOptionModal(true);
  /*************************************************************************
   * USER NOTIFICATION OPTION MODAL CONTROL STATE
   ****************************************************/
  const [ShowNotificationOptionModal, setShowNotificationOptionModal] =
    useState(false);
  const handleCloseNotificationOptionModal = () =>
    setShowNotificationOptionModal(false);
  const handleShowNotificationOptionModal = () =>
    setShowNotificationOptionModal(true);
  /***********************************************************
   * PLATFORM OPTION MODAL CONTROL STATE
   ************************************************************/
  const [ShowPlatformOptionModal, setShowPlatformOptionModal] = useState(false);
  const handleClosePlatformOptionModal = () =>
    setShowPlatformOptionModal(false);
  const handleShowPlatformOptionModal = () => setShowPlatformOptionModal(true);

  let userProfile_image_dimantion = 40;
  let message_data = [
    {
      id: "1",
      name: "Jhonny",
      date: "2 jan 2023",
      avater: client1,
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, quaerat.",
    },
    {
      id: "2",
      name: "Jhon Doe",
      date: "17 jan 2023",
      avater: client1,
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, quaerat.",
    },
    {
      id: "3",
      name: "Ibarson",
      date: "23 jan 2023",
      avater: client1,
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, quaerat.",
    },
    {
      id: "4",
      name: "Open Haimar",
      date: "8 jan 2023",
      avater: client1,
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, quaerat.",
    },
    {
      id: "5",
      name: "ainstain",
      date: "4 jan 2023",
      avater: client1,
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, quaerat.",
    },
    {
      id: "6",
      name: "ainstain",
      date: "4 jan 2023",
      avater: client1,
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, quaerat.",
    },
  ];
  return (
    <div className="saller_dashboard_header">
      <Navbar expand="lg" className="bg-body-tertiary shadow" sticky="top">
        <Container fluid>
          <Navbar.Brand href="#">
            <IconButton onClick={handleItemClick}>
              <Apps />
            </IconButton>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            {/*****************************************
             * USER MESSAGE OPTION AREA START HERE
             *****************************************/}
            <Form className="d-flex top_right_icons">
              <div className="user_message_option mt-2">
                <IconButton
                  onClick={() => {
                    handleShowChateMessageOptionModal();
                    handleCloseNotificationOptionModal();
                  }}
                >
                  <Message htmlColor="#919191" />
                  {/* <Badge color="info" badgeContent={6} max={10} showZero>
                    <Message htmlColor="#39CD3C" />
                  </Badge> */}
                </IconButton>
              </div>
              {/*****************************************
               * USER NOTIFICATIONS OPTION AREA START HERE
               *****************************************/}
              <div className="user_notification_options mt-2">
                <IconButton
                  onClick={() => {
                    handleShowNotificationOptionModal();
                    handleCloseChateMessageOptionModal();
                  }}
                >
                  <Notifications htmlColor="#919191" />
                  {/* <Badge color="info" badgeContent={'7'} max={10}>
                    <Notifications htmlColor="#39CD3C" />
                  </Badge> */}
                </IconButton>
              </div>
              {/*****************************************
               * PLATFORM OPTION AREA START HERE
               *****************************************/}
              <div className="user_notification_options mt-2">
                <IconButton onClick={handleShowPlatformOptionModal}>
                  <Help htmlColor="#919191" />
                </IconButton>
              </div>
              {/*****************************************
               * USER PROFILE OPTION AREA START HERE
               *****************************************/}
              <div className="user_profile_options">
                <IconButton onClick={profile_options}>
                  <Avatar
                    style={{
                      width: userProfile_image_dimantion + "px",
                      height: userProfile_image_dimantion + "px",
                      border: "3px solid #39CD3C",
                    }}
                    src={client1}
                  />
                </IconButton>
                {user_profile_option == true ? (
                  <Box
                    sx={{
                      width: "250px",
                      height: "auto",
                      background: "#eee",
                      backdropFilter: "blur(3px)",
                      borderRadius: "10px",
                      border: "2px solid #fff",
                      position: "absolute",
                      left: "80%",
                      color: "#1DBF73",
                      zIndex: "1000",
                      padding: "10px",
                    }}
                  >
                    <IconButton
                      color="error"
                      onClick={() => setUsert_profile_option(false)}
                    >
                      <Close />
                    </IconButton>
                    <Stack direction={"row"} gap={3} mt={2} pl={1}>
                      <Avatar src="https://cdn-assets.zeusx.com/img/v2/user-default-avatar.jpeg" />
                      <Typography
                        color={"black"}
                        fontSize={14}
                        fontWeight={600}
                      >
                        Hasan234
                        <p style={{ fontSize: "13px", color: "#39CD3C" }}>
                          {" "}
                          Balance ($323)
                        </p>
                      </Typography>
                    </Stack>
                    <MuiButton
                      onClick={() => navigate("/")}
                      fullWidth
                      sx={{
                        textTransform: "capitalize",
                        textAlign: "center",
                        color: "#444",
                        borderColor: "#444",
                      }}
                      variant="outlined"
                    >
                      Switch to Buying
                    </MuiButton>
                    <List>
                      <ListItem disablePadding>
                        <ListItemButton
                          onClick={() =>
                            navigate("/seller_dashboard/", { replace: true })
                          }
                        >
                          <ListItemIcon>
                            <DashboardOutlined />
                          </ListItemIcon>
                          <ListItemText
                            style={{ color: "#444" }}
                            primary="Dashboard"
                          />
                        </ListItemButton>
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemButton
                          onClick={() => {
                            navigate("/seller_dashboard/user/monabbirhasan", {
                              replace: true,
                            });
                            page_name === false
                              ? setPageName(true)
                              : setPageName(false);
                          }}
                        >
                          <ListItemIcon>
                            <AccountBox />
                          </ListItemIcon>
                          <ListItemText
                            style={{ color: "#444" }}
                            primary="Account"
                          />
                        </ListItemButton>
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemButton
                          onClick={() =>
                            navigate("/seller_dashboard/user_referr", {
                              replace: true,
                            })
                          }
                        >
                          <ListItemIcon>
                            <LeakAddRounded />
                          </ListItemIcon>
                          <ListItemText
                            style={{ color: "#444" }}
                            primary="Refer a Friend"
                          />
                        </ListItemButton>
                      </ListItem>
                      <Divider variant="middle" component="li" />
                      <ListItem disablePadding>
                        <ListItemButton
                          onClick={() => navigate("/seller_dashboard/payout")}
                        >
                          <ListItemIcon>
                            <Money />
                          </ListItemIcon>
                          <ListItemText
                            style={{ color: "#444" }}
                            primary="Payout Option"
                          />
                        </ListItemButton>
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemButton
                          onClick={() =>
                            navigate(
                              "/user/" + "monabbirhasan" + "/account/settings",
                              { replace: true }
                            )
                          }
                        >
                          <ListItemIcon>
                            <Settings />
                          </ListItemIcon>
                          <ListItemText
                            style={{ color: "#444" }}
                            primary="Settings"
                          />
                        </ListItemButton>
                      </ListItem>
                      <Divider variant="middle" component="li" />
                      <ListItem disablePadding>
                        <ListItemButton onClick={handleShow}>
                          <ListItemIcon>
                            <Language />
                          </ListItemIcon>
                          <ListItemText
                            style={{ color: "#444" }}
                            primary="Language"
                          />
                        </ListItemButton>
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <SupportAgent />
                          </ListItemIcon>
                          <ListItemText
                            style={{ color: "#444" }}
                            primary="Help & Support"
                          />
                        </ListItemButton>
                      </ListItem>
                      <Divider variant="middle" component="li" />
                      <ListItem disablePadding>
                        <ListItemButton
                          onClick={() => navigate("/user_logout")}
                        >
                          <ListItemIcon>
                            <Logout />
                          </ListItemIcon>
                          <ListItemText
                            style={{ color: "#444" }}
                            primary="Logout"
                          />
                        </ListItemButton>
                      </ListItem>
                    </List>
                  </Box>
                ) : (
                  ""
                )}
              </div>
              {/*****************************************
               * USER PROFILE OPTION AREA END HERE
               ****************************************/}
            </Form>
            {/************************************
             * ALL MODALS FOR HEADER START HERE
             ************************************/}
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Choose a Language</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <LazyLoadImage src="https://flagcdn.com/16x12/bd.png" />
                      </ListItemIcon>
                      <ListItemText primary="Bangla" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <LazyLoadImage src="https://flagcdn.com/16x12/in.png" />
                      </ListItemIcon>
                      <ListItemText primary="India" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <LazyLoadImage src="https://flagcdn.com/16x12/pk.png" />
                      </ListItemIcon>
                      <ListItemText primary="Pakistan" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <LazyLoadImage src="https://flagcdn.com/16x12/us.png" />
                      </ListItemIcon>
                      <ListItemText primary="United States" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <LazyLoadImage src="https://flagcdn.com/16x12/ar.png" />
                      </ListItemIcon>
                      <ListItemText primary="Arabic" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save
                </Button>
              </Modal.Footer>
            </Modal>
            {/************************************
             * ALL MODALS FOR HEADER END HERE
             ************************************/}
            <Modal
              size="sm"
              show={ShowChateMessageOptionModal}
              onHide={handleCloseChateMessageOptionModal}
              style={{
                transform: "translate(30%, 0%)",
              }}
            >
              <Modal.Header closeButton>
                <Modal.Title>
                  <Typography>
                    <InboxOutlined /> Inbox (0)
                  </Typography>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body
                className="style_modal_scroll"
                style={{
                  overflowY: "scroll",
                  height: "300px",
                  width: "auto",
                }}
              >
                <List sx={{ marginTop: "25px" }}>
                  {message_data.slice(0, 10).map((items) => {
                    return (
                      <>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemIcon>
                              <Stack>
                                <Avatar src={client1} />
                                <Typography
                                  variant="p"
                                  fontSize={10}
                                  fontFamily={"cursive"}
                                  textTransform={"capitalize"}
                                  component="p"
                                  maxWidth={50}
                                >
                                  {items.name}
                                </Typography>
                              </Stack>
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <>
                                  <Typography
                                    maxWidth={200}
                                    color={"black"}
                                    variant="p"
                                    fontSize={10}
                                    fontFamily={"cursive"}
                                    textTransform={"capitalize"}
                                    component="p"
                                  >
                                    {items.message}
                                  </Typography>
                                  <Typography
                                    variant="p"
                                    fontSize={10}
                                    fontFamily={"cursive"}
                                    marginTop={1}
                                    textTransform={"capitalize"}
                                    component="p"
                                  >
                                    {items.date}
                                  </Typography>
                                </>
                              }
                            />
                          </ListItemButton>
                        </ListItem>
                      </>
                    );
                  })}
                </List>
              </Modal.Body>
              <Modal.Footer>
                <Stack
                  width={"100%"}
                  direction={"row"}
                  justifyContent={"space-between"}
                >
                  <Typography>
                    <IconButton>
                      <VolumeUp sx={{ fontSize: "1.3rem" }} />
                    </IconButton>
                    <IconButton>
                      <Settings sx={{ fontSize: "1.3rem" }} />
                    </IconButton>
                  </Typography>
                  <Typography
                    onClick={() => navigate("/seller_dashboard/chat")}
                    sx={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      color: "green",
                      textTransform: "capitalize",
                      fontSize: "14px",
                      mt: 1,
                    }}
                  >
                    See All in Inbox
                  </Typography>
                </Stack>
              </Modal.Footer>
            </Modal>
            {/*notification option modal here*/}
            <Modal
              size="sm"
              show={ShowNotificationOptionModal}
              onHide={handleCloseNotificationOptionModal}
              style={{
                transform: "translate(30%, 0%)",
              }}
            >
              <Modal.Header closeButton>
                <Modal.Title>
                  <Typography>
                    <NotificationsOutlined /> Notifications (0)
                  </Typography>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body
                className="style_modal_scroll"
                style={{
                  overflowY: "scroll",
                  height: "300px",
                  width: "auto",
                }}
              >
                <List sx={{ marginTop: "25px" }}>
                  {message_data.slice(0, 10).map((items) => {
                    return (
                      <>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemIcon>
                              <Stack>
                                <Avatar src={client1} />
                                <Typography
                                  variant="p"
                                  fontSize={10}
                                  fontFamily={"cursive"}
                                  textTransform={"capitalize"}
                                  component="p"
                                  maxWidth={50}
                                >
                                  {items.name}
                                </Typography>
                              </Stack>
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <>
                                  <Typography
                                    maxWidth={200}
                                    color={"black"}
                                    variant="p"
                                    fontSize={10}
                                    fontFamily={"cursive"}
                                    textTransform={"capitalize"}
                                    component="p"
                                  >
                                    {items.message}
                                  </Typography>
                                  <Typography
                                    variant="p"
                                    fontSize={10}
                                    fontFamily={"cursive"}
                                    marginTop={1}
                                    textTransform={"capitalize"}
                                    component="p"
                                  >
                                    {items.date}
                                  </Typography>
                                </>
                              }
                            />
                          </ListItemButton>
                        </ListItem>
                      </>
                    );
                  })}
                </List>
              </Modal.Body>
              <Modal.Footer>
                <Stack
                  width={"100%"}
                  direction={"row"}
                  justifyContent={"space-between"}
                >
                  <Typography>
                    <IconButton>
                      <VolumeUp sx={{ fontSize: "1.3rem" }} />
                    </IconButton>
                    <IconButton>
                      <Settings sx={{ fontSize: "1.3rem" }} />
                    </IconButton>
                  </Typography>
                  <Typography
                    sx={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      color: "green",
                      textTransform: "capitalize",
                      fontSize: "14px",
                      mt: 1,
                    }}
                  ></Typography>
                </Stack>
              </Modal.Footer>
            </Modal>
            {/*Platform option modal here*/}
            <Modal
              size="sm"
              style={{
                transform: "translate(82vw,50px)",
                width: "auto",
              }}
              show={ShowPlatformOptionModal}
              onHide={handleClosePlatformOptionModal}
            >
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body>
                <ListItemButton>Help Center</ListItemButton>
                <ListItemButton>OmniFluxs Forum</ListItemButton>
                <ListItemButton>OmniFluxs Blog</ListItemButton>
                <Divider />
                <ListItemButton>Ask the Community</ListItemButton>
                <ListItemButton>Contact Support</ListItemButton>
              </Modal.Body>
            </Modal>
            {/**********************
             * ALL MODAL END HERE
             * *********************/}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default DashboardHeader;
