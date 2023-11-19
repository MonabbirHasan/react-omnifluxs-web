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
  FloatingLabel,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import { Service_Title } from "./";
import { Delete, Edit, LinkRounded } from "@mui/icons-material";
const Telegram_service = () => {
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
    <div className="telegram_service">
      <div className="telegram_service_wrapper">
        <div className="telegram_service_form">
          <Service_Title title="telegram" />
          <InputGroup className="mb-3">
            <InputGroup.Text>Listing Id</InputGroup.Text>
            <Form.Control />
          </InputGroup>
          <FloatingLabel
            controlId="floatingInput"
            label="Enter channel Name"
            className="mb-3"
          >
            <Form.Control type="text" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Country of members"
            className="mb-3"
          >
            <Form.Control type="text" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Amount of members"
            className="mb-3"
          >
            <Form.Control type="text" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="channel url"
            className="mb-3"
          >
            <Form.Control type="url" />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="price"
            className="mb-3"
          >
            <Form.Control type="text" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Service Gallery"
            className="mb-3"
          >
            <Form.Control type="file" />
          </FloatingLabel>

          <FloatingLabel
            className="mb-3"
            controlId="floatingSelect"
            label="verified?"
          >
            <Form.Select aria-label="Floating label select example">
              <option value="1">Yes</option>
              <option value="1">No.</option>
            </Form.Select>
          </FloatingLabel>
          <FloatingLabel
            className="mb-3"
            controlId="floatingSelect"
            label="Promotion methods used?"
          >
            <Form.Select aria-label="Floating label select example">
              <option value="1">Organic</option>
              <option value="1">S4S</option>
              <option value="1">Follow Unfollow</option>
              <option value="1">Engagement Networks</option>
              <option value="1">other</option>
            </Form.Select>
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
        <div className="telegram_service_table">
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
                    channel name
                  </TableCell>
                  <TableCell align="right" sx={avatarSize.tableheadFontSize}>
                    country member
                  </TableCell>
                  <TableCell align="right" sx={avatarSize.tableheadFontSize}>
                    amount of channel
                  </TableCell>
                  <TableCell align="right" sx={avatarSize.tableheadFontSize}>
                  channel url
                  </TableCell>
                  <TableCell align="right" sx={avatarSize.tableheadFontSize}>
                    price
                  </TableCell>
                  <TableCell align="right" sx={avatarSize.tableheadFontSize}>
                    verify
                  </TableCell>
                  <TableCell align="right" sx={avatarSize.tableheadFontSize}>
                    promotion method
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
                  <TableCell align="right">entertainment</TableCell>
                  <TableCell align="right">2.3k</TableCell>
                  <TableCell align="right">50k</TableCell>
                  <TableCell align="right">
                    <IconButton>
                      <LinkRounded />
                    </IconButton>
                  </TableCell>
                  <TableCell align="right">$230</TableCell>
                  <TableCell align="right">
                    <Badge>yes</Badge>
                  </TableCell>
                  <TableCell align="right">Oraganic</TableCell>
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

export default Telegram_service;
