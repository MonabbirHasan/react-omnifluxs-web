import React from "react";
import {
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Checkbox,
  Avatar,
  IconButton,
  ListItemButton,
} from "@mui/material";
import { Star } from "@mui/icons-material";
import { Button } from "react-bootstrap";

const MailInbox = () => {
  return (
    <div className="mail_inbox">
      <TableContainer component={Paper} elevation={0}>
        <Table sx={{ minWidth: "100%" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Select</TableCell>
              <TableCell align="right">rating</TableCell>
              <TableCell align="right">avator</TableCell>
              <TableCell align="right">name</TableCell>
              <TableCell align="left">title</TableCell>
              <TableCell align="right">date</TableCell>
              <TableCell align="right">Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.from([1, 2, 3, 4, 5, 6, 7, 9, 8, 9], (x) => x + x).map(
              (items) => (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">
                    <Checkbox />
                  </TableCell>
                  <TableCell align="left">
                    <IconButton>
                      <Star />
                    </IconButton>
                  </TableCell>
                  <TableCell align="right">
                    <Avatar sx={{ width: "30px", height: "30px" }} />
                  </TableCell>
                  <TableCell align="right">jhonn</TableCell>
                  <TableCell align="right">
                    [ThemeForest] Message sent via your Envato Market profile
                    from kos9
                  </TableCell>
                  <TableCell align="right">20 jun</TableCell>
                  <TableCell align="right">
                    <Button sx={{ fontSize: "14px" }}>view</Button>
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MailInbox;
