import React from "react";
import "./admin_chat.css";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import {
  AttachFile,
  Call,
  Photo,
  Search,
  Send,
  StarBorderOutlined,
  VideoCall,
} from "@mui/icons-material";
const AdminChats = () => {
  return (
    <div className="admin_chat">
      <Container fluid>
        <div className="admin_chat_wrapper">
          <Row>
            <Col sm={12} md={2} lg={3}>
              <div className="chat_lists">
                <Stack sx={{ p: 1, pb: 4 }} direction={"row"} spacing={2}>
                  <Avatar src="https://cdn.pixabay.com/photo/2023/03/24/14/23/ai-generated-7874140_1280.jpg" />
                  <Typography pt={1} variant="p" fontSize={20} color={"#232"}>
                    Shikha gupta
                  </Typography>
                </Stack>
                <InputGroup>
                  <InputGroup.Text style={{ width: "100%" }}>
                    <Form.Control />
                    <IconButton sx={{ ml: 2 }}>
                      <Search />
                    </IconButton>
                  </InputGroup.Text>
                </InputGroup>
                {/* chat list start here */}
                {Array.from([1, 2, 3, 4, 5, 6], (x) => x + x).flatMap(
                  (items) => (
                    <MenuItem
                      sx={{
                        display: "inherit",
                        marginTop: "16px",
                        backgroundColor: "#fff",
                      }}
                    >
                      <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        width={"100%"}
                        padding={1}
                      >
                        <Box display={"flex"}>
                          <Avatar
                            sx={{ mt: 1, mr: 2, mb: 0, bgcolor: "purple" }}
                          >
                            H
                          </Avatar>
                          <Typography
                            style={{ margin: 0, marginTop: "5px" }}
                            fontSize={"10px"}
                          >
                            <strong>
                              Sonam gupta <br />
                            </strong>
                            <p style={{ margin: "0", padding: "0" }}>
                              Lorem ipsum dolor sit amet.
                            </p>
                            <i style={{ margin: "0", padding: "0" }}>
                              typing..
                            </i>
                          </Typography>
                        </Box>
                        <Typography style={{ margin: 0, fontSize: "10px" }}>
                          10min
                        </Typography>
                      </Stack>
                    </MenuItem>
                  )
                )}
              </div>
            </Col>
            <Col sm={12} md={9} lg={9}>
              <div className="chat_board">
                {/**********************************
                 * CHATE HEADER START HERE
                 ***********************************/}
                <div className="chate_header">
                  <Stack
                    direction={"row"}
                    width={"100%"}
                    justifyContent={"space-between"}
                  >
                    <Box sx={{ display: "flex" }}>
                      <Avatar
                        src="https://cdn.pixabay.com/photo/2023/03/24/14/23/ai-generated-7874140_1280.jpg"
                        sx={{ width: 50, height: 50 }}
                      />
                      <Typography pl={1}>
                        <p
                          style={{
                            margin: "0",
                            padding: "0",
                            fontWeight: "600",
                            color: "#444",
                            fontSize: "18px",
                            textTransform: "capitalize",
                          }}
                        >
                          Jone doe
                        </p>
                        <p
                          style={{
                            margin: "0",
                            padding: "0",
                            fontSize: "12px",
                            color: "green",
                            textTransform: "capitalize",
                          }}
                        >
                          active now
                        </p>
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "inline-block",
                      }}
                    >
                      <IconButton
                        sx={{ backgroundColor: "#fff", margin: "3px" }}
                      >
                        <StarBorderOutlined htmlColor="green" />
                      </IconButton>
                      <IconButton
                        sx={{ backgroundColor: "#fff", margin: "3px" }}
                      >
                        <VideoCall htmlColor="green" />
                      </IconButton>
                      <IconButton
                        sx={{ backgroundColor: "#fff", margin: "3px" }}
                      >
                        <Call htmlColor="green" />
                      </IconButton>
                    </Box>
                  </Stack>
                </div>
                {/**********************************
                 * CHATE BODY START HERE
                 ***********************************/}
                <div className="chate_body">
                  {Array.from([1, 2, 3, 4, 5, 6, 7, 8], (x) => x + x).map(
                    (items) => (
                      <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        spacing={10}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            textAlign: "left",
                            padding: "10px",
                          }}
                        >
                          <Avatar sx={{ backgroundColor: "purple" }}>H</Avatar>
                          <Typography ml={1} mt={1}>
                            <p>Me Oct 03, 2023, 9:06 PM</p>
                            <p
                              style={{
                                margin: "0",
                                backgroundColor: "#eef",
                                padding: "10px",
                                borderBottomLeftRadius: "10px",
                                borderBottomRightRadius: "10px",
                                borderTopRightRadius: "10px",
                                maxWidth: "300px",
                              }}
                            >
                              Hello! Hope you're doing well. I couldn't help but
                              wonder how your exciting financial project is
                              coming along? 🚀💰 If you have any updates or if
                              there's anything specific you'd like to discuss,
                              feel free to share. I'm here to help you achieve
                              your goals! Thanks;
                            </p>
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            textAlign: "right",
                            padding: "10px",
                          }}
                        >
                          <Typography mr={1} mt={1}>
                            <p>Me Oct 03, 2023, 9:06 PM</p>
                            <p
                              style={{
                                margin: "0",
                                backgroundColor: "#eef",
                                padding: "10px",
                                borderBottomLeftRadius: "10px",
                                borderBottomRightRadius: "10px",
                                borderTopRightRadius: "10px",
                                maxWidth: "300px",
                              }}
                            >
                              Hello! Hope you're doing well. I couldn't help but
                              wonder how your exciting financial project is
                              coming along?
                            </p>
                          </Typography>
                          <Avatar
                            src="https://cdn.pixabay.com/photo/2023/03/24/14/23/ai-generated-7874140_1280.jpg"
                            sx={{ margin: "" }}
                          />
                        </Box>
                      </Stack>
                    )
                  )}
                </div>
                {/**********************************
                 * CHATE FOOTER START HERE
                 ***********************************/}
                <div className="chate_footer">
                  <InputGroup>
                    <InputGroup.Text
                      style={{
                        width: "100%",
                        border: "none",
                        border: "2px solid #fff",
                        backgroundColor: "transparent",
                        boxShadow: "-2px -2px 5px #eee,2px 2px 5px #eee",
                      }}
                    >
                      <Box mr={1}>
                        <IconButton>
                          <AttachFile />
                        </IconButton>
                        <IconButton>
                          <Photo />
                        </IconButton>
                      </Box>
                      <Form.Control />
                      <Button
                        sx={{ ml: 1 }}
                        variant="outlined"
                        startIcon={<Send />}
                      />
                    </InputGroup.Text>
                  </InputGroup>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default AdminChats;
