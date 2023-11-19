import React, { useState } from "react";
import "./payout.css";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Badge, Container, Modal } from "react-bootstrap";
import {
  Box,
  Card,
  Checkbox,
  Collapse,
  FormControl,
  IconButton,
  InputLabel,
  ListItem,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import DashboardHeader from "../../HeaderFooter/DashboardHeader";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  ArrowCircleLeftRounded,
  Check,
  CheckBoxOutlineBlank,
  CheckCircleOutlineRounded,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import PaymentMethodCard from "../../../../design/PaymentMethodCard";
const Pyaout = () => {
  // states
  let [open, setOpen] = useState(false);
  const [selectOption, setSelectOption] = useState("");
  let [OptionFilteredData, setOptionFilteredData] = useState([]);
  let [InputFilteredData, setInputFilteredData] = useState([]);
  const navigate = useNavigate();
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const handleChange = (event) => {
    setSelectOption(event.target.value);
  };
  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];
  /**********************************
   * PAYMENT DATA OBJECT
   **********************************/
  const pay_history = [
    {
      id: "1",
      date: new Date().toLocaleDateString(),
      status: true,
      charge: "$323.23",
      refunds: "$0.00",
      fees: "-$342.232",
      total: "$2,434.234",
    },
    {
      id: "2",
      date: new Date().toLocaleDateString(),
      status: true,
      charge: "$323.23",
      refunds: "$0.00",
      fees: "-$342.232",
      total: "$2,434.234",
    },
    {
      id: "3",
      date: new Date().toLocaleDateString(),
      status: true,
      charge: "$323.23",
      refunds: "$0.00",
      fees: "-$342.232",
      total: "$2,434.234",
    },
    {
      id: "4",
      date: new Date().toLocaleDateString(),
      status: true,
      charge: "$323.23",
      refunds: "$0.00",
      fees: "-$342.232",
      total: "$2,434.234",
    },
    {
      id: "5",
      date: new Date().toLocaleDateString(),
      status: true,
      charge: "$323.23",
      refunds: "$0.00",
      fees: "-$342.232",
      total: "$2,434.234",
    },
    {
      id: "6",
      date: new Date().toLocaleDateString(),
      status: true,
      charge: "$323.23",
      refunds: "$0.00",
      fees: "-$342.232",
      total: "$2,434.234",
    },
    {
      id: "7",
      date: new Date().toLocaleTimeString(),
      status: true,
      charge: "$444.23",
      refunds: "$222.00",
      fees: "-$111.232",
      total: "$6666.234",
    },
  ];

  /******************************************
   * PAYMENT DATA FILTER BY SELECT OPTION
   ******************************************/
  const TransectionDataFilterByOption = (date) => {
    const filter_records = pay_history.filter((item) => item.date === date);
    setOptionFilteredData(filter_records);
    console.log(filter_records);
  };
  /******************************************
   * PAYMENT DATA FILTER BY INPUT
   ******************************************/
  const TransectionDataFilterByInput = (date) => {
    const filter_records = pay_history.filter(
      (item) =>
        item.date === date ||
        item.status === date ||
        item.charge === date ||
        item.refunds === date ||
        item.fees === date ||
        item.total === date
    );
    console.log(filter_records);
    setInputFilteredData(filter_records);
  };
  const inputPlaceholderData = ["name", "emali", "phone"];
  return (
    <>
      <DashboardHeader />
      <div className="payout_page">
        <Container>
          <div className="payout_wrapper">
            {/*************************************************
             * PAYOUT METHOD PANEL CONTROLL BUTTON START HERE
             * ************************************************/}
            <Box mb={3}>
              <Card sx={{ width: "100%", background: "#651de2" }} elevation={1}>
                <CardContent>
                  <IconButton
                    onClick={() => navigate(-"1")}
                    sx={{ color: "white" }}
                  >
                    <ArrowCircleLeftRounded />
                  </IconButton>
                  <Typography color={"#fff"} variant="h5" component="div">
                    OmniFluxs :) Payment
                  </Typography>
                  <Typography variant="body2" color="white" pt={1}>
                    We recommend using Wise. Note that you do not need to setup
                    a Wise account if you don’t have one. All you need to do is
                    to fill in your details, and your payout will be transferred
                    directly into your local bank account, e-wallet or card,
                    depending where are you from
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    sx={{
                      background: "white",
                      color: "black",
                      "&:hover": {
                        backgroundColor: "black",
                        color: "white",
                      },
                    }}
                    onClick={() =>
                      open === false ? setOpen(true) : setOpen(false)
                    }
                    size="large"
                    variant=""
                  >
                    payout methods
                  </Button>
                </CardActions>
              </Card>
            </Box>
            {/*************************************************
             * PAYOUT METHOD PANEL START HERE
             * ************************************************/}
            <Collapse in={open} timeout="auto" unmountOnExit>
              <div>
                <div className="method_item">
                  <Typography
                    py={2}
                    fontWeight={600}
                    fontSize={28}
                    color="#242526"
                    textTransform={"capitalize"}
                    pl={1}
                  >
                    add your payout method
                  </Typography>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(4,1fr)",
                      gap: "10px",
                    }}
                  >
                    {/***********/}
                    <PaymentMethodCard
                      methodName="Phone Pay"
                      btnTitle="add"
                      payoutFees="fees may apply"
                      releaseDuration="up to 1 business days"
                      NumberOfInputFiels={3}
                      InputFielsPlaceholder3={[
                        "Your Name!",
                        "Email Address!",
                        "Phone Number!",
                      ]}
                      NumberOfBtns={1}
                      BtnText="save method"
                    />
                    {/*METHOD CARDT ITEM*/}
                    <PaymentMethodCard
                      methodName="paypal"
                      btnTitle="add"
                      payoutFees="fees may apply"
                      releaseDuration="up to 1 business days"
                      NumberOfInputFiels={3}
                      InputFielsPlaceholder3={[
                        "Your Name!",
                        "Email Address!",
                        "Phone Number!",
                      ]}
                      NumberOfBtns={1}
                      BtnText="save method"
                    />
                    <PaymentMethodCard
                      methodName="Google Pay"
                      btnTitle="add"
                      payoutFees="fees may apply"
                      releaseDuration="up to 1 business days"
                      NumberOfInputFiels={3}
                      InputFielsPlaceholder3={[
                        "Your Name!",
                        "Email Address!",
                        "Phone Number!",
                      ]}
                      NumberOfBtns={1}
                      BtnText="save method"
                    />
                    <PaymentMethodCard
                      methodName="Paytm"
                      btnTitle="add"
                      payoutFees="fees may apply"
                      releaseDuration="up to 1 business days"
                      NumberOfInputFiels={3}
                      InputFielsPlaceholder3={[
                        "Your Name!",
                        "Email Address!",
                        "Phone Number!",
                      ]}
                      NumberOfBtns={1}
                      BtnText="save method"
                    />
                    <PaymentMethodCard
                      methodName="Esaypaisa"
                      btnTitle="add"
                      payoutFees="fees may apply"
                      releaseDuration="up to 1 business days"
                      NumberOfInputFiels={3}
                      InputFielsPlaceholder3={[
                        "Your Name!",
                        "Email Address!",
                        "Phone Number!",
                      ]}
                      NumberOfBtns={1}
                      BtnText="save method"
                    />
                    {/*METHOD CARDT ITEM*/}
                    <PaymentMethodCard
                      methodName="Jazz Cash"
                      btnTitle="add"
                      payoutFees="fees may apply"
                      releaseDuration="up to 1 business days"
                      NumberOfInputFiels={3}
                      InputFielsPlaceholder3={[
                        "Your Name!",
                        "Email Address!",
                        "Phone Number!",
                      ]}
                      NumberOfBtns={1}
                      BtnText="save method"
                    />
                    {/*METHOD CARDT ITEM*/}
                    <PaymentMethodCard
                      methodName="Bkash"
                      btnTitle="add"
                      payoutFees="fees may apply"
                      releaseDuration="up to 1 business days"
                      NumberOfInputFiels={3}
                      InputFielsPlaceholder3={[
                        "Your Name!",
                        "Email Address!",
                        "Phone Number!",
                      ]}
                      NumberOfBtns={1}
                      BtnText="save method"
                    />
                    {/*METHOD CARDT ITEM*/}
                    <PaymentMethodCard
                      methodName="Nagad"
                      btnTitle="add"
                      payoutFees="fees may apply"
                      releaseDuration="up to 1 business days"
                      NumberOfInputFiels={3}
                      InputFielsPlaceholder3={[
                        "Your Name!",
                        "Email Address!",
                        "Phone Number!",
                      ]}
                      NumberOfBtns={1}
                      BtnText="save method"
                    />
                    {/*METHOD CARDT ITEM*/}
                    <PaymentMethodCard
                      methodName="Bank Account"
                      btnTitle="add"
                      payoutFees="fees may apply"
                      releaseDuration="up to 1 business days"
                      NumberOfInputFiels={3}
                      InputFielsPlaceholder3={[
                        "Your Name!",
                        "Email Address!",
                        "Phone Number!",
                      ]}
                      NumberOfBtns={1}
                      BtnText="save method"
                    />
                    {/*METHOD CARDT ITEM*/}
                    <PaymentMethodCard
                      methodName="stripe"
                      btnTitle="add"
                      payoutFees="fees may apply"
                      releaseDuration="up to 1 business days"
                      NumberOfInputFiels={3}
                      InputFielsPlaceholder3={[
                        "Your Name!",
                        "Email Address!",
                        "Phone Number!",
                      ]}
                      NumberOfBtns={1}
                      BtnText="save method"
                    />
                    {/*METHOD CARDT ITEM*/}
                    <PaymentMethodCard
                      methodName="Binanse"
                      btnTitle="add"
                      payoutFees="fees may apply"
                      releaseDuration="up to 1 business days"
                      NumberOfInputFiels={3}
                      InputFielsPlaceholder3={[
                        "Your Name!",
                        "Email Address!",
                        "Phone Number!",
                      ]}
                      NumberOfBtns={1}
                      BtnText="save method"
                    />
                    {/*METHOD CARDT ITEM*/}
                    <PaymentMethodCard
                      methodName="Payoneer"
                      btnTitle="add"
                      payoutFees="fees may apply"
                      releaseDuration="up to 1 business days"
                      NumberOfInputFiels={3}
                      InputFielsPlaceholder3={[
                        "Your Name!",
                        "Email Address!",
                        "Phone Number!",
                      ]}
                      NumberOfBtns={1}
                      BtnText="save method"
                    />
                    {/*METHOD CARDT ITEM*/}
                    <PaymentMethodCard
                      methodName="Crypto Currency"
                      btnTitle="add"
                      payoutFees="fees may apply"
                      releaseDuration="up to 1 business days"
                      NumberOfInputFiels={3}
                      InputFielsPlaceholder3={[
                        "Your Name!",
                        "Email Address!",
                        "Phone Number!",
                      ]}
                      NumberOfBtns={1}
                      BtnText="save method"
                    />
                    {/*METHOD CARDT ITEM*/}
                    <PaymentMethodCard
                      methodName="instamojo"
                      btnTitle="add"
                      payoutFees="fees may apply"
                      releaseDuration="up to 1 business days"
                      NumberOfInputFiels={3}
                      InputFielsPlaceholder3={[
                        "Your Name!",
                        "Email Address!",
                        "Phone Number!",
                      ]}
                      NumberOfBtns={1}
                      BtnText="save method"
                    />
                    {/*METHOD CARDT ITEM*/}
                    <PaymentMethodCard
                      methodName="razorpay"
                      btnTitle="add"
                      payoutFees="fees may apply"
                      releaseDuration="up to 1 business days"
                      NumberOfInputFiels={3}
                      InputFielsPlaceholder3={[
                        "Your Name!",
                        "Email Address!",
                        "Phone Number!",
                      ]}
                      NumberOfBtns={1}
                      BtnText="save method"
                    />
                  </div>
                </div>
              </div>
            </Collapse>
            {/*************************************************
             * TRANSECTION HISTORY SECTION START HERE
             * ************************************************/}
          </div>
          <section className="payout_wrapper mt-5">
            <TableContainer component={Paper}>
              {/*************************************************
               * TRANSECTION HISTORY FILTER START HERE
               * ************************************************/}
              <Box
                sx={{
                  padding: "15px",
                  background: "#fff",
                }}
              >
                <Typography fontSize={16} fontWeight={500} mb={3}>
                  Filter
                </Typography>
                <Stack direction={"row"} justifyContent={"space-between"}>
                  <FormControl sx={{ width: "200px" }}>
                    <InputLabel id="demo-simple-select-label">
                      Filter by Date
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={selectOption}
                      label="Date"
                      onChange={(e) => {
                        handleChange(e);
                        TransectionDataFilterByOption(e.target.value);
                      }}
                    >
                      <MenuItem value="all">All</MenuItem>
                      {pay_history.map((items) => (
                        <MenuItem key={items.id} value={items.date}>
                          {items.date}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <TextField
                    id="filled-basic"
                    label="search history"
                    variant="filled"
                    onKeyUp={(e) =>
                      TransectionDataFilterByInput(e.target.value)
                    }
                  />
                </Stack>
              </Box>
              {/*************************************************
               * TRANSECTION HISTORY TABLE START HERE
               * ************************************************/}
              <Table sx={{ minWidth: 670 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    {/* <TableCell>Dessert (100g serving)</TableCell> */}
                    <TableCell align="left">Actions</TableCell>
                    <TableCell align="left">Date</TableCell>
                    <TableCell align="right">Status</TableCell>
                    <TableCell align="right">Charges</TableCell>
                    <TableCell align="right">Refunds</TableCell>
                    <TableCell align="right">Fees</TableCell>
                    <TableCell align="right">Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {OptionFilteredData.length > 0
                    ? OptionFilteredData.map((row) => (
                        <TableRow
                          key={row.id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            <Checkbox color="success" checkedIcon={<Check />} />
                          </TableCell>
                          <TableCell component="th" scope="row">
                            {row.date}
                          </TableCell>
                          <TableCell align="right">
                            {row.status === true ? (
                              <Badge bg="primary">Paid</Badge>
                            ) : (
                              "Panding"
                            )}
                          </TableCell>
                          <TableCell align="right">{row.charge}</TableCell>
                          <TableCell align="right">{row.refunds}</TableCell>
                          <TableCell align="right">{row.fees}</TableCell>
                          <TableCell align="right">{row.total}</TableCell>
                        </TableRow>
                      ))
                    : InputFilteredData.length > 0
                    ? InputFilteredData.map((row) => (
                        <TableRow
                          key={row.id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            <Checkbox color="success" checkedIcon={<Check />} />
                          </TableCell>
                          <TableCell component="th" scope="row">
                            {row.date}
                          </TableCell>
                          <TableCell align="right">
                            {row.status === true ? (
                              <Badge bg="primary">Paid</Badge>
                            ) : (
                              "Panding"
                            )}
                          </TableCell>
                          <TableCell align="right">{row.charge}</TableCell>
                          <TableCell align="right">{row.refunds}</TableCell>
                          <TableCell align="right">{row.fees}</TableCell>
                          <TableCell align="right">{row.total}</TableCell>
                        </TableRow>
                      ))
                    : pay_history.map((row) => (
                        <TableRow
                          key={row.id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            <Checkbox color="success" checkedIcon={<Check />} />
                          </TableCell>
                          <TableCell component="th" scope="row">
                            {row.date}
                          </TableCell>
                          <TableCell align="right">
                            {row.status === true ? (
                              <Badge bg="primary">Paid</Badge>
                            ) : (
                              "Panding"
                            )}
                          </TableCell>
                          <TableCell align="right">{row.charge}</TableCell>
                          <TableCell align="right">{row.refunds}</TableCell>
                          <TableCell align="right">{row.fees}</TableCell>
                          <TableCell align="right">{row.total}</TableCell>
                        </TableRow>
                      ))}
                </TableBody>
              </Table>
            </TableContainer>
          </section>
        </Container>
      </div>
      {/*********************************************************************
       * ALL MODALS HERE
       **************************************************************/}
    </>
  );
};

export default Pyaout;
