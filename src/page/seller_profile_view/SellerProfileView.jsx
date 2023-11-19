import React from "react";
import "./seller_profile_view.css";
import { Col, Container, Row, Card } from "react-bootstrap";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import {
  AccountCircle,
  Block,
  Circle,
  FavoriteBorder,
  PinDrop,
  Shop2,
  Star,
} from "@mui/icons-material";
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
const SellerProfileView = () => {
  const seller_gigs = [
    {
      id: 1,
      seller_name: "dark moon",
      seller_image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      gig_title: "monetized youtube gaming channel 330k subscriber || OMN3243",
      price: "$234",
    },
    {
      id: 2,
      seller_name: "dark moon",
      seller_image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      gig_title: "monetized youtube gaming channel 330k subscriber || OMN3243",
      price: "$234",
    },
    {
      id: 3,
      seller_name: "dark moon",
      seller_image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      gig_title: "monetized youtube gaming channel 330k subscriber || OMN3243",
      price: "$234",
    },
    {
      id: 4,
      seller_name: "dark moon",
      seller_image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      gig_title: "monetized youtube gaming channel 330k subscriber || OMN3243",
      price: "$234",
    },
    {
      id: 5,
      seller_name: "dark moon",
      seller_image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      gig_title: "monetized youtube gaming channel 330k subscriber || OMN3243",
      price: "$234",
    },
    {
      id: 6,
      seller_name: "dark moon",
      seller_image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      gig_title: "monetized youtube gaming channel 330k subscriber || OMN3243",
      price: "$234",
    },
  ];
  return (
    <>
      <Header />
      <div className="seller_profile_view">
        <Container fluid>
          <div className="seller_profile_view_wrapper">
            <Row>
              <Col sm={12} md={6} lg={3}>
                <div className="seller_profile_view_left">
                  <Box textAlign={"center"}>
                    <Box>
                      <Badge
                        overlap="circular"
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        badgeContent={
                          <Avatar
                            sx={{
                              width: "10px",
                              height: "10px",
                              mb: 1,
                              border: "2px solid #eee",
                            }}
                          >
                            <Circle htmlColor="#25c628" sx={{}} />
                          </Avatar>
                        }
                      >
                        <Avatar
                          sx={{
                            margin: "auto",
                            width: "130px",
                            height: "130px",
                            border: "3px solid #eee",
                          }}
                          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                        />
                      </Badge>
                    </Box>
                    <Typography
                      className="designation"
                      textTransform={"capitalize"}
                      fontSize={"16px"}
                      color={"black"}
                      pt={1}
                    >
                      full-stack developer
                    </Typography>
                    <Typography
                      className="seller_name"
                      textTransform={"capitalize"}
                      fontSize={"14px"}
                      color={"#919191"}
                    >
                      @artisan bizz
                    </Typography>
                    <Typography
                      className="saller_rating"
                      pt={1}
                      textTransform={"capitalize"}
                    >
                      <Star htmlColor="orange" />
                      4.3 (22) top rated seller
                    </Typography>
                    <Box gap={1} display={"flex"} mt={3}>
                      <Button
                        size="small"
                        sx={{
                          textTransform: "capitalize",
                          textAlign: "center",
                          margin: "auto",
                        }}
                        variant="contained"
                      >
                        contact me
                      </Button>
                      <Button
                        size="small"
                        sx={{ textTransform: "capitalize" }}
                        variant="outlined"
                        color="error"
                      >
                        <Block /> block
                      </Button>
                    </Box>
                    <Divider sx={{ mt: 4, textTransform: "uppercase" }}>
                      Info
                    </Divider>
                    <Box mt={2}>
                      <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        mt={3}
                        textTransform={"capitalize"}
                      >
                        <Typography>
                          <PinDrop /> From
                        </Typography>
                        <Typography textTransform={"capitalize"}>
                          india
                        </Typography>
                      </Stack>
                      <Stack
                        direction={"row"}
                        textTransform={"capitalize"}
                        justifyContent={"space-between"}
                        mt={2}
                      >
                        <Typography>
                          <AccountCircle /> member since
                        </Typography>
                        <Typography>Aug 2021</Typography>
                      </Stack>
                    </Box>
                  </Box>
                </div>
              </Col>
              <Col sm={12} md={6} lg={8}>
                <div className="seller_profile_view_right">
                  <Typography
                    fontSize={"18px"}
                    fontWeight={"600"}
                    color={"#919191"}
                    pb={1}
                    px={1}
                    textTransform={"capitalize"}
                  >
                    Listed service
                  </Typography>
                  <Row>
                    {seller_gigs.map((items) => (
                      <Col lg={4}>
                        <Card style={{ margin: "5px 0" }} className="gig_card">
                          <Card.Img
                            variant="top"
                            src={
                              "https://img.freepik.com/premium-psd/youtube-video-thumbnail-start-trading-today_475351-168.jpg"
                            }
                          />
                          <Card.Body>
                            <Card.Title>
                              <Typography
                                fontSize={"18px"}
                                fontWeight={"600"}
                                textTransform={"capitalize"}
                              >
                                {items.gig_title.slice(0, 50)}
                              </Typography>
                            </Card.Title>
                            <Card.Text>
                              <Typography
                                fontSize={"14px"}
                                textTransform={"capitalize"}
                              >
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                              </Typography>
                            </Card.Text>
                          </Card.Body>
                          <Card.Footer>
                            <Stack
                              direction={"row"}
                              justifyContent={"space-between"}
                              width={"100%"}
                            >
                              <Box gap={2} display={"flex"}>
                                <IconButton>
                                  <FavoriteBorder htmlColor="orangered" />
                                </IconButton>
                                <IconButton>
                                  <Shop2 htmlColor="green" />
                                </IconButton>
                              </Box>
                              <Box mt={1.5}>
                                <Typography
                                  fontSize={"14px"}
                                  fontWeight={"500"}
                                  textTransform={"uppercase"}
                                >
                                  starting at <strong>$303</strong>
                                </Typography>
                              </Box>
                            </Stack>
                          </Card.Footer>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default SellerProfileView;
