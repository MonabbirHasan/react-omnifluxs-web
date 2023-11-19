import React, { useEffect, useState } from 'react';
import Recommendation from '../../components/product_recommendation/Recommendation';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useLocation, useParams } from 'react-router-dom';
import { Box, Button,Rating } from '@mui/material';
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { RingLoader } from 'react-spinners';
import "./ProductDetails.css";
import {
  Facebook,
  Instagram,
  Pinterest,
  ShareSharp,
  Telegram,
  Twitter,
  SentimentNeutral,
  Send,
  Star,
  MoodBad,
  EmojiEmotionsOutlined, 
  LinkOutlined, Label, Payment, MoneyOff, MoneyOutlined, PaymentRounded, AirplaneTicket, AirOutlined, AirplanemodeActive, SendAndArchive, SendAndArchiveTwoTone, SendRounded, SendSharp, SendToMobile
} from '@mui/icons-material';

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${Label[value]}`;
}
const ProductDetails = (props) => {
  let { id } = useParams();
  let locations = useLocation();
  // console.log(locations.state.imgurlPath)

  let [SINGLE_YT_CHANNEL_DATA, setSINGLE_YT_CHANNEL_DATA] = useState([0])
  let [imgurl, setImgurl] = useState([0]);
  let [IMGARR, setIMGARR] = useState([[]]);
  let [Loader, setLoader] = useState(false);

  async function singleData() {
    setLoader(true);
    
    await fetch('http://127.0.0.1:8000/api/access/youtube_channel/' + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setIMGARR(data.data.channel_gallery.split(", "))
        for (var i = 0; i < data.data.channel_gallery.split(", ").length; i++) {
          // console.log(data.data.channel_gallery.split(", ")[i])
        }
        setSINGLE_YT_CHANNEL_DATA(data.data)
        setImgurl(data.data.channel_gallery)
        setLoader(false);
      }).catch((error) => {
        console.error(error);
      });

  }
  useEffect(() => {
    singleData()
  }, [id])
console.log(id)
  const Share_Facebook = (postURL) => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${postURL}`)
  }
  const Share_Instagram = () => { }
  const Share_Telegram = (ShareText,PostURL) => {
    window.open(`https://t.me/share/url?url=${PostURL}&text=${ShareText}`)
  }
  const Share_Twitter = (ShareText,PostURL) => {
    window.open(`http://twitter.com/share?text=${ShareText}&url=${PostURL}&via=atsbyvermouth','','scrollbars=no,menubar=no,height=450,width=650,resizable=yes,toolbar=no,location=no,status=no`); 
  }
  const Share_Pinterest = (ShareText,PostURL,ImgURL) => {
    window.open('https://www.pinterest.com/pin/create/button/?url='+PostURL+'&media='+ImgURL+'&description='+ShareText+'')
  }
  const Share_ShareSharp = async (ShareText,PostURL) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "OmniFluxs",
          text: ShareText,
          url: PostURL
        });
        console.log("Shared successfully");
      } catch (error) {
        console.error("Share failed:", error);
      }
    } else {
      // The navigator.share API is not supported, provide a fallback
      shareButton.addEventListener("click", () => {
        alert("Sharing is not supported on this device/browser.");
      });
    }
  }
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
  const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };

  const [value, setValue] =useState(2);
  const [hover, setHover] =useState(-1);
  return (
    <>
      <Header />
      <div className='ProductDetails_page'>
        <div className="container">
          <div className="product_details_wrapper">
            <div className="row">
              <div className="col-md-7 col-sm col-lg-7">
                <div className="product_details_left">
                  {/* product_slider_box start here */}
                  <div className="product_slider_box">
                    <div className="main_thumbnail">
                      <Carousel
                        responsive={responsive}
                        draggable={true}
                        showDots={true}
                        ssr={true}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={4000}
                        transitionDuration={3000}
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                      >
                        {Loader == true ?
                          <>
                            <div style={{
                              justifyContent: "center",
                              display: 'flex',
                              alignItems: "center"
                            }} className="loading">
                              <RingLoader
                                data-testid="loader"
                                aria-label="Loading Spinner"
                                size={150}
                                color="green"
                                loading={Loader}
                              />
                            </div>
                          </>
                          : IMGARR.map((imG) => (
                            <>
                              <div className='slideritem' key={imG.id} >
                                <LazyLoadImage src={locations.state.imgurlPath + "/" + imG} />
                              </div>

                            </>
                          ))
                        }
                      </Carousel>
                    </div>
                    <p>{ }</p>
                    <div className="product_share_option">
                      <span onClick={() => Share_Facebook(location.href)}><Facebook /></span>
                      <span onClick={() => Share_Instagram()}><Instagram /></span>
                      <span onClick={() => Share_Telegram(SINGLE_YT_CHANNEL_DATA.channel_title,location.href)}><Telegram /></span>
                      <span onClick={() => Share_Twitter(SINGLE_YT_CHANNEL_DATA.channel_title,location.href)}><Twitter /></span>
                      <span onClick={() => Share_Pinterest(SINGLE_YT_CHANNEL_DATA.channel_title,location.href,"https://omnifluxs.com/logo.png")}><Pinterest /></span>
                      <span onClick={() => Share_ShareSharp(SINGLE_YT_CHANNEL_DATA.channel_title,location.href)}><ShareSharp /></span>
                    </div>
                  </div>
                  {/* product description section start here  */}
                  <div className="product_description">
                    <h3 className='product_title'>{SINGLE_YT_CHANNEL_DATA.channel_title}</h3>
                    <p
                      className='youtube channel description'
                      contentEditable='false'
                      dangerouslySetInnerHTML={{ __html: SINGLE_YT_CHANNEL_DATA.channel_description }}
                    />
                  </div>
                  {/* product description section end here  */}
                </div>
              </div>
              <div className="col-md-5 col-sm col-lg-5">
                <div className="product_details_right">
                  <h3 className='product_summary'>product summary</h3>
                  <div className="summary_box">

                    <div className='product_summary_item'>
                      <span>Status</span>
                      {SINGLE_YT_CHANNEL_DATA.channel_available == 1 ?
                        <span style={{ color: "green" }}>Available</span>
                        : <span style={{ color: "red" }}>Not Available</span>}
                    </div>
                    <div className='product_summary_item'>
                      <span>channel name</span>
                      <span>{SINGLE_YT_CHANNEL_DATA.channel_name}</span>
                    </div>
                    <div className='product_summary_item'>
                      <span>Listing ID</span>
                      <span>{SINGLE_YT_CHANNEL_DATA.channel_listing_id}</span>
                    </div>
                    <div className='product_summary_item'>
                      <span>Subscribers</span>
                      <span>{SINGLE_YT_CHANNEL_DATA.channel_subscriber}</span>
                    </div>
                    <div className='product_summary_item'>
                      <span>Creation Date</span>
                      <span>{SINGLE_YT_CHANNEL_DATA.channel_creation_date}</span>
                    </div>
                    <div className='product_summary_item'>
                      <span>Category</span>
                      <span>Technology</span>
                    </div>
                    <div className='product_summary_item'>
                      <span>channel language</span>
                      <span>{SINGLE_YT_CHANNEL_DATA.channel_language}</span>
                    </div>
                    <div className='product_summary_item'>
                      <span>channel content type</span>
                      <span>{SINGLE_YT_CHANNEL_DATA.channel_content_type}</span>
                    </div>
                    <div className='product_summary_item'>
                      <span>channel channel type</span>
                      <span>{SINGLE_YT_CHANNEL_DATA.channel_channel_type}</span>
                    </div>
                    <div className='product_summary_item'>
                      <span>Audience Age(Most)</span>
                      <span>{SINGLE_YT_CHANNEL_DATA.channel_audience_ages} age</span>
                    </div>
                    <div className='product_summary_item'>
                      <span>Real time Views</span>
                      <span>{SINGLE_YT_CHANNEL_DATA.channel_real_time_view}</span>
                    </div>
                    <div className='product_summary_item'>
                      <span>Views(Last 28 Days)</span>
                      <span>{SINGLE_YT_CHANNEL_DATA.channel_last_month_view}</span>
                    </div>
                    <div className='product_summary_item'>
                      <span>Life Time Views</span>
                      <span>{SINGLE_YT_CHANNEL_DATA.channel_life_time_view}</span>
                    </div>
                    <div className='product_summary_item'>
                      <span>Active Copyright Strike</span>
                      <span>{SINGLE_YT_CHANNEL_DATA.channel_active_copyright_strike}</span>
                    </div>
                    <div className='product_summary_item'>
                      <span>Community Strike</span>
                      <span>{SINGLE_YT_CHANNEL_DATA.channel_communtiy_strike}</span>
                    </div>
                    <div className='product_summary_item'>
                      <span>Monetized</span>
                      <span>{SINGLE_YT_CHANNEL_DATA.channel_monetized==1?"Yes":""}</span>
                    </div>
                    <div className='product_summary_item'>
                      <span>Revenue(Last 28 Days)</span>
                      <span>{SINGLE_YT_CHANNEL_DATA.channel_last_month_revenue}</span>
                    </div>
                    <div className='product_summary_item'>
                      <span>Life Time Revenue</span>
                      <span>{SINGLE_YT_CHANNEL_DATA.channel_life_time_revenue}</span>
                    </div>
                    <div className='product_summary_item'>
                      <span>Channel Link</span>
                      <span>{SINGLE_YT_CHANNEL_DATA.channel_url}
                        <a style={{ marginLeft: "15px" }} href={SINGLE_YT_CHANNEL_DATA.channel_url}><LinkOutlined /></a>
                      </span>
                    </div>
                    <div className='product_summary_item'>
                      <span>Channel Price</span>
                      <span>{SINGLE_YT_CHANNEL_DATA.channel_price}</span>
                    </div>
                    <div className='mt-3'>
                      <Button fullWidth variant='contained' startIcon={<PaymentRounded/>}>Pay Now</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* product review section start here */}
            <section className='user_review mt-5'>
              <h3>was this channel is good</h3>
              <div className="feeback_btn_box">
                {/* <Button startIcon={<EmojiEmotionsOutlined />}>Yes, it was greet!</Button>
                <Button startIcon={<SentimentNeutral />}>sort, Thanks!</Button>
                <Button startIcon={<MoodBad />}>Yes, it was greet!</Button> */}
                <span className='rating'>
                  <Box
                    sx={{
                      width: 150,
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Rating
                      name="hover-feedback"
                      value={value}
                      precision={0.5}
                      getLabelText={getLabelText}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                      onChangeActive={(event, newHover) => {
                        setHover(newHover);
                      }}
                      emptyIcon={<Star style={{ opacity: .5 }} fontSize="inherit" />}
                    />
                    {value !== null && (
                      <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                    )}
                  </Box>
                </span>
                
              </div>
              <div className="feeback_manual">
                <div class="form-group">
                  <textarea class="form-control" name="" id="" placeholder='Please Write Your Feedback!' rows="3"></textarea>
                </div>
                <Button className='mt-1' variant="contained" endIcon={<Send />}>
                  submit
                </Button>
              </div>
            </section>
            {/* product review section end here */}
            {/* Recommendation */}
            <Recommendation />
            {/* Recommendation */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ProductDetails