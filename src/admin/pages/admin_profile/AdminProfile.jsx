import React, { useState, useEffect, useRef } from "react";
import "./adminprofile.css";
import Modal from "react-bootstrap/Modal";
import { saveAs } from "file-saver";
import {
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import {
  AccountCircleOutlined,
  Download,
  Folder,
  FolderOutlined,
  Home,
  Image,
  MessageRounded,
  Search,
  Share,
} from "@mui/icons-material";
import FolderFile from "./FolderFile";
import About from "./About";
import AdminBlogs from "./AdminBlogs";
const galleryData = [
  {
    id: 1,
    img: "https://img.freepik.com/premium-photo/butterfly-flower-with-word-butterfly-it_865967-49968.jpg",
  },
  {
    id: 2,
    img: "https://img.freepik.com/premium-photo/butterfly-flower-with-word-butterfly-it_865967-49968.jpg",
  },
  {
    id: 3,
    img: "https://img.freepik.com/premium-photo/butterfly-flower-with-word-butterfly-it_865967-49968.jpg",
  },
  {
    id: 4,
    img: "https://img.freepik.com/premium-photo/butterfly-flower-with-word-butterfly-it_865967-49968.jpg",
  },
  {
    id: 5,
    img: "https://img.freepik.com/premium-photo/butterfly-flower-with-word-butterfly-it_865967-49968.jpg",
  },
  {
    id: 6,
    img: "https://img.freepik.com/premium-photo/butterfly-flower-with-word-butterfly-it_865967-49968.jpg",
  },
  {
    id: 7,
    img: "https://img.freepik.com/premium-photo/butterfly-flower-with-word-butterfly-it_865967-49968.jpg",
  },
  {
    id: 8,
    img: "https://img.freepik.com/premium-photo/butterfly-flower-with-word-butterfly-it_865967-49968.jpg",
  },
  {
    id: 9,
    img: "https://img.freepik.com/premium-photo/butterfly-flower-with-word-butterfly-it_865967-49968.jpg",
  },
  {
    id: 10,
    img: "https://img.freepik.com/premium-photo/butterfly-flower-with-word-butterfly-it_865967-49968.jpg",
  },
  {
    id: 11,
    img: "https://img.freepik.com/premium-photo/butterfly-flower-with-word-butterfly-it_865967-49968.jpg",
  },
  {
    id: 12,
    img: "https://img.freepik.com/premium-photo/butterfly-flower-with-word-butterfly-it_865967-49968.jpg",
  },
  {
    id: 13,
    img: "https://img.freepik.com/premium-photo/butterfly-flower-with-word-butterfly-it_865967-49968.jpg",
  },
  {
    id: 14,
    img: "https://img.freepik.com/premium-photo/butterfly-flower-with-word-butterfly-it_865967-49968.jpg",
  },
  {
    id: 15,
    img: "https://img.freepik.com/premium-photo/butterfly-flower-with-word-butterfly-it_865967-49968.jpg",
  },
  {
    id: 16,
    img: "https://img.freepik.com/premium-photo/butterfly-flower-with-word-butterfly-it_865967-49968.jpg",
  },
  {
    id: 17,
    img: "https://img.freepik.com/premium-photo/butterfly-flower-with-word-butterfly-it_865967-49968.jpg",
  },
  {
    id: 18,
    img: "https://img.freepik.com/premium-photo/butterfly-flower-with-word-butterfly-it_865967-49968.jpg",
  },
  {
    id: 19,
    img: "https://img.freepik.com/premium-photo/butterfly-flower-with-word-butterfly-it_865967-49968.jpg",
  },
  {
    id: 20,
    img: "https://img.freepik.com/premium-photo/butterfly-flower-with-word-butterfly-it_865967-49968.jpg",
  },
  {
    id: 21,
    img: "https://img.freepik.com/premium-photo/butterfly-flower-with-word-butterfly-it_865967-49968.jpg",
  },
  {
    id: 22,
    img: "https://img.freepik.com/premium-photo/butterfly-flower-with-word-butterfly-it_865967-49968.jpg",
  },
  {
    id: 23,
    img: "https://img.freepik.com/premium-photo/butterfly-flower-with-word-butterfly-it_865967-49968.jpg",
  },
  {
    id: 24,
    img: "https://img.freepik.com/premium-photo/butterfly-flower-with-word-butterfly-it_865967-49968.jpg",
  },
  {
    id: 25,
    img: "https://img.freepik.com/premium-photo/butterfly-flower-with-word-butterfly-it_865967-49968.jpg",
  },
  {
    id: 26,
    img: "https://img.freepik.com/premium-photo/butterfly-flower-with-word-butterfly-it_865967-49968.jpg",
  },
  {
    id: 27,
    img: "https://img.freepik.com/premium-photo/butterfly-flower-with-word-butterfly-it_865967-49968.jpg",
  },
  {
    id: 28,
    img: "https://img.freepik.com/premium-photo/butterfly-flower-with-word-butterfly-it_865967-49968.jpg",
  },
  {
    id: 29,
    img: "https://img.freepik.com/premium-photo/butterfly-flower-with-word-butterfly-it_865967-49968.jpg",
  },
  {
    id: 30,
    img: "https://img.freepik.com/premium-photo/butterfly-flower-with-word-butterfly-it_865967-49968.jpg",
  },
  {
    id: 31,
    img: "https://img.freepik.com/premium-photo/butterfly-flower-with-word-butterfly-it_865967-49968.jpg",
  },
  {
    id: 32,
    img: "https://img.freepik.com/premium-photo/butterfly-flower-with-word-butterfly-it_865967-49968.jpg",
  },
  {
    id: 33,
    img: "https://img.freepik.com/premium-photo/butterfly-flower-with-word-butterfly-it_865967-49968.jpg",
  },
  {
    id: 34,
    img: "https://img.freepik.com/premium-photo/butterfly-flower-with-word-butterfly-it_865967-49968.jpg",
  },
  {
    id: 35,
    img: "https://img.freepik.com/premium-photo/butterfly-flower-with-word-butterfly-it_865967-49968.jpg",
  },
  {
    id: 36,
    img: "https://img.freepik.com/premium-photo/butterfly-flower-with-word-butterfly-it_865967-49968.jpg",
  },
  {
    id: 37,
    img: "https://img.freepik.com/premium-photo/butterfly-flower-with-word-butterfly-it_865967-49968.jpg",
  },
  {
    id: 38,
    img: "https://img.freepik.com/premium-photo/butterfly-flower-with-word-butterfly-it_865967-49968.jpg",
  },
  {
    id: 39,
    img: "https://img.freepik.com/premium-photo/butterfly-flower-with-word-butterfly-it_865967-49968.jpg",
  },
  {
    id: 40,
    img: "https://img.freepik.com/premium-photo/butterfly-flower-with-word-butterfly-it_865967-49968.jpg",
  },
  {
    id: 41,
    img: "https://img.freepik.com/premium-photo/butterfly-flower-with-word-butterfly-it_865967-49968.jpg",
  },
  {
    id: 42,
    img: "https://img.freepik.com/premium-photo/butterfly-flower-with-word-butterfly-it_865967-49968.jpg",
  },
  {
    id: 43,
    img: "https://img.freepik.com/premium-photo/butterfly-flower-with-word-butterfly-it_865967-49968.jpg",
  },
  {
    id: 44,
    img: "https://img.freepik.com/premium-photo/butterfly-flower-with-word-butterfly-it_865967-49968.jpg",
  },
  {
    id: 45,
    img: "https://img.freepik.com/premium-photo/butterfly-flower-with-word-butterfly-it_865967-49968.jpg",
  },
  {
    id: 46,
    img: "https://img.freepik.com/premium-photo/butterfly-flower-with-word-butterfly-it_865967-49968.jpg",
  },
  {
    id: 47,
    img: "https://img.freepik.com/premium-photo/butterfly-flower-with-word-butterfly-it_865967-49968.jpg",
  },
  {
    id: 48,
    img: "https://img.freepik.com/premium-photo/butterfly-flower-with-word-butterfly-it_865967-49968.jpg",
  },
  {
    id: 49,
    img: "https://img.freepik.com/premium-photo/butterfly-flower-with-word-butterfly-it_865967-49968.jpg",
  },
  {
    id: 50,
    img: "https://img.freepik.com/premium-photo/butterfly-flower-with-word-butterfly-it_865967-49968.jpg",
  },
];
const AdminProfile = () => {
  const [TabsValue, setTabsValue] = useState(3);
  /***********************************************
   * GALLERY IMAGE MODAL CONTROL start here
   ***********************************************/
  const [showLightbox, setShowLightbox] = useState(false);
  const handleCloseLightbox = () => setShowLightbox(false);
  const [LightboxSrc, setLightboxSrc] = useState("");
  const handleShowLightbox = (anything) => {
    setShowLightbox(true);
    setLightboxSrc(anything);
  };
  /************************************
   * admin profile tabs start here
   ************************************/
  const handleChange = (event, newValue) => {
    setTabsValue(newValue);
  };
  /************************************
   * DOWNLOAD GALLERY IMAGE
   ************************************/
  const handleDownload = async (downloadSrc) => {
    saveAs("image_url", downloadSrc);
  };

  return (
    <>
      <div className="adminprofile">
        <div className="adminprofile_wrapper">
          <div className="admin_profile_header">
            <LazyLoadImage
              width={"100%"}
              height={"450px"}
              style={{ zIndex: "-1" }}
              src={"https://vetra.laborasyon.com/assets/images/profile-bg.jpg"}
            />
            <div className="admin_profile_body">
              <Box
                sx={{
                  width: "100%",
                  backgroundColor: "#eee",
                  boxShadow: "-3px -3px 5px #eee, 3px 3px 5px #eee",
                  borderRadius: "5px",
                  border: "1px solid #fff",
                  display: "inline-block",
                  padding: "10px",
                  mt: 0.4,
                }}
              >
                <Container fluid>
                  <Row>
                    <Col lg={3} sm={12} md={4}>
                      <Box mt={-13}>
                        <Avatar
                          sx={{
                            width: "150px",
                            height: "150px",
                            border: "5px solid #dff",
                            zIndex: "1",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            borderRightColor: "#25c628",
                            borderLeftColor: "#25c628",
                            borderStyle: "groove",
                          }}
                          src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                        />
                        <Box ml={3} py={2}>
                          <Typography
                            textAlign={"left"}
                            fontWeight={"600"}
                            fontSize={"16px"}
                          >
                            Lary Doe
                          </Typography>
                          <Typography
                            textTransform={"capitalize"}
                            textAlign={"left"}
                            fontSize={"small"}
                          >
                            founder & CEO at Omnifluxs
                          </Typography>
                        </Box>
                      </Box>
                    </Col>
                    <Col lg={9} sm={12} md={8}>
                      <Box mt={8}>
                        <Tabs
                          value={TabsValue}
                          onChange={handleChange}
                          aria-label="basic tabs example"
                          textColor="secondary"
                          indicatorColor="secondary"
                        >
                          <Tab
                            label={
                              <Typography>
                                <MessageRounded /> Message
                              </Typography>
                            }
                            value={1}
                          />
                          <Tab
                            label={
                              <Typography>
                                <AccountCircleOutlined /> Profile
                              </Typography>
                            }
                            value={2}
                          />
                          <Tab
                            label={
                              <Typography>
                                <Image /> Gallery
                              </Typography>
                            }
                            value={3}
                          />
                          <Tab
                            label={
                              <Typography>
                                <Folder /> Folder
                              </Typography>
                            }
                            value={4}
                          />
                        </Tabs>
                      </Box>
                    </Col>
                  </Row>
                </Container>
              </Box>
              <Box className="admin_profile_footer">
                {TabsValue === 1 ? (
                  <Box>
                    <AdminBlogs />
                  </Box>
                ) : TabsValue === 2 ? (
                  <Box p={2}>
                    <About />
                  </Box>
                ) : TabsValue === 3 ? (
                  <div className="admin_image_gallery">
                    <Box sx={{ textAlign: "right" }} width={"100%"}>
                      <Button variant="contained">upload</Button>
                    </Box>
                    <Stack
                      p={0}
                      gap={2}
                      direction="row"
                      display="grid"
                      gridTemplateColumns="repeat(6, 1fr)"
                      gridTemplateRows={"repeat(6, 1fr)"}
                    >
                      {galleryData.map((items, index) => (
                        <div
                          key={index}
                          data-id={index}
                          className="grid-square"
                        >
                          <Box
                            sx={{
                              padding: "10px",
                            }}
                          >
                            <Button
                              sx={{ p: 0 }}
                              onClick={() => handleShowLightbox(items.img)}
                            >
                              <LazyLoadImage
                                width="100%"
                                height="auto"
                                src={items.img}
                                style={{ borderRadius: "5px" }}
                              />
                            </Button>
                            <Stack
                              direction={"row"}
                              pt={2}
                              justifyContent={"space-between"}
                            >
                              <IconButton
                                onClick={() => handleDownload(items.img)}
                                color="success"
                              >
                                <Download />
                              </IconButton>
                              <IconButton color="secondary">
                                <Share />
                              </IconButton>
                            </Stack>
                          </Box>
                        </div>
                      ))}
                    </Stack>
                  </div>
                ) : TabsValue === 4 ? (
                  <div className="admin_folder_file">
                    <div className="foder_file_filter">
                      <Stack direction={"row"} justifyContent={"space-between"}>
                        <Box sx={{ display: "flex" }}>
                          <Form.Select aria-label="Default select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Select>
                          <InputGroup>
                            <Form.Select aria-label="Default select example">
                              <option>Open this select menu</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                            <InputGroup.Text style={{ border: "none" }}>
                              <Button variant="contained">
                                <Search />
                              </Button>
                            </InputGroup.Text>
                          </InputGroup>
                        </Box>
                        <Box>
                          <Form.Control />
                        </Box>
                      </Stack>
                    </div>
                    <FolderFile />
                  </div>
                ) : (
                  ""
                )}
              </Box>
            </div>
          </div>
        </div>
      </div>
      {/**************************************
       *GALLERY IMAGE LIGHTBOX MODAL
       ***************************************/}
      <Modal show={showLightbox} onHide={handleCloseLightbox}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <LazyLoadImage
            style={{
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            width="100%"
            height="auto"
            src={LightboxSrc}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AdminProfile;
