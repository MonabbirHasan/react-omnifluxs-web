import React from "react";
import "./ip_block_management.css";
import { Container, Form, InputGroup } from "react-bootstrap";
import {
  Box,
  Button,
  IconButton,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
const IpBlocManagement = () => {
  return (
    <div className="ip_block_management">
      <Container fluid>
        <div className="ip_block_management_wrapper">
          <div className="ip_block_management_form">
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
              iP blocking
            </Typography>
            <Box>
              <InputGroup className="mb-3">
                <InputGroup.Text>
                  <Form.Select
                    style={{ minWidth: 100, textTransform: "capitalize" }}
                  >
                    <option value="">block</option>
                    <option value="">access</option>
                  </Form.Select>
                </InputGroup.Text>
                <Form.Control placeholder="Enter IP Address" />
              </InputGroup>
              <InputGroup>
                <InputGroup.Text>Auhor</InputGroup.Text>
                <Form.Control placeholder="Enter Author name" />
              </InputGroup>
            </Box>
            <Box sx={{ mt: 3 }}>
              <Button variant="contained" color="error">
                block
              </Button>
            </Box>
          </div>
          <div className="ip_block_management_table">
            <TableContainer component={Paper} elevation={0}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">author</TableCell>
                    <TableCell align="right">ip address</TableCell>
                    <TableCell align="right">country</TableCell>
                    <TableCell align="right">block date</TableCell>
                    <TableCell align="right">status</TableCell>
                    <TableCell align="right">actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="right">jhone</TableCell>
                    <TableCell align="right">192.168.01</TableCell>
                    <TableCell align="right">Canada</TableCell>
                    <TableCell align="right">20 jan 2023</TableCell>
                    <TableCell align="right">
                      <Form.Select className="text-capitalize">
                        <option value="">block</option>
                        <option value="">access</option>
                      </Form.Select>
                    </TableCell>
                    <TableCell align="right">
                      <IconButton>
                        <Delete htmlColor="red" />
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

export default IpBlocManagement;
