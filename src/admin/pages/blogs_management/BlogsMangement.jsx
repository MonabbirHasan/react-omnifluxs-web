import React from "react";
import "./blog_management.css";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import {
  Typography,
  Button as MuiButton,
  Paper,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Table,
  Avatar,
  IconButton,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

const BlogsMangement = () => {
  return (
    <div className="blog_management">
      <Container fluid>
        <div className="posts_wrapper">
          <div className="posts_form">
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
              add new posts
            </Typography>
            <FloatingLabel
              controlId="floatingInput"
              label="Post Title"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="thumnail"
              className="mb-3"
            >
              <Form.Control type="file" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="publish"
              className="mb-3"
            >
              <Form.Control
                type="datetime-local"
                placeholder="name@example.com"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="author"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="post tags"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingSelect"
              label="post category"
              className="mb-3"
            >
              <Form.Select aria-label="Floating label select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </FloatingLabel>
            <FloatingLabel
              className="mb-3"
              controlId="floatingSelect"
              label="post status"
            >
              <Form.Select aria-label="Floating label select example">
                <option value="1">Active</option>
                <option value="2">InActive</option>
              </Form.Select>
            </FloatingLabel>
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "200px" }}
              />
            </FloatingLabel>
            <MuiButton
              variant="contained"
              sx={{ mt: 1, textTransform: "capitalize" }}
            >
              save post
            </MuiButton>
          </div>
          <div className="posts_table">
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
              post table
            </Typography>
            <div className="post_table_wrapper">
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="right">Post thumnail</TableCell>
                      <TableCell align="right">Post Title</TableCell>
                      <TableCell align="right">Post publish</TableCell>
                      <TableCell align="right">Post author</TableCell>
                      <TableCell align="right">Post tags</TableCell>
                      <TableCell align="right">Post category</TableCell>
                      <TableCell align="right">Post status</TableCell>
                      <TableCell align="right">view</TableCell>
                      <TableCell align="right">actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell align="right">
                        <Avatar />
                      </TableCell>
                      <TableCell align="right">
                        Lorem ipsum dolor sit amet.
                      </TableCell>
                      <TableCell align="right">20 jan 2023</TableCell>
                      <TableCell align="right">jhone</TableCell>
                      <TableCell align="right">new,article,coding</TableCell>
                      <TableCell align="right">coding</TableCell>
                      <TableCell align="right">
                        <MuiButton sx={{ p: 0 }} variant="contained">
                          View
                        </MuiButton>
                      </TableCell>
                      <TableCell align="right">active</TableCell>
                      <TableCell align="right">
                        <IconButton>
                          <Edit />
                        </IconButton>
                        <IconButton>
                          <Delete />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogsMangement;
