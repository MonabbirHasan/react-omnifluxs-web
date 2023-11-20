import React, { useState, useEffect } from "react";
import PageTitle from "../Page_title/PageTitle";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import "../../assets/css/media_query.css";
import { ClientsData } from "../../utils/static/clientsData";
import "./says.css";
import { Avatar, Typography } from "@mui/material";
import ClientsRatings from "./ClientsRatings";
const Says = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
  return (
    <section className="client_say">
      <PageTitle title={"What Our Client Say?"} />
      <div className="slide-container">
        <Carousel
          responsive={responsive}
          draggable={true}
          showDots={false}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          transitionDuration={500}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        >
          {ClientsData.reverse().map((item) => (
            <div className="client_item">
              <Avatar src={item.img} sx={{ width: "100px", height: "100px" }} />
              <Typography
                textAlign={"left"}
                py={1}
                textTransform={"capitalize"}
                color={"black"}
              >
                {item.name}
              </Typography>
              <Typography
                fontSize={"14px"}
                py={1}
                textTransform={"capitalize"}
                color={"black"}
                textAlign={"left"}
              >
                {item.desc}
              </Typography>
              <div className="client_rating">
                <ClientsRatings rating={item.rating} />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Says;
