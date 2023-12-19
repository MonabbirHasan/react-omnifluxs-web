import React, { useEffect, useRef, useState } from "react";
import "./user_management.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Delete, Edit } from "@mui/icons-material";
import { InputGroup, Toast } from "react-bootstrap";
import DataTable from "datatables.net-dt";
import Form from "react-bootstrap/Form";
import {
  Alert,
  Avatar,
  IconButton,
  Button as MuiButton,
  FormControl as MuiFormControl,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
const UserMangement = () => {
  useEffect(() => {
    const table = new DataTable("#user_data_table");
  }, []);
  /****************************************
   * USER FORM BASIC CSS STYLE HERE
   ****************************************/
  const paragraphStyle = {
    textTransform: "capitalize",
    fontSize: "18px",
    color: "#919191",
    // fontWeight:'600',
    py: 2,
    fontFamily: "fantasy",
    letterSpacing: "2px",
  };
  const text_capitalized = {
    textTransform: "capitalize",
  };
  const text_color = {
    color: "white",
  };
  /*************************************************
   * USERS INFORMATION SAVING FUNCTION START HERE
   *************************************************/
  const [isAdmin, setIsAdmin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(false);
  const [email, setEmail] = useState("");
  const [err, setErr] = useState("");
  const submitForm = () => {
    // Check if fields are not empty
    if (username.trim() === "") {
      // Handle empty username
      setErr("please Enter username");
      // Set an error state or display a message to the user
      return;
    }

    if (password.trim() === "") {
      // Handle empty password
      setErr("please Enter password");
      // Set an error state or display a message to the user
      return;
    }

    if (email.trim() === "") {
      // Handle empty email
      setErr("please Enter email");
      // Set an error state or display a message to the user
      return;
    }
    if (status.trim() === "") {
      setErr("please Enter status");
      return;
    }
    if (isAdmin.trim() === "") {
      setErr("please Enter isAdmin");
      return;
    }
    const data = {
      username: username,
      email: email,
      password: password,
      status: status,
      isAdmin: isAdmin,
    };
    console.log(data);
    // If all fields are not empty, proceed with further actions (e.g., API call)
  };

  return (
    <div className="UserMangement">
      <div className="user_management_wrapper">
        <div className="add_user_form">
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
            add new users or saller
          </Typography>
          <Alert
            sx={{
              py: 1,
              my: 1,
              textTransform: "capitalize",
              fontWeight: "500",
              fontSize: "1rem",
            }}
          >
            {err.length > 0 ? err : ""}
          </Alert>
          <MuiFormControl fullWidth>
            <FloatingLabel
              controlId="floatingInput"
              label="Enter Full Name"
              className="mb-3"
            >
              <Form.Control
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="name@example.com"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Enter Email Address"
              className="mb-3"
            >
              <Form.Control
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="name@example.com"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Enter Password"
              className="mb-3"
            >
              <Form.Control
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                placeholder="password"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Is admin"
              className="mb-3"
            >
              <Form.Select
                onChange={(e) => setIsAdmin(e.target.value)}
                aria-label="Default select example"
              >
                <option value="1">admin</option>
                <option value="2">normal</option>
                <option value="3">team</option>
              </Form.Select>
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Status"
              className="mb-3"
            >
              <Form.Select
                onChange={(e) => setStatus(e.target.value)}
                aria-label="Default select example"
              >
                <option value="1">Active</option>
                <option value="0">InActive</option>
              </Form.Select>
            </FloatingLabel>
          </MuiFormControl>
          <MuiButton
            onClick={submitForm}
            sx={text_capitalized}
            variant="contained"
          >
            save user
          </MuiButton>
        </div>
        {/***************************************
         *USER DATA LIST TABLE START HERE
         *****************************************/}
        <div className="user__listtable">
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
            user or saller table
          </Typography>
          <div className="user_table">
            <TableContainer
              component={Paper}
              elevation={0}
              contextMenu={true}
              contentEditable={false}
              // sx={{ height: "500px", overflowY: "scroll" }}
            >
              <Table
                sx={{ minWidth: "auto" }}
                aria-label="simple table"
                id="user_data_table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell align="right">avator</TableCell>
                    <TableCell align="right">name</TableCell>
                    <TableCell align="right">email</TableCell>
                    <TableCell align="right">phone</TableCell>
                    <TableCell align="right">reffer code</TableCell>
                    <TableCell align="right">is admin</TableCell>
                    <TableCell align="right">is verified</TableCell>
                    <TableCell align="right">permission</TableCell>
                    <TableCell align="right">country</TableCell>
                    <TableCell align="right">status</TableCell>
                    <TableCell align="right">actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="right">
                      <Avatar />
                    </TableCell>
                    <TableCell align="right">Dhon Doe</TableCell>
                    <TableCell align="right">jhon@gmail.com</TableCell>
                    <TableCell align="right">+23453645</TableCell>
                    <TableCell align="right">OMN3243</TableCell>
                    <TableCell align="right">admin</TableCell>
                    <TableCell align="right">yes</TableCell>
                    <TableCell align="right">editor</TableCell>
                    <TableCell align="right">canada</TableCell>
                    <TableCell align="right">active</TableCell>
                    <TableCell align="right">
                      <Stack direction={"row"}>
                        <IconButton>
                          <Edit color="success" sx={{ fontSize: "14px" }} />
                        </IconButton>
                        <IconButton>
                          <Delete color="error" sx={{ fontSize: "14px" }} />
                        </IconButton>
                      </Stack>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="right">
                      <Avatar />
                    </TableCell>
                    <TableCell align="right">Ahon Doe</TableCell>
                    <TableCell align="right">jhon@gmail.com</TableCell>
                    <TableCell align="right">+23453645</TableCell>
                    <TableCell align="right">OMN3243</TableCell>
                    <TableCell align="right">admin</TableCell>
                    <TableCell align="right">yes</TableCell>
                    <TableCell align="right">editor</TableCell>
                    <TableCell align="right">canada</TableCell>
                    <TableCell align="right">active</TableCell>
                    <TableCell align="right">
                      <Stack direction={"row"}>
                        <IconButton>
                          <Edit color="success" sx={{ fontSize: "14px" }} />
                        </IconButton>
                        <IconButton>
                          <Delete color="error" sx={{ fontSize: "14px" }} />
                        </IconButton>
                      </Stack>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="right">
                      <Avatar />
                    </TableCell>
                    <TableCell align="right">Jhon Doe</TableCell>
                    <TableCell align="right">jhon@gmail.com</TableCell>
                    <TableCell align="right">+23453645</TableCell>
                    <TableCell align="right">OMN3243</TableCell>
                    <TableCell align="right">admin</TableCell>
                    <TableCell align="right">yes</TableCell>
                    <TableCell align="right">editor</TableCell>
                    <TableCell align="right">canada</TableCell>
                    <TableCell align="right">active</TableCell>
                    <TableCell align="right">
                      <Stack direction={"row"}>
                        <IconButton>
                          <Edit color="success" sx={{ fontSize: "14px" }} />
                        </IconButton>
                        <IconButton>
                          <Delete color="error" sx={{ fontSize: "14px" }} />
                        </IconButton>
                      </Stack>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMangement;
