import React from "react";
import "./review_management.css";
import { Container, Form, InputGroup } from "react-bootstrap";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Box,
  Button,
  Stack,
  TextField,
  FormControl,
  InputLabel,
  Select as MuiSelect,
  MenuItem,
} from "@mui/material";
import { Delete, Details, Edit, Star } from "@mui/icons-material";
const ReviewManagement = () => {
  return (
    <div className="review_management">
      <Container>
        <div className="review_management_wrapper">
          <div className="review_form"></div>
          <div className="review_table">
            {/*RIVIEW FILTER SECTION START HERE*/}
            <Stack direction={"row"} justifyContent={"space-between"}>
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
                all reviews
              </Typography>
              <Box
                sx={{
                  padding: "10px",
                  backgroundColor: "#eee",
                  boxShadow: "-1px -1px 3px #eee,1px 1px 3px #eee",
                  border: "2px solid #fff",
                  mb: 1,
                  display: "flex",
                  gap: 1,
                  borderRadius: "5px",
                  flexBasis: "70%",
                }}
              >
                <Typography>Filter</Typography>
                <FormControl variant="filled" fullWidth>
                  <InputLabel id="demo-simple-select-label">Show</InputLabel>
                  <MuiSelect
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Show"
                  >
                    <MenuItem>Show</MenuItem>
                    <MenuItem value="10">10</MenuItem>
                    <MenuItem value="15">15</MenuItem>
                    <MenuItem value="20">20</MenuItem>
                    <MenuItem value="25">25</MenuItem>
                    <MenuItem value="50">50</MenuItem>
                  </MuiSelect>
                </FormControl>
                <FormControl variant="filled" fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    any rating
                  </InputLabel>
                  <MuiSelect
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="any rating"
                  >
                    <MenuItem>any rating</MenuItem>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="4">4</MenuItem>
                    <MenuItem value="5">5</MenuItem>
                  </MuiSelect>
                </FormControl>
                <FormControl fullWidth>
                  <TextField variant="filled" />
                </FormControl>
              </Box>
            </Stack>
            {/*RIVIEW TABLE SECTION START HERE*/}
            <TableContainer component={Paper} elevation={0}>
              <Table
                sx={{ minWidth: 650 }}
                aria-label="simple table"
                id="orders_table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell align="right">product</TableCell>
                    <TableCell align="right">author</TableCell>
                    <TableCell align="right">riview</TableCell>
                    <TableCell align="right">rating</TableCell>
                    <TableCell align="right">date</TableCell>
                    <TableCell align="right">status</TableCell>
                    <TableCell align="right">actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="right">Apple Watch Series 4</TableCell>
                    <TableCell align="right">Sophia Hale</TableCell>
                    <TableCell align="right">excellent work</TableCell>
                    <TableCell align="right">
                      <Star htmlColor="orange" />
                      <Star htmlColor="orange" />
                      <Star htmlColor="orange" />
                      <Star htmlColor="orange" />
                      <Star htmlColor="orange" />
                    </TableCell>
                    <TableCell align="right">12.07.2018 10:00</TableCell>
                    <TableCell align="right">Published</TableCell>
                    <TableCell align="right">
                      <IconButton>
                        <Details htmlColor="success" />
                      </IconButton>
                      <IconButton>
                        <Delete htmlColor="error" />
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

export default ReviewManagement;
