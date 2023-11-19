import React from 'react'
import "./shopcard.css"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Shop, Star, StarBorder, StarBorderOutlined, StarBorderPurple500, StarHalf } from '@mui/icons-material'
import { Button } from 'react-bootstrap'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const ShopCard = ({ gallery, title, company, price, rating, status, ImgPath }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className='shopcard'>
      <div className="shop_card_box">
        <div className="shop_card">{status == 1 ?
          <p className='text-capitalize text-white badge card_badge' style={{ backgroundColor: "#00a33c" }}>Available</p>
          :
          <p className='text-capitalize text-white badge card_badge' style={{ backgroundColor: "red" }}>sold out</p>}

          <div className="shop_slider">
            <Carousel
              responsive={responsive}
              draggable={false}
              showDots={true}
              ssr={true}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={5000}
              transitionDuration={5000}
              removeArrowOnDeviceType={["tablet", "mobile"]}>
              {
                gallery.map((imageUrl, index) => (
                  <div key={imageUrl.id}>
                    <LazyLoadImage src={ImgPath + "/" + imageUrl} />
                  </div>
                ))
              }
            </Carousel>
          </div>
          <h3 className='title'>{title}</h3>
          <p className='company_name'>{company}</p>
          <div className="shop_card_info">
            <div>
              <p className='price'>${price}</p>
              <div className="rating">
                {
                  rating === 1 ?
                    <>
                      <span><Star /></span>
                      <span><StarBorder /></span>
                      <span><StarBorder /></span>
                      <span><StarBorder /></span>
                      <span><StarBorder /></span>
                    </>
                    :
                    rating === 1.5 ?
                      <>
                        <span><Star /></span>
                        <span><StarHalf /></span>
                        <span><StarBorder /></span>
                        <span><StarBorder /></span>
                        <span><StarBorder /></span>
                      </>
                      : rating === 2 ?
                        <>
                          <span><Star /></span>
                          <span><Star /></span>
                          <span><StarBorder /></span>
                          <span><StarBorder /></span>
                          <span><StarBorder /></span>
                        </>
                        : rating === 2.5 ?
                          <>
                            <span><Star /></span>
                            <span><Star /></span>
                            <span><StarHalf /></span>
                            <span><StarBorder /></span>
                            <span><StarBorder /></span>
                          </>
                          : rating === 3 ?
                            <>
                              <span><Star /></span>
                              <span><Star /></span>
                              <span><Star /></span>
                              <span><StarBorder /></span>
                              <span><StarBorder /></span>
                            </>
                            : rating === 3.5 ?
                              <>
                                <span><Star /></span>
                                <span><Star /></span>
                                <span><Star /></span>
                                <span><StarHalf /></span>
                                <span><StarBorder /></span>
                              </>
                              : rating === 4 ?
                                <>
                                  <span><Star /></span>
                                  <span><Star /></span>
                                  <span><Star /></span>
                                  <span><Star /></span>
                                  <span><StarBorder /></span>
                                </> : rating === 4.5 ?
                                  <>
                                    <span><Star /></span>
                                    <span><Star /></span>
                                    <span><Star /></span>
                                    <span><Star /></span>
                                    <span><StarHalf /></span>
                                  </> : rating === 5 ?
                                    <>
                                      <span><Star /></span>
                                      <span><Star /></span>
                                      <span><Star /></span>
                                      <span><Star /></span>
                                      <span><Star /></span>
                                    </> :
                                    <>
                                      <span><StarHalf /></span>
                                      <span><StarHalf /></span>
                                      <span><StarHalf /></span>
                                      <span><StarHalf /></span>
                                      <span><StarHalf /></span>
                                    </>
                }
                {/* <span>{rating}</span> */}
              </div>

            </div>
            <div>
              <span className='shop_bag'><Shop /></span>
              <span className='shop_btn'><Button variant='contained'>Live Preview</Button></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopCard