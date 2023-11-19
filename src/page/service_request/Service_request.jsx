import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Button, Typography } from '@mui/material';
import Header from '../../common/header/Header';
import Footer from '../../common/footer/Footer';
import Form from 'react-bootstrap/Form';
import "./service_request.css";
const Service_request = () => {
    return (
        <>
            <Header />
            <section className='service_request'>
                <div className="container">
                    <div className="service_req_wrapper">
                        <Typography
                            variant='h4'
                            paddingBottom={5}
                            textTransform='capitalize'
                            fontFamily='fantasy'
                        >send your requirment</Typography>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Enter Your Full Name!"
                            className="mb-3"
                            style={{ fontSize: "14px" }}
                        >
                            <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Enter Your Email address!"
                            className="mb-3"
                            style={{ fontSize: "14px" }}
                        >
                            <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Enter Your Phone Number!"
                            className="mb-3"
                            style={{ fontSize: "14px" }}
                        >
                            <Form.Control type="Phone" placeholder="name@example.com" />
                        </FloatingLabel>
                        <FloatingLabel
                            className="mb-3"
                            style={{ fontSize: "14px" }}
                            controlId="floatingSelect"
                            label="Select Service">
                            <Form.Select aria-label="Floating label select example">
                                <option value="1">facebook</option>
                                <option value="2">instagram</option>
                                <option value="3">twitter</option>
                                <option value="4">telegram</option>
                                <option value="5">youtube</option>
                                <option value="6">gamming</option>
                                <option value="7">website</option>
                                <option value="8">mobile app</option>
                                <option value="9">custom software</option>
                                <option value="10">api development</option>
                            </Form.Select>
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingTextarea2" style={{ fontSize: "14px" }} label="Write Your Request Here!">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                                className="mb-3"
                            />
                        </FloatingLabel>
                        <Button variant='contained' fullWidth>submit</Button>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Service_request