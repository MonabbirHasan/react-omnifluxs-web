import React from "react";
import "./advertisement_management.css";
import { FloatingLabel, Form, Container } from "react-bootstrap";
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

const AdvertisementManagments = () => {
  return (
    <div className="advertisement_management">
      <Container fluid>
        <div className="advertisement_wrapper">
          <div className="advertisement_form">
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
              Add advertisement
            </Typography>
            <FloatingLabel
              controlId="floatingInput"
              label="Enter author"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Enter ads title"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Enter link url"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="ads thumbnail"
              className="mb-3"
            >
              <Form.Control type="file" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="start date"
              className="mb-3"
            >
              <Form.Control
                type="datetime-local"
                placeholder="name@example.com"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="end date"
              className="mb-3"
            >
              <Form.Control
                type="datetime-local"
                placeholder="name@example.com"
              />
            </FloatingLabel>
            <FloatingLabel
              className="mb-2"
              controlId="floatingSelect"
              label="status"
            >
              <Form.Select aria-label="Floating label select example">
                <option value="1">Active</option>
                <option value="0">InActive</option>
              </Form.Select>
            </FloatingLabel>
            <Button variant="contained" sx={{ textTransform: "capitalize" }}>
              save ads
            </Button>
          </div>
          <div className="advertisement_table">
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
              advertisement
            </Typography>
            <TableContainer component={Paper} elevation={0}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>thumbnail</TableCell>
                    <TableCell>author</TableCell>
                    <TableCell>title</TableCell>
                    <TableCell>link/url</TableCell>
                    <TableCell>start date</TableCell>
                    <TableCell>end start</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="right">
                      <Avatar />
                    </TableCell>
                    <TableCell align="right">admin</TableCell>
                    <TableCell align="right">
                      Lorem ipsum dolor sit amet.
                    </TableCell>
                    <TableCell align="right">https://example.com</TableCell>
                    <TableCell align="right">20 jan 2023</TableCell>
                    <TableCell align="right">10 jun 2023</TableCell>
                    <TableCell align="right">
                      <IconButton>
                        <Edit color="success" />
                      </IconButton>
                      <IconButton>
                        <Delete color="error" />
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

export default AdvertisementManagments;
