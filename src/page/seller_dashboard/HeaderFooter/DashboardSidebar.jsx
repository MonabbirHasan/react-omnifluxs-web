import React, { useState } from "react";
import SellInstagram from "../components/sell_instagram/SellInstagram";
import SellTelegram from "../components/sell_telegram/SellTelegram";
import SellFacebook from "../components/sell_facebook/SellFacebook";
import SellYoutube from "../components/sell_youtube/SellYoutube";
import SellTwitter from "../components/sell_twitter/SellTwitter";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import DashboardPage from "../components/Dashboard/Dashboard";
import UsersOrder from "../components/user-order/UsersOrder";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Carousel } from "react-responsive-carousel";
import CssBaseline from "@mui/material/CssBaseline";
import Funds from "../components/Funds/Funds";
import ListItem from "@mui/material/ListItem";
import Collapse from "@mui/material/Collapse";
import Posts from "../components/posts/Posts";
import { IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import "./dashboard.css";
import {
  AccountBalanceWallet,
  AdsClick,
  ArrowDropDown,
  BubbleChart,
  CardGiftcard,
  Close,
  CommentBankOutlined,
  Dashboard,
  DeliveryDiningRounded,
  DiscountOutlined,
  Facebook,
  FavoriteBorder,
  GamepadSharp,
  Instagram,
  LeakAddRounded,
  LocalShippingOutlined,
  Money,
  Newspaper,
  NewspaperSharp,
  OndemandVideoOutlined,
  Payment,
  PeopleAltRounded,
  Pin,
  PinDrop,
  PinDropOutlined,
  PinTwoTone,
  Sell,
  Settings,
  ShoppingBag,
  ShoppingBasket,
  Telegram,
  Twitter,
  Web,
  YouTube,
} from "@mui/icons-material";
import SellWebsite from "../components/sell_website/SellWebsite";
export default function DashboardSidebar(props) {
  let [pageHandler, setPageHandler] = useState("dashboard");
  let [BlogDropDown, setBlogDropDown] = useState(false);
  let [SellDropDown, setSellDropDown] = useState(false);
  let [UserOption, setUserOption] = useState(false);
  let [DropDown, setDropDown] = useState(false);
  /**********************************************
   * SIDEBAR CLOSE FUNCTION START HERE
   **********************************************/
  const handleItemClick = () => {
    props.closeSidebar();
  };
  const drawerWidth = 260;
  /**********************************************
   * SIDEBAR CLOSE FUNCTION END HERE
   **********************************************/
  return (
    <Box sx={{ display: "flex" }} className="drawer_sidebar">
      <CssBaseline />
      <Drawer
        open={props.isSidebarOpen ? open : ""}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        anchor="left"
        closeAfterTransition
      >
        <div className="drawerHeader">
          <div className="sidebarLogo">
            <h3>
              <NavLink to={"/"}>
                Omni <p>Fluxs</p>
              </NavLink>
            </h3>
            <IconButton onClick={handleItemClick} className="close_btn">
              <Close />
            </IconButton>
          </div>
          <div
            className="m-0 p-0 drawerHeader_slider"
            style={{ height: "185px" }}
          >
            <Carousel
              centerSlidePercentage={false}
              useKeyboardArrows={false}
              swipeScrollTolerance={5}
              showIndicators={false}
              dynamicHeight={false}
              transitionTime={1000}
              emulateTouch={true}
              infiniteLoop={true}
              showArrows={false}
              centerMode={false}
              showStatus={false}
              stopOnHover={true}
              autoFocus={true}
              swipeable={true}
              autoPlay={true}
              interval={10000}
            >
              <div>
                <LazyLoadImage
                  title=""
                  className="dashboard_author_img"
                  src="https://i.pinimg.com/originals/b2/bd/23/b2bd236fa538dc64508f51bae4417f8e.png"
                />
              </div>
              <div>
                <LazyLoadImage
                  title=""
                  className="dashboard_author_img"
                  src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/281942339/original/786e203104c05995a300f6c718ef599505f500c9/design-facebook-ads-design-product-banner-and-social-media.jpg"
                />
              </div>
              <div>
                <LazyLoadImage
                  title=""
                  className="dashboard_author_img"
                  src="https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1694232489/catalog/1699328654493175808/wibkokrlwuiwc6o7tiz9.jpg"
                />
              </div>
            </Carousel>
          </div>
        </div>
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => setPageHandler("dashboard")}>
              <ListItemIcon>
                <Dashboard />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          {/***********************************************
           *  DROPDOWN SECTION START HERE
           ***********************************************/}
          <ListItem disablePadding>
            <ListItemButton
              onClick={() =>
                DropDown == false ? setDropDown(true) : setDropDown(false)
              }
            >
              <ListItemIcon>
                <PeopleAltRounded />
              </ListItemIcon>
              <ListItemText primary="Customer" />
              <ArrowDropDown />
            </ListItemButton>
          </ListItem>
          <Collapse in={DropDown ? open : ""} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => setPageHandler("user-order")}
              >
                <ListItemIcon>
                  <LocalShippingOutlined />
                </ListItemIcon>
                <ListItemText
                  style={{ textTransform: "capitalize" }}
                  primary="user order"
                />
              </ListItemButton>
            </List>
            <ListItem disablePadding disabled={true}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <FavoriteBorder />
                </ListItemIcon>
                <ListItemText primary="favourite" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding disabled={true}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <ShoppingBasket />
                </ListItemIcon>
                <ListItemText primary="product cart" />
              </ListItemButton>
            </ListItem>
            <List hidden component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <BubbleChart />
                </ListItemIcon>
                <ListItemText
                  style={{ textTransform: "capitalize" }}
                  primary="user order status"
                />
              </ListItemButton>
            </List>
          </Collapse>
          {/***********************************************
           *  CUSTOMER DROPDOWN SECTION END HERE
           ***********************************************/}
          {/***********************************************
           *  BLOGS DROPDOWN SECTION START HERE
           ***********************************************/}
          <ListItem disablePadding>
            <ListItemButton
              onClick={() =>
                BlogDropDown == false
                  ? setBlogDropDown(true)
                  : setBlogDropDown(false)
              }
            >
              <ListItemIcon>
                <Newspaper />
              </ListItemIcon>
              <ListItemText primary="Blog Posts" />
              <ArrowDropDown />
            </ListItemButton>
          </ListItem>
          <Collapse in={BlogDropDown ? open : ""} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => setPageHandler("posts")}
              >
                <ListItemIcon>
                  <NewspaperSharp />
                </ListItemIcon>
                <ListItemText
                  style={{ textTransform: "capitalize" }}
                  primary="upload post"
                />
              </ListItemButton>
            </List>
            <List component="div" disablePadding disabled={true}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <CommentBankOutlined />
                </ListItemIcon>
                <ListItemText
                  style={{ textTransform: "capitalize" }}
                  primary="view comments"
                />
              </ListItemButton>
            </List>
          </Collapse>
          {/***********************************************
           *  BLOGS DROPDOWN SECTION END HERE
           ***********************************************/}
          {/***********************************************
           *  SELLING SECTION START HERE
           ***********************************************/}
          <ListItem disablePadding>
            <ListItemButton
              onClick={() =>
                SellDropDown == false
                  ? setSellDropDown(true)
                  : setSellDropDown(false)
              }
            >
              <ListItemIcon>
                <Sell />
              </ListItemIcon>
              <ListItemText primary="Sellings" />
              <ArrowDropDown />
            </ListItemButton>
          </ListItem>
          <Collapse in={SellDropDown ? open : ""} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => setPageHandler("youtube")}
              >
                <ListItemIcon>
                  <YouTube />
                </ListItemIcon>
                <ListItemText
                  style={{ textTransform: "capitalize" }}
                  primary="youtube"
                />
              </ListItemButton>
            </List>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => setPageHandler("facebook")}
              >
                <ListItemIcon>
                  <Facebook />
                </ListItemIcon>
                <ListItemText
                  style={{ textTransform: "capitalize" }}
                  primary="facebook"
                />
              </ListItemButton>
            </List>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => setPageHandler("twitter")}
              >
                <ListItemIcon>
                  <Twitter />
                </ListItemIcon>
                <ListItemText
                  style={{ textTransform: "capitalize" }}
                  primary="twitter"
                />
              </ListItemButton>
            </List>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => setPageHandler("instagram")}
              >
                <ListItemIcon>
                  <Instagram />
                </ListItemIcon>
                <ListItemText
                  style={{ textTransform: "capitalize" }}
                  primary="Instagram"
                />
              </ListItemButton>
            </List>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => setPageHandler("telegram")}
              >
                <ListItemIcon>
                  <Telegram />
                </ListItemIcon>
                <ListItemText
                  style={{ textTransform: "capitalize" }}
                  primary="Telegram"
                />
              </ListItemButton>
            </List>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <GamepadSharp />
                </ListItemIcon>
                <ListItemText
                  style={{ textTransform: "capitalize" }}
                  primary="BGMI"
                />
              </ListItemButton>
            </List>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => setPageHandler("website")}
              >
                <ListItemIcon>
                  <Web />
                </ListItemIcon>
                <ListItemText
                  style={{ textTransform: "capitalize" }}
                  primary="website"
                />
              </ListItemButton>
            </List>
          </Collapse>
          {/***********************************************
           *  SELLING SECTION END HERE
           ***********************************************/}

          {/************************************
           * seller OPTIONS START HERE
           * **********************************/}
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                UserOption == false
                  ? setUserOption(true)
                  : setUserOption(false);
              }}
            >
              <ListItemIcon>
                <DeliveryDiningRounded />
              </ListItemIcon>
              <ListItemText primary="seller option" />
              <ArrowDropDown />
            </ListItemButton>
          </ListItem>
          <Collapse in={UserOption ? open : ""} timeout="auto" unmountOnExit>
            <List>
              <ListItem disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <ShoppingBag />
                  </ListItemIcon>
                  <ListItemText primary="my cart" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <Payment />
                  </ListItemIcon>
                  <ListItemText primary="pay methods" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={() => setPageHandler("funds")}
                >
                  <ListItemIcon>
                    <Money />
                  </ListItemIcon>
                  <ListItemText primary="funds" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <LocalShippingOutlined />
                  </ListItemIcon>
                  <ListItemText primary="my order" />
                </ListItemButton>
              </ListItem>
            </List>
          </Collapse>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AdsClick />
              </ListItemIcon>
              <ListItemText primary="Pin Your Product" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DiscountOutlined />
              </ListItemIcon>
              <ListItemText primary="create offer" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CardGiftcard />
              </ListItemIcon>
              <ListItemText primary="create voucher" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountBalanceWallet />
              </ListItemIcon>
              <ListItemText primary="withdrawal" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LeakAddRounded />
              </ListItemIcon>
              <ListItemText primary="referral Link" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="sattings" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      {/*************************************
       * RANDER ALL DASHBAORD COMPONENTS
       **************************************/}
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        {pageHandler === "dashboard" ? (
          <DashboardPage />
        ) : pageHandler === "funds" ? (
          <Funds />
        ) : pageHandler === "user-order" ? (
          <UsersOrder />
        ) : pageHandler === "posts" ? (
          <Posts />
        ) : pageHandler === "youtube" ? (
          <SellYoutube />
        ) : pageHandler === "facebook" ? (
          <SellFacebook />
        ) : pageHandler === "twitter" ? (
          <SellTwitter />
        ) : pageHandler === "instagram" ? (
          <SellInstagram />
        ) : pageHandler === "telegram" ? (
          <SellTelegram />
        ) : pageHandler === "website" ? (
          <SellWebsite />
        ) : (
          ""
        )}
      </Box>
      {/********************************************
       * RANDER ALL DASHBAORD COMPONENTS END HERE
       *********************************************/}
    </Box>
  );
}
