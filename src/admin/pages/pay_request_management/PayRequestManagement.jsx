import React from "react";
import "./payout_management.css";
import { FloatingLabel, Form, Container, Badge } from "react-bootstrap";
import {
  Avatar,
  Button,
  IconButton,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
const PayRequestManagement = () => {
  return (
    <div className="payout_management">
      <Container fluid>
        <div className="payout_wrapper">
          <div className="payout_management_form"></div>
          <div className="payout_management_table">
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
              payout
            </Typography>
            <TableContainer component={Paper} elevation={0}>
              <Table sx={{ minWidth: "auto" }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">seller</TableCell>
                    <TableCell align="right">status</TableCell>
                    <TableCell align="right">amount</TableCell>
                    <TableCell align="right">requst date</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="right">jhon</TableCell>
                    <TableCell align="right" style={{float:'right'}}>
                      <Form.Select style={{width:'100px'}}>
                        <option value="1">panding</option>
                        <option value="2">rejected</option>
                        <option value="3">confirm</option>
                      </Form.Select>
                    </TableCell>
                    <TableCell align="right">$203</TableCell>
                    <TableCell align="right">02 jan 2023</TableCell>
                    <TableCell align="right">
                      <Button variant="contained" color="error">
                        <Delete htmlColor="white" />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Typography py={1}></Typography>
            {/* <Button variant="contained">save</Button> */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PayRequestManagement;
