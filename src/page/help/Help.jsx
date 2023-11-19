import React from 'react';
import "./help.css";
import Form from 'react-bootstrap/Form';
import { Button, FloatingLabel } from 'react-bootstrap';
import PageTitle from "../../components/Page_title/PageTitle";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import help_support from "../../assets/img/help_support.jpg";
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
const Help = () => {
  return (
    <>
      <Header />
      <div className="helpPage">
        <div className="help_banner">
          <LazyLoadImage src={help_support} />
        </div>
        <div className="container">
          <div className="help_wrapper">
            <PageTitle title="we are here to help you" />
            <div className="help_form">
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: '100px' }}
                />
              </FloatingLabel>
              <Button variant='primary mt-3'>Submit</Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Help