import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Form } from "react-bootstrap";
import "./parmission_management.css";
const Parmission_switch = () => {
  return (
    <div>
      <Stack>
        <Typography mt={1} pr={2} textTransform={"capitalize"}>
          clients
        </Typography>
        <Box display={"flex"} gap={3}>
          <Form>
            <Form.Check
              type="switch"
              id="custom-switch"
              label="all"
              style={{ textTransform: "capitalize" }}
              checked={false}
            />
          </Form>
          <Form>
            <Form.Check
              type="switch"
              id="custom-switch"
              label="index"
              style={{ textTransform: "capitalize" }}
              checked={false}
            />
          </Form>
          <Form>
            <Form.Check
              type="switch"
              id="custom-switch"
              label="create"
              style={{ textTransform: "capitalize" }}
              checked={false}
            />
          </Form>
          <Form>
            <Form.Check
              type="switch"
              id="custom-switch"
              label="edit"
              style={{ textTransform: "capitalize" }}
              checked={false}
            />
          </Form>
          <Form>
            <Form.Check
              type="switch"
              id="custom-switch"
              label="destroy"
              style={{ textTransform: "capitalize" }}
              checked={false}
            />
          </Form>
        </Box>
      </Stack>
    </div>
  );
};

export default Parmission_switch;
