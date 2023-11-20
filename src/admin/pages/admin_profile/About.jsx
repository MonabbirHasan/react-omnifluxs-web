import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

const About = () => {
  return (
    <TableContainer component={Paper} elevation={1} sx={{ padding: "10px" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <Typography
            textTransform={"capitalize"}
            fontWeight={"600"}
            color={"#919191"}
          >
            About Me
          </Typography>
        </TableHead>
        <TableBody>
          <TableRow
            sx={{
              "&:last-child td, &:last-child th": {
                border: 0,
              },
            }}
          >
            <TableCell align="left">
              <strong>Full Name</strong>
            </TableCell>
            <TableCell align="left">Josephine Villa</TableCell>
            <TableCell align="left">
              <strong>Email</strong>
            </TableCell>
            <TableCell align="left">Demo@example.com</TableCell>
          </TableRow>
          <TableRow
            sx={{
              "&:last-child td, &:last-child th": {
                border: 0,
              },
            }}
          >
            <TableCell align="left">
              <strong>gender</strong>
            </TableCell>
            <TableCell align="left">female</TableCell>
            <TableCell align="left">
              <strong>mobile number</strong>
            </TableCell>
            <TableCell align="left">+9123232</TableCell>
          </TableRow>
          <TableRow
            sx={{
              "&:last-child td, &:last-child th": {
                border: 0,
              },
            }}
          >
            <TableCell align="left">
              <strong>birth date</strong>
            </TableCell>
            <TableCell align="left">october 23, 1990</TableCell>
            <TableCell align="left">
              <strong>twiiter</strong>
            </TableCell>
            <TableCell align="left">@xyz</TableCell>
          </TableRow>
          <TableRow
            sx={{
              "&:last-child td, &:last-child th": {
                border: 0,
              },
            }}
          >
            <TableCell align="left">
              <strong>Marital Status</strong>
            </TableCell>
            <TableCell align="left">Single</TableCell>
            <TableCell align="left">
              <strong>Skype</strong>
            </TableCell>
            <TableCell align="left">demo.skype</TableCell>
          </TableRow>
          <TableRow
            sx={{
              "&:last-child td, &:last-child th": {
                border: 0,
              },
            }}
          >
            <TableCell align="left">
              <strong>Location</strong>
            </TableCell>
            <TableCell align="left">New York, USA</TableCell>
            <TableCell align="left">
              <strong>Website</strong>
            </TableCell>
            <TableCell align="left">www.demo.com</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default About;
