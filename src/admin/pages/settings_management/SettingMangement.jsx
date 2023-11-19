import React from "react";
import "./settings_management.css";
import { Col, Container, Row } from "react-bootstrap";
import { Box, Button, Stack, Typography } from "@mui/material";
import {
  Backup,
  BrandingWatermark,
  Code,
  Language,
  LocationCity,
  LocationSearching,
  LogoDev,
  Notifications,
  PinDrop,
  QrCode,
  Security,
  Settings,
} from "@mui/icons-material";
const SettingMangement = () => {
  const settings_options = [
    {
      id: 1,
      icons: <Settings fontSize="large" />,
      title: "general",
      details:
        "view and update your store details site logo, footer, site contact info and more..",
    },
    {
      id: 2,
      icons: <PinDrop fontSize="large" />,
      title: "locations",
      details: "manage the places your where is your office and sell products",
    },
    {
      id: 3,
      icons: <Notifications fontSize="large" />,
      title: "notifications",
      details: "manage notifications sent to you and your customers",
    },
    {
      id: 4,
      icons: <Language fontSize="large" />,
      title: "language",
      details: "manage the languages your customers can view on your store",
    },
    {
      id: 5,
      icons: <Backup fontSize="large" />,
      title: "backup",
      details:
        "set backup & sync system for backup and store your website data for recover",
    },
    {
      id: 6,
      icons: <Security fontSize="large" />,
      title: "security",
      details:
        "Protect Your Information: Our Robust Security Measures Safeguard Your Card Details.",
    },
    {
      id: 7,
      icons: <QrCode fontSize="large" />,
      title: "BarCodes",
      details: "Efficient Scanning: Access Site Information Instantly.",
    },
    {
      id: 7,
      icons: <BrandingWatermark fontSize="large" />,
      title: "Branding",
      details: "Promote Your Identity: Customize and Showcase Your Brand",
    },
    {
      id: 7,
      icons: <Code fontSize="large" />,
      title: "Scripts",
      details:
        "adding any script on the site header and footer like google ads, or any cdn scripts",
    },
  ];
  return (
    <div className="settings_management">
      <Container fluid>
        <div className="settings_management_wrapper">
          <div className="settings_management_grid">
            <Typography
              sx={{
                pb: 2,
                ml: 1,
                textTransform: "capitalize",
                color: "#919191",
                fontFamily: "fantasy!important",
                letterSpacing: "2px",
                fontSize: "2rem",
              }}
            >
              site settings
            </Typography>
            <Row>
              {settings_options.map((items) => (
                <Col sm={2} md={3} lg={3}>
                  <Button variant="" sx={{ p: 1, m: 0 }}>
                    <Stack
                      className="setting_grid_items"
                      direction={"row"}
                      textAlign={"left"}
                    >
                      <Box
                        sx={{
                          paddingRight: "10px",
                        }}
                      >
                        {items.icons}
                      </Box>
                      <Box>
                        <Typography textTransform={"capitalize"}>
                          {items.title}
                        </Typography>
                        <Typography
                          textTransform={"capitalize"}
                          fontSize={"13px"}
                        >
                          {items.details}
                        </Typography>
                      </Box>
                    </Stack>
                  </Button>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SettingMangement;
