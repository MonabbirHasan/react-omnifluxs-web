import React, { useState, useEffect, Fragment } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./chats.css";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import EmojiPicker, { Emoji } from "emoji-picker-react";
import { Container, Form, InputGroup, Modal } from "react-bootstrap";
import {
  Avatar,
  Badge,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
} from "@mui/material";
import {
  ArchiveOutlined,
  ArrowCircleLeft,
  AttachFileOutlined,
  Delete,
  DeleteOutline,
  EmojiEmotions,
  LinkOffOutlined,
  ListAlt,
  Mail,
  MarkAsUnreadOutlined,
  MarkUnreadChatAlt,
  MoreHoriz,
  Photo,
  Send,
  StarBorder,
  StarOutlineOutlined,
} from "@mui/icons-material";
import DashboardHeader from "../../HeaderFooter/DashboardHeader";
import DashbaordFooter from "../../HeaderFooter/DashboardFooter";
import { useNavigate } from "react-router-dom";
const Chats = () => {
  const navigate=useNavigate();
  const [localTime, setLocalTime] = useState("");
  const [ShowChatThreadModal, setShowChatThreadModal] = useState(false);
  const handleCloseChatThreadModal = () => setShowChatThreadModal(false);
  const handleShowChatThreadModal = () => setShowChatThreadModal(true);
  /**************************************************************
   * SHOW LOCAL DATE AND TIME BASED ON THE COUNTRY
   *************************************************************/
  useEffect(() => {
    const updateLocalTime = () => {
      const now = new Date();
      const options = {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      const formattedTime = now.toLocaleString("en-US", options);
      setLocalTime(`Local time: ${formattedTime}`);
    };
    // Update time initially
    updateLocalTime();
    // Update time every minute
    const intervalId = setInterval(updateLocalTime, 60000);
    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  /******************************************
   * CHATE SETTING MENU CONTROL HERE
   ******************************************/
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const styles = {
    ChateMoreMenuStyle: {
      textTransform: "capitalize",
      fontSize: "14px",
      color: "#919191",
      pl: 1,
    },
  };
  return (
    <>
      <DashboardHeader />
      <div className="chats_page">
        <Container>
          <div className="chat_wrapper">
            <Typography>
              <Button variant="outlined" onClick={()=>navigate("/seller_dashboard/user/monabbirhasan")}>
                <ArrowCircleLeft /> Back
              </Button>
            </Typography>
            <div className="row m-0 ">
              <div className="col-md-12">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <Row style={{ justifyContent: "center" }}>
                    {/*******************************************************************
                     * MESSAGE LIST START HERE
                     *******************************************************************/}
                    <Col sm={3} className="chat_left_sidebar">
                      <Typography
                        p={2}
                        textTransform={"capitalize"}
                        fontSize={16}
                        fontWeight={"500"}
                        color={"#929191"}
                      >
                        Mamber List
                      </Typography>
                      <Nav variant="pills" className="flex-column p-0">
                        {Array.from(
                          [1, 2, 3, 4, 5, 6, 7, 8, 9],
                          (x) => x + x
                        ).map((item) => {
                          const lastDigit = item % 10;
                          const suffix =
                            lastDigit === 1
                              ? "st"
                              : lastDigit === 2
                              ? "nd"
                              : lastDigit === 3
                              ? "rd"
                              : "th";
                          return (
                            <Nav.Item className="p-0 m-0">
                              <Nav.Link
                                eventKey={item + suffix}
                                className="p-3 m-1"
                              >
                                <Stack
                                  direction={"row"}
                                  width={"100%"}
                                  justifyContent={"space-between"}
                                >
                                  <Box
                                    display={"flex"}
                                    sx={{ verticalAlign: "middle" }}
                                  >
                                    <Badge
                                      overlap=""
                                      anchorOrigin={{
                                        vertical: "bottom",
                                        horizontal: "right",
                                      }}
                                      badgeContent={
                                        <Typography
                                          style={{
                                            width: "10px",
                                            height: "10px",
                                            backgroundColor: "green",
                                            borderRadius: "100%",
                                            border: "3px solid #fff",
                                            marginTop: "40px",
                                            marginLeft: "25px",
                                          }}
                                        />
                                      }
                                    >
                                      <Avatar
                                        alt="Travis Howard"
                                        src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/c9470209515d41345b20bed19aa933c6-1604079871607/b64e6d7c-5308-47d1-b125-6c4ee72455d4.jpg"
                                      />
                                    </Badge>

                                    <Typography
                                      pl={2}
                                      textTransform={"capitalize"}
                                      color={"#444"}
                                      mt={1}
                                    >
                                      <span style={{ fontSize: "14px" }}>
                                        Jhonny
                                      </span>
                                      <p
                                        style={{
                                          fontSize: "10px",
                                          margin: "0",
                                          paddng: "0",
                                          color: "#919191",
                                        }}
                                      >
                                        seller
                                      </p>
                                    </Typography>
                                  </Box>
                                  <Box>
                                    <Typography fontSize={14} color={"#444"}>
                                      1 month
                                    </Typography>
                                    <Typography fontSize={14} color={"#444"}>
                                      <span>
                                        <Mail style={{ fontSize: "20px" }} />
                                      </span>
                                      <span style={{ marginLeft: "12px" }}>
                                        <StarOutlineOutlined
                                          style={{ fontSize: "20px" }}
                                        />
                                      </span>
                                    </Typography>
                                  </Box>
                                </Stack>
                              </Nav.Link>
                            </Nav.Item>
                          );
                        })}
                      </Nav>
                    </Col>
                    {/*******************************************************************
                     * MESSAGE CHATE TABE PANEL START HERE
                     *******************************************************************/}
                    <Col sm={6} className="chat_right_panel">
                      {Array.from(
                        [1, 2, 3, 4, 5, 6, 7, 8, 10],
                        (x) => x + x
                      ).map((item) => {
                        const lastDigit = item % 10;
                        const suffix =
                          lastDigit === 1
                            ? "st"
                            : lastDigit === 2
                            ? "nd"
                            : lastDigit === 3
                            ? "rd"
                            : "th";
                        const numberOf = item + suffix;
                        return (
                          <Tab.Content>
                            {/************************
                             * TAB PANEL START HERE
                             *************************/}
                            <Tab.Pane eventKey={numberOf}>
                              <div className="chats_box">
                                <div
                                  id="channel_header"
                                  className="chats_header"
                                >
                                  <Stack
                                    width={"100%"}
                                    direction={"row"}
                                    justifyContent={"space-between"}
                                  >
                                    {/*CHAT HEADER PERSON INFO START HERE*/}
                                    <Box>
                                      <Typography
                                        variant="p"
                                        fontSize={18}
                                        sx={{
                                          textDecoration: "underline",
                                          fontSize: "20px",
                                          color: "#444",
                                          textTransform: "capitalize",
                                        }}
                                      >
                                        {item + suffix}
                                      </Typography>
                                      <Typography
                                        sx={{
                                          fontSize: "14px",
                                          color: "#919191",
                                          textTransform: "capitalize",
                                          py: 1,
                                        }}
                                      >
                                        {localTime}
                                      </Typography>
                                    </Box>
                                    {/*CHAT HEADER MORE MENU START HERE*/}
                                    <Box>
                                      <IconButton>
                                        <StarBorder sx={{ color: "orange" }} />
                                      </IconButton>
                                      <IconButton
                                        aria-label="more"
                                        id="long-button"
                                        aria-controls={
                                          open ? "long-menu" : undefined
                                        }
                                        aria-expanded={
                                          open ? "true" : undefined
                                        }
                                        aria-haspopup="true"
                                        onClick={handleClick}
                                      >
                                        <MoreHoriz />
                                      </IconButton>

                                      <Menu
                                        elevation={1}
                                        id="long-menu"
                                        MenuListProps={{
                                          "aria-labelledby": "long-button",
                                        }}
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                      >
                                        <MenuItem onClick={handleClose}>
                                          <MarkAsUnreadOutlined />
                                          <Typography
                                            style={styles.ChateMoreMenuStyle}
                                          >
                                            Mark as unread
                                          </Typography>
                                        </MenuItem>
                                        <MenuItem onClick={handleClose}>
                                          <ArchiveOutlined />
                                          <Typography
                                            style={styles.ChateMoreMenuStyle}
                                          >
                                            More to archive
                                          </Typography>
                                        </MenuItem>
                                        <MenuItem onClick={handleClose}>
                                          <DeleteOutline />
                                          <Typography
                                            style={styles.ChateMoreMenuStyle}
                                          >
                                            Delete
                                          </Typography>
                                        </MenuItem>
                                      </Menu>
                                    </Box>
                                    {/*CHAT HEADER MORE MENU END HERE*/}
                                  </Stack>
                                </div>
                                <div id="MessageList" className="chats_body">
                                  <List>
                                    {Array.from(
                                      [1, 2, 3, 4, 5, 6, 7],
                                      (x) => x + x
                                    ).map((items) => (
                                      <>
                                        {/*sender*/}
                                        <ListItem
                                          className="sender"
                                          alignItems="flex-start"
                                        >
                                          <ListItemAvatar>
                                            <Avatar
                                              alt="Remy Sharp"
                                              src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/5db218e7f7e89bd700bd8247059d2302-1596107417433/be898f31-5f29-49a4-afe4-3ff29fe37442.jpg"
                                            />
                                          </ListItemAvatar>
                                          <ListItemText
                                            primary={
                                              <>
                                                <Typography
                                                  variant="span"
                                                  style={{ fontSize: "14px" }}
                                                >
                                                  anafcampos
                                                </Typography>
                                                <Typography
                                                  variant="span"
                                                  style={{
                                                    fontSize: "12px",
                                                    color: "#919191",
                                                    paddingLeft: "10px",
                                                  }}
                                                >
                                                  {localTime}
                                                </Typography>
                                              </>
                                            }
                                            secondary={
                                              <>
                                                <Typography
                                                  fontSize={"14px"}
                                                  py={1}
                                                >
                                                  — I'll be in your neighborhood
                                                  doing errands thi
                                                </Typography>
                                              </>
                                            }
                                          />
                                        </ListItem>
                                        {/*receiver*/}
                                        <ListItem
                                          className="receiver"
                                          alignItems="flex-start"
                                        >
                                          <ListItemText
                                            style={{
                                              textAlign: "right",
                                              paddingRight: "15px",
                                            }}
                                            primary={
                                              <>
                                                <Typography
                                                  variant="span"
                                                  style={{
                                                    fontSize: "12px",
                                                    color: "#919191",
                                                    paddingRight: "10px",
                                                  }}
                                                >
                                                  {localTime}
                                                </Typography>
                                                <Typography
                                                  variant="span"
                                                  style={{ fontSize: "14px" }}
                                                >
                                                  anafcampos
                                                </Typography>
                                              </>
                                            }
                                            secondary={
                                              <>
                                                <Typography
                                                  fontSize={"14px"}
                                                  py={1}
                                                >
                                                  — I'll be in your neighborhood
                                                  doing errands thi
                                                </Typography>
                                              </>
                                            }
                                          />
                                          <ListItemAvatar>
                                            <Avatar
                                              alt="Remy Sharp"
                                              src="/static/images/avatar/1.jpg"
                                            />
                                          </ListItemAvatar>
                                        </ListItem>
                                      </>
                                    ))}
                                  </List>
                                </div>
                                <div id="MessageInput" className="chats_footer">
                                  <InputGroup className="mb-3">
                                    <Form.Control
                                      placeholder="Send Message..."
                                      aria-label="Send Message..."
                                      aria-describedby="basic-addon1"
                                    />
                                    <InputGroup.Text id="basic-addon1">
                                      <IconButton>
                                        <Send />
                                      </IconButton>
                                    </InputGroup.Text>
                                  </InputGroup>
                                  <Stack className="Thread" direction={""}>
                                    <IconButton
                                      onClick={handleShowChatThreadModal}
                                    >
                                      <EmojiEmotions />
                                    </IconButton>
                                    <IconButton>
                                      <AttachFileOutlined />
                                    </IconButton>
                                  </Stack>
                                </div>
                              </div>
                            </Tab.Pane>
                            {/************************
                             * TAB PANEL END HERE
                             *************************/}
                          </Tab.Content>
                        );
                      })}
                    </Col>
                  </Row>
                </Tab.Container>
              </div>
            </div>
          </div>
        </Container>
        {/*CHAT THREAD*/}
        <Modal
          style={{
            transform: "translate(40vw,0%)",
            width: "370px",
          }}
          size="md"
          centered
          show={ShowChatThreadModal}
          onHide={handleCloseChatThreadModal}
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <EmojiPicker width={"100%"} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="contained" onClick={handleCloseChatThreadModal}>
              insert
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <DashbaordFooter />
    </>
  );
};
export default Chats;
