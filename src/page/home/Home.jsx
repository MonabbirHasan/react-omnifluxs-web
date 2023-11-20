import React, { useState, useEffect } from "react";

import {
  Alert,
  Box,
  CircularProgress,
  IconButton,
  Typography,
  Button as MuiButton,
} from "@mui/material";
import {
  Check,
  CheckCircleOutlineRounded,
  DesignServices,
  SearchRounded,
} from "@mui/icons-material";
import smartphone_social_media from "../../assets/img/smartphone-social-media.png";
import PaymentSupport from "../../components/payments_support/PaymentSupport";
import writing_translation from "../../assets/img/writing-translation.svg";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import online_marketing from "../../assets/img/online-marketing.svg";
import graphics_design from "../../assets/img/graphics-design.svg";
// import Background from "../../components/ReactPerticle/Background";
import { LazyLoadImage } from "react-lazy-load-image-component";
import programmingimg from "../../assets/img/programming.svg";
import PageTitle from "../../components/Page_title/PageTitle";

import businessimg from "../../assets/img/business.svg";
import Cards from "../../components/product-card/Cards";
import Adds from "../../components/advertisement/Adds";
import Counter from "../../components/counter/Counter";
import youtubeimg from "../../assets/img/youtube.png";
import Secure from "../../components/secure/Secure";
import Says from "../../components/ClientsSay/Says";
import Teams from "../../components/Teams/Teams";
import Footer from "../../common/footer/Footer";
import Header from "../../common/header/Header";
import Backdrop from "@mui/material/Backdrop";
import "react-multi-carousel/lib/styles.css";
import { RingLoader } from "react-spinners";
import Carousel from "react-multi-carousel";
import { NavLink } from "react-router-dom";
import "../../assets/css/media_query.css";
import YouTube from "react-youtube";
import "./home.css";
const Home = () => {
  let [YOUTUBE_CHANNEL_DATA, setYOUTUBE_CHANNEL_DATA] = useState([]);
  let [CLIENT_REVIEW_DATA, setCLIENT_REVIEW_DATA] = useState([]);
  let [Data_Loader, setLoader] = useState(false);
  let [imgurl, setImgurl] = useState("");

  /************************************************
   * REACT MULTISLIDER JSON DATA CODE HERE
   * **********************************************/
  const SliderData = [
    {
      id: 1,
      title: "Build Your Brand",
      subtitle: "Logo Design",
      img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161257/logo-design-2x.png",
    },
    {
      id: 2,
      title: "reach more customers",
      subtitle: "social media",
      img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161249/social-2x.png",
    },
    {
      id: 3,
      title: "Design your website",
      subtitle: "Tech stack",
      img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161257/wordpress-2x.png",
    },
    {
      id: 4,
      title: "unlock growth online",
      subtitle: "SEO",
      img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/27f914ed7984fdd2d55aa1fb5e74bd6a-1690384243592/seo-2x.png",
    },
    {
      id: 5,
      title: "Ignite Your Online Presence",
      subtitle: "facebook",
      img: "https://img.freepik.com/free-vector/flat-mobile-with-facebook-notifications_23-2147826329.jpg?w=740&t=st=1699935635~exp=1699936235~hmac=1e818abfa3a0df1f9b76434426fa377788a484d9631c3a8c3c055c04d9a2e8f1",
    },
    {
      id: 6,
      title: "Mastering the Art of Online Growth",
      subtitle: "Youtube",
      img: "https://img.freepik.com/free-vector/youtube-player-device-with-flat-design_23-2147844065.jpg?w=740&t=st=1699935815~exp=1699936415~hmac=6d1c4f75c6d89ec73b10953a2e466207377d0d9260ad2fd0aa28923c24bb9628",
    },
    {
      id: 7,
      title: "Skyrocket Your Presence",
      subtitle: "instagram",
      img: "https://img.freepik.com/free-vector/colorful-icons-set-design_79603-1268.jpg?w=740&t=st=1699935846~exp=1699936446~hmac=174d107cae2db65d6b4d176fe36eee8596c8f39c9a2d44e18a255d0a290003cb",
    },
  ];
  /************************************************
   * REACT MULTISLIDER RESPONSIVE CODE HERE
   * **********************************************/
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
  /************************************************
   * YOUTUBE CHANNEL API START HERE
   * **********************************************/
  // useEffect(() => {
  //   setLoader(true);
  //   fetch("http://127.0.0.1:8000/api/access/youtube_channel", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setLoader(false);
  //       setImgurl(data.imageUrl);
  //       setYOUTUBE_CHANNEL_DATA(data.data);
  //       // console.log(data.data)
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       setLoader(false); // Turn off loading on error
  //     });
  // }, []);
  /************************************************
   * CLIENT REVIEW API CALL START HERE
   * **********************************************/
  // const CLIENT_REVIEW = new CLIENT_REVIEWS(
  //   "http://127.0.0.1:8000/api/access/client_review"
  // );
  // CLIENT_REVIEW.get_client_review().then((data) => {
  //   setCLIENT_REVIEW_DATA(data.data);
  // });
  // /************************************************
  //  * CIRCULAR PORGRESS IN ADMIN CODE START HERE
  //  * **********************************************/
  // let [open, setOpen] = useState(true);
  // const handleClose = () => {
  //   setOpen(false);
  // };
  // setTimeout(() => {
  //   setOpen(false);
  // }, 4000);
  /**********************************************
   * CIRCULAR PORGRESS IN ADMIN CODE END HERE
   ***********************************************/
  return (
    <>
      <div style={{ zIndex: "10000" }}>
        {/* <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop> */}
      </div>
      <section className="homepage">
        <Header />
        <div className="perticles">
          {/* <Background /> */}
        </div>
        <div className="banner" style={{ zIndex: "1", position: "relative" }}>
          <p
            className="banner_ver_text"
            style={{
              float: "right",
              writingMode: "vertical-lr",
              padding: "20px 0",
            }}
          >
            welcome to our fuccking marketplace
          </p>
          <div className="banner-left">
            <div className="banner_headline">
              <h1>Find the right Social service, right away</h1>
              <p>
                welcome to account omnifluxs.com we are here to help you to grow
                your business, we are most trusted account seller
              </p>
            </div>
            <div className="banner_button_box">
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Search for any service..."
                  aria-label="Search for any service..."
                  aria-describedby="basic-addon1"
                />
                <InputGroup.Text
                  id="basic-addon1"
                  style={{ backgroundColor: "#19A463" }}
                >
                  <IconButton>
                    <SearchRounded htmlColor="white" />
                  </IconButton>
                </InputGroup.Text>
              </InputGroup>
              <div className="banner_left_btn_box">
                <Box>
                  <Button variant="dark">YouTube</Button>
                  <Button variant="dark">Facebook</Button>
                  <Button variant="dark">Instagram</Button>
                  <Button variant="dark">Website Design</Button>
                  <Button variant="dark">LogoDesign</Button>
                  <Button variant="dark">Al Services</Button>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home_content">
        <Container>
          {/*******************************************
           * HOME PAGE SERVICE SECTION START HERE
           ********************************************/}
          <PageTitle title={"Popular services"} />
          <section className="services_section mt-5">
            <Carousel
              swipeable={false}
              draggable={false}
              //  showDots={true}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              // infinite={true}
              autoPlay={true}
              // autoPlaySpeed={1000}
              // keyBoardControl={true}
              // customTransition="all .5"
              // transitionDuration={500}
              removeArrowOnDeviceType={["tablet", "mobile"]}
            >
              {SliderData.map((items) => (
                <div className="multi_slider_servie" key={items.id}>
                  <div
                    style={{
                      position: "absolute",
                      padding: "10px",
                    }}
                  >
                    <NavLink>
                      <Typography
                        textTransform={"capitalize"}
                        fontSize={"16px"}
                        color={"white"}
                        className="title"
                      >
                        {items.title}
                      </Typography>
                      <Typography
                        variant="h4"
                        textTransform={"capitalize"}
                        fontSize={"1.2rem"}
                        color={"white"}
                        className="subtitle"
                      >
                        {items.subtitle}
                      </Typography>
                    </NavLink>
                  </div>
                  <LazyLoadImage src={items.img} />
                </div>
              ))}
            </Carousel>
          </section>
          {/**************************************
           * BEST PARTS SECTION START HERE
           ***************************************/}
          <section className="The_best_part">
            <div className="best_part_left col-md-7">
              <Typography
                variant="h4"
                fontSize={28}
                padding={1}
                paddingBottom={3}
                textTransform={"capitalize"}
              >
                The best part? Everything.
              </Typography>
              <Box
                style={{
                  padding: "10px",
                }}
              >
                <Typography
                  padding={0}
                  fontSize={20}
                  textTransform={"capitalize"}
                >
                  <CheckCircleOutlineRounded htmlColor="#444" />
                  <span style={{ paddingLeft: "5px" }}>
                    Stick to your budget
                  </span>
                </Typography>
                <Typography fontSize={16} pt={1}>
                  Find the right service for every price point. No hourly rates,
                  just project-based pricing.
                </Typography>
              </Box>
              <Box
                style={{
                  padding: "10px",
                }}
              >
                <Typography padding={0} fontSize={20}>
                  <CheckCircleOutlineRounded htmlColor="#444" />
                  <span style={{ paddingLeft: "5px" }}>
                    Get quality work done quickly
                  </span>
                </Typography>
                <Typography fontSize={16} pt={1}>
                  Hand your project over to a talented freelancer in minutes,
                  get long-lasting results.
                </Typography>
              </Box>
              <Box
                style={{
                  padding: "10px",
                }}
              >
                <Typography padding={0} fontSize={20}>
                  <CheckCircleOutlineRounded htmlColor="#444" />
                  <span style={{ paddingLeft: "5px" }}>
                    Pay when you're happy
                  </span>
                </Typography>
                <Typography fontSize={16} pt={1}>
                  Upfront quotes mean no surprises. Payments only get released
                  when you approve.
                </Typography>
              </Box>
              <Box
                style={{
                  padding: "10px",
                }}
              >
                <Typography padding={0} fontSize={20}>
                  <CheckCircleOutlineRounded htmlColor="#444" />
                  <span style={{ paddingLeft: "5px" }}>
                    Count on 24/7 support
                  </span>
                </Typography>
                <Typography fontSize={16} pt={1}>
                  Our round-the-clock support team is available to help anytime,
                  anywhere.
                </Typography>
              </Box>
            </div>
            <div className="best_part_right col-md-5">
              <video
                autoPlay={true}
                src="https://v1.cdnpk.net/videvo_files/video/free/video0541/large_watermarked/_import_6316e797b59450.34484310_FPpreview.mp4"
              ></video>
            </div>
          </section>
          {/****************************************
           *ALL SERVICE SECTION START HERE
           *****************************************/}
          <section className="home_page_all_services mt-5">
            <PageTitle title={"You need it, we've got it"} />
            <div className="service_grid">
              <div className="service_item">
                <LazyLoadImage src={graphics_design} />
                <Typography mt={3}>Graphics & Design</Typography>
              </div>
              <div className="service_item">
                <LazyLoadImage src={online_marketing} />
                <Typography mt={3}>Digital Marketing</Typography>
              </div>
              <div className="service_item">
                <LazyLoadImage src={writing_translation} />
                <Typography mt={3}>Writing & Translation</Typography>
              </div>
              <div className="service_item">
                <LazyLoadImage
                  src={"https://img.icons8.com/color/48/programming--v1.png"}
                />
                <Typography mt={3}>Programming & Tech</Typography>
              </div>
              <div className="service_item">
                <LazyLoadImage
                  src={
                    "https://img.icons8.com/cute-clipart/64/facebook-new.png"
                  }
                />
                <Typography mt={3}>facebook</Typography>
              </div>
              <div className="service_item">
                <LazyLoadImage
                  src={"https://img.icons8.com/clouds/100/youtube-play.png"}
                />
                <Typography mt={3}>youtube</Typography>
              </div>
              <div className="service_item">
                <LazyLoadImage
                  src={
                    "https://img.icons8.com/bubbles/50/instagram-new--v2.png"
                  }
                />
                <Typography mt={3}>instagram</Typography>
              </div>
              <div className="service_item">
                <LazyLoadImage
                  src={"https://img.icons8.com/cute-clipart/64/twitter.png"}
                />
                <Typography mt={3}>twitter</Typography>
              </div>
              <div className="service_item">
                <LazyLoadImage
                  src={
                    "https://img.icons8.com/external-filled-outline-design-circle/64/external-Website-Design-digital-service-filled-outline-design-circle.png"
                  }
                />
                <Typography mt={3}>website design</Typography>
              </div>
              <div className="service_item">
                <LazyLoadImage
                  src={
                    "https://img.icons8.com/external-avoca-kerismaker/64/external-Mobile-apps-business-avoca-kerismaker.png"
                  }
                />
                <Typography mt={3}>mobile apps</Typography>
              </div>
              <div className="service_item">
                <LazyLoadImage src={programmingimg} />
                <Typography mt={3}>youtube monetization</Typography>
              </div>
              <div className="service_item">
                <LazyLoadImage
                  src={
                    "https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-handshake-achievements-flaticons-flat-flat-icons-2.png"
                  }
                />
                <Typography mt={3}>business</Typography>
              </div>
            </div>
          </section>
          {/**************************************
           *SOLUTION SECTION START HERE
           ***************************************/}
          <section className="solution_section">
            <div className="row">
              <div className="solution_left col-md-7">
                <Typography variant="h4" color={"white"} fontSize={28} px={2}>
                  Omnifluxs -{" "}
                  <span style={{ fontSize: "14px" }}>Business Solution</span>
                </Typography>
                <Typography
                  variant="h5"
                  color="white"
                  pt={5}
                  pb={1}
                  px={1}
                  fontWeight={"800"}
                  fontSize={"2rem"}
                  textTransform={"capitalize"}
                >
                  Advanced solutions and professional talent for businesses
                </Typography>
                <Box
                  style={{
                    padding: "10px",
                    color: "white",
                    paddingBottom: "20px",
                  }}
                >
                  <Typography padding={0} fontSize={18}>
                    <CheckCircleOutlineRounded htmlColor="#fff" />
                    <span style={{ padding: "5px" }}>OmniFluxs Paid Plan</span>
                  </Typography>
                  <Typography fontSize={14} pt={1} textTransform={"capitalize"}>
                    Access top freelancers and professional business tools for
                    any project
                  </Typography>
                </Box>
                <Box
                  style={{
                    padding: "10px",
                    color: "white",
                    paddingBottom: "20px",
                  }}
                >
                  <Typography padding={0} fontSize={18}>
                    <CheckCircleOutlineRounded htmlColor="#fff" />
                    <span style={{ padding: "5px" }}>OmniFluxs Earning</span>
                  </Typography>
                  <Typography fontSize={14} pt={1} textTransform={"capitalize"}>
                    Make Your Profile start Earning
                  </Typography>
                </Box>
                <Box
                  style={{
                    padding: "10px",
                    color: "white",
                    paddingBottom: "20px",
                  }}
                >
                  <Typography padding={0} fontSize={18}>
                    <CheckCircleOutlineRounded htmlColor="#fff" />
                    <span style={{ padding: "5px" }}>
                      OmniFluxs Lifetime Support
                    </span>
                  </Typography>
                  <Typography fontSize={14} pt={1} textTransform={"capitalize"}>
                    we ensure you that we are always here to help you
                  </Typography>
                </Box>
              </div>
              <div className="solution_right col-md-5">
                <LazyLoadImage src={smartphone_social_media} />
              </div>
            </div>
          </section>
          {/***************************************
           *BUY SOMTHING SECTION START HERE
           ****************************************/}
          <section className="buy_somthing_section mt-5">
            <div className="row">
              <div className="buy_somthing_left col-md-8">
                <Typography variant="h4" color={"white"} fontSize={28} px={2}>
                  Omnifluxs -{" "}
                  <span style={{ fontSize: "14px" }}>Service Solution</span>
                </Typography>
                <Typography
                  variant="h5"
                  color="white"
                  pt={5}
                  pb={1}
                  px={1}
                  fontWeight={"800"}
                  fontSize={"2rem"}
                  textTransform={"capitalize"}
                >
                  Buy an incredible Service
                </Typography>
                <i>
                  <Typography
                    pl={1}
                    color="white"
                    fontWeight={"400"}
                    fontSize={"1.5rem"}
                    textTransform={"capitalize"}
                  >
                    in a minutes
                  </Typography>
                </i>
                <MuiButton
                  variant="contained"
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    "&:hover": { backgroundColor: "black" },
                    ml: 1,
                    mt: 3,
                  }}
                >
                  get start
                </MuiButton>
              </div>
              <div className="buy_somthing_right col-md-4">
                <LazyLoadImage
                  src={
                    "https://img.freepik.com/premium-vector/subscribe-youtube-channel-banner-with-blurry-glass-3d-background_92086-335.jpg?size=626&ext=jpg&uid=R72400773&ga=GA1.1.2086792324.1699935592&semt=sph"
                  }
                />
              </div>
            </div>
          </section>
          {/* <div className="row">
            {Data_Loader == true ? (
              <>
                <div
                  style={{
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                  }}
                  className="loading"
                >
                  <RingLoader
                    data-testid="loader"
                    aria-label="Loading Spinner"
                    size={150}
                    color="green"
                    loading={Data_Loader}
                  />
                </div>
              </>
            ) : YOUTUBE_CHANNEL_DATA.length > 0 ? (
              YOUTUBE_CHANNEL_DATA.slice(0, 8).map((item) => (
                <div className="col-md-3 col-sm-1 col-lg-3">
                  <Cards
                    id={item.id}
                    key={item.id}
                    thumbnail={"http://localhost:5173/src/assets/img/img7.jpg"}
                    imgurlPath={imgurl}
                    SlideUrl={item.channel_gallery.split(", ")}
                    old_price={item.channel_old_price}
                    new_price={item.channel_price}
                    badges={item.channel_badge}
                    pr_view={item.channel_like}
                    upload_time={item.channel_upload_date}
                    title={item.channel_title}
                    listing_id={item.channel_listing_id}
                    description={item.channel_description}
                    monitization={item.channel_monetized}
                    subscriber={item.channel_subscriber}
                    language={item.channel_language}
                    channel_category={item.channel_category}
                  />
                </div>
              ))
            ) : (
              <Alert severity="error" color="success">
                Data Not Found!
              </Alert>
            )}
          </div> */}
          {/* <div className="view_more_button_box">
            <Button>
              <NavLink to={"/view-all"}>View More product</NavLink>
            </Button>
          </div> */}
          {/* advertisement section start here */}
          {/* <Adds /> */}
          {/* advertisement section end herer */}
          {/* counter section start here */}
          {/* <Counter /> */}
          {/* counter section end here */}
          {/* Client Say section start here */}
          <Says />
          {/* Client Say section end here */}
          {/* payment support section start here */}
          <PaymentSupport />
          {/* payment support section end here */}
          {/* our teams section start here */}
          <Teams />
          {/* our teams section end here */}
          {/* secure section start here */}
          <Secure />
          {/* secure section end here */}
          {/* LatestBlogs section start here */}
          {/* LatestBlogs section end here */}
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Home;
