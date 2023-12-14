import React from "react";
import { Search, Star, StarBorder, StarHalf, Timer } from "@mui/icons-material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import course_banner from "../../assets/img/course_banner.png";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { courseData } from "../../utils/static/courseData";
import { NavLink, useNavigate } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import Footer from "../../common/footer/Footer";
import Header from "../../common/header/Header";
import im1 from "../../assets/img/img1.png";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import "./courses.css";
import { CRating } from "./CRating";
const Courses = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  /***************************************
   * COURSE ENROLL MODAL CONTROLL HERE
   ***************************************/
  const [ShowCourseEnrollModal, setShowCourseEnrollModal] = useState(false);
  const handleCloseCourseEnrollModal = () => setShowCourseEnrollModal(false);
  const handleShowCourseEnrollModal = () => setShowCourseEnrollModal(true);
  return (
    <>
      <Header />
      <div className="courses_page">
        <div className="course_banner">
          <LazyLoadImage src={course_banner} />
        </div>
        <div className="container">
          <div className="course_wrapper">
            <div className="course_filter">
              <p
                style={{
                  color: "#000",
                  textTransform: "capitalize",
                  fontSize: "14px",
                  fontWeight: "500",
                  fontFamily: "monospace",
                }}
              >
                filter course
              </p>
              <div className="filter_input">
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
                <div>
                  <Form.Select aria-label="Default select example">
                    <option>select price</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </div>
                <div>
                  <Form.Select aria-label="Default select example">
                    <option>select price</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </div>
                <div className="filter_btn">
                  <Button startIcon={<Search />} variant="contained">
                    Search
                  </Button>
                </div>
              </div>
            </div>
            {/*******************************************
             * COURSES SECTION START HERE
             *******************************************/}
            <div className="row">
              {courseData.map((items) => (
                <div className="col-md-3">
                  <div className="course_item">
                    <div className="courses_thumbnail">
                      {/* <LazyLoadImage src={im1} /> */}
                      <p>{items.thumbnail_title}</p>
                    </div>
                    <h3>{items.title}</h3>
                    <p className="badge btn-success">
                      <span>{items.academy}</span> it company
                    </p>
                    <div className="course_duration">
                      <span className="badge btn-success">{items.level}</span>
                    </div>
                    {/* courseses price and rating */}
                    <div className="course_item_footer">
                      <div className="course_rating">
                        <CRating rating={items.rating} />
                      </div>
                      <div className="course_price">
                        <del className="old_price">{items.old_price}</del>
                        <span className="new_price">{items.price}</span>
                      </div>
                    </div>
                    <div className="course_buy_btn_box">
                      <Button
                        onClick={handleShow}
                        variant="contained"
                        sx={{ mt: 3 }}
                      >
                        view details
                      </Button>
                      <Button
                        onClick={handleShowCourseEnrollModal}
                        variant="contained"
                        sx={{ mt: 3 }}
                      >
                        enroll now
                      </Button>
                    </div>
                    {/* courseses price and rating */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/************************************
       * COURSE DETAILS MODAL START ERE
       **************************************/}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ fontFamily: "fantasy", letterSpacing: "1px" }}>
            YOUTUBE
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Typography
            variant="h4"
            textTransform={"capitalize"}
            fontFamily={"cursive"}
            fontSize={20}
            marginBottom={0.5}
          >
            youtube master class pdf
          </Typography>
          <Typography
            variant="p"
            textTransform={"capitalize"}
            fontFamily={"sans-serif"}
            fontSize={14}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            consequatur qui aspernatur? Voluptate voluptatum vel nulla ducimus,
            vitae dicta provident, minus excepturi quod perferendis voluptas
            atque officia, velit eaque. Minima harum corporis consequatur, atque
            commodi minus, fugit nemo soluta iure exercitationem praesentium
            laboriosam rerum consequuntur modi? Eos nobis, atque sapiente
            dolorum consequatur voluptas eaque sint velit aliquam fuga dolorem
            cum ipsum corrupti eum! Debitis architecto aperiam, neque, officiis
            error nisi fugit, tenetur veniam rerum asperiores exercitationem!
            Odio voluptates culpa ipsum deserunt dicta id debitis fugiat
            voluptatum doloremque, cum, nobis voluptas rerum in ratione deleniti
            tempora? Cumque hic eveniet accusamus aspernatur!
          </Typography>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleClose} variant="primary">
            Understood
          </Button>
        </Modal.Footer>
      </Modal>
      {/************************************
       * ENROLL DETAILS MODAL START ERE
       **************************************/}
      <Modal show={ShowCourseEnrollModal} onHide={handleCloseCourseEnrollModal}>
        <Modal.Header>
          <Modal.Title>Enroll Now</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga odit
            quaerat reprehenderit eos nisi voluptate soluta sit, itaque,
            explicabo sapiente similique qui deserunt distinctio officiis dicta
            quibusdam perspiciatis amet porro ullam incidunt optio laborum. Nisi
            praesentium suscipit possimus perferendis voluptas provident,
            deleniti molestiae vitae totam laudantium. Inventore esse quod
            voluptatibus odio, quo sequi obcaecati sit ad minus similique ipsum,
            cum quibusdam cupiditate optio dolor harum magni eaque molestiae
            blanditiis, animi unde dolore ut alias. Ducimus ipsa quod expedita
            illum temporibus reprehenderit mollitia accusantium vitae, nulla
            tenetur et debitis voluptatum placeat quis sint ullam nobis
            doloribus natus odio enim ab aliquam!
          </Typography>
        </Modal.Body>
        <Modal.Footer>
          <Stack direction={"row"} spacing={10}>
            <Box>
              <Typography fontWeight={600} pt={1} color={"purple"}>
                Total Charges : $500
              </Typography>
            </Box>
            <Box>
              <Button
                variant="outlined"
                color="error"
                sx={{ marginRight: "5px" }}
                onClick={handleCloseCourseEnrollModal}
              >
                Close
              </Button>
              <Button
                variant="contained"
                sx={{ backgroundColor: "green" }}
                onClick={handleCloseCourseEnrollModal}
              >
                let's pay
              </Button>
            </Box>
          </Stack>
        </Modal.Footer>
      </Modal>
      {/************************************
       * COURSE DETAILS MODAL END ERE
       **************************************/}
      <Footer />
    </>
  );
};

export default Courses;
