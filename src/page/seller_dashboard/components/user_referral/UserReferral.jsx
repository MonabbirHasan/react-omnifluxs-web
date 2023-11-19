import React from "react";
import {
  CopyAll,
  CopyAllOutlined,
  CopyAllRounded,
  CopyAllSharp,
  CopyAllTwoTone,
  Copyright,
  Email,
  Facebook,
  Instagram,
  Message,
  Telegram,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import PageTitle from "../../../../components/Page_title/PageTitle";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import { Box, Divider, Stack, Typography } from "@mui/material";
import "./UserReferral.css";
import DashboardHeader from "../../HeaderFooter/DashboardHeader";
const UserReferral = () => {
  return (
    <>
      <DashboardHeader />
      <section className="user_referral_page">
        {/*****************************
         * REFFER SECTION START HERE
         * ***************************/}
        <Container>
          <PageTitle
            title="share with your friend."
            FontSize={55}
            color={"red"}
          />
          <div className="referr_wrapper">
            <div className="referral_box">
              <h3>refer a friend give $10, get $10.</h3>
              <p>
                spread the summersalt love! you"ll get $10 for each friend who
                orders. only new customers are valid for the referral.
              </p>

              <Box className="referr_input_group">
                <Typography
                  style={{
                    padding: "10px",
                    border: "1px solid #eee",
                    borderRadius: "5px",
                    width: "100%",
                  }}
                >
                  {location.href + "/wrfs323klf"}
                </Typography>
              </Box>
              <Divider component={"line"} />
              <div className="referr_social_site">
                <Stack className="referr_social_icon_wrapper">
                  <Button>
                    <Facebook />
                  </Button>
                  <Button>
                    <Twitter />
                  </Button>
                  <Button>
                    <Instagram />
                  </Button>
                  <Button>
                    <Telegram />
                  </Button>
                  <Button>
                    <WhatsApp />
                  </Button>
                  <Button>
                    <Message />
                  </Button>
                  <Button>
                    <Email />
                  </Button>
                  <Button>
                    <CopyAll />
                  </Button>
                </Stack>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default UserReferral;
