import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./withdrawal_wizard.css";
import {
  Box,
  Button,
  Divider,
  Stack,
  Tooltip,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  CardContent,
  CardActions,
  Select,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
  Alert,
} from "@mui/material";
import {
  ArrowBack,
  ArrowCircleLeftRounded,
  CheckCircleOutlineRounded,
  CheckCircleRounded,
  ContactSupport,
  ExpandMore,
  MoreVertRounded,
} from "@mui/icons-material";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { useNavigate } from "react-router-dom";
import witdrawel_wizerd_img from "../../../../assets/img/witdrawel_wizerd.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PayPal_Logo from "../../../../assets/img/PayPal-Logo.png";
import fastwalletimg from "../../../../assets/img/fast-wallet.f662c1c.png";
import { Badge, Container, Form } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import VerificationInput from "react-verification-input";
import DropdownButton from "react-bootstrap/DropdownButton";
function WithdrawalWizard() {
  /**********************************************
   * ERROR MESSAGE STATE HERE
   ************************************************/
  const [errMesage, setErrMessage] = useState(null);

  /**********************************************
   * MODAL STATE HERE
   ************************************************/
  const [ShowPayoutMethodsModals, setShowPayoutMethodsModals] = useState(false);
  const handleClosePayoutMethodsModals = () =>
    setShowPayoutMethodsModals(false);
  const handleShowPayoutMethodsModals = () => setShowPayoutMethodsModals(true);
  // Withdraw Balance Modal
  const [ShowWithdrawBalanceModal, setShowWithdrawBalanceModal] =
    useState(false);
  const handleCloseWithdrawBalanceModal = () =>
    setShowWithdrawBalanceModal(false);
  const handleShowWithdrawBalanceModal = () =>
    setShowWithdrawBalanceModal(true);
  //curency select value
  const [PhoneVerificationCode, setPhoneVerificationCode] = useState(null);
  const [ShowCurencyModal, setShowCurencyModal] = useState(false);
  const handleCloseCurencyModal = () => setShowCurencyModal(false);
  const handleShowCurencyModal = () => setShowCurencyModal(true);
  //withdrawal success modal control here
  const [ShowWithdrawSuccessModal, setShowWithdrawSuccessModal] =
    useState(false);
  const handleCloseWithdrawSuccessModal = () =>
    setShowWithdrawSuccessModal(false);
  const handleShowWithdrawSuccessModal = () =>
    setShowWithdrawSuccessModal(true);
  //payment method change phone verification modal control here
  const [
    ShowPaymentMethodPhoneVerificationModal,
    setShowPaymentMethodPhoneVerificationModal,
  ] = useState(false);
  const handleClosePaymentMethodPhoneVerificationModal = () =>
    setShowPaymentMethodPhoneVerificationModal(false);
  const handleShowPaymentMethodPhoneVerificationModal = () =>
    setShowPaymentMethodPhoneVerificationModal(true);
  //Show Phone Verification Modal Code form modal here
  const [ShowPhoneVerificationModal, setShowPhoneVerificationModal] =
    useState(false);
  const handleClosePhoneVerificationModal = () =>
    setShowPhoneVerificationModal(false);
  const handleShowPhoneVerificationModal = () =>
    setShowPhoneVerificationModal(true);
  /****************************************
   * PHONE VERIFIED MODAL
   * **************************************/
  const [ShowPhoneVerifiedModal, setShowPhoneVerifiedModal] = useState(false);
  const handleClosePhoneVerifiedModal = () => setShowPhoneVerifiedModal(false);
  const handleShowPhoneVerifiedModal = () => setShowPhoneVerifiedModal(true);
  const navigate = useNavigate();
  /****************************************
   * PHONE VERRIFICATION INPUT FORM DESIGN
   * **************************************/
  console.log(document.getElementsByClassName("phoneVerification"));
  const styles = {
    formControl: {
      display: "block",
      height: "50px",
      marginRight: "0.5rem",
      textAlign: "center",
      fontSize: "1.25rem",
      minWidth: "0",
    },
  };
  const VerifyPhoneInput = () => {
    if (PhoneVerificationCode == "") {
      return false;
    }
    // alert("Thanks!");
    handleShowPhoneVerifiedModal();
    handleClosePhoneVerificationModal();
    setPhoneVerificationCode(null);
  };

  return (
    <>
      <div className="withdrawal_wizard">
        <Container>
          <Button
            variant="contained"
            color="primary"
            sx={{ color: "white" }}
            onClick={() => navigate("/seller_dashboard/user/monabbirhasan")}
          >
            <ArrowBack sx={{ fontSize: "2rem" }} />
            <Typography
              variant="span"
              fontSize={14}
              textTransform={"capitalize"}
            >
              Back to Earnings
            </Typography>
          </Button>
          <Divider />
          {/***************************
           * withdrawal_wizard
           ****************************/}
          <Stack mt={10} direction={"row"}>
            <Box className="withdrawal_wizard_left" flexBasis={"50%"}>
              <Typography
                variant="h4"
                fontWeight={"700"}
                color={"#404145"}
                py={2}
                display={""}
                fontFamily={
                  'macan, "helvetica neue", Helvetica, Arial, Bangla848, sans-serif'
                }
                textTransform={"capitalize"}
              >
                Withdraw balance
              </Typography>
              <Typography pt={2}>Available for withdrawal</Typography>
              <Typography
                variant="h4"
                fontSize={32}
                fontWeight={"700"}
                lineHeight={2}
                color={"#111"}
              >
                $40.00
              </Typography>
              <Typography
                pt={4}
                style={{ wordWrap: "break-word", lineBreak: "strict" }}
              >
                To begin the withdrawal process, select your preferred payout
                method.
              </Typography>
              <Tooltip
                sx={{ padding: "10px" }}
                placement="top-start"
                title="Withdraw your earnings to your PayPal account"
              >
                <Button
                  sx={{
                    mt: 3,
                    textTransform: "capitalize",
                  }}
                  variant="contained"
                  onClick={handleShowWithdrawBalanceModal}
                  startIcon={
                    <LazyLoadImage
                      style={{ width: "30px", height: "30px" }}
                      src={"https://img.icons8.com/color/30/paypal.png"}
                    />
                  }
                >
                  PayPal Account
                </Button>
              </Tooltip>
              <Typography
                onClick={handleShowPayoutMethodsModals}
                textAlign={"left"}
                sx={{ textDecoration: "underline", cursor: "pointer" }}
                mt={3}
              >
                Mange payout methods
              </Typography>
            </Box>
            <Box className="withdrawal_wizard_right" flexBasis={"50%"}>
              <LazyLoadImage
                style={{ width: "100%", height: "auto" }}
                src={witdrawel_wizerd_img}
              />
            </Box>
          </Stack>
        </Container>
      </div>
      {/*******************************************
       * ALL MODALS HERE
       *****************************************/}
      {/* Withdraw Balance Modal */}
      <Modal
        show={ShowWithdrawBalanceModal}
        onHide={handleCloseWithdrawBalanceModal}
        // size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <Typography
              fontSize={28}
              fontWeight={"700"}
              pt={2}
              m={0}
              color={"#404145"}
            >
              Withdraw Balance
            </Typography>
            <Typography>Review your withdrawal details.</Typography>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card sx={{ minWidth: 275 }} elevation={4}>
            <CardContent>
              <Divider />
              <Stack py={2} direction={"row"} justifyContent={"space-between"}>
                <Box>
                  <Typography
                    textTransform={"capitalize"}
                    fontWeight={"700"}
                    sx={{ fontSize: 18 }}
                    color="#74767e"
                  >
                    Transfer to
                  </Typography>
                </Box>
                <Typography sx={{ fontSize: 18 }} color="#74767e">
                  <LazyLoadImage src="https://img.icons8.com/color/30/paypal.png" />
                  PayPal account
                </Typography>
              </Stack>
              <Divider />
              <Stack py={2} direction={"row"} justifyContent={"space-between"}>
                <Box>
                  <Typography
                    textTransform={"capitalize"}
                    fontWeight={"700"}
                    sx={{ fontSize: 18 }}
                    color="#74767e"
                  >
                    Account
                  </Typography>
                </Box>
                <Typography sx={{ fontSize: 18 }} color="#74767e">
                  s*******n@gmail.com
                </Typography>
              </Stack>
              <Divider />
              <Stack py={2} direction={"row"} justifyContent={"space-between"}>
                <Box>
                  <Typography
                    textTransform={"capitalize"}
                    fontWeight={"700"}
                    sx={{ fontSize: 18 }}
                    color="#74767e"
                  >
                    Amount{" "}
                    <Tooltip
                      placement="top-start"
                      title="You can withdraw up to $5,000 at a time."
                    >
                      <ContactSupport />
                    </Tooltip>
                  </Typography>
                </Box>
                <Typography sx={{ fontSize: 18 }} color="#74767e">
                  $40
                </Typography>
              </Stack>
              <Divider />
            </CardContent>
          </Card>
          <Typography
            onClick={() => {
              handleShowCurencyModal(), handleCloseWithdrawBalanceModal();
            }}
            sx={{
              cursor: "pointer",
              fontSize: "14",
              fontWeight: "600",
              color: "#222325",
              mt: 2,
              textAlign: "right",
              pr: 1,
              py: 3,
            }}
          >
            Change currency
          </Typography>
          <Typography variant="p">
            Your payment processor may apply extra fees. Transfers may take up
            to 1 business day.
          </Typography>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="outlined"
            sx={{
              marginRight: "5px",
              textTransform: "capitalize",
            }}
            onClick={handleCloseWithdrawBalanceModal}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{
              marginLeft: "5px",
              padding: "10px",
              textTransform: "capitalize",
              backgroundColor: "black",
            }}
            onClick={() => {
              handleCloseWithdrawBalanceModal(),
                handleShowWithdrawSuccessModal();
            }}
          >
            Confirm and withdraw
          </Button>
        </Modal.Footer>
      </Modal>
      {/**************************************************
       * Payout Methods Modals
       * *************************************************/}
      <Modal
        show={ShowPayoutMethodsModals}
        onHide={handleClosePayoutMethodsModals}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{ border: "none" }}>
          <Modal.Title>
            <Typography
              variant="h5"
              color={"#404145"}
              fontSize={24}
              fontWeight={"700"}
              pt={2}
              textTransform={"capitalize"}
            >
              Manage payout methods
            </Typography>
            <Typography
              variant="p"
              color={"#404145"}
              fontSize={16}
              fontWeight={"500"}
            >
              Change or remove your active payout methods.
            </Typography>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Stack direction={"row"}>
                <LazyLoadImage
                  style={{ marginRight: "10px", width: "30px", height: "auto" }}
                  src="https://img.icons8.com/color/30/paypal.png"
                />
                <Box
                  width={"100%"}
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <div>
                    <Typography
                      fontWeight={400}
                      fontSize={18}
                      color={"#62646a"}
                    >
                      PayPal account | USD - $
                    </Typography>
                    <Typography
                      fontWeight={400}
                      fontSize={16}
                      color={"#62646a"}
                    >
                      s*******n@gmail.com
                    </Typography>
                  </div>
                  {/*******************
                   * DROPDOWN
                   *********************/}
                  <Tooltip
                    title={
                      <>
                        <ListItemButton component="span">
                          <ListItemText primary="Change Account" />
                        </ListItemButton>
                        <ListItemButton component="span">
                          <ListItemText primary="Remove" />
                        </ListItemButton>
                      </>
                    }
                  >
                    <IconButton>
                      <MoreVertRounded />
                    </IconButton>
                  </Tooltip>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Modal.Body>
        <Modal.Footer style={{ border: "none" }}>
          <Button
            onClick={() => {
              handleShowPaymentMethodPhoneVerificationModal();
              handleClosePayoutMethodsModals();
            }}
            fullWidth
            variant="outlined"
            sx={{
              padding: "10px 0",
              marginBottom: "10px",
              "&:hover": {
                backgroundColor: "black",
                color: "white",
                borderColor: "white",
              },
              color: "black",
              textTransform: "capitalize",
            }}
          >
            Add new payout method
          </Button>
        </Modal.Footer>
      </Modal>
      {/**************************************************************
       * Show Curency Modal
       ***************************************************************/}
      <Modal
        show={ShowCurencyModal}
        onHide={handleCloseCurencyModal}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title
            style={{ fontSize: "24px", color: "#404145", fontWeight: "700" }}
          >
            Set Your Withdrawal Currency
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Box display={"flex"} flexDirection={"row"}>
              <LazyLoadImage
                style={{ marginRight: "10px", width: "100%", height: "auto" }}
                src="https://img.icons8.com/color/40/paypal.png"
              />
              <Typography style={{ flexBasis: "50%" }}>
                <span
                  style={{
                    fontWeight: "600",
                    fontSize: "18px",
                    letterSpacing: "1px",
                  }}
                >
                  PayPal account
                </span>
                <p
                  style={{
                    fontWeight: "300",
                    fontSize: "14px",
                    letterSpacing: "1px",
                  }}
                >
                  s*******n@gmail.com
                </p>
              </Typography>
            </Box>
            <Form.Select
              style={{
                cursor: "pointer",
                flexBasis: "20%",
                border: "1px solid #eee",
              }}
              aria-label="Default select example"
            >
              <option value="$">$</option>
              <option value="2">PKR</option>
              <option value="3">₹</option>
              <option value="3">BDT</option>
            </Form.Select>
          </Stack>
        </Modal.Body>
        <Modal.Footer style={{ border: "none" }}>
          <Button
            variant="contained"
            style={{
              backgroundColor: "black",
              padding: "10px 20px",
              textTransform: "capitalize",
            }}
            onClick={() => {
              handleCloseCurencyModal(), handleShowWithdrawBalanceModal();
            }}
          >
            Save Settings
          </Button>
          <Typography
            py={4}
            pr={5}
            textAlign={"center"}
            textTransform={"capitalize"}
            fontSize={"14px"}
          >
            Currency exchange fees may apply when withdrawing funds.
          </Typography>
        </Modal.Footer>
      </Modal>
      {/************************************************************
       * WITHDRAWAL SUCCESS MODAL HERE
       *************************************************************/}
      <Modal
        show={ShowWithdrawSuccessModal}
        onHide={handleCloseWithdrawSuccessModal}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton style={{ border: "none" }}></Modal.Header>
        <Modal.Body style={{ paddingBottom: "40px" }}>
          <center>
            <LazyLoadImage
              src={fastwalletimg}
              style={{ width: "200px", height: "86px" }}
            />
            <Typography
              fontSize={"28px"}
              color="#404145"
              fontWeight={"700"}
              py={2}
              variant="h4"
            >
              Woohoo, money!
            </Typography>
            <Typography>
              Your funds should arrive within 1 business day.
            </Typography>
            <Button
              onClick={() =>
                navigate("/seller_dashboard/user/monabbirhasan", {
                  replace: true,
                })
              }
              variant="'contained"
              sx={{
                backgroundColor: "black",
                textTransform: "capitalize",
                color: "white",
                mt: 3,
                textAlign: "center",
                padding: "10px 20px",
                fontSize: "16px",
                border: "2px solid black",
                fontWeight: "700",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "black",
                  border: "2px solid black",
                },
              }}
            >
              Got It
            </Button>
          </center>
        </Modal.Body>
      </Modal>
      {/************************************************************
       * PAYMENTD METHOD CHANGE PHONE VERIFICATION MODAL HERE
       *************************************************************/}
      <Modal
        centered
        show={ShowPaymentMethodPhoneVerificationModal}
        onHide={handleClosePaymentMethodPhoneVerificationModal}
      >
        <Modal.Header closeButton style={{ border: "none" }}>
          <Modal.Title>
            <Typography color="#404145" fontSize={24} fontWeight={600} pt={2}>
              Let’s Verify It’s You
            </Typography>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Typography
            sx={{
              color: "rgb(85, 85, 85)",
              fontSize: "14px",
              textTransform: "capitalize",
            }}
          >
            You are trying to add a payout method. Choose a verification method
            so we can make sure it’s you.
          </Typography>
        </Modal.Body>
        <Modal.Footer
          style={{
            display: "flex",
            justifyContent: "center",
            border: "none",
            gap: "30px",
            paddingBottom: "30px",
          }}
        >
          <Button
            fullWidth
            style={{
              flexBasis: "40%",
              textTransform: "capitalize",
              backgroundColor: "#3FCA89",
              fontWeight: "600",
              padding: "10px",
              fontSize: "16px",
            }}
            variant="contained"
            onClick={() => {
              handleClosePaymentMethodPhoneVerificationModal();
              handleShowPhoneVerificationModal();
            }}
          >
            Verify by SMS
          </Button>
          <Button
            fullWidth
            style={{
              flexBasis: "40%",
              textTransform: "capitalize",
              backgroundColor: "#3FCA89",
              fontWeight: "600",
              padding: "10px",
              fontSize: "16px",
            }}
            variant="contained"
            onClick={handleClosePaymentMethodPhoneVerificationModal}
          >
            Verify by Call
          </Button>
        </Modal.Footer>
      </Modal>
      {/************************************************************
       * PAYMENTD METHOD CHANGE PHONE VERIFICATION MODAL HERE
       *************************************************************/}
      <Modal
        centered
        show={ShowPhoneVerificationModal}
        onHide={handleClosePhoneVerificationModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <Typography>Verification Code Sent To:</Typography>
            <Typography>+880 - *** *** **31</Typography>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <center>
            <Box pb={5}>
              <Typography
                p={2}
                fontSize={30}
                fontWeight={"600"}
                color={"rgb(85, 85, 85)"}
              >
                Enter Code
              </Typography>
              <VerificationInput
                onChange={(e) => setPhoneVerificationCode(e)}
                value={PhoneVerificationCode}
                inputProps={{
                  autoComplete: "one-time-code",
                  inputMode: "numeric",
                }}
                placeholder="_"
                autoFocus={true}
                passwordMode={false}
                classNames={{
                  container: "container phoneVerification",
                  character: "character",
                  characterInactive: "character--inactive",
                  characterSelected: "character--selected",
                }}
              />
            </Box>
            <Button
              onClick={VerifyPhoneInput}
              sx={{
                padding: "10px 20px",
                backgroundColor: "#3FCA89",
                color: "white",
                "&:hover": {
                  color: "white",
                  backgroundColor: "black",
                },
                my: 3,
              }}
            >
              Submit code
            </Button>
            <Typography>
              <span> Didn’t get a code?</span>
              <Badge
                bg=""
                style={{ cursor: "pointer", color: "#3FCA89" }}
                className="text-dark"
              >
                Get it again by SMS
              </Badge>
            </Typography>
          </center>
        </Modal.Body>
      </Modal>
      {/************************************************************
       *  PHONE VERIFYED MODAL HERE
       *************************************************************/}
      <Modal
        show={ShowPhoneVerifiedModal}
        onHide={handleClosePhoneVerifiedModal}
      >
        <Modal.Header closeButton style={{ border: "none" }}></Modal.Header>
        <Modal.Body style={{ textAlign: "center" }}>
          <Typography>
            <CheckCircleOutlineRounded
              style={{
                fontSize: "3rem",
                padding: "5px 0",
              }}
              color="success"
            />
          </Typography>
          <Typography>Thanks for verifying it's you.</Typography>
        </Modal.Body>
        <Modal.Footer
          style={{
            display: "flex",
            justifyContent: "center",
            border: "none",
            paddingBottom: "30px",
          }}
        >
          <Button
            sx={{
              padding: "10px 20px",
              backgroundColor: "#3fca89",
              color: "white",
              fontSize: "14px",
              fontWeight: "600",
              "&:hover": {
                backgroundColor: "black",
                color: "white",
              },
            }}
            variant="secondary"
            onClick={() => {
              handleClosePhoneVerifiedModal();
              navigate("/seller_dashboard/payout");
            }}
          >
            add payout method
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default WithdrawalWizard;
