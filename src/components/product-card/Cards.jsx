import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import monitizedimg from "../../assets/img/monetization.png";
import category from "../../assets/img/categories.png";
import usericon from "../../assets/img/users-icon.png";
import langguages from "../../assets/img/lang.png";
import { Button, Image } from 'react-bootstrap';
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import "../../assets/css/media_query.css";
import {
  AddCircle,
  CheckCircle,
  Favorite,
  FavoriteBorder,
  RemoveRedEye,
  Timer
} from '@mui/icons-material';
import "./card.css";
const Cards = ({
  id,
  thumbnail,
  imgurlPath,
  SlideUrl,
  new_price,
  old_price,
  badges,
  pr_view,
  upload_time,
  title,
  listing_id,
  description,
  monitization,
  subscriber,
  language,
  channel_category
}) => {
  var [favorit, setFavorit] = useState(false);
  const responsive = {
    superLargeDesktop: {
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
  var navigate = useNavigate();

  function createSlug(inputString) {
    // Convert to lowercase and replace spaces with hyphens
    const slug = inputString.toLowerCase().replace(/\s+/g, '-');
    // Remove special characters and symbols
    const cleanedSlug = slug.replace(/[^a-zA-Z0-9-]/g, '');
    // Remove leading and trailing hyphens
    const finalSlug = cleanedSlug.replace(/^-+|-+$/g, '');
    return finalSlug;
  }
  return (
    <div className='product_cards'>
      <div className="container">
        <div className="card_wrapper">
          <div className="item">
            <div className="item_head">
              <Carousel
                responsive={responsive}
                draggable={false}
                showDots={false}
                ssr={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                transitionDuration={1000}
              // removeArrowOnDeviceType={["tablet", "mobile"]}
              >
                {
                  SlideUrl.map((imageUrl, index) => (
                    <>
                      <LazyLoadImage
                        key={index}
                        src={imgurlPath + "/" + imageUrl}
                        alt={`Image ${index}`}
                      />
                    </>
                  ))
                }
              </Carousel>
              <div className="price_box">
                <p>
                  <span><del>{old_price}</del></span>
                  <span>{new_price}</span>
                </p>
              </div>
            </div>
            <div className="item_body">
              <div className='product_timing'>
                <span><RemoveRedEye style={{ fontSize: '10px' }} /> {pr_view}</span>
                <span><Timer style={{ fontSize: '10px' }} /> {upload_time}</span>
              </div>
              <div className="item_content">
                <h4>{title.slice(20, 80)} | <span>{listing_id}</span></h4>
                <p>{description.slice(20, 100)}</p>
                <div className='product_info'>
                  <div className='info1'>
                    <div>
                      <Image src={monitizedimg} />
                    </div>
                    <div className='card_icons'>
                      <p>monetized</p>
                      <span>
                        {
                          monitization === 1 ?
                            (
                              <>
                                <span style={{ marginRight: "5px" }}>Yes</span>
                                <CheckCircle style={{ fontSize: '14px', color: '#2196f3' }} />
                              </>
                            ) :
                            (<AddCircle style={{ fontSize: '14px', color: 'red' }} />)
                        }
                      </span>
                    </div>
                  </div>
                  <div className='info1'>
                    <Image src={usericon} />
                    <div className='card_icons'>
                      <p>subscriber</p>
                      <span>{subscriber}</span>
                    </div>
                  </div>
                  <div className='info1'>
                    <Image src={langguages} />
                    <div className='card_icons'>
                      <p>Language</p>
                      <span>{language}</span>
                    </div>
                  </div>
                  <div className='info1'>
                    <Image src={category} />
                    <div className='card_icons'>
                      <p>category</p>
                      <span>{channel_category}</span>
                    </div>
                  </div>
                </div>
                <div className='product_btn_box'>
                  <span>
                    {
                      favorit == false ?
                        <FavoriteBorder onClick={() => setFavorit(true)} /> :
                        <Favorite onClick={() => setFavorit(false)} />
                    }
                  </span>
                  <Button onClick={() => navigate('/product-details/' + id + "&" + createSlug(title), { replace: true, state: { imgurlPath } })}>Buy Now</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards