import React from "react";
import "./course_managment.css";
import {
  Badge,
  Container,
  FloatingLabel,
  Form,
  InputGroup,
} from "react-bootstrap";
import {
  Avatar,
  Button,
  FormControl,
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
import { Delete, Edit, PictureAsPdf } from "@mui/icons-material";

const CourseMangement = () => {
  return (
    <div className="course_managment">
      <Container fluid>
        <div className="course_managment_wrapper">
          <div className="course_managment_form">
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
            <FloatingLabel
              controlId="floatingInput"
              label="course name"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Instructor"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Enter Price Like This > $20 "
              className="mb-3"
            >
              <Form.Control type="text" placeholder="name@example.com" />
            </FloatingLabel>
            <InputGroup className="mb-3">
              <InputGroup.Text>
                <Typography>Course File</Typography>
                <PictureAsPdf />
              </InputGroup.Text>
              <Form.Control type="file" />
            </InputGroup>

            <FloatingLabel
              className="mb-3"
              controlId="floatingSelect"
              label="Category"
            >
              <Form.Select aria-label="Floating label select example">
                <option value="1">Category</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Course Description"
            >
              <Form.Control
                as="textarea"
                placeholder=" "
                style={{ height: "100px" }}
              />
            </FloatingLabel>
            <FormControl sx={{ mt: 2 }}>
              <Button sx={{ textTransform: "capitalize" }} variant="contained">
                save course
              </Button>
            </FormControl>
          </div>
          <div className="course_managment_form">
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
              all courses
            </Typography>
            <TableContainer component={Paper} elevation={0}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">course name</TableCell>
                    <TableCell align="right">instructor</TableCell>
                    <TableCell align="right">course price</TableCell>
                    <TableCell align="right">file</TableCell>
                    <TableCell align="right">category</TableCell>
                    <TableCell align="right">description</TableCell>
                    <TableCell align="right">status</TableCell>
                    <TableCell align="right">actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="right">youtube monetization</TableCell>
                    <TableCell align="right">jhone</TableCell>
                    <TableCell align="right">$203</TableCell>
                    <TableCell align="right">
                      <Avatar
                        sx={{
                          width: "100%",
                          height: "30px",
                          borderRadius: "0",
                        }}
                      ></Avatar>
                    </TableCell>
                    <TableCell align="right">youtube</TableCell>
                    <TableCell align="right">
                      Lorem ipsum dolor sit amet.
                    </TableCell>
                    <TableCell align="right">
                      <Badge>active</Badge>
                    </TableCell>
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

export default CourseMangement;
