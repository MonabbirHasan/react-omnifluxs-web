import {
  Folder,
  InsertDriveFile,
  More,
  MoreHorizOutlined,
  MoreVertOutlined,
  PictureAsPdf,
  TextSnippet,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  IconButton,
  Radio,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const FolderFile = () => {
  const folders = Array.from({ length: 20 }, (_, i) => ({
    _id: (i + 1).toString(),
    content: (i + 1).toString(),
    folder_name: "Sketch Templates",
    space: "50",
    create_at: "12.01.2023",
  }));

  return (
    <div className="folderfile">
      <Container fluid>
        <div className="forlders">
          <Row>
            {folders.map((items) => (
              <Col sm={2} md={2} lg={2}>
                <Box
                  sx={{
                    padding: "5px",
                    backgroundColor: "transparent",
                    boxShadow: "-3px -3px 5px #eee,3px 3px 5px #eee",
                    border: "3px solid #fff",
                    borderRadius: 3,
                    my: 1,
                  }}
                >
                  <Stack direction={"row"} justifyContent={"space-between"}>
                    <IconButton sx={{ padding: 0, margin: 0 }}>
                      <Radio />
                    </IconButton>
                    <IconButton color="success">
                      <MoreVertOutlined />
                    </IconButton>
                  </Stack>
                  <Typography textAlign={"center"}>
                    <Folder htmlColor="#121" sx={{ fontSize: "5em" }} />
                    <p>{items.folder_name}</p>
                  </Typography>
                  <Stack
                    px={1}
                    direction={"row"}
                    justifyContent={"space-between"}
                  >
                    <Typography fontSize={"12px"}>{items.space} GB</Typography>
                    <Typography fontSize={"12px"}>{items.create_at}</Typography>
                  </Stack>
                </Box>
              </Col>
            ))}
          </Row>
        </div>
        <Divider>
          <Typography
            textTransform={"capitalize"}
            fontSize={"18px"}
            fontWeight={"600"}
            color={"#919191"}
          >
            Text Files
          </Typography>
        </Divider>
        <div className="text_files">
          <Row>
            {folders.map((items) => (
              <Col sm={2} md={2} lg={2}>
                <Box
                  sx={{
                    padding: "5px",
                    backgroundColor: "transparent",
                    boxShadow: "-3px -3px 5px #eee,3px 3px 5px #eee",
                    border: "3px solid #fff",
                    borderRadius: 3,
                    my: 1,
                  }}
                >
                  <Stack direction={"row"} justifyContent={"space-between"}>
                    <IconButton sx={{ padding: 0, margin: 0 }}>
                      <Radio />
                    </IconButton>
                    <IconButton color="success">
                      <MoreVertOutlined />
                    </IconButton>
                  </Stack>
                  <Typography textAlign={"center"}>
                    <TextSnippet
                      htmlColor="#233"
                      sx={{ fontSize: "5em" }}
                    />
                    <p>{items.folder_name}</p>
                  </Typography>
                  <Stack
                    px={1}
                    direction={"row"}
                    justifyContent={"space-between"}
                  >
                    <Typography fontSize={"12px"}>{items.space} GB</Typography>
                    <Typography fontSize={"12px"}>{items.create_at}</Typography>
                  </Stack>
                </Box>
              </Col>
            ))}
          </Row>
        </div>
        <Divider>
          <Typography
            textTransform={"capitalize"}
            fontSize={"18px"}
            fontWeight={"600"}
            color={"#919191"}
          >
            pdf Files
          </Typography>
        </Divider>
        <div className="pdf_file">
          <Row>
            {folders.map((items) => (
              <Col sm={2} md={2} lg={2}>
                <Box
                  sx={{
                    padding: "5px",
                    backgroundColor: "transparent",
                    boxShadow: "-3px -3px 5px #eee,3px 3px 5px #eee",
                    border: "3px solid #fff",
                    borderRadius: 3,
                    my: 1,
                  }}
                >
                  <Stack direction={"row"} justifyContent={"space-between"}>
                    <IconButton sx={{ padding: 0, margin: 0 }}>
                      <Radio />
                    </IconButton>
                    <IconButton color="success">
                      <MoreVertOutlined />
                    </IconButton>
                  </Stack>
                  <Typography textAlign={"center"}>
                    <PictureAsPdf htmlColor="#E2574C" sx={{ fontSize: "5em" }} />
                    <p>{items.folder_name}</p>
                  </Typography>
                  <Stack
                    px={1}
                    direction={"row"}
                    justifyContent={"space-between"}
                  >
                    <Typography fontSize={"12px"}>{items.space} GB</Typography>
                    <Typography fontSize={"12px"}>{items.create_at}</Typography>
                  </Stack>
                </Box>
              </Col>
            ))}
          </Row>
        </div>
        <Divider>
          <Typography
            textTransform={"capitalize"}
            fontSize={"18px"}
            fontWeight={"600"}
            color={"#919191"}
          >
            doc Files
          </Typography>
        </Divider>
        <div className="doc_file">
          <Row>
            {folders.map((items) => (
              <Col sm={2} md={2} lg={2}>
                <Box
                  sx={{
                    padding: "5px",
                    backgroundColor: "transparent",
                    boxShadow: "-3px -3px 5px #eee,3px 3px 5px #eee",
                    border: "3px solid #fff",
                    borderRadius: 3,
                    my: 1,
                  }}
                >
                  <Stack direction={"row"} justifyContent={"space-between"}>
                    <IconButton sx={{ padding: 0, margin: 0 }}>
                      <Radio />
                    </IconButton>
                    <IconButton color="success">
                      <MoreVertOutlined />
                    </IconButton>
                  </Stack>
                  <Typography textAlign={"center"}>
                    <InsertDriveFile htmlColor="#09B66D" sx={{ fontSize: "5em" }} />
                    <p>{items.folder_name}</p>
                  </Typography>
                  <Stack
                    px={1}
                    direction={"row"}
                    justifyContent={"space-between"}
                  >
                    <Typography fontSize={"12px"}>{items.space} GB</Typography>
                    <Typography fontSize={"12px"}>{items.create_at}</Typography>
                  </Stack>
                </Box>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default FolderFile;
