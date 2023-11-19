import React from "react";
import "./community_management.css";
import {
  Container,
  FloatingLabel,
  Col,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import {
  Avatar,
  Badge,
  Box,
  Divider,
  IconButton,
  List,
  ListItemButton,
  Stack,
  Typography,
  Button,
  FormControl,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
} from "@mui/material";
import {
  Attachment,
  Circle,
  Delete,
  Edit,
  Photo,
  Send,
} from "@mui/icons-material";
const CommunityMangement = () => {
  return (
    <div className="community_management">
      <Container>
        <div className="community_management_wrapper">
          <div className="community_management_form">
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
              post community
            </Typography>
            <FloatingLabel
              controlId="floatingInput"
              label="Post Title"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Post Thumbnail"
              className="mb-3"
            >
              <Form.Control type="file" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Tags"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingTextarea2" label="Description">
              <Form.Control
                as="textarea"
                placeholder="Description"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
            <FormControl sx={{ mt: 3 }}>
              <Button
                sx={{ textTransform: "capitalize" }}
                centerRipple
                variant="contained"
              >
                save post
              </Button>
            </FormControl>
          </div>
          <div className="community_management_table">
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
              post data
            </Typography>
            <TableContainer component={Paper} elevation={0}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">post title</TableCell>
                    <TableCell align="right">post attachment</TableCell>
                    <TableCell align="right">post tags</TableCell>
                    <TableCell align="right">description</TableCell>
                    <TableCell align="right">status</TableCell>
                    <TableCell align="right">actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="right">
                      Lorem ipsum dolor sit amet.
                    </TableCell>
                    <TableCell align="right">
                      <Avatar />
                    </TableCell>
                    <TableCell align="right">code,program</TableCell>
                    <TableCell align="right">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Atque, nesciunt?
                    </TableCell>
                    <TableCell align="right">active</TableCell>
                    <TableCell align="right">
                      <IconButton>
                        <Edit htmlColor="green" />
                      </IconButton>
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

export default CommunityMangement;
