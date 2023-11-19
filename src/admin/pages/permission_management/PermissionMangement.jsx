import React, { useState } from "react";
import "./parmission_management.css";
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
  FormControlLabel,
  Checkbox,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  Switch
} from "@mui/material";
import {
  Attachment,
  Circle,
  Delete,
  Edit,
  Photo,
  Send,
} from "@mui/icons-material";
const PermissionMangement = () => {
  const FontStyle = {
    textTransform: "uppercase",
    fontWeight: "800",
  };
  const perimssion_items = {
    padding: "10px",
    boxShadow: "-1px -1px 3px #eee,1px 1px 3px #eee",
    background: "#eee",
    border: "3px solid #fff",
    borderRadius: "5px",
    margin: "5px",
    display: "inline-block",
  };
  const [full_permission, setFullPermission] = useState(false);
  function generateRandomHexColor() {
    // Generate a random hexadecimal color code
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
  return (
    <div className="parmission_management">
      <Container>
        <div className="parmission_management_wrapper">
          <div className="parmission_management_form">
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
              role & parmission
            </Typography>
            <Box sx={{ padding: "10px" }}>
              <Typography
                textTransform={"capitalize"}
                pb={2}
                fontWeight={"600"}
                color="GrayText"
              >
                author name
              </Typography>
              <Stack direction={"row"}>
                <FormControl variant="filled" sx={{ minWidth: 250 }}>
                  <InputLabel id="demo-simple-select-filled-label">
                    Author Name
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <Box sx={{ ml: 3 }}>
                  <Button
                    variant="outlined"
                    onClick={() =>
                      full_permission === false
                        ? setFullPermission(true)
                        : setFullPermission(false)
                    }
                  >
                    <Typography>full permission</Typography>
                    <Switch />
                  </Button>
                </Box>
              </Stack>
            </Box>
            <Row>
              <Col sm={12} md={12} lg={6}>
                <Stack style={perimssion_items} direction={"row"}>
                  <Typography mt={1} pr={2} textTransform={"capitalize"}>
                    clients
                  </Typography>
                  <FormControlLabel
                    sx={FontStyle}
                    control={<Switch checked={full_permission} />}
                    label="all"
                  />
                  <FormControlLabel
                    control={
                      <Switch checked={full_permission} color="warning" />
                    }
                    sx={FontStyle}
                    label="index"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} color="error" />}
                    sx={FontStyle}
                    label="create"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} color="info" />}
                    sx={FontStyle}
                    label="edit"
                  />
                  <FormControlLabel
                    control={
                      <Switch checked={full_permission} color="default" />
                    }
                    sx={FontStyle}
                    label="destroy"
                  />
                </Stack>
                <Stack style={perimssion_items} direction={"row"}>
                  <Typography mt={1} pr={2} textTransform={"capitalize"}>
                    teams
                  </Typography>
                  <FormControlLabel
                    sx={FontStyle}
                    control={<Switch checked={full_permission} />}
                    label="all"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="index"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="create"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="edit"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="destroy"
                  />
                </Stack>
                <Stack style={perimssion_items} direction={"row"}>
                  <Typography mt={1} pr={2} textTransform={"capitalize"}>
                    community
                  </Typography>
                  <FormControlLabel
                    sx={FontStyle}
                    control={<Switch checked={full_permission} />}
                    label="all"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="index"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="create"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="edit"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="destroy"
                  />
                </Stack>
                <Stack style={perimssion_items} direction={"row"}>
                  <Typography mt={1} pr={2} textTransform={"capitalize"}>
                    contact us
                  </Typography>
                  <FormControlLabel
                    sx={FontStyle}
                    control={<Switch checked={full_permission} />}
                    label="all"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="index"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="create"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="edit"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="destroy"
                  />
                </Stack>
                <Stack style={perimssion_items} direction={"row"}>
                  <Typography mt={1} pr={2} textTransform={"capitalize"}>
                    course
                  </Typography>
                  <FormControlLabel
                    sx={FontStyle}
                    control={<Switch checked={full_permission} />}
                    label="all"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="index"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="create"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="edit"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="destroy"
                  />
                </Stack>
                <Stack style={perimssion_items} direction={"row"}>
                  <Typography mt={1} pr={2} textTransform={"capitalize"}>
                    payments
                  </Typography>
                  <FormControlLabel
                    sx={FontStyle}
                    control={<Switch checked={full_permission} />}
                    label="all"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="index"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="create"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="edit"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="destroy"
                  />
                </Stack>
                <Stack style={perimssion_items} direction={"row"}>
                  <Typography mt={1} pr={2} textTransform={"capitalize"}>
                    settings
                  </Typography>
                  <FormControlLabel
                    sx={FontStyle}
                    control={<Switch checked={full_permission} />}
                    label="all"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="index"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="create"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="edit"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="destroy"
                  />
                </Stack>
                <Stack style={perimssion_items} direction={"row"}>
                  <Typography mt={1} pr={2} textTransform={"capitalize"}>
                    blogs
                  </Typography>
                  <FormControlLabel
                    sx={FontStyle}
                    control={<Switch checked={full_permission} />}
                    label="all"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="index"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="create"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="edit"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="destroy"
                  />
                </Stack>
              </Col>
              <Col sm={12} md={12} lg={6}>
                <Stack style={perimssion_items} direction={"row"}>
                  <Typography mt={1} pr={2} textTransform={"capitalize"}>
                    <sup>sRequest</sup>
                  </Typography>
                  <FormControlLabel
                    sx={FontStyle}
                    control={<Switch checked={full_permission} />}
                    label="all"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="index"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="create"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="edit"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="destroy"
                  />
                </Stack>
                <Stack style={perimssion_items} direction={"row"}>
                  <Typography mt={1} pr={2} textTransform={"capitalize"}>
                    Users{" "}
                  </Typography>
                  <FormControlLabel
                    sx={FontStyle}
                    control={<Switch checked={full_permission} />}
                    label="all"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="index"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="create"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="edit"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="destroy"
                  />
                </Stack>
                <Stack style={perimssion_items} direction={"row"}>
                  <Typography mt={1} pr={2} textTransform={"capitalize"}>
                    Roles{" "}
                  </Typography>
                  <FormControlLabel
                    sx={FontStyle}
                    control={<Switch checked={full_permission} />}
                    label="all"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="index"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="create"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="edit"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="destroy"
                  />
                </Stack>
                <Stack style={perimssion_items} direction={"row"}>
                  <Typography mt={1} pr={2} textTransform={"capitalize"}>
                    product{" "}
                  </Typography>
                  <FormControlLabel
                    sx={FontStyle}
                    control={<Switch checked={full_permission} />}
                    label="all"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="index"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="create"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="edit"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="destroy"
                  />
                </Stack>
                <Stack style={perimssion_items} direction={"row"}>
                  <Typography mt={1} pr={2} textTransform={"capitalize"}>
                    category
                  </Typography>
                  <FormControlLabel
                    sx={FontStyle}
                    control={<Switch checked={full_permission} />}
                    label="all"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="index"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="create"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="edit"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="destroy"
                  />
                </Stack>
                <Stack style={perimssion_items} direction={"row"}>
                  <Typography mt={1} pr={2} textTransform={"capitalize"}>
                    orders
                  </Typography>
                  <FormControlLabel
                    sx={FontStyle}
                    control={<Switch checked={full_permission} />}
                    label="all"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="index"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="create"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="edit"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="destroy"
                  />
                </Stack>
                <Stack style={perimssion_items} direction={"row"}>
                  <Typography mt={1} pr={2} textTransform={"capitalize"}>
                    mail
                  </Typography>
                  <FormControlLabel
                    sx={FontStyle}
                    control={<Switch checked={full_permission} />}
                    label="all"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="index"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="create"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="edit"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="destroy"
                  />
                </Stack>
                <Stack style={perimssion_items} direction={"row"}>
                  <Typography mt={1} pr={2} textTransform={"capitalize"}>
                    message
                  </Typography>
                  <FormControlLabel
                    sx={FontStyle}
                    control={<Switch checked={full_permission} />}
                    label="all"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="index"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="create"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="edit"
                  />
                  <FormControlLabel
                    control={<Switch checked={full_permission} />}
                    sx={FontStyle}
                    label="destroy"
                  />
                </Stack>
              </Col>
            </Row>
          </div>
          <div className="parmission_management_table">
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
              permission granted
            </Typography>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">role name</TableCell>
                    <TableCell align="right">author</TableCell>
                    <TableCell align="right">date</TableCell>
                    <TableCell align="right">status</TableCell>
                    <TableCell align="right">actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="right">creator</TableCell>
                    <TableCell align="right">jhone</TableCell>
                    <TableCell align="right">20 jan 2023</TableCell>
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

export default PermissionMangement;
