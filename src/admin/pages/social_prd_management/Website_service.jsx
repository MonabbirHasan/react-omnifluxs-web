import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  FormControlLabel,
  IconButton,
  Link,
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
import {
  Badge,
  Container,
  FloatingLabel,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import { Service_Title } from "./";
import { Delete, Edit, LinkRounded } from "@mui/icons-material";
const Website_service = () => {
  const avatarSize = {
    width: "22px",
    height: "22px",
    fontsize: {
      fontSize: "14px",
    },
    tableheadFontSize: {
      fontSize: "12px",
    },
  };
  return (
    <div className="website_service">
      <div className="website_service_wrapper">
        <div className="website_service_form">
          <Service_Title title="website" />
          <InputGroup className="mb-3">
            <InputGroup.Text>Listing Id</InputGroup.Text>
            <Form.Control />
          </InputGroup>
          <FloatingLabel
            controlId="floatingInput"
            label="website name"
            className="mb-3"
          >
            <Form.Control type="text" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="website type"
            className="mb-3"
          >
            <Form.Control type="text" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="google ads verified"
            className="mb-3"
          >
            <Form.Control type="text" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="domain status"
            className="mb-3"
          >
            <Form.Control type="text" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="website url"
            className="mb-3"
          >
            <Form.Control type="url" />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="website price $"
            className="mb-3"
          >
            <Form.Control type="text" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Website Gallery"
            className="mb-3"
          >
            <Form.Control type="file" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingTextarea2" label="Description">
            <Form.Control
              as="textarea"
              placeholder="Description"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
          <Box mt={3}>
            <Button variant="contained" color="primary">
              save service
            </Button>
          </Box>
        </div>
        <div className="website_service_table">
          <Service_Title title="services" />
          <TableContainer component={Paper} elevation={0}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right" sx={avatarSize.tableheadFontSize}>
                    listing id
                  </TableCell>
                  <TableCell align="right" sx={avatarSize.tableheadFontSize}>
                    gallery
                  </TableCell>
                  <TableCell align="right" sx={avatarSize.tableheadFontSize}>
                    website name
                  </TableCell>
                  <TableCell align="right" sx={avatarSize.tableheadFontSize}>
                    website type
                  </TableCell>
                  <TableCell align="right" sx={avatarSize.tableheadFontSize}>
                    google ads verified
                  </TableCell>
                  <TableCell align="right" sx={avatarSize.tableheadFontSize}>
                    domain status
                  </TableCell>
                  <TableCell align="right" sx={avatarSize.tableheadFontSize}>
                    website url
                  </TableCell>
                  <TableCell align="right" sx={avatarSize.tableheadFontSize}>
                    website price
                  </TableCell>
                  <TableCell align="right" sx={{ fontSize: "12px" }}>
                    description
                  </TableCell>
                  <TableCell align="right" sx={{ fontSize: "12px" }}>
                    status
                  </TableCell>
                  <TableCell align="right" sx={{ fontSize: "12px" }}>
                    actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">OMN23423</TableCell>
                  <TableCell align="right">
                    <AvatarGroup max={5}>
                      <Avatar sx={avatarSize} />
                      <Avatar sx={avatarSize} />
                      <Avatar sx={avatarSize} />
                      <Avatar sx={avatarSize} />
                      <Avatar sx={avatarSize} />
                    </AvatarGroup>
                  </TableCell>
                  <TableCell align="right">examaple.com</TableCell>
                  <TableCell align="right">blogs</TableCell>
                  <TableCell align="right">
                    <Badge>yes</Badge>
                  </TableCell>
                  <TableCell align="right">3 years</TableCell>
                  <TableCell align="right">
                    <IconButton>
                      <LinkRounded />
                    </IconButton>
                  </TableCell>
                  <TableCell align="right">$50k</TableCell>
                  <TableCell align="right">Lorem...</TableCell>
                  <TableCell align="right">
                    <Badge>active</Badge>
                  </TableCell>
                  <TableCell align="right">
                    <IconButton>
                      <Edit htmlColor="green" sx={avatarSize.fontsize} />
                    </IconButton>
                    <IconButton>
                      <Delete htmlColor="red" sx={avatarSize.fontsize} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default Website_service;
