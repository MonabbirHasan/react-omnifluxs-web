import React, { useEffect, useState } from "react";
import { FeatureCard, Statistics } from "../../components/";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import "./admin_dashboard.css";
import {
  Box,
  Divider,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import {
  Block,
  Facebook,
  GamesOutlined,
  Instagram,
  Sort,
  Telegram,
  Twitter,
  Web,
  YouTube,
} from "@mui/icons-material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LazyLoadImage } from "react-lazy-load-image-component";
const DashboardMain = () => {
  const [newtime, setNewtime] = useState("");
  const Times = () => {
    setInterval(() => {
      setNewtime(new Date().toLocaleTimeString());
    }, 1000);
  };
  useEffect(() => {
    Times();
  }, []);
  return (
    <div className="dashbaord_main">
      <section className="feature_cards_section">
        <Row xs={3} md={4} lg={12} sm={2}>
          <Col>
            <FeatureCard title="Daily Visitor" number="246" date="overral" />
          </Col>
          <Col>
            <FeatureCard title="Today Revenue" number="$323" date="today" />
          </Col>
          <Col>
            <FeatureCard
              title="Last Month Revenue"
              number="$232"
              date="last month"
            />
          </Col>
          <Col>
            <FeatureCard title="Wallet balance" number="$232" date="balance" />
          </Col>
        </Row>
      </section>
      {/************************************
       * statistics chars section here
       **************************************/}
      <section className="statistics_carts">
        <div className="statistics_wrapper">
          <Row>
            <Col md={12} sm={12} lg={9}>
              <div className="statistic">
                <Stack direction={"row"} justifyContent={"space-between"}>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      textTransform: "capitalize",
                      color: "#919191",
                      fontWeight: "500",
                      padding: "10px 0",
                      letterSpacing: "3px",
                      fontFamily: "tahoma",
                    }}
                  >
                    statistics
                  </Typography>
                  <Box>
                    <InputGroup>
                      <InputGroup.Text id="basic-addon1">
                        Filter <Sort />
                      </InputGroup.Text>
                      <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </InputGroup>
                  </Box>
                </Stack>
                {/* Statistics section */}
                <Statistics
                  barColors={["#319EF4", "#25c628", "#111", "#6c5ce7"]}
                  barSize={5}
                  numborOfBar={3}
                  XAxis={true}
                  YAxis={false}
                  Legend={true}
                  CartesianGrid={true}
                  Tooltip={true}
                  MT={5}
                  ML={20}
                  MR={30}
                  MB={5}
                  BarHeight={60}
                  barRadius={10}
                  StrokeBorderColor={"#ff3"}
                />
              </div>
            </Col>
            <Col md={12} sm={12} lg={3}>
              <div className="right_side_charts">
                <FeatureCard title="total user" number="246" date="overral" />
                <Divider sx={{ my: 1 }} />
                <FeatureCard title="new user" number="346" date="overral" />
                <Divider sx={{ my: 1 }} />
                <FeatureCard title="active user" number="326" date="overral" />
              </div>
            </Col>
          </Row>
        </div>
      </section>
      {/************************************
       * social card section here
       **************************************/}
      <section className="social_card">
        <Row>
          <Col sm={12} lg={2} md={3}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              className="social_card_item"
            >
              <Box>
                <Typography sx={{ fontSize: "24px" }}>$15,678</Typography>
                <Typography sx={{ fontSize: "14px", fontWeight: "500" }}>
                  Total Salse
                </Typography>
              </Box>
              <Box>
                <Facebook
                  htmlColor="#0d6efd"
                  sx={{
                    fontSize: "3rem",
                    height: "100%",
                  }}
                />
              </Box>
            </Stack>
          </Col>
          <Col sm={12} lg={2} md={3}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              className="social_card_item"
            >
              <Box>
                <Typography sx={{ fontSize: "24px" }}>$15,678</Typography>
                <Typography sx={{ fontSize: "14px", fontWeight: "500" }}>
                  Total Salse
                </Typography>
              </Box>
              <Box>
                <Instagram
                  htmlColor="#FD01B3"
                  sx={{
                    fontSize: "3rem",
                    height: "100%",
                  }}
                />
              </Box>
            </Stack>
          </Col>
          <Col sm={12} lg={2} md={3}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              className="social_card_item"
            >
              <Box>
                <Typography sx={{ fontSize: "24px" }}>$15,678</Typography>
                <Typography sx={{ fontSize: "14px", fontWeight: "500" }}>
                  Total Salse
                </Typography>
              </Box>
              <Box>
                <Twitter
                  htmlColor="#2196f3"
                  sx={{
                    fontSize: "3rem",
                    height: "100%",
                  }}
                />
              </Box>
            </Stack>
          </Col>
          <Col sm={12} lg={2} md={3}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              className="social_card_item"
            >
              <Box>
                <Typography sx={{ fontSize: "24px" }}>$15,678</Typography>
                <Typography sx={{ fontSize: "14px", fontWeight: "500" }}>
                  Total Salse
                </Typography>
              </Box>
              <Box>
                <Telegram
                  htmlColor="#2187f3"
                  sx={{
                    fontSize: "3rem",
                    height: "100%",
                  }}
                />
              </Box>
            </Stack>
          </Col>
          <Col sm={12} lg={2} md={3}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              className="social_card_item"
            >
              <Box>
                <Typography sx={{ fontSize: "24px" }}>$15,678</Typography>
                <Typography sx={{ fontSize: "14px", fontWeight: "500" }}>
                  Total Salse
                </Typography>
              </Box>
              <Box>
                <Web
                  htmlColor="#b222ff"
                  sx={{
                    fontSize: "3rem",
                    height: "100%",
                  }}
                />
              </Box>
            </Stack>
          </Col>
          <Col sm={12} lg={2} md={3}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              className="social_card_item"
            >
              <Box>
                <Typography sx={{ fontSize: "24px" }}>$15,678</Typography>
                <Typography sx={{ fontSize: "14px", fontWeight: "500" }}>
                  Total Salse
                </Typography>
              </Box>
              <Box>
                <GamesOutlined
                  htmlColor="#0b5ed7"
                  sx={{
                    fontSize: "3rem",
                    height: "100%",
                  }}
                />
              </Box>
            </Stack>
          </Col>
        </Row>
      </section>
      {/*******************************************
       * facebook and device chart section here
       *********************************************/}
      <section className="fb_device">
        <Row>
          <Col sm={12} md={6} lg={6}>
            <div className="device_table">
              <TableContainer
                className="device_data_table"
                component={Paper}
                elevation={0.3}
                sx={{ height: "370px", overflowY: "scroll" }}
              >
                <Table sx={{ minWidth: "100%" }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="right">Device</TableCell>
                      <TableCell align="right">Active</TableCell>
                      <TableCell align="right">Time</TableCell>
                      <TableCell align="right">Country</TableCell>
                      <TableCell align="right">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {Array.from([1, 2, 3, 4, 5, 6, 7], (x) => x + x).map(
                      (items) => (
                        <TableRow
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell align="right">windows</TableCell>
                          <TableCell align="right">Yes</TableCell>
                          <TableCell align="right">10:20.am</TableCell>
                          <TableCell align="right">Dhaka</TableCell>
                          <TableCell align="right">
                            <IconButton
                              sx={{
                                backgroundColor: "orangered",
                                "&:hover": { backgroundColor: "orangered" },
                              }}
                            >
                              <Block htmlColor="white" />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      )
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <div className="radial_charts">
              <Box
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <Typography
                  textAlign={"center"}
                  sx={{
                    border: "2px solid #fff",
                    display: "inline-block",
                    padding: "5px",
                    borderRadius: "5px",
                    color:'#919191',
                    boxShadow:
                      "inset -3px -3px 5px #eee,inset 3px 3px 5px #eee",
                  }}
                >
                  {newtime}
                </Typography>
              </Box>
              <Row>
                <Col sm={12} md={6} lg={6}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar />
                  </LocalizationProvider>
                </Col>
                <Col sm={12} md={6} lg={6}>
                  <LazyLoadImage
                    style={{
                      width: "280px",
                      height: "auto",
                      padding: "10px",
                      borderRadius: 20,
                    }}
                    src="https://i.pinimg.com/736x/54/a9/0a/54a90a9ce7bfd8c0de99914d85a3ea4e.jpg"
                  />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default DashboardMain;
