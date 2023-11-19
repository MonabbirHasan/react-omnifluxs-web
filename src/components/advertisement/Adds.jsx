import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import insta_ads from "../../assets/img/banner4.png";
import yt_ads from "../../assets/img/banner2.jpg";
import fb_ads from "../../assets/img/banner3.png";
import Carousel from 'react-bootstrap/Carousel';
import "../../assets/css/media_query.css";
import { Image } from 'react-bootstrap';
import { Button } from '@mui/material';
import "./adds.css";
const Adds = () => {
  return (
    <section className='advertisment'>
      <div className='adds_wrapper'>
        <div className='adds_left'>
          <h2>Supper Power Addvertisement</h2>
          <p>
            It is a long established fact that a
            reader will be distracted by the readable content of a page when looking at its layout.
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
            as opposed to using 'Content here, content here', making it look like readable English.
            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
            and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
            Various versions have evolved over the years, sometimes by accident,
            sometimes on purpose (injected humour and the like).
            and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
            Various versions have evolved over the years, sometimes by accident,
            sometimes on purpose (injected humour and the like).
          </p>
          <Button variant='outlined'>Learn more</Button>
        </div>
        <div className='adds_right'>
          <Carousel>
            <Carousel.Item interval={2000}>
              <LazyLoadImage
                alt={"custom ads"}
                src={yt_ads}
                width="100%"
                height="450px"
              />
              <Carousel.Caption>
                <h3>Monetized YouTube Channel</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <Image
                src={insta_ads}
                width="100%"
                height="450px" />
              <Carousel.Caption>
                <h3>Verified Instagram Account</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={fb_ads}
                width="100%"
                height="450px" />
              <Carousel.Caption>
                <h3>Verified Facebook Account</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default Adds