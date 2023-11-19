import {
  BackHand,
  Check,
  CheckCircleOutlineRounded,
  MonetizationOn,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";

function PaymentMethodCard(props) {
  const navigate = useNavigate();
  const [PayMethodName, setPayMethodName] = useState();
  const [ShowAddPaymentMethodModal, setShowAddPaymentMethodModal] =
    useState(false);
  const handleCloseAddPaymentMethodModal = () =>
    setShowAddPaymentMethodModal(false);
  const handleShowAddPaymentMethodModal = () =>
    setShowAddPaymentMethodModal(true);
  /***********************************************
   * PAYMENT ADDED SUCCESSFULL STATE HERE
   *******************************************/
  const [ShowPaymentMethodSuccessModal, setShowPaymentMethodSuccessModal] =
    useState(false);
  const handleClosePaymentMethodSuccessModal = () =>
    setShowPaymentMethodSuccessModal(false);
  const handleShowPaymentMethodSuccessModal = () =>
    setShowPaymentMethodSuccessModal(true);
  /***********************************
   * RANDER JSX ELEMENT BASED ON USER NEED
   **************************************/
  const INPUTBOX = [];
  const BUTTONS = [];
  const RANDER_JSX_ELEMENT = () => {
    for (let index = 0; index < props.NumberOfInputFiels; index++) {
      INPUTBOX.push(
        <InputGroup
          style={{
            padding: "5px",
          }}
        >
          <Form.Control
            placeholder={props.InputFielsPlaceholder3[index]}
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      );
    }
    for (let index = 0; index < props.NumberOfBtns; index++) {
      BUTTONS.push(<Button>{props.BtnText}</Button>);
    }
  };
  RANDER_JSX_ELEMENT();
  return (
    <>
      <div>
        <Card
          elevation={3}
          sx={{
            maxWidth: 345,
            background: "linear-gradient(30deg,#a044ff,#EF629F)",
          }}
        >
          <CardContent>
            <Typography
              color={"#fff"}
              textTransform={"capitalize"}
              variant="h5"
              component="div"
            >
              {props.methodName}
            </Typography>
            <Typography
              variant="body2"
              color="white"
              fontSize={14}
              textTransform={"capitalize"}
              pt={1}
            >
              <ListItem
                sx={{
                  backgroundColor: " ",
                  borderRadius: "5px",
                  my: 0.4,
                }}
              >
                <span style={{ paddingRight: "5px" }}>
                  <CheckCircleOutlineRounded />
                </span>
                <span>{props.releaseDuration}</span>
              </ListItem>
              <ListItem
                sx={{
                  backgroundColor: " ",
                  borderRadius: "5px",
                  my: 0.4,
                }}
              >
                <span style={{ paddingRight: "5px" }}>
                  <CheckCircleOutlineRounded />
                </span>
                <span>{props.payoutFees}</span>
              </ListItem>
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              onClick={() => {
                handleShowAddPaymentMethodModal();
                setPayMethodName(props.methodName);
              }}
              fullWidth
              size="larg"
              style={{
                backgroundColor: "#111",
                textAlign: "center",
              }}
              variant="contained"
            >
              {props.btnTitle}
            </Button>
          </CardActions>
        </Card>
      </div>
      {/***************************
       * ALL MODLA HER
       ****************************/}
      <Modal
        show={ShowAddPaymentMethodModal}
        onHide={handleCloseAddPaymentMethodModal}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ textTransform: "capitalize" }}>
            {PayMethodName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Box>{INPUTBOX}</Box>
          <Box>{BUTTONS}</Box>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="contained"
            onClick={() => {
              handleCloseAddPaymentMethodModal();
              handleShowPaymentMethodSuccessModal();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {/**************************************************
       * PAYMENT METHOD ADDED SUCCESS MODAL HERE
       * **************************************************/}
      <Modal
        show={ShowPaymentMethodSuccessModal}
        onHide={handleClosePaymentMethodSuccessModal}
      >
        <Modal.Header closeButton style={{ border: "none" }}>
          <Modal.Title style={{ textTransform: "capitalize" }}></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <center>
            <LazyLoadImage
              width={"200px"}
              height={"200px"}
              src="https://img.freepik.com/premium-vector/email-envelope-concept_34259-135.jpg"
            />
            <Typography
              variant="h3"
              fontSize={18}
              fontWeight={"600"}
              textTransform={"capitalize"}
            >
              you'r almost there
            </Typography>
          </center>
        </Modal.Body>
        <Modal.Footer style={{ border: "none" }}>
          <Button
            onClick={() => navigate("/seller_dashboard/withdrawal_wizard")}
            variant="contained"
            sx={{
              textTransform: "capitalize",
              backgroundColor: "black",
              color: "white",
              "&:hover": {
                backgroundColor: "black",
              },
            }}
          >
            go it
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PaymentMethodCard;
