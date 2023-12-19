import {
  EmojiEvents,
  LockOpen,
  PersonAdd,
  ShoppingBasket,
  UploadSharp,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Notification = () => {
  return (
    <div style={{ padding: "40px 0" }}>
      <Container>
        <Typography fontSize={"3rem"} pb={1}>
          Notifications settings
        </Typography>
        <Card
          elevation={1}
          sx={{
            p: 2,
            backgroundColor: "#fff",
            my: 1,
          }}
        >
          <Row>
            <Col lg={11}>
              <Stack direction={"row"} spacing={2}>
                <Avatar sx={{ backgroundColor: "green" }}>
                  <LockOpen />
                </Avatar>
                <Box>
                  <Typography fontWeight={"bold"} fontSize={"1.2rem"}>
                    All Notifcation update off
                  </Typography>
                  <Typography>
                    Unlockable content, only revealed by the owner of the item.
                  </Typography>
                </Box>
              </Stack>
            </Col>
            <Col lg={1}>
              <CardActions>
                <Switch />
              </CardActions>
            </Col>
          </Row>
        </Card>
        <Card
          elevation={1}
          sx={{
            p: 2,
            backgroundColor: "#fff",
            my: 1,
          }}
        >
          <Row>
            <Col lg={11}>
              <Stack direction={"row"} spacing={2}>
                <Avatar sx={{ backgroundColor: "green" }}>
                  <UploadSharp />
                </Avatar>
                <Box>
                  <Typography fontWeight={"bold"} fontSize={"1.2rem"}>
                    All Notifcation update off
                  </Typography>
                  <Typography>
                    Unlockable content, only revealed by the owner of the item.
                  </Typography>
                </Box>
              </Stack>
            </Col>
            <Col lg={1}>
              <CardActions>
                <Switch />
              </CardActions>
            </Col>
          </Row>
        </Card>
        <Card
          elevation={1}
          sx={{
            p: 2,
            my: 1,
            backgroundColor: "#fff",
          }}
        >
          <Row>
            <Col lg={11}>
              <Stack direction={"row"} spacing={2}>
                <Avatar sx={{ backgroundColor: "green" }}>
                  <ShoppingBasket />
                </Avatar>
                <Box>
                  <Typography fontWeight={"bold"} fontSize={"1.2rem"}>
                    All Notifcation update off
                  </Typography>
                  <Typography>
                    Unlockable content, only revealed by the owner of the item.
                  </Typography>
                </Box>
              </Stack>
            </Col>
            <Col lg={1}>
              <CardActions>
                <Switch />
              </CardActions>
            </Col>
          </Row>
        </Card>
        <Card
          elevation={1}
          sx={{
            p: 2,
            backgroundColor: "#fff",
            my: 1,
          }}
        >
          <Row>
            <Col lg={11}>
              <Stack direction={"row"} spacing={2}>
                <Avatar sx={{ backgroundColor: "green" }}>
                  <PersonAdd />
                </Avatar>
                <Box>
                  <Typography fontWeight={"bold"} fontSize={"1.2rem"}>
                    All Notifcation update off
                  </Typography>
                  <Typography>
                    Unlockable content, only revealed by the owner of the item.
                  </Typography>
                </Box>
              </Stack>
            </Col>
            <Col lg={1}>
              <CardActions>
                <Switch />
              </CardActions>
            </Col>
          </Row>
        </Card>
        <Card
          elevation={1}
          sx={{
            p: 2,
            backgroundColor: "#fff",
            my: 1,
          }}
        >
          <Row>
            <Col lg={11}>
              <Stack direction={"row"} spacing={2}>
                <Avatar sx={{ backgroundColor: "green" }}>
                  <EmojiEvents />
                </Avatar>
                <Box>
                  <Typography fontWeight={"bold"} fontSize={"1.2rem"}>
                    Auther leavel up
                  </Typography>
                  <Typography>
                    Unlockable content, only revealed by the owner of the item.
                  </Typography>
                </Box>
              </Stack>
            </Col>
            <Col lg={1}>
              <CardActions>
                <Switch />
              </CardActions>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default Notification;
