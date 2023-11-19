import React from "react";
import "./client_managment.css";
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
const ClientsMangement = () => {
  return (
    <div className="client_managment">
      <Container fluid>
        <div className="client_managment_wrapper">
          <div className="client_managment_form">
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
              manage all client info
            </Typography>
            <FloatingLabel
              controlId="floatingInput"
              label="Enter client name"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Enter client Email"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Enter client phone"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Enter client address"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Enter client industry"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingTextarea"
              label="Description"
              className="mb-3"
            >
              <Form.Control as="textarea" placeholder="Leave a comment here" />
            </FloatingLabel>
            <Button variant="contained" sx={{ textTransform: "capitalize" }}>
              save client
            </Button>
          </div>
          <div className="client_managment_table">
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
              manage all client info
            </Typography>
          <TableContainer component={Paper} elevation={0}>
              <Table sx={{ minWidth: "100%" }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">client name</TableCell>
                    <TableCell align="right">client email</TableCell>
                    <TableCell align="right">client phone</TableCell>
                    <TableCell align="right">client address</TableCell>
                    <TableCell align="right">client industry</TableCell>
                    <TableCell align="right">client description</TableCell>
                    <TableCell align="right">Status</TableCell>
                    <TableCell align="right">actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="right">jhone</TableCell>
                    <TableCell align="right">jhon@gmail.com</TableCell>
                    <TableCell align="right">+913242423</TableCell>
                    <TableCell align="right">canada</TableCell>
                    <TableCell align="right">grocarry</TableCell>
                    <TableCell align="right">Lorem ipsum dolor sit amet.</TableCell>
                    <TableCell align="right">active</TableCell>
                    <TableCell align="right">
                      <IconButton variant="contained" color="success">
                        <Edit color="white" />
                      </IconButton>
                      <IconButton variant="contained" color="error">
                        <Delete color="white" />
                      </IconButton>
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

export default ClientsMangement;
