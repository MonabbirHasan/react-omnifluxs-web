import React, { useState } from "react";
import DashboardHeader from "../../HeaderFooter/DashboardHeader";
import DashboardFooter from "../../HeaderFooter/DashboardFooter";
import { Box, Button, Stack, Typography } from "@mui/material";
import { ArrowCircleLeft, Lock } from "@mui/icons-material";
import { Badge, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./dailytaskads.css";

const DailyTaskAds = () => {
  let navigate = useNavigate();
  const initData = Array.from({ length: 102 }, (_, i) => ({
    _id: (i + 1).toString(),
    content: (i + 1).toString(),
    desc: "watch this video ads and earn money ",
    name: "task" + " " + (i + 1),
    status: true,
  }));
  return (
    <>
      <DashboardHeader />
      <div className="watch_ads_page">
        <Container>
          <Stack
            direction={"row"}
            sx={{
              padding: "20px",
              backgroundColor: "#eee",
              color: "#111",
              marginBottom: "10px",
              border: "3px solid #ffffff",
              boxShadow: "-3px -3px 5px #eee,3px 3px 5px #eee",
              borderRadius: "10px",
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
                complete your task today!
              </Typography>
              <Typography fontSize={20} textTransform={"capitalize"}>
                your monday task is panding
              </Typography>
            </Box>
          </Stack>
          {/************************************
           * TASK ADS SECTION START HERE
           *************************************/}
          <div className="watch_ad_grid_wrapper">
            {initData.map((items) => {
              return (
                <div className="grid_item">
                  <Stack direction={"row"} justifyContent={"space-between"}>
                    <Badge
                      style={{
                        background: "white",
                        color: "black",
                        marginTop: "-10px",
                        display: "block",
                        marginLeft: "-10px",
                        borderRadius: "0",
                        width: "60px",
                        borderBottomRightRadius: "100%",
                      }}
                      bg=""
                    >
                      <Lock />
                    </Badge>
                    <Badge
                      style={{
                        display: "block",
                        width: "100px",
                        fontSize: "16px",
                        color: "black",
                        letterSpacing: "1px",
                        marginRight: "5px",
                        borderRadius: "4px",
                        backgroundColor: "white",
                        padding: "10px",
                        fontWeight: "revert",
                      }}
                      bg=""
                    >
                      {items.name}
                    </Badge>
                  </Stack>
                  <Typography
                    fontSize={"14px"}
                    padding={1}
                    pt={2}
                    color={"#fff"}
                  >
                    {items.desc}
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={() => navigate("/seller_dashboard/watch-ads")}
                  >
                    Watch
                  </Button>
                </div>
              );
            })}
          </div>
          {/************************************
           * TASK ADS SECTION END HERE
           *************************************/}
        </Container>
      </div>
      <DashboardFooter />
    </>
  );
};

export default DailyTaskAds;
