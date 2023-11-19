import React, { useState, useEffect } from "react";
import {
  ArrowRightAlt,
  CheckBox,
  Help,
  LinkRounded,
  NoteTwoTone,
  QuestionMark,
} from "@mui/icons-material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import yt_shop_banner from "../../assets/img/banner1.png";
import InputGroup from "react-bootstrap/InputGroup";
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
import notificationIcon from "../../assets/img/icon.ico";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Form } from "react-bootstrap";
import PageTitle from "../../components/Page_title/PageTitle";
import notificationsound from "../../assets/audio/notification.mp3";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./smmpanel.css";
const SmmPanel = () => {
  const [key, setKey] = useState("smmpanel");
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  /**************************************
   * SMM DATA HERE
   *************************************/
  const smmpanel = [
    {
      platform: "facebook",
      services: [
        {
          type: "followers",
          name: "Followers",
          price_per_unit: 0.07,
          Guarantee: "Lifetime Guarantee",
          description:
            "Increase your facebook followers with real and active accounts.",
          min_quantity: 100,
          max_quantity: 5000,
          delivery_time: "24 hours",
          targeting_options: ["Country", "Gender", "Interest"],
          min_amount: 1000,
          max_amount: 20000,
        },
        {
          type: "likes",
          name: "Likes",
          price_per_unit: 0.03,
          Guarantee: "Lifetime Guarantee",
          description: "Boost the likes on your facebook photos and videos.",
          min_quantity: 50,
          max_quantity: 5000,
          delivery_time: "12 hours",
          min_amount: 1000,
          max_amount: 20000,
        },
      ],
    },
    {
      platform: "twitter",
      services: [
        {
          type: "followers",
          name: "Followers",
          price_per_unit: 0.07,
          Guarantee: "Lifetime Guarantee",
          description:
            "Increase your twitter followers with real and active accounts.",
          min_quantity: 100,
          max_quantity: 5000,
          delivery_time: "24 hours",
          targeting_options: ["Country", "Gender", "Interest"],
          min_amount: 1000,
          max_amount: 20000,
        },
        {
          type: "likes",
          name: "Likes",
          Guarantee: "Lifetime Guarantee",
          price_per_unit: 0.03,
          description: "Boost the likes on your twitter photos and videos.",
          min_quantity: 50,
          max_quantity: 5000,
          delivery_time: "12 hours",
          min_amount: 1000,
          max_amount: 20000,
        },
      ],
    },
    {
      platform: "instagram",
      services: [
        {
          type: "followers",
          name: "Followers",
          price_per_unit: 0.07,
          Guarantee: "Lifetime Guarantee",
          description:
            "Increase your Instagram followers with real and active accounts.",
          min_quantity: 100,
          max_quantity: 5000,
          delivery_time: "24 hours",
          targeting_options: ["Country", "Gender", "Interest"],
          min_amount: 1000,
          max_amount: 20000,
        },
        {
          type: "likes",
          name: "Likes",
          price_per_unit: 0.03,
          Guarantee: "Lifetime Guarantee",
          description: "Boost the likes on your Instagram photos and videos.",
          min_quantity: 50,
          max_quantity: 5000,
          delivery_time: "12 hours",
          min_amount: 1000,
          max_amount: 20000,
        },
      ],
    },
    {
      platform: "youtube",
      services: [
        {
          type: "subscriber",
          name: "subscriber",
          price_per_unit: 0.07,
          Guarantee: "Lifetime Guarantee",
          description:
            "Increase your Instagram subscriber with real and active accounts.",
          min_quantity: 100,
          max_quantity: 5000,
          delivery_time: "24 hours",
          targeting_options: ["Country", "Gender", "Interest"],
          min_amount: 1000,
          max_amount: 20000,
        },
        {
          type: "likes",
          name: "Likes",
          Guarantee: "Lifetime Guarantee",
          price_per_unit: 0.03,
          description: "Boost the likes on your Instagram photos and videos.",
          min_quantity: 50,
          max_quantity: 5000,
          delivery_time: "12 hours",
          min_amount: 1000,
          max_amount: 20000,
        },
        {
          type: "comments",
          name: "comments",
          Guarantee: "Lifetime Guarantee",
          price_per_unit: 0.03,
          description:
            "Boost the comments on your Instagram photos and videos.",
          min_quantity: 50,
          max_quantity: 5000,
          delivery_time: "12 hours",
          min_amount: 1000,
          max_amount: 20000,
        },
        {
          type: "watchtime",
          name: "watchtime",
          Guarantee: "Lifetime Guarantee",
          price_per_unit: 0.03,
          description:
            "Boost the watchtime on your Instagram photos and videos.",
          min_quantity: 50,
          max_quantity: 5000,
          delivery_time: "12 hours",
          min_amount: 1000,
          max_amount: 20000,
        },
        {
          type: "shorts",
          name: "shorts",
          Guarantee: "Lifetime Guarantee",
          price_per_unit: 0.01,
          description: "Boost the YouTube Short Video Views",
          min_quantity: 50,
          max_quantity: 5000,
          delivery_time: "12 hours",
          min_amount: 1000,
          max_amount: 20000,
        },
        {
          type: "monetization",
          name: "monetization",
          Guarantee: "Lifetime Guarantee",
          price_per_unit: 180.23,
          description:
            "YouTube Monetization Package [4000 Hours + 1000 Subscribers]",
          min_quantity: 50,
          max_quantity: 5000,
          delivery_time: "30 days",
          min_amount: 1000,
          max_amount: 20000,
        },
      ],
    },
  ];
  /**************************************
   * ALL STATES HERE
   *************************************/
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [SelectPlatform, setSelectPlatform] = useState("");
  const [SelectService, setSelectService] = useState("");
  const [orderQuantity, setOrderQuantity] = useState(0);
  const [panelData, setPanelData] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  useEffect(() => {
    setPanelData(smmpanel);
  }, []);
  /**************************************
   * PLATFORM SELECTION FUNCTION HERE
   *************************************/
  const handlePlatformSelect = (event) => {
    const platform = panelData.find((p) => p.platform === event.target.value);
    setSelectedPlatform(platform);
    setSelectedService(null);
  };
  /**************************************
   * SERVICE SELECTION FUNCTION HERE
   *************************************/
  const handleServiceSelect = (event) => {
    const service = selectedPlatform.services.find(
      (s) => s.type === event.target.value
    );
    setSelectedService(service);
  };
  /**************************************
   * FINALY SUBMIT ORDER FUNCTION HERE
   *************************************/
  const handleOrderSubmit = () => {
    // console.log(
    //   `Order submitted: ${orderQuantity} units of ${selectedService.name} on ${selectedPlatform.platform} total cost: ${totalCost}`
    // );
    // Check if the browser supports notifications
    if ("Notification" in window) {
      // Request permission to show notifications
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          // Create and show the notification with additional options
          const notification = new Notification("Order Success", {
            body: `
            Thanks For Your We Will Message You Via Email
            `,
            icon: notificationIcon, // Replace with the path to your icon
            vibrate: [200, 100, 200], // Vibration pattern (optional)
            // Additional options as needed
          });
        }
      });
      const audio = new Audio();
      audio.src = notificationsound;
      audio.play();
      audio.volume = 100;
    }
  };
  /**************************************
   * QUANTITY SELECTION FUNCTION HERE
   *************************************/
  const Quantity = (e) => {
    setOrderQuantity(e.target.value);
    const totalCost = orderQuantity * selectedService.price_per_unit;
    setTotalCost(totalCost);
  };
  /***********************************************
   * PLATFORM SELECTION CONTROL STATE HERE
   ***********************************************/
  const handleChangePlatformSelect = (event) => {
    handlePlatformSelect(event);
    setSelectPlatform(event.target.value);
  };
  /***********************************************
   * SERVICE SELECTION CONTROL STATE HERE
   ***********************************************/
  const handleChangeService = (event) => {
    handleServiceSelect(event);
    setSelectService(event.target.value);
  };
  return (
    <>
      <Header />
      <div className="yt_shop_page">
        <div className="yt_shop_banner">
          <LazyLoadImage src={yt_shop_banner} />
        </div>
        <div className="container">
          <div className="yt_wrapper">
            <Tabs
              id="controlled-tab-example"
              style={{ justifyContent: "center", border: "none" }}
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
            >
              <Tab eventKey="smmpanel" title="Smm Panel">
                <div className="smm_panel">
                  <PageTitle title={"find your service"} />
                  <div className="py-1">
                    <FormControl
                      variant="filled"
                      fullWidth
                      sx={{
                        m: 0,
                        backgroundColor: "white",
                        borderRadius: "5px",
                      }}
                    >
                      <InputLabel id="demo-select-small-label">
                        Select a platform
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        label="Select a platform"
                        value={SelectPlatform}
                        onChange={handleChangePlatformSelect}
                        input={<OutlinedInput label="Name" />}
                      >
                        <MenuItem value="hel">Platform</MenuItem>
                        {panelData.map((platform) => (
                          <MenuItem
                            key={platform.platform}
                            value={platform.platform}
                          >
                            {platform.platform}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                  <div className="py-1">
                    {selectedPlatform && (
                      <FormControl
                        variant="filled"
                        fullWidth
                        sx={{
                          m: 0,
                          backgroundColor: "white",
                          borderRadius: "5px",
                        }}
                      >
                        <InputLabel id="demo-select-small-label">
                          service for {selectedPlatform.platform}
                        </InputLabel>

                        <Select
                          labelId="demo-simple-select-filled-label"
                          id="demo-simple-select-filled"
                          label="services for"
                          value={SelectService}
                          onChange={handleChangeService}
                          input={<OutlinedInput label="Name" />}
                        >
                          <MenuItem value="hel">Platform</MenuItem>

                          {selectedPlatform.services.map((service) => (
                            <MenuItem key={service.type} value={service.type}>
                              {service.name} - $
                              {service.price_per_unit.toFixed(2)} per unit
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    )}
                  </div>
                  <div className="py-1">
                    <InputGroup className="">
                      <InputGroup.Text id="basic-addon1">
                        Quantity
                      </InputGroup.Text>
                      <Form.Control
                        type="number"
                        value={orderQuantity}
                        onChange={(e) => Quantity(e)}
                        aria-label="Service"
                        aria-describedby="basic-addon1"
                      />
                    </InputGroup>
                  </div>
                  <div className="py-1">
                    <InputGroup className="">
                      <InputGroup.Text id="basic-addon1">
                        <LinkRounded />
                      </InputGroup.Text>
                      <Form.Control
                        placeholder="Enter The LInk"
                        aria-label="Service"
                        aria-describedby="basic-addon1"
                      />
                    </InputGroup>
                  </div>
                  <div className="py-1">
                    <InputGroup className="">
                      <InputGroup.Text id="basic-addon1">
                        Total Cost $
                      </InputGroup.Text>
                      <Form.Control
                        placeholder={`$ ${totalCost}`}
                        aria-label="Service"
                        readOnly
                        aria-readonly
                        aria-describedby="basic-addon1"
                      />
                    </InputGroup>
                  </div>
                  <div className="py-1">
                    {selectedService && (
                      <Box
                        sx={{
                          backgroundColor: "#eee",
                          borderRadius: "10px",
                          padding: "10px",
                        }}
                      >
                        <Typography padding={0.2} textTransform={"capitalize"}>
                          <strong>
                            description
                            <ArrowRightAlt />{" "}
                          </strong>
                          {selectedService.description}
                        </Typography>
                        <Typography padding={0.2} textTransform={"capitalize"}>
                          <strong>
                            platform
                            <ArrowRightAlt />{" "}
                          </strong>
                          {selectedPlatform.platform}
                        </Typography>
                        <Typography padding={0.2} textTransform={"capitalize"}>
                          <strong>
                            service
                            <ArrowRightAlt />{" "}
                          </strong>
                          {selectedService.name}
                        </Typography>
                        <Typography padding={0.2} textTransform={"capitalize"}>
                          <strong>
                            total cost
                            <ArrowRightAlt />{" "}
                          </strong>
                          ${totalCost}
                        </Typography>
                        <Typography padding={0.2} textTransform={"capitalize"}>
                          <strong>
                            delivery time
                            <ArrowRightAlt />{" "}
                          </strong>
                          {selectedService.delivery_time}
                        </Typography>
                        <Typography padding={0.2} textTransform={"capitalize"}>
                          <strong>
                            Guarantee <ArrowRightAlt />
                          </strong>
                          {selectedService.Guarantee}
                        </Typography>
                        <Typography padding={0.2} textTransform={"capitalize"}>
                          <strong>
                            Quantity <ArrowRightAlt />
                          </strong>
                          {orderQuantity}
                        </Typography>
                      </Box>
                    )}
                  </div>
                  <FormControlLabel
                    control={<Checkbox {...label} defaultChecked />}
                    label="YES, I HAVE CONFIRMED THE ORDER!"
                  />
                  <div className="mt-3">
                    <Button variant="contained" onClick={handleOrderSubmit}>
                      place order
                    </Button>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="mass_order" title="Mass Order">
                <div className="smm_panel">
                  <InputLabel>
                    <Typography>
                      One order per line in format
                      <Tooltip title="Here you can place your orders easy! Please make sure you check all the prices and delivery times before you place a order! After a order submited it cannot be canceled.">
                        <Help />
                      </Tooltip>
                    </Typography>
                  </InputLabel>
                  <textarea
                    className="form-control mt-2"
                    name=""
                    id=""
                    cols="40"
                    rows="10"
                  ></textarea>
                  <FormControlLabel
                    control={<Checkbox {...label} defaultChecked />}
                    label="YES, I HAVE CONFIRMED THE ORDER!"
                  />
                  <div className="mt-3">
                    <Button variant="contained">place order</Button>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SmmPanel;
