import React from "react";
import "./product_pin_request_managment.css";
import { Container, FloatingLabel, Form } from "react-bootstrap";
import {
  Avatar,
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
const ProductPinRequestManagment = () => {
  return (
    <div className="product_pin_request_managment">
      <Container fluid>
        <div className="product_pin_request_managment_wrapper">
          <div className="product_pin_request_managment_form"></div>
          <div className="product_pin_request_managment_table">
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
              pin products
            </Typography>
            <TableContainer component={Paper} elevation={0}>
              <Table sx={{ minWidth: "100%" }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">SellerID</TableCell>
                    <TableCell align="right">ProductID</TableCell>
                    <TableCell align="right">RequestDate</TableCell>
                    <TableCell align="right">Status</TableCell>
                    <TableCell align="right">actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="right">OMN323</TableCell>
                    <TableCell align="right">PRD323</TableCell>
                    <TableCell align="right">20 jan 2023</TableCell>
                    <TableCell align="right">
                      <Form.Select>
                        <option>panding</option>
                        <option>approved</option>
                        <option>rejected</option>
                      </Form.Select>
                    </TableCell>
                    <TableCell align="right">
                      <Button variant="contained" color="error">
                        <Delete color="white" />
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

export default ProductPinRequestManagment;
