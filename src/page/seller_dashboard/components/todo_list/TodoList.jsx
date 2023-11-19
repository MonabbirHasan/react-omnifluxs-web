import React, { useState } from "react";
import "./todolist.css";
import {
  Box,
  Button,
  Collapse,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { Add, Delete, Edit } from "@mui/icons-material";
import { Badge } from "react-bootstrap";
const TodoList = () => {
  const [openTodo, setOpenTodo] = useState(false);
  const [TodoStatus, setTodoStatus] = useState("");
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDate, setTodoDate] = useState("");
  const [todoDesc, setTodoDesc] = useState("");
  const handleChangeTodoStatus = (event) => {
    setTodoStatus(event.target.value);
  };
  /********************************************
   * TODO LIST CONTROLS FUNCTION HERE
   ********************************************/
  const addtodo = () => {
    if (
      TodoStatus.trim() !== "" &&
      todoTitle.trim() !== "" &&
      todoDate.trim() !== "" &&
      todoDesc.trim() !== ""
    ) {
      // All fields are not empty, you can proceed with your logic
      // console.log("Form submitted successfully!");
      // alert("Form submitted successfully!");
      const data = [
        {
          todo_title: todoTitle,
          todo_date: todoDate,
          todo_desc: todoDesc,
          todo_status: TodoStatus,
        },
      ];
      console.log(data);
      setTodoTitle("");
      setTodoDate("");
      setTodoDesc("");
      setTodoStatus("");
    } else {
      // Handle the case where some fields are empty
      // console.log("Please fill in all the fields.");
      alert("Please fill in all the fields.");
    }
  };
  return (
    <div className="todolist">
      <div className="todo_wrapper">
        <Typography
          pb={0}
          fontSize={18}
          fontWeight={700}
          textTransform={"uppercase"}
        >
          add task
        </Typography>
        {/**************************************
         * TODO LIST FORM START HERE
         ***************************************/}
        <IconButton
          onClick={() =>
            openTodo === false ? setOpenTodo(true) : setOpenTodo(false)
          }
        >
          <Add />
        </IconButton>
        <Collapse sx={{ mt: 1 }} in={openTodo ? true : false}>
          <Box display={"grid"} gap={2}>
            <FormControl variant="filled" fullWidth>
              <TextField
                onChange={(e) => setTodoTitle(e.target.value)}
                id="outlined-basic"
                label="todo title"
                color="success"
                variant="filled"
              />
            </FormControl>
            <FormControl variant="filled" fullWidth>
              <TextField
                onChange={(e) => setTodoDate(e.target.value)}
                id="outlined-basic"
                type="datetime-local"
                color="success"
                variant="filled"
              />
            </FormControl>
            <FormControl variant="filled" fullWidth>
              <InputLabel id="demo-simple-select-filled-label">
                Status
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={TodoStatus}
                onChange={handleChangeTodoStatus}
              >
                <MenuItem value="">
                  <em>Not Yet.</em>
                </MenuItem>
                <MenuItem value={10}>Completed</MenuItem>
                <MenuItem value={20}>Pending</MenuItem>
                <MenuItem value={30}>Incomplete</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="filled" fullWidth>
              <TextField
                onChange={(e) => setTodoDesc(e.target.value)}
                variant="filled"
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                defaultValue="Default Value"
              />
            </FormControl>
          </Box>
          <FormControl variant="filled" sx={{ mt: 1 }}>
            <Button variant="contained" onClick={addtodo}>
              save task
            </Button>
          </FormControl>
        </Collapse>
        {/**************************************
         * TODO LIST TABLE START HERE
         ***************************************/}
        <div className="todolist_table mt-5">
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>title</TableCell>
                  <TableCell>date</TableCell>
                  <TableCell>description</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Array.from([1, 2, 3, 4, 5, 6, 7, 8], (x) => x + x).map(
                  (im) => (
                    <TableRow>
                      <TableCell>tomorrow my coding day.</TableCell>
                      <TableCell>20 jan 2023</TableCell>
                      <TableCell>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Id facere veritatis nemo iusto officia velit?
                        Pariatur corrupti ratione corporis veniam?
                      </TableCell>
                      <TableCell>
                        <Badge>complete</Badge>
                      </TableCell>
                      <TableCell>
                        <Stack direction={"row"}>
                          <IconButton color="danger">
                            <Delete htmlColor="red" sx={{ fontSize: "18px" }} />
                          </IconButton>
                          <IconButton color="danger">
                            <Edit htmlColor="green" sx={{ fontSize: "18px" }} />
                          </IconButton>
                        </Stack>
                      </TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        {/**************************************
         * TODO LIST TABLE END HERE
         ***************************************/}
      </div>
    </div>
  );
};

export default TodoList;
