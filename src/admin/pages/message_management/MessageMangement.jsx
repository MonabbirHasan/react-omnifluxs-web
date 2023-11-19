import React from "react";
import "./message_managment.css";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import {
  Avatar,
  Badge,
  Box,
  Divider,
  IconButton,
  List,
  ListItemButton,
  Stack,
  Typography,
} from "@mui/material";
import { Attachment, Circle, Photo, Send } from "@mui/icons-material";
const MessageMangement = () => {
  return (
    <div className="message_managment">
      <Container fluid>
        <div className="message_managment_wrapper">
          <Row>
            <Col sm={12} md={3} lg={4}>
              <div className="message_managment_sidebar">
                <List>
                  {Array.from([1, 2, 3, 4, 5, 6, 7, 8], (x) => x + x).map(
                    (items) => (
                      <ListItemButton
                        sx={{ borderRadius: "5px", backgroundColor: "#fff" }}
                      >
                        <Box sx={{ display: "flex" }}>
                          <Box sx={{ verticalAlign: "middle" }}>
                            <Badge
                              overlap="circle"
                              badgeContent={
                                <Circle
                                  htmlColor="green"
                                  sx={{ width: "10px", mt: 5, ml: 3 }}
                                />
                              }
                            >
                              <Avatar
                                alt="Travis Howard"
                                src="https://cdn.dribbble.com/users/2921626/avatars/small/1df64bac5483ba902dfb9eb49a08f76a.jpg?1621258545"
                              />
                            </Badge>
                          </Box>
                          <Box sx={{ pl: 1 }}>
                            <Stack direction={"row"} spacing={15}>
                              <Typography
                                variant="p"
                                fontWeight={"600"}
                                fontSize={"14px"}
                              >
                                Jessica Moore
                              </Typography>
                              <Typography variant="p">20 minutes</Typography>
                            </Stack>
                            <Typography
                              sx={{
                                textTransform: "capitalize",
                                fontSize: "13px",
                              }}
                            >
                              Lorem ipsum dolor sit....
                            </Typography>
                          </Box>
                        </Box>
                      </ListItemButton>
                    )
                  )}
                </List>
              </div>
            </Col>
            <Col sm={12} md={3} lg={8}>
              <div className="message_managment_body">
                {/***************************
                 * MSG HEADER START HERE
                 ****************************/}
                <div className="msg_header">
                  <Stack direction={"row"}>
                    <Box sx={{ verticalAlign: "middle" }}>
                      <Badge
                        overlap="circle"
                        badgeContent={
                          <Circle
                            htmlColor="green"
                            sx={{ width: "10px", mt: 5, ml: 3 }}
                          />
                        }
                      >
                        <Avatar
                          alt="Travis Howard"
                          src="https://cdn.dribbble.com/users/2921626/avatars/small/1df64bac5483ba902dfb9eb49a08f76a.jpg?1621258545"
                        />
                      </Badge>
                    </Box>
                    <Box sx={{ pl: 1 }}>
                      <Typography fontSize={"14px"}>Jhonn</Typography>
                      <Typography>Last seen 7 days ago</Typography>
                    </Box>
                  </Stack>
                </div>
                {/***************************
                 * MSG BODY START HERE
                 ****************************/}
                <div className="msg_body">
                  <Divider>3 october</Divider>
                  {Array.from([1, 2, 3, 4, 5, 6, 7], (x) => x + x).map(
                    (itms) => (
                      <div className="msg">
                        <Stack direction={"row"} mb={2} className="msg_sender">
                          <Avatar>H</Avatar>
                          <Typography
                            variant="p"
                            sx={{
                              padding: 2,
                              backgroundColor: "#fff",
                              borderTopRightRadius: "10px",
                              borderBottomRightRadius: "10px",
                              borderBottomLeftRadius: "10px",
                              mt: 1,
                              ml: 1,
                              wordWrap: "break-word",
                              display: "block",
                            }}
                          >
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Distinctio delectus sit aspernatur tempora
                            dicta reprehenderit quibusdam consectetur,
                            repudiandae facilis praesentium.
                          </Typography>
                        </Stack>
                        <Stack direction={"row"} className="msg_receiver">
                          <Typography
                            variant="p"
                            sx={{
                              padding: 2,
                              backgroundColor: "#fff",
                              borderTopRightRadius: "10px",
                              borderBottomRightRadius: "10px",
                              borderBottomLeftRadius: "10px",
                              mt: 1,
                              ml: 1,
                              wordWrap: "break-word",
                              display: "block",
                            }}
                          >
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Distinctio delectus sit aspernatur tempora
                            dicta reprehenderit quibusdam consectetur,
                            repudiandae facilis praesentium.
                          </Typography>
                          <Avatar>R</Avatar>
                        </Stack>
                      </div>
                    )
                  )}
                </div>
                {/***************************
                 * MSG FOOTER START HERE
                 ****************************/}
                <div className="msg_footer">
                  <InputGroup>
                    <InputGroup.Text>
                      <IconButton>
                        <Photo htmlColor="skyblue" />
                      </IconButton>
                      <IconButton>
                        <Attachment htmlColor="skyblue" />
                      </IconButton>
                    </InputGroup.Text>
                    <Form.Control aria-labelledby="welcome" />
                    <InputGroup.Text>
                      <IconButton>
                        <Send htmlColor="green" />
                      </IconButton>
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

export default MessageMangement;
