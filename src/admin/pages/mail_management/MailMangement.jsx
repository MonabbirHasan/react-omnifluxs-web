import React, { useEffect, useState } from "react";
import "./mail_managment.css";
import { Col, Container, Row } from "react-bootstrap";
import mailboximg from "../../../assets/img/mailbox_re_dvds.svg";
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { Circle, Inbox, Send, Snooze, Spa } from "@mui/icons-material";
import { MailInbox, MailSent, MailSnozed, MailSpam, MailCompose } from "./";
import { LazyLoadImage } from "react-lazy-load-image-component";
const MailMangement = () => {
  const [ShowMailState, setShowMailState] = useState("");
  useEffect(() => {}, []);
  return (
    <div className="mail_managment">
      <Container fluid>
        <div className="mail_managment_wrapper">
          <Row>
            {/****************************
             *MAIL SIDEBAR START HERE
             *****************************/}
            <Col sm={2} md={4} lg={3}>
              <div className="mail_managment_sidebar">
                <Button
                  onClick={() => {
                    setShowMailState("compose");
                  }}
                  sx={{
                    backgroundColor: "#F8C610",
                    color: "black",
                    "&:hover": { backgroundColor: "black" },
                    textTransform: "capitalize",
                  }}
                  fullWidth
                >
                  compose
                </Button>
                <List>
                  <ListItem>
                    <ListItemButton
                      onClick={() => {
                        setShowMailState("inbox");
                      }}
                    >
                      <Inbox htmlColor="#3fca89" />{" "}
                      <Typography>Inbox</Typography>
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton
                      onClick={() => {
                        setShowMailState("sent");
                      }}
                    >
                      <Send htmlColor="#2093f3" /> <Typography>Sent</Typography>
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton
                      onClick={() => {
                        setShowMailState("snozed");
                      }}
                    >
                      <Snooze color="error" /> <Typography>Snozed</Typography>
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton
                      onClick={() => {
                        setShowMailState("spam");
                      }}
                    >
                      <Spa htmlColor="#39cd3c" /> <Typography>Spam</Typography>
                    </ListItemButton>
                  </ListItem>
                  <Divider variant="" component={"p"}>
                    Labels
                  </Divider>
                  <ListItem>
                    <Circle htmlColor="orange" />
                    <Typography sx={{ fontSize: "12px" }}>
                      Extended Support
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Circle htmlColor="#2196f3" />
                    <Typography sx={{ fontSize: "12px" }}>Reviews</Typography>
                  </ListItem>
                  <ListItem>
                    <Circle htmlColor="green" />{" "}
                    <Typography sx={{ fontSize: "12px" }}>
                      Typical Solutions
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Circle htmlColor="yallow" />{" "}
                    <Typography sx={{ fontSize: "12px" }}>
                      Want WordPress
                    </Typography>
                  </ListItem>
                </List>
              </div>
            </Col>
            {/****************************
             *MAIL VIEW START HERE
             *****************************/}
            <Col sm={2} md={4} lg={8}>
              <div className="mail_managment_list">
                {ShowMailState === "inbox" ? (
                  <MailInbox />
                ) : ShowMailState === "sent" ? (
                  <MailSent />
                ) : ShowMailState === "snozed" ? (
                  <MailSnozed />
                ) : ShowMailState === "spam" ? (
                  <MailSpam />
                ) : ShowMailState === "compose" ? (
                  <MailCompose />
                ) : (
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      height: "100%",
                    }}
                  >
                    <LazyLoadImage
                      src={mailboximg}
                      style={{
                        width: "61%",
                        height: "auto",
                        borderRadius: "10px",
                      }}
                    />
                  </Box>
                )}
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default MailMangement;
