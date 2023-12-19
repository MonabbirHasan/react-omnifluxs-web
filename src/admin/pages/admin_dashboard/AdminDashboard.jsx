import React, { useContext, useEffect, useState } from "react";
import "./admin_dashboard.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import {
  Box,
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import {
  AcUnit,
  AccountCircle,
  AccountTree,
  AddBox,
  AddBoxOutlined,
  AdsClick,
  Approval,
  Apps,
  ArrowDropDown,
  Block,
  Category,
  CommentSharp,
  ContactMail,
  Dashboard,
  DeliveryDiningOutlined,
  Diversity1,
  Diversity2,
  EventNote,
  Facebook,
  GolfCourse,
  Groups,
  Inventory2,
  LocalLibrary,
  Mail,
  Menu,
  Message,
  Pages,
  Payment,
  Payments,
  PinDrop,
  ProductionQuantityLimits,
  Receipt,
  RequestPage,
  Reviews,
  Settings,
  SettingsAccessibility,
  SettingsApplications,
  Telegram,
  ThumbUpAlt,
  Twitter,
  Verified,
  VpnKey,
  Web,
  WebStories,
  YouTube,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import {
  DashboardMain,
  EventMangement,
  UsersMangement,
  ReferrMangement,
  BlogsMangement,
  BpostCategoryMagement,
  BlogComments_management,
  BlogLikeManagement,
  OrderMangement,
  ReviewManagement,
  TeamMangement,
  AdvertisementManagments,
  PayRequestManagement,
  AccVerifyManagement,
  ProductPinRequestManagment,
  ClientsMangement,
  ContactMangement,
  MailMangement,
  MessageMangement,
  CourseMangement,
  CommunityMangement,
  PermissionMangement,
  IpBlocManagement,
  MenuTabs,
  SettingMangement,
  AdminProfile,
} from "../../pages";
import Headers from "../../common/header/Headers";
import AdminChats from "../admin_chats/AdminChats";
import Notification from "../notifications/Notification";
const AdminDashboard = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  var [pages, setPages] = useState("dashboard");
  /******************************
   *COLLAPS CONTROL HERE
   ******************************/
  const [ShowBlogsCollaps, setShowBlogsCollaps] = useState(false);
  const [ShowOrderCollaps, setShowOrderCollaps] = useState(false);
  const [ShowPaymentCollaps, setShowPaymentCollaps] = useState(false);
  const [ShowProductCollaps, setShowProductCollaps] = useState(false);
  const [ShowSettingsCollaps, setShowSettingsCollaps] = useState(false);
  const [ShowUsersCollaps, setShowUsersCollaps] = useState(false);
  const [ShowRequestCollaps, setShowRequestCollaps] = useState(false);
  const [ShowCategoriesCollaps, setShowCategoriesCollaps] = useState(false);
  /***********
   *CSS HERE
   ***********/
  const sidebar_menu_item_style = {
    fontSize: "14px",
    textTransform: "capitalize",
  };
  /***************************************************************************
   * SET SET ON LOCAL STORAGE WHEN THE UER ARE CLICKING ON THE SIDE MENU
   ***************************************************************************/
  const Store_State = (pg) => {
    localStorage.setItem("state_pages", JSON.stringify(pg));
  };
  useEffect(() => {
    setPages(JSON.parse(localStorage.getItem("state_pages")));
  }, []);
  /*************************************************
   * UDPATE PAGE ROUTE STATES FROM HEADER TO ADMIN
   *************************************************/
  const updates = () => {
    setPages("admin_profile");
    Store_State("admin_profile");
  };
  const set_notification_page = () => {
    setPages("admin_notification");
    Store_State("admin_notification");
  };
  const redirectChatPage = () => {
    setPages("admin_message");
    Store_State("admin_message");
  };
  return (
    <>
      <div className="admin_dashboard">
        <div className="admin_header">
          <Headers
            updates={updates}
            set_notification_page={set_notification_page}
            redirectChatPage={redirectChatPage}
          />
          <Box>
            <IconButton onClick={handleShow}>
              <Apps htmlColor="black" />
            </IconButton>
          </Box>
        </div>
        <main className="admin_main">
          {/**********************************************
           *RANDER ALL PAGES IN DASHBOARD MAIN START HERE
           *************************************************/}
          {pages === "dashboard" ? (
            <DashboardMain />
          ) : pages === "events" ? (
            <EventMangement />
          ) : pages === "users_management" ? (
            <UsersMangement />
          ) : pages === "refferd_user" ? (
            <ReferrMangement />
          ) : pages === "posts" ? (
            <BlogsMangement />
          ) : pages === "blog_category" ? (
            <BpostCategoryMagement />
          ) : pages === "blog_comments" ? (
            <BlogComments_management />
          ) : pages === "blog_like" ? (
            <BlogLikeManagement />
          ) : pages === "all_orders" ? (
            <OrderMangement />
          ) : pages === "reviews" ? (
            <ReviewManagement />
          ) : pages === "office_teams" ? (
            <TeamMangement />
          ) : pages === "show_ads" ? (
            <AdvertisementManagments />
          ) : pages === "payout_req" ? (
            <PayRequestManagement />
          ) : pages === "acc_verify_req" ? (
            <AccVerifyManagement />
          ) : pages === "prd_pin_req" ? (
            <ProductPinRequestManagment />
          ) : pages === "client_manage" ? (
            <ClientsMangement />
          ) : pages === "contact_info" ? (
            <ContactMangement />
          ) : pages === "mails" ? (
            <MailMangement />
          ) : pages === "messages" ? (
            <MessageMangement />
          ) : pages === "courses" ? (
            <CourseMangement />
          ) : pages === "community_page" ? (
            <CommunityMangement />
          ) : pages === "role_permission" ? (
            <PermissionMangement />
          ) : pages === "ip_blocks" ? (
            <IpBlocManagement />
          ) : pages === "social_service" ? (
            <MenuTabs />
          ) : pages === "all_settings" ? (
            <SettingMangement />
          ) : pages === "admin_profile" ? (
            <AdminProfile />
          ) : pages === "admin_message" ? (
            <AdminChats />
          ) : pages === "admin_notification" ? (
            <Notification />
          ) : (
            "page not found"
          )}
        </main>
      </div>
      {/****************************************
       * OFFCANVAS SIDEBAR MENU START HERE
       *****************************************/}
      <Offcanvas show={show} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            Omni<span style={{ color: "#2197f3" }}>Fluxs</span>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <List>
            <ListItem disableGutters>
              <ListItemButton
                onClick={() => {
                  setPages("dashboard");
                  Store_State("dashboard");
                }}
              >
                <Typography pr={1}>
                  <Dashboard htmlColor="green" />
                </Typography>
                <Typography>Dashboard</Typography>
              </ListItemButton>
            </ListItem>
            <ListItem disableGutters>
              <ListItemButton
                onClick={() => {
                  setPages("events");
                  Store_State("events");
                }}
              >
                <Typography pr={1}>
                  <EventNote htmlColor="green" />
                </Typography>
                <Typography style={sidebar_menu_item_style}>
                  event management
                </Typography>
              </ListItemButton>
            </ListItem>
            <ListItem disableGutters>
              <ListItemButton
                onClick={() =>
                  ShowUsersCollaps === false
                    ? setShowUsersCollaps(true)
                    : setShowUsersCollaps(false)
                }
              >
                <Typography pr={1}>
                  <AccountCircle htmlColor="green" />
                </Typography>
                <Typography style={sidebar_menu_item_style}>
                  user management
                </Typography>
                <Typography>
                  <ArrowDropDown />
                </Typography>
              </ListItemButton>
            </ListItem>
            <Collapse in={ShowUsersCollaps}>
              <ListItem>
                <ListItemButton
                  onClick={() => {
                    setPages("users_management");
                    Store_State("users_management");
                  }}
                >
                  <Typography pr={1}>
                    <Groups htmlColor="black" />
                  </Typography>
                  <Typography style={sidebar_menu_item_style}>
                    all user
                  </Typography>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton
                  onClick={() => {
                    setPages("refferd_user");
                    Store_State("refferd_user");
                  }}
                >
                  <Typography pr={1}>
                    <AccountTree htmlColor="black" />
                  </Typography>
                  <Typography style={sidebar_menu_item_style}>
                    reffared user
                  </Typography>
                </ListItemButton>
              </ListItem>
            </Collapse>
            {/*******************************
             *  BLOGS MENU COLLAPS START HERE
             ********************************/}
            <ListItem disableGutters>
              <ListItemButton
                onClick={() =>
                  ShowBlogsCollaps === false
                    ? setShowBlogsCollaps(true)
                    : setShowBlogsCollaps(false)
                }
              >
                <Typography pr={1}>
                  <Menu htmlColor="green" />
                </Typography>
                <Typography style={sidebar_menu_item_style}>
                  blog management
                </Typography>
                <Typography>
                  <ArrowDropDown />
                </Typography>
              </ListItemButton>
            </ListItem>
            <Collapse in={ShowBlogsCollaps}>
              <ListItem>
                <ListItemButton
                  onClick={() => {
                    setPages("posts");
                    Store_State("posts");
                  }}
                >
                  <Typography pr={1}>
                    <AccountCircle htmlColor="black" />
                  </Typography>
                  <Typography style={sidebar_menu_item_style}>
                    all posts
                  </Typography>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton
                  onClick={() => {
                    setPages("blog_comments");
                    Store_State("blog_comments");
                  }}
                >
                  <Typography pr={1}>
                    <CommentSharp htmlColor="black" />
                  </Typography>
                  <Typography style={sidebar_menu_item_style}>
                    all comments
                  </Typography>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton
                  onClick={() => {
                    setPages("blog_like");
                    Store_State("blog_like");
                  }}
                >
                  <Typography pr={1}>
                    <ThumbUpAlt htmlColor="black" />
                  </Typography>
                  <Typography style={sidebar_menu_item_style}>
                    view like
                  </Typography>
                </ListItemButton>
              </ListItem>
            </Collapse>
            {/**************************************
             * ORDER MENU COLLAPS START HERE
             ***************************************/}
            <ListItem disableGutters>
              <ListItemButton
                onClick={() =>
                  ShowOrderCollaps === false
                    ? setShowOrderCollaps(true)
                    : setShowOrderCollaps(false)
                }
              >
                <Typography pr={1}>
                  <DeliveryDiningOutlined htmlColor="green" />
                </Typography>
                <Typography style={sidebar_menu_item_style}>
                  order management
                </Typography>
                <Typography>
                  <ArrowDropDown />
                </Typography>
              </ListItemButton>
            </ListItem>
            <Collapse in={ShowOrderCollaps}>
              <ListItem>
                <ListItemButton
                  onClick={() => {
                    setPages("all_orders");
                    Store_State("all_orders");
                  }}
                >
                  <Typography pr={1}>
                    <AcUnit htmlColor="black" />
                  </Typography>
                  <Typography style={sidebar_menu_item_style}>
                    all order
                  </Typography>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  <Typography pr={1}>
                    <AcUnit htmlColor="black" />
                  </Typography>
                  <Typography style={sidebar_menu_item_style}>
                    order history
                  </Typography>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  <Typography pr={1}>
                    <AcUnit htmlColor="black" />
                  </Typography>
                  <Typography style={sidebar_menu_item_style}>
                    cancel order
                  </Typography>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton
                  onClick={() => {
                    setPages("reviews");
                    Store_State("reviews");
                  }}
                >
                  <Typography pr={1}>
                    <Reviews htmlColor="black" />
                  </Typography>
                  <Typography style={sidebar_menu_item_style}>
                    reviews
                  </Typography>
                </ListItemButton>
              </ListItem>
            </Collapse>
            {/**************************************
             * SELLER REQUEST MENU COLLAPS START HERE
             ***************************************/}
            <ListItem disableGutters>
              <ListItemButton
                onClick={() =>
                  ShowRequestCollaps === false
                    ? setShowRequestCollaps(true)
                    : setShowRequestCollaps(false)
                }
              >
                <Typography pr={1}>
                  <Approval htmlColor="green" />
                </Typography>
                <Typography style={sidebar_menu_item_style}>
                  <sup>s</sup>Request management
                </Typography>
                <Typography>
                  <ArrowDropDown />
                </Typography>
              </ListItemButton>
            </ListItem>
            <Collapse in={ShowRequestCollaps}>
              <ListItem>
                <ListItemButton
                  onClick={() => {
                    setPages("show_ads");
                    Store_State("show_ads");
                  }}
                >
                  <Typography pr={1}>
                    <AdsClick htmlColor="black" />
                  </Typography>
                  <Typography style={sidebar_menu_item_style}>
                    show ads
                  </Typography>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton
                  onClick={() => {
                    setPages("payout_req");
                    Store_State("payout_req");
                  }}
                >
                  <Typography pr={1}>
                    <RequestPage htmlColor="black" />
                  </Typography>
                  <Typography style={sidebar_menu_item_style}>
                    payout Request
                  </Typography>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton
                  onClick={() => {
                    setPages("acc_verify_req");
                    Store_State("acc_verify_req");
                  }}
                >
                  <Typography pr={1}>
                    <Verified htmlColor="black" />
                  </Typography>
                  <Typography style={sidebar_menu_item_style}>
                    account verify Request
                  </Typography>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  <Typography pr={1}>
                    <ProductionQuantityLimits htmlColor="black" />
                  </Typography>
                  <Typography style={sidebar_menu_item_style}>
                    product sell Request
                  </Typography>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton
                  onClick={() => {
                    setPages("prd_pin_req");
                    Store_State("prd_pin_req");
                  }}
                >
                  <Typography pr={1}>
                    <PinDrop htmlColor="black" />
                  </Typography>
                  <Typography style={sidebar_menu_item_style}>
                    pin product Request
                  </Typography>
                </ListItemButton>
              </ListItem>
            </Collapse>
            {/**************************************
             * CLIENTS MANAGEMENTS START HERE
             ***************************************/}
            <ListItem disableGutters>
              <ListItemButton
                onClick={() => {
                  setPages("client_manage");
                  Store_State("client_manage");
                }}
              >
                <Typography pr={1}>
                  <Diversity1 htmlColor="green" />
                </Typography>
                <Typography style={sidebar_menu_item_style}>
                  clients management
                </Typography>
              </ListItemButton>
            </ListItem>
            <ListItem disableGutters>
              <ListItemButton
                onClick={() => {
                  setPages("office_teams");
                  Store_State("office_teams");
                }}
              >
                <Typography pr={1}>
                  <Diversity2 htmlColor="green" />
                </Typography>
                <Typography style={sidebar_menu_item_style}>
                  team management
                </Typography>
              </ListItemButton>
            </ListItem>
            <ListItem disableGutters>
              <ListItemButton
                onClick={() => {
                  setPages("community_page");
                  Store_State("community_page");
                }}
              >
                <Typography pr={1}>
                  <LocalLibrary htmlColor="green" />
                </Typography>
                <Typography style={sidebar_menu_item_style}>
                  community management
                </Typography>
              </ListItemButton>
            </ListItem>
            <ListItem disableGutters>
              <ListItemButton
                onClick={() => {
                  setPages("contact_info");
                  Store_State("contact_info");
                }}
              >
                <Typography pr={1}>
                  <ContactMail htmlColor="green" />
                </Typography>
                <Typography style={sidebar_menu_item_style}>
                  contacts management
                </Typography>
              </ListItemButton>
            </ListItem>
            <ListItem disableGutters>
              <ListItemButton
                onClick={() => {
                  setPages("mails");
                  Store_State("mails");
                }}
              >
                <Typography pr={1}>
                  <Mail htmlColor="green" />
                </Typography>
                <Typography style={sidebar_menu_item_style}>
                  Mails management
                </Typography>
              </ListItemButton>
            </ListItem>
            <ListItem disableGutters>
              <ListItemButton
                onClick={() => {
                  setPages("messages");
                  Store_State("messages");
                }}
              >
                <Typography pr={1}>
                  <Message htmlColor="green" />
                </Typography>
                <Typography style={sidebar_menu_item_style}>
                  Message management
                </Typography>
              </ListItemButton>
            </ListItem>
            {/**************************************
             * COURSES MENU START HERE
             ***************************************/}
            <ListItem disableGutters>
              <ListItemButton
                onClick={() => {
                  setPages("courses");
                  Store_State("courses");
                }}
              >
                <Typography pr={1}>
                  <GolfCourse htmlColor="green" />
                </Typography>
                <Typography style={sidebar_menu_item_style}>
                  course management
                </Typography>
              </ListItemButton>
            </ListItem>
            <ListItem disableGutters>
              <ListItemButton>
                <Typography pr={1}>
                  <Web htmlColor="green" />
                </Typography>
                <Typography style={sidebar_menu_item_style}>
                  pages management
                </Typography>
              </ListItemButton>
            </ListItem>
            {/**************************************
             * Payment MENU COLLAPS START HERE
             ***************************************/}
            <ListItem disableGutters>
              <ListItemButton
                onClick={() =>
                  ShowPaymentCollaps === false
                    ? setShowPaymentCollaps(true)
                    : setShowPaymentCollaps(false)
                }
              >
                <Typography pr={1}>
                  <Payment htmlColor="green" />
                </Typography>
                <Typography style={sidebar_menu_item_style}>
                  Payment management
                </Typography>
                <Typography>
                  <ArrowDropDown />
                </Typography>
              </ListItemButton>
            </ListItem>
            <Collapse in={ShowPaymentCollaps}>
              <ListItem>
                <ListItemButton>
                  <Typography pr={1}>
                    <Payments htmlColor="black" />
                  </Typography>
                  <Typography style={sidebar_menu_item_style}>
                    pay method management
                  </Typography>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  <Typography pr={1}>
                    <Receipt htmlColor="black" />
                  </Typography>
                  <Typography style={sidebar_menu_item_style}>
                    pay history management
                  </Typography>
                </ListItemButton>
              </ListItem>
            </Collapse>
            {/**************************************
             * product MENU COLLAPS START HERE
             ***************************************/}
            <ListItem disableGutters>
              <ListItemButton
                onClick={() =>
                  ShowProductCollaps === false
                    ? setShowProductCollaps(true)
                    : setShowProductCollaps(false)
                }
              >
                <Typography pr={1}>
                  <Inventory2 htmlColor="green" />
                </Typography>
                <Typography style={sidebar_menu_item_style}>
                  product management
                </Typography>
                <Typography>
                  <ArrowDropDown />
                </Typography>
              </ListItemButton>
            </ListItem>
            <Collapse in={ShowProductCollaps}>
              <ListItem>
                <ListItemButton
                  onClick={() => {
                    setPages("social_service");
                    Store_State("social_service");
                  }}
                >
                  <Typography pr={1}>
                    <AddBoxOutlined htmlColor="black" />
                  </Typography>
                  <Typography style={sidebar_menu_item_style}>
                    Social Product
                  </Typography>
                </ListItemButton>
              </ListItem>
            </Collapse>
            {/**************************************
             * CATEGORIES MENU COLLAPS START HERE
             ***************************************/}
            <ListItem disableGutters>
              <ListItemButton
                onClick={() =>
                  ShowCategoriesCollaps === false
                    ? setShowCategoriesCollaps(true)
                    : setShowCategoriesCollaps(false)
                }
              >
                <Typography pr={1}>
                  <WebStories htmlColor="green" />
                </Typography>
                <Typography style={sidebar_menu_item_style}>
                  categories management
                </Typography>
                <Typography>
                  <ArrowDropDown />
                </Typography>
              </ListItemButton>
            </ListItem>
            <Collapse in={ShowCategoriesCollaps}>
              <ListItem>
                <ListItemButton>
                  <Typography pr={1}>
                    <Category htmlColor="black" />
                  </Typography>
                  <Typography style={sidebar_menu_item_style}>
                    product category
                  </Typography>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  <Typography pr={1}>
                    <Category htmlColor="black" />
                  </Typography>
                  <Typography style={sidebar_menu_item_style}>
                    course category
                  </Typography>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton
                  onClick={() => {
                    setPages("blog_category");
                    Store_State("blog_category");
                  }}
                >
                  <Typography pr={1}>
                    <Category htmlColor="black" />
                  </Typography>
                  <Typography style={sidebar_menu_item_style}>
                    blogs category
                  </Typography>
                </ListItemButton>
              </ListItem>
            </Collapse>
            {/**************************************
             * settings MENU COLLAPS START HERE
             ***************************************/}
            <ListItem disableGutters>
              <ListItemButton
                onClick={() =>
                  ShowSettingsCollaps === false
                    ? setShowSettingsCollaps(true)
                    : setShowSettingsCollaps(false)
                }
              >
                <Typography pr={1}>
                  <Settings htmlColor="green" />
                </Typography>
                <Typography style={sidebar_menu_item_style}>
                  settings management
                </Typography>
                <Typography>
                  <ArrowDropDown />
                </Typography>
              </ListItemButton>
            </ListItem>
            <Collapse in={ShowSettingsCollaps}>
              <ListItem>
                <ListItemButton
                  onClick={() => {
                    setPages("role_permission");
                    Store_State("role_permission");
                  }}
                >
                  <Typography pr={1}>
                    <VpnKey htmlColor="black" />
                  </Typography>
                  <Typography style={sidebar_menu_item_style}>
                    role management
                  </Typography>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton
                  onClick={() => {
                    setPages("ip_blocks");
                    Store_State("ip_blocks");
                  }}
                >
                  <Typography pr={1}>
                    <Block htmlColor="black" />
                  </Typography>
                  <Typography style={sidebar_menu_item_style}>
                    Block management
                  </Typography>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton
                  onClick={() => {
                    setPages("all_settings");
                    Store_State("all_settings");
                  }}
                >
                  <Typography pr={1}>
                    <Settings htmlColor="black" />
                  </Typography>
                  <Typography style={sidebar_menu_item_style}>
                    All Settings
                  </Typography>
                </ListItemButton>
              </ListItem>
            </Collapse>
          </List>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default AdminDashboard;
