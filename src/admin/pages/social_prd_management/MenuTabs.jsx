import React, { useEffect, useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import {
  Facebook_service,
  Twitter_service,
  Youtube_service,
  Telegram_service,
  Instagram_services,
  Website_service,
} from "./";
import "./social_management.css";
const MenuTabs = () => {
  const [Tabsvalue, setTabsvalue] = useState(1);
  const handleChange = (event, newValue) => {
    setTabsvalue(newValue);
    localStorage.setItem("social_service_states", JSON.stringify(newValue));
  };
  useEffect(() => {
    const social_service_states = JSON.parse(
      localStorage.getItem("social_service_states")
    );
    setTabsvalue(social_service_states);
  }, []);
  return (
    <div className="product_menu_tabs">
      <div className="menu_tabls_wrapper">
        <div className="product_tabs">
          <Box sx={{ width: "100%" }}>
            <Tabs
              value={Tabsvalue}
              onChange={handleChange}
              aria-label="wrapped label tabs example"
            >
              <Tab value={1} label="facebook" wrapped />
              <Tab value={2} label="instagram" wrapped />
              <Tab value={3} label="telegram" wrapped />
              <Tab value={4} label="twitter" wrapped />
              <Tab value={5} label="youtube" wrapped />
              <Tab value={6} label="discord" wrapped />
              <Tab value={7} label="Website" wrapped />
            </Tabs>
          </Box>
        </div>
        {/**********************************
         *RANDER ALL TABS COMPONENTS
         ***********************************/}
        <div className="tabs_components">
          {Tabsvalue === 1 ? (
            <Facebook_service />
          ) : Tabsvalue === 2 ? (
            <Instagram_services />
          ) : Tabsvalue === 3 ? (
            <Telegram_service />
          ) : Tabsvalue === 4 ? (
            <Twitter_service />
          ) : Tabsvalue === 5 ? (
            <Youtube_service />
          ) : Tabsvalue === 7 ? (
            <Website_service />
          ) : Tabsvalue === 6 ? (
            "Discord"
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuTabs;
