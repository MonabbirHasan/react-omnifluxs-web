import React, { useState, useEffect } from "react";
import PageTitle from "../Page_title/PageTitle";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
      items: 5,
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
        <Carousel responsive={responsive} autoPlay={true}>
          {ClientsData.map((item) => (
            <div className="client_item" key={item.id}>
              <Avatar
                src={"http://localhost:5173/src/assets/img/client1.jpg"}
                sx={{ width: "100px", height: "100px" }}
              />
              <Typography
                textAlign={"left"}
                py={1}
                textTransform={"capitalize"}
                color={"black"}
              >
                halal
              </Typography>
              <Typography
                fontSize={"14px"}
                py={1}
                textTransform={"capitalize"}
                color={"black"}
                textAlign={"left"}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                eligendi magnam dolor necessitatibus dignissimos est explicabo
                vitae asperiores nisi consequuntur?
              </Typography>
              <div className="client_rating">
                <ClientsRatings rating={3} />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Says;
