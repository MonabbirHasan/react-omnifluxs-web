import React, { useState, useEffect } from "react";
import "./events_management.css";
import { Scheduler } from "@aldabil/react-scheduler";
import {
  Button,
  Collapse,
  FormControl,
  IconButton,
  Stack,
  TextField,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import { Add, More, MoreHoriz, PlusOne } from "@mui/icons-material";
import { Badge, FloatingLabel, Form } from "react-bootstrap";
const EventMangement = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [taskDescription, setTaskDescription] = useState("");
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [TaskStatus, setTaskStatus] = useState("");
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    // Load Todos from localStorage when the component mounts
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodo(storedTodos);
    }
  }, []);

  useEffect(() => {
    // Save Todos to localStorage whenever todos state changes
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  const AddTask = () => {
    if (
      taskTitle === "" ||
      taskDate === "" ||
      taskDescription === "" ||
      TaskStatus === ""
    ) {
      return; // If any of the fields is empty, don't add the task
    }
    const newTask = {
      id: Math.floor(Math.random() * 10),
      task_title: taskTitle,
      task_date: taskDate,
      task_status: TaskStatus,
      task_description: taskDescription,
    };

    setTodo([...todo, newTask]); // Add the new task to the existing todos
    // Clear the input fields after adding the task
    setTaskTitle("");
    setTaskDate("");
    setTaskStatus("");
    setTaskDescription("");
  };
  useEffect(() => {}, []);
  const handleTaskDelete = (id) => {
    const updatedTodos = todo.filter((task) => task.id !== id);
    setTodo(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
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
                <FloatingLabel controlId="floatingSelect" label="status">
                  <Form.Select
                    onChange={(e) => setTaskStatus(e.target.value)}
                    value={TaskStatus}
                    aria-label="Floating label select example"
                  >
                    <option value={1}>complete</option>
                    <option value={2}>panding</option>
                    <option value={3}>working</option>
                  </Form.Select>
                </FloatingLabel>
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
              <div className="events_item_card">
                <Stack direction={"row"} justifyContent={"space-between"}>
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      fontWeight: "600",
                      color: "#919191",
                    }}
                  >
                    {item.task_title}
                  </Typography>
                  <IconButton
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    <MoreHoriz />
                  </IconButton>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleClose}>Edit</MenuItem>
                    <MenuItem onClick={() => handleTaskDelete(item.id)}>
                      Delete
                    </MenuItem>
                  </Menu>
                </Stack>

                <Typography
                  sx={{
                    width: "200px",
                    textTransform: "capitalize",
                    fontSize: "14px",
                  }}
                >
                  {item.task_description}
                </Typography>
                <Typography>
                  {TaskStatus === 1 ? (
                    <Badge bg="success">complete</Badge>
                  ) : TaskStatus === 2 ? (
                    <Badge bg="primary">panding</Badge>
                  ) : (
                    <Badge bg="secondary">working</Badge>
                  )}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default EventMangement;
