import React from "react";
import "./contact_management.css";
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
const ContactMangement = () => {
  return (
    <div className="contact_management">
      <Container fluid>
        <div className="contact_management_wrapper">
          <div className="contact_management_form"></div>
          <div className="contact_management_table">
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
              contact details
            </Typography>
            <TableContainer component={Paper} elevation={0}>
              <Table sx={{ minWidth: "100%" }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">name</TableCell>
                    <TableCell align="right">email</TableCell>
                    <TableCell align="right">phone</TableCell>
                    <TableCell align="right">description</TableCell>
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
                    <TableCell align="right">Lorem ipsum dolor sit amet.</TableCell>
                    <TableCell align="right">active</TableCell>
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

export default ContactMangement;
