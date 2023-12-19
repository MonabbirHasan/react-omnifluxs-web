import React, { useState } from "react";
import "./events_management.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-bootstrap/Modal";
import {
  Button,
  Collapse,
  FormControl,
  IconButton,
  Stack,
  TextField,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import { Add, DeleteOutline, EditOutlined } from "@mui/icons-material";
import { Badge, Form } from "react-bootstrap";
import axios from "axios";
const EventMangement = () => {
  const [taskDescription, setTaskDescription] = useState("");
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [TaskStatus, setTaskStatus] = useState("");
  const [todo, setTodo] = useState([]);
  const [EditShowEventData, setEditShowEventData] = useState([]);
  const notify = (message) => toast(message);
  const [ShowEventUpdateModal, setShowEventUpdateModal] = useState(false);
  const handleCloseEventUpdateModal = () => setShowEventUpdateModal(false);
  const handleShowEventUpdateModal = (index) => {
    setShowEventUpdateModal(true);
    axios
      .get("http://localhost:8000/api/events/" + index)
      .then((response) => {
        setEditShowEventData(response.data);
        setTaskDescription(response.data.description);
        setTaskStatus(response.data.is_active);
        setTaskTitle(response.data.title);
        setTaskDate(response.data.create_at);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  /******************************
   * ADD NEW TASK ON DATABASE
   ******************************/
  const AddTask = async () => {
    if (
      taskTitle.trim() === "" ||
      taskDate.trim() === "" ||
      taskDescription.trim() === ""
    ) {
      return; // If any of the fields is empty, don't add the task
    }
    const newTask = {
      title: taskTitle,
      create_at: taskDate,
      is_active: TaskStatus,
      description: taskDescription,
    };
    axios
      .post("http://localhost:8000/api/events", newTask)
      .then((response) => {
        // Handle successful response here
        console.log("Post created:", response.data);
        notify("Event Create Success!");
        setTaskDescription("");
        setTaskStatus("");
        setTaskTitle("");
        setTaskDate("");
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);
      });
    get_all_events();
  };
  /******************************
   * GET ALL TASK ON DATABASE
   ******************************/
  const get_all_events = async () => {
    axios
      .get("http://localhost:8000/api/events")
      .then((response) => {
        setTodo(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  get_all_events();
  /************************************
   * DELETE SINGLE TASK ON DATABASE
   *************************************/
  const delete_events = async (index) => {
    axios
      .delete("http://localhost:8000/api/events/" + index)
      .then((response) => {
        // Handle successful response here
        console.log("Resource deleted:", response.status);
        notify("Event Delete Success!");
        get_all_events();
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);
      });
  };
  /************************************
   * UPDATE SINGLE TASK ON DATABASE
   *************************************/
  const update_events = async (index) => {
    const newTask = {
      title: taskTitle,
      create_at: taskDate,
      is_active: TaskStatus,
      description: taskDescription,
    };
    axios
      .patch("http://localhost:8000/api/events/" + index, newTask)
      .then((response) => {
        // Handle successful response here
        console.log("Post updated:", response.data);
        notify("Events Update Success!");
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);
      });
    get_all_events();
  };
  return (
    <div className="events_management">
      <div className="custom-calendar">
        <div className="calander_wrapper">
          <Typography
            sx={{
              fontSize: "30px",
              pb: 2,
              fontWeight: "600",
            }}
          >
            Add Events
          </Typography>
          <ToastContainer />
          <div className="add_events_form">
            <IconButton
              onClick={() =>
                showTaskForm === false
                  ? setShowTaskForm(true)
                  : setShowTaskForm(false)
              }
            >
              <Add />
            </IconButton>
            <Collapse in={showTaskForm}>
              <FormControl fullWidth style={{ rowGap: 10 }}>
                <TextField
                  label="Task Title"
                  variant="filled"
                  color="success"
                  value={taskTitle}
                  onChange={(e) => setTaskTitle(e.target.value)}
                />
                <TextField
                  label="Task Date"
                  type="datetime-local"
                  focused
                  variant="filled"
                  color="success"
                  value={taskDate}
                  onChange={(e) => setTaskDate(e.target.value)}
                />
                <Form.Select
                  onChange={(e) => setTaskStatus(e.target.value)}
                  style={{ backgroundColor: "#eee", borderRadius: "5px" }}
                  aria-label="Default select example"
                >
                  <option value="1">Panding</option>
                  <option value="2">Complete</option>
                  <option value="3">Working</option>
                </Form.Select>
                <TextField
                  id="filled-multiline-static"
                  label="Task Description"
                  multiline
                  rows={4}
                  variant="filled"
                  value={taskDescription}
                  onChange={(e) => setTaskDescription(e.target.value)}
                />
                <Button
                  onClick={AddTask}
                  variant="contained"
                  size="small"
                  sx={{ width: "" }}
                >
                  save
                </Button>
              </FormControl>
            </Collapse>
          </div>
          <div className="all_events_grid">
            {todo.map((item, index) => (
              <div className="events_item_card" key={item.id}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Box>
                    <IconButton onClick={() => delete_events(item.id)}>
                      <DeleteOutline htmlColor="red" />
                    </IconButton>
                    <IconButton
                      onClick={() => handleShowEventUpdateModal(item.id)}
                    >
                      <EditOutlined htmlColor="green" />
                    </IconButton>
                  </Box>
                  <Box display={"flex"} sx={{ gap: "5px" }}>
                    {item.is_active === 1 ? (
                      <Badge bg="success">Complete</Badge>
                    ) : item.is_active === 2 ? (
                      <Badge bg="primary">panding</Badge>
                    ) : item.is_active === 3 ? (
                      <Badge bg="danger">working</Badge>
                    ) : (
                      ""
                    )}
                  </Box>
                </Stack>
                <Divider />
                <Stack direction={"row"} justifyContent={"space-between"}>
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      fontWeight: "600",
                      color: "#919191",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Stack>
                <Typography
                  sx={{
                    width: "200px",
                    textTransform: "capitalize",
                    fontSize: "14px",
                  }}
                >
                  {item.description}
                </Typography>
              </div>
            ))}
          </div>
          {/*EVENTS UDPATE MODAL START HERE*/}
          <Modal
            show={ShowEventUpdateModal}
            onHide={handleCloseEventUpdateModal}
          >
            <Modal.Header closeButton>
              <Modal.Title>Update Events</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <FormControl fullWidth style={{ rowGap: 10 }}>
                <TextField
                  label="Task Title"
                  variant="filled"
                  color="success"
                  value={taskTitle}
                  onChange={(e) => setTaskTitle(e.target.value)}
                />
                <TextField
                  label="Task Date"
                  type="datetime-local"
                  focused
                  variant="filled"
                  color="success"
                  value={taskDate}
                  onChange={(e) => setTaskDate(e.target.value)}
                />
                <Form.Select
                  onChange={(e) => setTaskStatus(e.target.value)}
                  style={{ backgroundColor: "#eee", borderRadius: "5px" }}
                  aria-label="Default select example"
                >
                  <option
                    value="1"
                    {...(EditShowEventData.is_active === 1 ? "selected" : "")}
                  >
                    Panding
                  </option>
                  <option
                    value="2"
                    {...(EditShowEventData.is_active === 2 ? "selected" : "")}
                  >
                    Complete
                  </option>
                  <option
                    value="3"
                    {...(EditShowEventData.is_active === 3 ? "selected" : "")}
                  >
                    Working
                  </option>
                </Form.Select>
                <TextField
                  id="filled-multiline-static"
                  label="Task Description"
                  multiline
                  rows={4}
                  variant="filled"
                  value={taskDescription}
                  onChange={(e) => setTaskDescription(e.target.value)}
                />
              </FormControl>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="outlined"
                color="error"
                onClick={handleCloseEventUpdateModal}
              >
                Close
              </Button>
              <Typography mx={1} />
              <Button
                variant="contained"
                color="success"
                onClick={() => {
                  update_events(EditShowEventData.id);
                  handleCloseEventUpdateModal();
                }}
              >
                Save
              </Button>
            </Modal.Footer>
          </Modal>
          {/*EVENTS UDPATE MODAL END HERE*/}
        </div>
      </div>
    </div>
  );
};
export default EventMangement;
