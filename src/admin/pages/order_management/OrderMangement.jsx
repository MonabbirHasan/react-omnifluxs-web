import React, { useEffect } from "react";
import "./order_management.css";
import { Container, FloatingLabel, Form } from "react-bootstrap";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Box,
  Button,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import DataTable from "datatables.net-dt";
const OrderMangement = () => {
  useEffect(() => {
    const table = new DataTable("#orders_table");
  }, []);
  return (
    <div className="order_management">
      <Container>
        <div className="order_wrapper">
          <div className="order_form"></div>
          <div className="orders_data_tables">
            <Typography
              sx={{
                pb: 2,
                textTransform: "capitalize",
                color: "#919191",
                fontFamily: "fantasy!important",
                letterSpacing: "2px",
                fontSize: "2rem",
              }}
            >
              all orders
            </Typography>
            <TableContainer component={Paper} elevation={0}>
              <Table
                sx={{ minWidth: 650 }}
                aria-label="simple table"
                id="orders_table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell align="right">order id</TableCell>
                    <TableCell align="right">customer name</TableCell>
                    <TableCell align="right">payment method</TableCell>
                    <TableCell align="right">total</TableCell>
                    <TableCell align="right" title="product listing id">
                      listing id
                    </TableCell>
                    <TableCell align="right">date</TableCell>
                    <TableCell align="right">status</TableCell>
                    <TableCell align="right">actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="right">23</TableCell>
                    <TableCell align="right">youtube</TableCell>
                    <TableCell align="right">paypal</TableCell>
                    <TableCell align="right">$323</TableCell>
                    <TableCell align="right">OMN3423</TableCell>
                    <TableCell align="right">20 jan 2023</TableCell>
                    <TableCell align="right">active</TableCell>
                    <TableCell align="right">
                      <Button variant="contained" color="error">
                        <Delete htmlColor="white" />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OrderMangement;
