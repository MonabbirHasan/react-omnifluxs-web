import React, { useState, useEffect } from "react";
import { Email, Facebook, Instagram } from "@mui/icons-material";
import PageTitle from "../Page_title/PageTitle";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import "../../assets/css/media_query.css";
import { Alert, Avatar, Typography } from "@mui/material";
import { TeamsData } from "../../utils/static/teamsData";
import "./teams.css";

const Teams = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  function facebook(url) {
    window.open(url);
  }
  function instagram(url) {
    window.open(url);
  }
  function twitter(url) {
    window.open(url);
  }
  return (
    <section className="teams">
      <PageTitle title={"our dedicated teams"} />
      {
        <Carousel
          responsive={responsive}
          draggable={true}
          showDots={true}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          transitionDuration={500}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        >
          {TeamsData.length > 0 ? (
            TeamsData.map((item) => (
              <div className="teams_wrapper" key={item.id}>
                <div className="teams_item">
                  <Avatar
                    src={item.img}
                    sx={{ width: "120px", height: "120px",margin:"auto" }}
                  />
                  <Typography
                    pt={2}
                    color={"#333"}
                    fontSize={"16px"}
                    textTransform={"capitalize"}
                  >
                    {item.name}
                  </Typography>

                  <Typography
                    fontSize={"14px"}
                    py={1}
                    color={"#333"}
                    textTransform={"capitalize"}
                  >
                    {item.designation}
                  </Typography>
                  <div className="team_social" hidden>
                    <span onClick={""}>
                      <Facebook />
                    </span>
                    <span onClick={""}>
                      <Instagram />
                    </span>
                    <span onClick={""}>
                      <Email />
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <Alert severity="error" color="success">
              Data Not Found!
            </Alert>
          )}
        </Carousel>
      }
    </section>
  );
};

export default Teams;
