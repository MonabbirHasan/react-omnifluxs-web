import React from "react";
import { ArrowCircleLeft, CheckCircleOutline } from "@mui/icons-material";
import DashboardHeader from "../../HeaderFooter/DashboardHeader";
import DashboardFooter from "../../HeaderFooter/DashboardFooter";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./IdActivePlan.css";
import {
  Avatar,
  Box,
  Button,
  Divider,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
const IdActivePlan = () => {
  const navigate = useNavigate();
  return (
    <>
      <DashboardHeader />
      <div className="id_active_plan_page">
        <Container>
          <Stack
            direction={"row"}
            sx={{
              padding: "20px",
              backgroundColor: "#2198f3",
              color: "#fff",
              borderRadius:'10px',
              marginBottom: "10px",
              border: "3px solid #ffffff",
              boxShadow: "-3px -3px 5px #eee,3px 3px 5px #eee",
            }}
          >
            <Typography
              variant="h3"
              style={{ cursor: "pointer" }}
              pr={3}
              pt={1}
              onClick={() => navigate(-"1")}
            >
              <ArrowCircleLeft style={{ fontSize: "2rem" }} />
            </Typography>
            <Box>
              <Typography fontSize={30} textTransform={"capitalize"}>
                omniFlux ID Activation Plan!
              </Typography>
              <Typography fontSize={20} textTransform={"capitalize"}>
                Active Your ID & Eearn more money!
              </Typography>
            </Box>
          </Stack>
          {/************************************
           * ACTIVE PLAN SECTION START HERE
           *************************************/}
          <div className="active_plan_wrapper">
            <div className="plan_item">
              <Avatar
                sx={{
                  width: "90px",
                  height: "90px",
                  backgroundColor: "#ffbf00",
                  border: "4px double #fff",
                  margin: "10px auto",
                  fontFamily:"fantasy!important",
                  letterSpacing:'1px'
                }}
              >
                <sup style={{ color: "black" }}>₹</sup>599
              </Avatar>
              <Divider sx={{ fontWeight: "bold" }}>SILVER</Divider>
              <ListItemButton component="p">
                <CheckCircleOutline style={{ color: "#fff" }} />
                <Typography ml={1} variant="span">
                  Daily Withdrawal
                </Typography>
              </ListItemButton>
              <ListItemButton component="p">
                <CheckCircleOutline style={{ color: "#fff" }} />
                <Typography ml={1} variant="span">
                  1-2 Level Earning
                </Typography>
              </ListItemButton>
              <ListItemButton component="p">
                <CheckCircleOutline style={{ color: "#fff" }} />
                <Typography ml={1} variant="span">
                  20-Ads Bundle
                </Typography>
              </ListItemButton>
              <ListItemButton component="p">
                <CheckCircleOutline style={{ color: "#fff" }} />
                <Typography ml={1} variant="span">
                  2 Application Downloads
                </Typography>
              </ListItemButton>
              <ListItemButton component="p">
                <CheckCircleOutline style={{ color: "#fff" }} />
                <Typography ml={1} variant="span">
                  Lifetime ID Active
                </Typography>
              </ListItemButton>
              <ListItemButton component="p">
                <CheckCircleOutline style={{ color: "#fff" }} />
                <Typography ml={1} variant="span">
                  Customar Support
                </Typography>
              </ListItemButton>
              <Button
                fullWidth
                sx={{
                  my: 2,
                  color: "#111",
                  border: "2px solid #fff",
                  "&:hover": { background: "#fff", color: "#111" },
                }}
              >
                purchase
              </Button>
            </div>
            <div className="plan_item">
              <Avatar
                sx={{
                  width: "90px",
                  height: "90px",
                  backgroundColor: "#A26BFB",
                  border: "4px double #fff",
                  margin: "10px auto",
                  fontFamily:"fantasy!important",
                  letterSpacing:'1px'
                }}
              >
                <sup style={{ color: "black" }}>₹</sup>1199
              </Avatar>
              <Divider sx={{ fontWeight: "bold" }}>GOLD</Divider>
              <ListItemButton component="p">
                <CheckCircleOutline style={{ color: "#fff" }} />
                <Typography ml={1} variant="span">
                  Daily Withdrawal
                </Typography>
              </ListItemButton>
              <ListItemButton component="p">
                <CheckCircleOutline style={{ color: "#fff" }} />
                <Typography ml={1} variant="span">
                  1-3 Level Earning
                </Typography>
              </ListItemButton>
              <ListItemButton component="p">
                <CheckCircleOutline style={{ color: "#fff" }} />
                <Typography ml={1} variant="span">
                  30-Ads Bundle
                </Typography>
              </ListItemButton>
              <ListItemButton component="p">
                <CheckCircleOutline style={{ color: "#fff" }} />
                <Typography ml={1} variant="span">
                  5 Application Downloads
                </Typography>
              </ListItemButton>
              <ListItemButton component="p">
                <CheckCircleOutline style={{ color: "#fff" }} />
                <Typography ml={1} variant="span">
                  Lifetime Id Active
                </Typography>
              </ListItemButton>
              <ListItemButton component="p">
                <CheckCircleOutline style={{ color: "#fff" }} />
                <Typography ml={1} variant="span">
                  Customar Support
                </Typography>
              </ListItemButton>
              <Button
                fullWidth
                sx={{
                  my: 2,
                  color: "#111",
                  border: "2px solid #fff",
                  "&:hover": { background: "#fff", color: "black" },
                }}
              >
                purchase
              </Button>
            </div>
            <div className="plan_item">
              <Avatar
                sx={{
                  width: "90px",
                  height: "90px",
                  backgroundColor: "#29ce4d",
                  border: "4px double #fff",
                  margin: "10px auto",
                  fontFamily:"fantasy!important",
                  letterSpacing:'1px'
                }}
              >
                <sup style={{ color: "black", }}>₹</sup>2999
              </Avatar>
              <Divider sx={{ fontWeight: "bold" }}>DAIMOND</Divider>
              <ListItemButton component="p">
                <CheckCircleOutline style={{ color: "#fff" }} />
                <Typography ml={1} variant="span">
                  Daily Withdrawal
                </Typography>
              </ListItemButton>
              <ListItemButton component="p">
                <CheckCircleOutline style={{ color: "#fff" }} />
                <Typography ml={1} variant="span">
                  1-2 Level Earning
                </Typography>
              </ListItemButton>
              <ListItemButton component="p">
                <CheckCircleOutline style={{ color: "#fff" }} />
                <Typography ml={1} variant="span">
                  Daily 40 Ads
                </Typography>
              </ListItemButton>
              <ListItemButton component="p">
                <CheckCircleOutline style={{ color: "#fff" }} />
                <Typography ml={1} variant="span">
                  10 Application Downloads
                </Typography>
              </ListItemButton>
              <ListItemButton component="p">
                <CheckCircleOutline style={{ color: "#fff" }} />
                <Typography ml={1} variant="span">
                  Lifetime Id Active
                </Typography>
              </ListItemButton>
              <ListItemButton component="p">
                <CheckCircleOutline style={{ color: "#fff" }} />
                <Typography ml={1} variant="span">
                  Customar Support
                </Typography>
              </ListItemButton>
              <Button
                fullWidth
                sx={{
                  my: 2,
                  color: "#111",
                  border: "2px solid #fff",
                  "&:hover": { background: "#fff", color: "black" },
                }}
              >
                purchase
              </Button>
            </div>
          </div>
          {/************************************
           * ACTIVE PLAN SECTION END HERE
           *************************************/}
        </Container>
      </div>
      <DashboardFooter />
    </>
  );
};

export default IdActivePlan;
