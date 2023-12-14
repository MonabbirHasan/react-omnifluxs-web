import React, { useState } from "react";
import {
  AdsClick,
  ArrowDownward,
  Close,
  DashboardOutlined,
  Delete,
  Diversity2,
  Email,
  EmojiEventsOutlined,
  InterestsSharp,
  LinkOutlined,
  LinkedIn,
  List,
  LocationCity,
  OfflinePinOutlined,
  PaymentSharp,
  Person,
  Phone,
  QuestionAnswer,
  QuestionAnswerRounded,
  QuestionMark,
  QuestionMarkTwoTone,
  RateReviewSharp,
  ShoppingBag,
  ShoppingCartSharp,
  Star,
  SubtitlesOutlined,
  Twitter,
  UnpublishedOutlined,
  Verified,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Stack,
  TextField,
  Typography,
  useTheme,
  Button as MuiButton,
  Alert,
  Collapse,
  IconButton,
  Tooltip,
  Divider,
} from "@mui/material";
import {
  Badge,
  Button,
  Col,
  Container,
  Modal,
  NavLink,
  Row,
  Table,
} from "react-bootstrap";
import DashboardHeader from "../../HeaderFooter/DashboardHeader";
import DashboardFooter from "../../HeaderFooter/DashboardFooter";
import InputGroup from "react-bootstrap/InputGroup";
import ListGroup from "react-bootstrap/ListGroup";
import { TimeIcon } from "@mui/x-date-pickers";
import { useNavigate } from "react-router-dom";
import DataTable from "datatables.net-dt";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./profile.css";
const Profile = () => {
  const theme = useTheme();
  const [PassHideShow, setPassHideShow] = useState("password");
  const [confirm_password, setConfirmPassword] = useState("");
  const [TabPanel, setTabPanel] = useState("my_listing");
  let table = new DataTable("#purchases_history_table");
  const [is_idActive, setIs_isActive] = useState(true);
  const [user_name, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [key, setKey] = useState("my_listing");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [value, setValue] = useState(0);
  const [bio, setBio] = useState("");
  const [PaymentConfirm, setPaymentConfirm] = useState(false);
  let [PaymentProcessAlertShow, setPaymentProcessAlertShow] = useState(true);
  let navigate = useNavigate();
  /*******************************************
   * PRODUCT PROMOTE MODAL CONTROL HERE
   *******************************************/
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  /*******************************************
   * PRODUCT PROMOTE MODAL CONTROL HERE
   *******************************************/
  const [showDashoardModal, setShowDashoardModal] = useState(false);
  const handleCloseDashoardModal = () => setShowDashoardModal(false);
  const handleShowDashoardModal = () => setShowDashoardModal(true);
  /*******************************************
   * PAYMENT PROCESS MODAL CONTROL HERE
   *******************************************/
  const [showPaymentProcessModal, setShowPaymentProcessModal] = useState(false);
  const handleClosePaymentProcessModal = () =>
    setShowPaymentProcessModal(false);
  const handleShowPaymentProcessModal = () => setShowPaymentProcessModal(true);
  const [ProductPrice, setProductPrice] = useState();
  const PaymentProcessHandle = (price) => {
    setShowPaymentProcessModal(true);
    setProductPrice(price);
  };

  /*******************************************
   * PAYMENT PROCESS SUCCESS MESSAGE HERE
   *******************************************/
  setTimeout(() => {
    setPaymentConfirm(false);
  }, 1000 * 30);
  const Payment_process_success = () => {
    if (PaymentConfirm === true) {
      return (
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setPaymentConfirm(false);
              }}
            >
              <Close fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2, textTransform: "capitalize" }}
        >
          Congratulation your payment is successfull
        </Alert>
      );
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  /***************************************************
   * INPUT VALIDATION START HERE
   ***************************************************/
  const isEmailValid = (email) => {
    // Implement your email validation logic, e.g., using regular expressions
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isPasswordValid = (password) => {
    // Implement your password validation logic, e.g., checking for length, complexity, etc.
    return password.length >= 8; // Example: Password should be at least 8 characters
  };

  const isFieldEmpty = (value) => {
    return value.trim() === "";
  };

  const SaveInfo = () => {
    if (isFieldEmpty(user_name)) {
      alert("Please enter a username.");
      return;
    }
    if (isFieldEmpty(email)) {
      alert("Please enter an email address.");
      return;
    }
    if (isFieldEmpty(phone)) {
      alert("Please enter a phone number.");
      return;
    }
    if (isFieldEmpty(password)) {
      alert("Please enter a password.");
      return;
    }
    if (isFieldEmpty(confirm_password)) {
      alert("Please confirm your password.");
      return;
    }
    if (isFieldEmpty(bio)) {
      alert("Please Enter Bio.");
      return;
    }

    if (!isEmailValid(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!isPasswordValid(password)) {
      alert("Please enter a valid password (at least 8 characters).");
      return;
    }

    if (password !== confirm_password) {
      alert("Password and confirm password do not match.");
      return;
    }
    console.log(user_name);
    // If all validations pass, you can proceed with form submission or any other actions
    // Here you can access the validated values in user_name, email, phone, password, and bio.
  };
  /*********************************
   *GET REAL DATE AND TIME
   *********************************/
  const DateTime = (query) => {
    const dateFun = new Date();
    const time = dateFun.toLocaleTimeString();
    const date = dateFun.toLocaleDateString();
    switch (query) {
      case "date":
        return date;
      case "time":
        return time;
      case "time-date":
        return time + " -- " + date;
      case "":
        return true;
      default:
        break;
    }
  };
  const purchases_history_data = [
    {
      id: 1,
      images:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      Listing_id: "OMN342423",
      product_name: "youtube",
      category: "social",
      date: new Date().toLocaleDateString(),
      price: "$320",
      seller: 1,
      status: true,
    },
    {
      id: 2,
      images:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      Listing_id: "OMN342423",
      product_name: "youtube",
      category: "social",
      date: new Date().toLocaleDateString(),
      price: "$320",
      seller: 1,
      status: true,
    },
    {
      id: 3,
      images:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      Listing_id: "OMN345454",
      product_name: "twitter",
      category: "social",
      date: new Date().toLocaleDateString(),
      price: "$320",
      seller: 1,
      status: true,
    },
    {
      id: 4,
      images:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      Listing_id: "OMN342121",
      product_name: "instagram",
      category: "social",
      date: new Date().toLocaleDateString(),
      price: "$320",
      seller: 1,
      status: true,
    },
    {
      id: 5,
      images:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      Listing_id: "OM2323764",
      product_name: "facebook",
      category: "social",
      date: new Date().toLocaleDateString(),
      price: "$320",
      seller: 1,
      status: true,
    },
  ];
  const my_listing = [
    {
      id: 1,
      listing_id: "OMN4324",
      img: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
      product_name: "youtube",
      category: "",
      total_product: 23,
      publish_date: new Date().toLocaleDateString(),
      price: "$323",
      status: true,
    },
    {
      id: 2,
      listing_id: "OMN4324",
      img: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
      product_name: "facebook",
      category: "",
      total_product: 23,
      publish_date: new Date().toLocaleDateString(),
      price: "$323",
      status: true,
    },
    {
      id: 3,
      listing_id: "OMN4324",
      img: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
      product_name: "instagram",
      category: "",
      total_product: 23,
      publish_date: new Date().toLocaleDateString(),
      price: "$323",
      status: true,
    },
    {
      id: 4,
      listing_id: "OMN4324",
      img: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
      product_name: "twitter",
      category: "",
      total_product: 23,
      publish_date: new Date().toLocaleDateString(),
      price: "$323",
      status: true,
    },
    {
      id: 5,
      listing_id: "OMN4324",
      img: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
      product_name: "bgmi",
      category: "",
      total_product: 23,
      publish_date: new Date().toLocaleDateString(),
      price: "$323",
      status: true,
    },
    {
      id: 6,
      listing_id: "OMN4324",
      img: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
      product_name: "facebook",
      category: "",
      total_product: 23,
      publish_date: new Date().toLocaleDateString(),
      price: "$323",
      status: true,
    },
    {
      id: 7,
      listing_id: "OMN4324",
      img: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
      product_name: "twitter",
      category: "",
      total_product: 23,
      publish_date: new Date().toLocaleDateString(),
      price: "$323",
      status: true,
    },
    {
      id: 8,
      listing_id: "OMN4324",
      img: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
      product_name: "youtube",
      category: "",
      total_product: 23,
      publish_date: new Date().toLocaleDateString(),
      price: "$323",
      status: true,
    },
    {
      id: 9,
      listing_id: "OMN4324",
      img: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
      product_name: "telegram",
      category: "",
      total_product: 23,
      publish_date: new Date().toLocaleDateString(),
      price: "$323",
      status: true,
    },
    {
      id: 10,
      listing_id: "OMN4324",
      img: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
      product_name: "youtube",
      category: "",
      total_product: 23,
      publish_date: new Date().toLocaleDateString(),
      price: "$323",
      status: true,
    },
  ];
  /*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/
  return (
    <>
      <DashboardHeader />
      <section className="user_profile">
        <Container>
          <div className="profile_wrapper">
            {/*************************************
             * SELLER PROFILE START HERE
             **************************************/}
            <div className="profile_left">
              <div className="profile_card">
                <Card className="cards">
                  <Stack
                    direction={"row"}
                    width={"100%"}
                    display={"flex"}
                    alignItems={"center"}
                    pl={2}
                  >
                    <Avatar
                      style={{
                        width: "120px",
                        height: "120px",
                        border: "3px solid #eee",
                        marginTop: "20px",
                        boxShadow: "-1px -1px 3px #bbb,1px 1px 3px #bbb",
                      }}
                      src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                    />
                    <Box display={"grid"} pl={2} gap={0.5} pt={2}>
                      <Typography
                        variant="p"
                        fontSize={22}
                        padding={0}
                        mb={0}
                        letterSpacing={1}
                        fontFamily={"fantasy"}
                        color={"black"}
                      >
                        Rakesh Gurjar
                        {is_idActive === true ? (
                          <Badge
                            bg=""
                            anchorOrigin={{
                              vertical: "top",
                              horizontal: "right",
                            }}
                          >
                            <Verified className="text-primary" />
                          </Badge>
                        ) : (
                          ""
                        )}
                      </Typography>
                      <Typography
                        variant="p"
                        fontSize={"14px"}
                        margin={0}
                        padding={0}
                        fontFamily={"tahoma"}
                      >
                        <strong>Sponser ID</strong>: OM23423423
                      </Typography>
                      <Typography
                        variant="p"
                        fontSize={"14px"}
                        margin={0}
                        padding={0}
                        fontFamily={"tahoma"}
                      >
                        <strong>Your ID</strong>: OM21423423
                      </Typography>
                      <Typography margin={0} padding={0}>
                        <strong style={{ fontFamily: "tahoma" }}>
                          Your Rank
                        </strong>{" "}
                        -{" "}
                        <Badge
                          bg="info"
                          style={{
                            fontFamily: "tahoma",
                            fontSize: "12px",
                            letterSpacing: "1px",
                            borderRadius: "5px",
                          }}
                        >
                          Bronze
                        </Badge>
                      </Typography>
                    </Box>
                  </Stack>
                  <Card.Body>
                    <Card.Title style={{ textAlign: "center" }}>
                      <Stack direction={"row"} spacing={2}>
                        <Button
                          onClick={() =>
                            navigate("/seller_dashboard/active-plan")
                          }
                          title="Please Active Your Id & Start Earning Today!"
                          style={{
                            width: "100%",
                            backgroundColor:
                              is_idActive === true ? "#0D6EFD" : "red",
                            color: "white",
                          }}
                          variant=""
                        >
                          {is_idActive === true ? (
                            <OfflinePinOutlined />
                          ) : (
                            <UnpublishedOutlined />
                          )}
                          {is_idActive === true ? "Activate" : "InActive"}
                        </Button>
                        <Button
                          onClick={() =>
                            navigate("/seller_dashboard/team-list")
                          }
                          style={{
                            width: "70%",
                            backgroundColor: "black",
                            color: "white",
                          }}
                          title="Your Referr Team List Here!"
                          variant=""
                        >
                          <Diversity2 /> Team List
                        </Button>
                      </Stack>
                      <Typography
                        style={{
                          width: "100%",
                          borderRadius: "3px",
                          marginTop: "10px",
                          backgroundColor: "#52bf54",
                          color: "whitesmoke",
                          textTransform: "capitalize",
                          fontSize: "14px",
                          fontFamily: "tahoma",
                          cursor: "auto",
                          padding: "10px",
                        }}
                        variant="h4"
                      >
                        <ArrowDownward /> life-time earning <ArrowDownward />
                      </Typography>
                    </Card.Title>
                    <Card.Text>
                      <Stack direction={"row"} spacing={2}>
                        <Button
                          onClick={() =>
                            navigate("/seller_dashboard/daily-task")
                          }
                          title="You Can Earn Money From Using WatchAds Options!"
                          style={{
                            width: "80%",
                            backgroundColor: "#ff7200",
                            color: "white",
                          }}
                          variant=""
                        >
                          <SubtitlesOutlined /> Watch Ads
                        </Button>
                        <Button
                          onClick={() =>
                            navigate("/seller_dashboard/rank-reword")
                          }
                          title="You Rank & Reword Here!"
                          style={{
                            width: "100%",
                            backgroundColor: "#9fc32d",
                            color: "white",
                          }}
                          variant=""
                        >
                          <EmojiEventsOutlined /> Rank & Reword
                        </Button>
                      </Stack>
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item style={{ fontSize: "13px" }}>
                      <Person />{" "}
                      <Typography textTransform={"capitalize"} variant="span">
                        Rakesh Gurjar
                      </Typography>
                    </ListGroup.Item>
                    <ListGroup.Item style={{ fontSize: "13px" }}>
                      <LocationCity />{" "}
                      <Typography textTransform={"capitalize"} variant="span">
                        Dhaka/Bangladesh
                      </Typography>
                    </ListGroup.Item>
                    <ListGroup.Item style={{ fontSize: "13px" }}>
                      <TimeIcon />
                      <Typography
                        textTransform={"lowercase"}
                        variant="span"
                        pl={0.6}
                      >
                        {DateTime("time-date")}
                      </Typography>
                    </ListGroup.Item>
                    <ListGroup.Item style={{ fontSize: "13px" }}>
                      <Phone />{" "}
                      <Typography textTransform={"capitalize"} variant="span">
                        (+880) 1743714489
                      </Typography>
                    </ListGroup.Item>
                    <ListGroup.Item style={{ fontSize: "13px" }}>
                      <Email />{" "}
                      <Typography textTransform={"lowercase"} variant="span">
                        johndoe@bootdey.com
                      </Typography>
                    </ListGroup.Item>
                    <ListGroup.Item style={{ fontSize: "13px" }}>
                      <LinkOutlined />{" "}
                      <Card.Link
                        href="#"
                        style={{
                          textDecoration: "none",
                          color: "black",
                        }}
                      >
                        rakeshytseller.com
                      </Card.Link>
                    </ListGroup.Item>
                    <ListGroup.Item style={{ fontSize: "13px" }}>
                      <LinkedIn />
                      <Card.Link
                        href="#"
                        style={{
                          textDecoration: "none",
                          color: "black",
                          paddingLeft: "5px",
                        }}
                      >
                        in/rakeshytseller-234324
                      </Card.Link>
                    </ListGroup.Item>
                    <ListGroup.Item style={{ fontSize: "13px" }}>
                      <Twitter />
                      <Card.Link
                        href="#"
                        style={{
                          textDecoration: "none",
                          color: "black",
                          paddingLeft: "5px",
                        }}
                      >
                        @rakeshytseller
                      </Card.Link>
                    </ListGroup.Item>
                  </ListGroup>
                  <Card.Body style={{ textAlign: "center" }}></Card.Body>
                </Card>
              </div>
            </div>
            {/*************************************
             * SELLER TABS OPTION START HERE
             **************************************/}
            <div className="profile_right">
              <Box
                sx={{
                  maxWidth: { xs: 320, sm: 800 },
                  bgcolor: "background.paper",
                }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                >
                  <Tab
                    label={
                      <Typography>
                        <List /> My Listing
                      </Typography>
                    }
                    onClick={() => setTabPanel("my_listing")}
                  />
                  <Tab
                    label={
                      <Typography>
                        <DashboardOutlined /> salse dashboard
                      </Typography>
                    }
                    onClick={handleShowDashoardModal}
                  />
                  <Tab
                    label={
                      <Typography>
                        <PaymentSharp /> Earnings
                      </Typography>
                    }
                    onClick={() => setTabPanel("my_payout")}
                  />
                  <Tab
                    label={
                      <Typography>
                        <ShoppingCartSharp /> My Purchases
                      </Typography>
                    }
                    onClick={() => setTabPanel("my_purchases")}
                  />
                  <Tab
                    label={
                      <Typography>
                        <InterestsSharp /> My Favourites
                      </Typography>
                    }
                    onClick={() => setTabPanel("my_favourites")}
                  />
                  <Tab
                    label={
                      <Typography>
                        <RateReviewSharp /> My Reviews
                      </Typography>
                    }
                    onClick={() => setTabPanel("my_reviews")}
                  />
                </Tabs>
                {/******************************
                 * TABS PANEL START HERE
                 *******************************/}
                <div className="tab_panel">
                  {TabPanel === "my_listing" ? (
                    /******************************************
                     * MY LISTING SECTION START HERE
                     ******************************************/
                    <section id="my_listing">
                      <div className="listing_wrapper">
                        {/*-----------------------------------------
                        PRODUCT FILTER OPTION WIHT LINEAR SEARCH
                        --------------------------------------------*/}
                        <div className="filter">
                          <Typography
                            mb={2}
                            p={1}
                            variant="h5"
                            textTransform={"capitalize"}
                          >
                            my listing
                          </Typography>
                          <Stack direction={"row"} spacing={3} mb={2}>
                            <Form.Select
                              style={{ width: "70px" }}
                              aria-label="Default select example"
                              onChange={() => {}}
                            >
                              <option value="1" selected>
                                12
                              </option>
                              <option value="1">12</option>
                              <option value="2">22</option>
                              <option value="3">32</option>
                            </Form.Select>
                            <Form.Select
                              onChange={() => {}}
                              aria-label="Default select example"
                            >
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                            <TextField
                              onKeyUp={() => {}}
                              fullWidth
                              variant="filled"
                              sx={{ textTransform: "lowercase" }}
                              label="search via name!"
                            />
                          </Stack>
                        </div>
                        {/*---------------------------
                        PRODUCT TABLE START HERE
                        ------------------------------*/}
                        <Table
                          striped
                          hover
                          cellSpacing={"10px"}
                          cellPadding={"3px"}
                        >
                          <thead>
                            <tr>
                              <th>Listing ID</th>
                              <th>Image</th>
                              <th>Product Name</th>
                              <th>Category</th>
                              <th>Total Producty</th>
                              <th>Publish Date</th>
                              <th>Price</th>
                              <th>Promote</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {my_listing.slice(0, 10).map((items) => (
                              <tr key={items.id}>
                                <td>{items.listing_id}</td>
                                <td>
                                  <Avatar
                                    title="product image"
                                    src={items.img}
                                  />
                                </td>
                                <td>{items.product_name}</td>
                                <td>Social</td>
                                <td>{items.total_product}</td>
                                <td>{items.publish_date}</td>
                                <td>{items.price}</td>
                                <td>
                                  <Badge
                                    onClick={handleShowModal}
                                    className="rounded-1 p-1"
                                    style={{ width: "100%" }}
                                  >
                                    <AdsClick />
                                  </Badge>
                                </td>
                                <td>
                                  <Badge bg="success" pill>
                                    Active
                                  </Badge>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </div>
                    </section>
                  ) : TabPanel === "my_payout" ? (
                    /******************************************
                     * MY PAYOUT SECTION START HERE
                     ******************************************/
                    <section id="my_payout">
                      <Stack
                        direction={"row"}
                        justifyContent={"space-around"}
                        className="total_balance"
                      >
                        <Box mb={3}>
                          <Typography
                            mb={2}
                            variant="h5"
                            textTransform={"capitalize"}
                          >
                            Available funds
                          </Typography>
                          <Tooltip
                            placement="right-end"
                            title="This balance can be used for purchases or withdrawn
                            using a service provider."
                          >
                            <Typography
                              variant="p"
                              fontSize={16}
                              fontWeight={"bold"}
                              pt={1}
                              color={"gray"}
                              textTransform={"capitalize"}
                            >
                              Balance available for use
                            </Typography>
                          </Tooltip>
                          <Typography
                            variant="h3"
                            color={"black"}
                            fontSize={40}
                            mt={2}
                            fontWeight={"700"}
                            fontFamily={
                              'Macan, "Helvetica Neue", Helvetica, Arial, Bangla989, sans-serif!important'
                            }
                          >
                            $5400.33
                          </Typography>
                          <MuiButton
                            onClick={() =>
                              navigate("/seller_dashboard/withdrawal_wizard", {
                                replace: true,
                              })
                            }
                            variant="contained"
                            sx={{
                              backgroundColor: "black",
                              padding: "10px",
                              mt: 3,
                            }}
                          >
                            Withdraw balance
                          </MuiButton>
                          <Typography
                            onClick={() => navigate("/seller_dashboard/payout")}
                            py={3}
                            my={2}
                            sx={{
                              textDecoration: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Manage payout methods
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            mb={2}
                            variant="h5"
                            textTransform={"capitalize"}
                          >
                            Earnings & expenses
                          </Typography>
                          <Tooltip
                            placement="right-end"
                            title="This total includes your cleared payments and any compensation handled by Customer Support."
                          >
                            <Typography
                              variant="p"
                              fontSize={16}
                              fontWeight={"bold"}
                              pt={1}
                              color={"gray"}
                              textTransform={"capitalize"}
                            >
                              Earnings to date
                            </Typography>
                          </Tooltip>
                          <Typography
                            variant="h4"
                            color={"black"}
                            fontSize={28}
                            fontWeight={"700"}
                            mt={2}
                            fontFamily={
                              'Macan, "Helvetica Neue", Helvetica, Arial, Bangla989, sans-serif!important'
                            }
                          >
                            $500.5
                          </Typography>

                          <Typography pt={2}>
                            Your earnings since joining.
                          </Typography>
                          <Divider component="p" sx={{ pb: 2, mb: 2 }} />
                          <Tooltip
                            placement="right-end"
                            title="This total includes purchases paid with your earnings."
                          >
                            <Typography
                              variant="p"
                              fontSize={16}
                              fontWeight={"bold"}
                              pt={3}
                              color={"gray"}
                              textTransform={"capitalize"}
                            >
                              Expenses to date
                            </Typography>
                          </Tooltip>
                          <Typography
                            variant="h3"
                            color={"black"}
                            pt={1}
                            fontSize={28}
                            fontWeight={"700"}
                            fontFamily={
                              'Macan, "Helvetica Neue", Helvetica, Arial, Bangla989, sans-serif!important'
                            }
                          >
                            $0.00
                          </Typography>
                          <Typography py={1} fontSize={14}>
                            Earnings spent on purchases since joining.
                          </Typography>
                        </Box>
                      </Stack>
                    </section>
                  ) : TabPanel === "my_purchases" ? (
                    /******************************************
                     * MY PURCHASES SECTION START HERE
                     ******************************************/
                    <section id="my_purchases">
                      <Typography
                        variant="h5"
                        textTransform={"capitalize"}
                        py={2}
                      >
                        purchases history
                      </Typography>
                      <div className="purchases_history_table">
                        <Table
                          striped
                          bordered
                          hover
                          id="purchases_history_table"
                        >
                          <thead>
                            <tr>
                              <th>Listing ID</th>
                              <th>Image</th>
                              <th>Product Name</th>
                              <th>Category</th>
                              <th>Date</th>
                              <th>Price</th>
                              <th>Seller</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {purchases_history_data.map((items) => (
                              <tr>
                                <td>{items.Listing_id}</td>
                                <td>
                                  <Avatar src={items.images} />
                                </td>
                                <td>{items.product_name}</td>
                                <td>{items.category}</td>
                                <td>{items.date}</td>
                                <td>{items.price}</td>
                                <td>{items.seller}</td>
                                <td>
                                  {items.status ? (
                                    <Badge bg="success">Active</Badge>
                                  ) : (
                                    <Badge bg="danger">InActive</Badge>
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </div>
                    </section>
                  ) : TabPanel === "my_favourites" ? (
                    /******************************************
                     * MY FAVOURITS SECTION START HERE
                     ******************************************/
                    <section id="my_favourites">
                      <Payment_process_success />
                      <Typography
                        variant="h5"
                        textTransform={"capitalize"}
                        py={2}
                      >
                        my favourites
                      </Typography>
                      <div className="my_favourites">
                        <Table striped bordered hover id="favourites_table">
                          <thead>
                            <tr>
                              <th>Listing ID</th>
                              <th>Image</th>
                              <th>Product Name</th>
                              <th>Category</th>
                              <th>Date</th>
                              <th>Price</th>
                              <th>status</th>
                              <th>Option</th>
                            </tr>
                          </thead>
                          <tbody>
                            {purchases_history_data.map((items) => (
                              <tr>
                                <td>{items.Listing_id}</td>
                                <td>
                                  <Avatar src={items.images} />
                                </td>
                                <td>{items.product_name}</td>
                                <td>{items.category}</td>
                                <td>{items.date}</td>
                                <td>{items.price}</td>
                                <td>
                                  {items.status ? (
                                    <Badge bg="success">Active</Badge>
                                  ) : (
                                    <Badge bg="danger">InActive</Badge>
                                  )}
                                </td>
                                <td>
                                  <MuiButton
                                    fullWidth
                                    variant="contained"
                                    onClick={() =>
                                      PaymentProcessHandle(items.price)
                                    }
                                  >
                                    buy
                                  </MuiButton>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </div>
                    </section>
                  ) : TabPanel === "my_reviews" ? (
                    /******************************************
                     * MY REVIEWS SECTION START HERE
                     ******************************************/
                    <section id="my_reviews">
                      <Row>
                        <Col lg={1}>
                          <Avatar>H</Avatar>
                        </Col>
                        <Col lg={8}>
                          <Typography>Jhonn</Typography>
                          <Typography>Pakistan</Typography>
                          <Box>
                            <Star htmlColor="orange" />
                            <Star htmlColor="orange" />
                            <Star htmlColor="orange" />
                            <Star htmlColor="orange" />
                            <Star htmlColor="orange" />
                          </Box>
                          <Typography>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolores quas magni rerum impedit corporis rem
                            officiis voluptates! Corporis fugit sint inventore
                            tempore, harum architecto modi et cum dolores dicta
                            non?
                          </Typography>
                        </Col>
                      </Row>
                    </section>
                  ) : (
                    ""
                  )}
                </div>
                {/******************************
                 * TABS PANEL END HERE
                 *******************************/}
              </Box>
            </div>
          </div>
          {/******************************
           * ALL MODAL START HERE
           *******************************/}
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              once you send request for promote your product we will be charge
              $10. your product will be on top of the pages!
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleCloseModal}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleCloseModal}>
                I Agree
              </Button>
            </Modal.Footer>
          </Modal>
          {/*******************
           * DASHBOARD MODAL
           ********************/}
          <Modal show={showDashoardModal} onHide={handleCloseDashoardModal}>
            <Modal.Header closeButton>
              <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Typography textTransform={"capitalize"} color={"red"}>
                are you sure to switch Profile to Dashboard?
              </Typography>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleCloseDashoardModal}>
                No
              </Button>
              <Button
                variant="primary"
                onClick={() => navigate("/seller_dashboard")}
              >
                Yes
              </Button>
            </Modal.Footer>
          </Modal>
          {/************************
           * PAYMENT PROCESS MODAL
           *************************/}
          <Modal
            show={showPaymentProcessModal}
            onHide={handleClosePaymentProcessModal}
          >
            <Modal.Header closeButton>
              <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Typography
                variant="h4"
                textTransform={"capitalize"}
                color={"green"}
              >
                total price: {ProductPrice}
              </Typography>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClosePaymentProcessModal}>
                Cancel
              </Button>
              <Button
                variant="primary"
                onClick={() =>
                  handleClosePaymentProcessModal(
                    PaymentConfirm === false
                      ? setPaymentConfirm(true)
                      : setPaymentConfirm(false)
                  )
                }
              >
                Confirm
              </Button>
            </Modal.Footer>
          </Modal>
          {/******************************
           * ALL MODAL END HERE
           *******************************/}
        </Container>
      </section>
      <DashboardFooter />
    </>
  );
};

export default Profile;
