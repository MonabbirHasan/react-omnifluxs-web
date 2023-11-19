import React from "react";
import { Search, Star, StarBorder, StarHalf, Timer } from "@mui/icons-material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import course_banner from "../../assets/img/course_banner.png";
import { Button, IconButton, Typography } from "@mui/material";
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
const Courses = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
                        {items.rating == "1.5" ? (
                          <>
                            <span>
                              <Star />
                            </span>
                            <span>
                              <StarHalf />
                            </span>
                            <span>
                              <StarBorder />
                            </span>
                            <span>
                              <StarBorder />
                            </span>
                            <span>
                              <StarBorder />
                            </span>
                          </>
                        ) : items.rating == "2.5" ? (
                          <>
                            <span>
                              <Star />
                            </span>
                            <span>
                              <Star />
                            </span>
                            <span>
                              <StarHalf />
                            </span>
                            <span>
                              <StarBorder />
                            </span>
                            <span>
                              <StarBorder />
                            </span>
                          </>
                        ) : items.rating == "3.5" ? (
                          <>
                            <span>
                              <Star />
                            </span>
                            <span>
                              <Star />
                            </span>
                            <span>
                              <Star />
                            </span>
                            <span>
                              <StarHalf />
                            </span>
                            <span>
                              <StarBorder />
                            </span>
                          </>
                        ) : items.rating == "4.5" ? (
                          <>
                            <span>
                              <Star />
                            </span>
                            <span>
                              <Star />
                            </span>
                            <span>
                              <Star />
                            </span>
                            <span>
                              <Star />
                            </span>
                            <span>
                              <StarHalf />
                            </span>
                          </>
                        ) : items.rating == "5" ? (
                          <>
                            <span>
                              <Star />
                            </span>
                            <span>
                              <Star />
                            </span>
                            <span>
                              <Star />
                            </span>
                            <span>
                              <Star />
                            </span>
                            <span>
                              <Star />
                            </span>
                          </>
                        ) : (
                          <>
                            <span>
                              <Star />
                            </span>
                            <span>
                              <StarHalf />
                            </span>
                            <span>
                              <StarBorder />
                            </span>
                            <span>
                              <StarBorder />
                            </span>
                            <span>
                              <StarBorder />
                            </span>
                          </>
                        )}
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
                      <Button variant="contained" sx={{ mt: 3 }}>
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
       * COURSE DETAILS MODAL END ERE
       **************************************/}
      <Footer />
    </>
  );
};

export default Courses;
