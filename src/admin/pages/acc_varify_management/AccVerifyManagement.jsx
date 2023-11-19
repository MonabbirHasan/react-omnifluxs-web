import React from "react";
import "./acc_verify_management.css";
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
const AccVerifyManagement = () => {
  return (
    <div className="acc_verify_management">
      <Container fluid>
        <div className="acc_verify_management_wrapper">
          <div className="acc_verify_management_form"></div>
          <div className="acc_verify_management_table">
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
              account verify request
            </Typography>
            <TableContainer component={Paper} elevation={0}>
              <Table sx={{ minWidth: "100%" }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">seller id</TableCell>
                    <TableCell align="right" title="Path or URL to the image">
                      NationalIDCardImage
                    </TableCell>
                    <TableCell align="right">name</TableCell>
                    <TableCell align="right">email</TableCell>
                    <TableCell align="right">phone</TableCell>
                    <TableCell align="right">VerificationDate</TableCell>
                    <TableCell align="right">active plan</TableCell>
                    <TableCell align="right">status</TableCell>
                    <TableCell align="right">actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="right">OMN323</TableCell>
                    <TableCell align="right">
                      <Avatar sx={{ borderRadius: "0" }} />
                    </TableCell>
                    <TableCell align="right">jhone</TableCell>
                    <TableCell align="right">jhon@gmail.com</TableCell>
                    <TableCell align="right">+234304</TableCell>
                    <TableCell align="right">20 jan 2023</TableCell>
                    <TableCell align="right">bronze</TableCell>
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

export default AccVerifyManagement;
