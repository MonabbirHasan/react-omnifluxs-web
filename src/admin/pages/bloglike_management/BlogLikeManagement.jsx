import React from "react";
import "./bloglike_management.css";
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
const BlogLikeManagement = () => {
  return (
    <div className="bloglike_management">
      <Container>
        <div className="bloglike_wrapper">
          <div className="bloglike_form">
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
              like dislike
            </Typography>
            <FloatingLabel
              className="mb-2"
              controlId="floatingInputGrid"
              label="author"
            >
              <Form.Control type="text" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              className="mb-2"
              controlId="floatingInputGrid"
              label="posts"
            >
              <Form.Control type="text" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              className="mb-2"
              controlId="floatingSelectGrid"
              label="Like/Dislike"
            >
              <Form.Select aria-label="Floating label select example">
                <option value="1">Like</option>
                <option value="3">Dislike</option>
              </Form.Select>
            </FloatingLabel>
            <Button sx={{ textTransform: "capitalize" }} variant="contained">
              save like
            </Button>
          </div>
          <div className="bloglike_table">
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
              like dislike table
            </Typography>
            <TableContainer component={Paper} elevation={0}>
              <Table sx={{ minWidth: "100%" }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">author</TableCell>
                    <TableCell align="right">post</TableCell>
                    <TableCell align="right">like/dislike</TableCell>
                    <TableCell align="right">actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="right">admin</TableCell>
                    <TableCell align="right">code</TableCell>
                    <TableCell align="right">like</TableCell>
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

export default BlogLikeManagement;
