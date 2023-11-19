import React from "react";
import "./bpostcategory_management.css";
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
const BpostCategoryMagement = () => {
  return (
    <div className="bpostcategory_management">
      <Container fluid>
        <div className="blog_category_wrapper">
          <div className="bcategory_form">
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
              Add Reffer Team
            </Typography>
            <div className="bcategoryform">
              <FloatingLabel
                controlId="floatingInputGrid"
                label="Enter Category Name"
                className="mb-2"
              >
                <Form.Control type="text" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingSelect"
                label="Is Sub Category"
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
                label="Category Status"
                className="mb-2"
              >
                <Form.Select aria-label="Floating label select example">
                  <option value="1">Active</option>
                  <option value="0">InActive</option>
                </Form.Select>
              </FloatingLabel>
              <Button variant="contained" sx={{ textTransform: "capitalize" }}>
                save category
              </Button>
            </div>
          </div>
          <div className="bcategory_table">
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
              Reffer Team table
            </Typography>
            <TableContainer component={Paper} elevation={0}>
              <Table sx={{ minWidth: "100%" }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">category name</TableCell>
                    <TableCell align="right">sub category</TableCell>
                    <TableCell align="right">category status</TableCell>
                    <TableCell align="right">actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="right">youtube</TableCell>
                    <TableCell align="right">no</TableCell>
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

export default BpostCategoryMagement;
