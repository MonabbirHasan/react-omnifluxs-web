import { FloatingLabel, Form, InputGroup } from "react-bootstrap";
import { Box, Button, IconButton, Stack } from "@mui/material";
import { Delete, DeleteOutline } from "@mui/icons-material";
import React, { useEffect, useState, useRef } from "react";
import ReactQuill from "react-quill";
const MailCompose = () => {
  const [value, setValue] = useState("");
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["link", "image", "video"],
      ["clean"],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ color: [] }, { background: [] }],
    ],
  };
  const stylesheet = {
    compose_mail: {
      padding: "10px",
      background: "transparent",
      boxShadow: "-2px -2px 4px #eee,2px 2px 5px #eeee",
      border: "2px solid #fff",
      borderRadius: "5px",
    },
  };
  return (
    <div style={stylesheet.compose_mail}>
      <div className="compose_mail_wrapper">
        <FloatingLabel
          controlId="floatingInput"
          label="Email Address"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <InputGroup className="mb-3">
          <InputGroup.Text>CC BCC</InputGroup.Text>
          <Form.Control type="text" placeholder="Mail To" />
        </InputGroup>
        <FloatingLabel
          controlId="floatingInput"
          label="Subject"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Subject" />
        </FloatingLabel>
        <div>
          <ReactQuill
            modules={modules}
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Button
            variant="contained"
            sx={{
              mt: 2,
              textTransform: "capitalize",
              backgroundColor: "green",
              letterSpacing: "1px",
            }}
          >
            send
          </Button>
          <Box mt={1}>
            <IconButton>
              <DeleteOutline htmlColor="black" />
            </IconButton>
          </Box>
        </Stack>
      </div>
    </div>
  );
};

export default MailCompose;
