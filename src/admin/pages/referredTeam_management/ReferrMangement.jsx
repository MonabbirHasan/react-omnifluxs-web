import React from "react";
import "./referred_team.css";
import {
  IconButton,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Container, Table } from "react-bootstrap";
import { Delete, Edit } from "@mui/icons-material";
const ReferrMangement = () => {
  return (
    <div className="referred_team">
      <Container>
        <div className="refferd_wrapper">
          <div className="reffer_form"></div>
          <div className="reffer_table">
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
            <TableContainer component={Paper} elevation={0}>
              <Table sx={{ minWidth: "100%" }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">user id</TableCell>
                    <TableCell align="right">username</TableCell>
                    <TableCell align="right">email</TableCell>
                    <TableCell align="right">ReferralCode</TableCell>
                    <TableCell align="right">ReferrerID</TableCell>
                    <TableCell align="right">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="right">1</TableCell>
                    <TableCell align="right">Alice</TableCell>
                    <TableCell align="right">alice@example.com</TableCell>
                    <TableCell align="right">ALICE123</TableCell>
                    <TableCell align="right">null </TableCell>
                    <TableCell align="right">
                      <IconButton>
                        <Edit htmlColor="success" sx={{ fontSize: "14px" }} />
                      </IconButton>
                      <IconButton>
                        <Delete htmlColor="error" sx={{ fontSize: "14px" }} />
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

export default ReferrMangement;
