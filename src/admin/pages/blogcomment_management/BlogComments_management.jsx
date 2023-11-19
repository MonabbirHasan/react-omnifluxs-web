import React from "react";
import { Container, FloatingLabel, Form } from "react-bootstrap";
import {
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
import "./blogcomment_managements.css";
const BlogComments_management = () => {
  // CREATE TABLE UserComments (
  //     CommentID INT PRIMARY KEY AUTO_INCREMENT,
  //     UserID INT,
  //     Comment TEXT,
  //     Timestamp DATETIME,
  //     Likes INT DEFAULT 0,
  //     Replies INT DEFAULT 0,
  //     ParentCommentID INT,
  //     Visibility BOOLEAN DEFAULT true,
  //     Tags VARCHAR(100),
  //     ReportCount INT DEFAULT 0,
  //     AttachmentURL VARCHAR(255),
  //     FOREIGN KEY (UserID) REFERENCES Users(UserID)
  // );
  return (
    <div className="blogcomment_managements">
      <Container fluid>
        <div className="blog_comments_wrapper">
          <div className="blog_comments_form">
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
              Add comments
            </Typography>
            <div className="bcategoryform">
              <FloatingLabel
                controlId="floatingInputGrid"
                label="author"
                className="mb-2"
              >
                <Form.Control type="text" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingSelect"
                label="Replies"
                className="mb-2"
              >
                <Form.Select aria-label="Floating label select example">
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingSelect"
                label="Likes"
                className="mb-2"
              >
                <Form.Select aria-label="Floating label select example">
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingSelect"
                label="posts"
                className="mb-2"
              >
                <Form.Select aria-label="Floating label select example">
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingSelect"
                label="Visibility"
                className="mb-2"
              >
                <Form.Select aria-label="Floating label select example">
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </FloatingLabel>
              <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                  className="mb-2"
                />
              </FloatingLabel>
              <Button variant="contained" sx={{ textTransform: "capitalize" }}>
                save category
              </Button>
            </div>
          </div>
          <div className="blog_comments">
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
              comments table
            </Typography>
            <TableContainer component={Paper} elevation={0}>
              <Table sx={{ minWidth: "100%" }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">author</TableCell>
                    <TableCell align="right">replies</TableCell>
                    <TableCell align="right">like/dislike</TableCell>
                    <TableCell align="right">posts</TableCell>
                    <TableCell align="right">comments</TableCell>
                    <TableCell align="right">status</TableCell>
                    <TableCell align="right">actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="right">jhone</TableCell>
                    <TableCell align="right">i am find.</TableCell>
                    <TableCell align="right">like</TableCell>
                    <TableCell align="right">youtube</TableCell>
                    <TableCell align="right">nc </TableCell>
                    <TableCell align="right">active</TableCell>
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

export default BlogComments_management;
