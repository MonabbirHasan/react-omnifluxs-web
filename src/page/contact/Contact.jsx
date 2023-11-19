import React, { useState } from 'react'
import "./contact.css"
import { Button, FloatingLabel, NavLink } from 'react-bootstrap'
import { Chat, Close, LocationCity, Mail, Person, Phone, WhatsApp } from '@mui/icons-material'
import "../../assets/css/media_query.css"
import Header from "../../common/header/Header"
import Footer from "../../common/footer/Footer"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import contact_us from "../../assets/img/contact_us.jpg"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Alert } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
    let [username, setUsername] = useState('');
    let [message, setMessage] = useState('');
    let [subject, setSubject] = useState('');
    let [email, setEmail] = useState('');
    let [Debounching, setDebounching] = useState(false);
    const notify = (text) => toast(text);
    /******************************************
     * CONTACT INFO FUNCTION START HERE
     ******************************************/
    // Validation functions
    function validateName(name) {
        const nameRegex = /^[A-Za-z\s]+$/;
        return nameRegex.test(name);
    }

    function validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    }

    function validateSubject(subject) {
        return subject.trim() !== '';
    }

    function validateMessage(message) {
        return message.trim() !== '';
    }

    const handleSubmit = async () => {
        if (
            validateName(username) &&
            validateEmail(email) &&
            validateSubject(subject) &&
            validateMessage(message)
        ) {
            if (username.trim() === '' || email.trim() === '' || subject.trim() === '' || message.trim() === '') {
                // If any field is empty, show an alert.
                notify("All fields are required.")
                // setInputAlert({ ...input_alert, message: "All fields are required.", colors: "error", show: true })
                // alert('All fields are required.');
            } else {
                notify("we will contact with you as soon as possible.")
                // setInputAlert({ ...input_alert, message: "we will contact with you as soon as possible.", colors: "success", show: true })
                // All fields are filled, proceed with your logic (e.g., form submission).
                // http://127.0.0.1:8000/api/access/contact_us
                let data = {
                    "contact_sender_name": username.toLocaleLowerCase(),
                    "contact_sender_email": email.toLocaleLowerCase(),
                    "contact_subject": subject.toLocaleLowerCase(),
                    "contact_message_text": message.toLocaleLowerCase(),
                    "contact_meeting_url": "https://omnifluxs.com",
                    "contact_submission_time": new Date().toLocaleTimeString() + "/" + new Date().toLocaleDateString(),
                    "is_visible": true,
                    "status": true
                }
                notify(input_alert.message)
                await fetch("http://127.0.0.1:8000/api/access/contact_us", {
                    method: "POST",
                    headers: {
                        'Content-Type': "application/json"
                    },
                    body: JSON.stringify(data)
                })
                    .then(response => response.json())
                    .then((result) => {
                        console.log(result)
                    })
                setDebounching(true)
                setTimeout(() => {
                    setDebounching(false)
                }, 500);
            }
        } else {
            // Validation failed, you can provide more specific error messages if needed.
            notify("Invalid input. Please check your input fields.")
            // setInputAlert({ ...input_alert, message: "Invalid input. Please check your input fields.", colors: "error", show: true })
            // alert('Invalid input. Please check your input fields.');
        }
    };


    /****
     *  $table->string('contact_sender_name', 100);
        $table->string('contact_sender_email', 100);
        $table->string('contact_subject', 255);
        $table->text('contact_message_text');
        $table->text("contact_meeting_url");
        $table->string('contact_submission_time', 255);
        $table->boolean('is_visible');
        $table->boolean('status');
     */
    /******************************************
     * SOCIAL SHARE FUNCTION START HERE
     ******************************************/
    let WhatsAppWindow = () => {
        window.open("https://wa.me/+916367416401")
    }
    let PhoneWindow = (phoneNumber) => {
        var url = 'tel:' + phoneNumber;
        window.open(url, '_blank');
    }
    let MapWindow = () => {
        window.open("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.9003054629297!2d75.76832325!3d26.87490835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db4538db8a4bd%3A0xb93fcd456ba54dc!2sGurjar%20Ki%20Thadi%2C%20Jaipur%2C%20Rajasthan%2C%20India!5e0!3m2!1sen!2sbd!4v1694059880229!5m2!1sen!2sbd")
    }
    return (
        <>
            <Header />
            <div className='contactPage'>
                <div className="contact_banner">
                    <LazyLoadImage
                        alt={"contact us"}
                        src={contact_us}
                    />
                </div>
                <div className="container">
                    <div className="contact_wrapper">
                        <div className="contact_left">
                            <div>
                                <ToastContainer />
                            </div>

                            <div className="input_item">
                                <FloatingLabel controlId="floatingPassword" label="Your Name">
                                    <Form.Control onChange={(e) => setUsername(e.target.value)} type="Name" placeholder="Your Name" />
                                </FloatingLabel>
                            </div>
                            <div className="input_item">
                                <FloatingLabel controlId="floatingPassword" label="Your E-mail">
                                    <Form.Control onChange={(e) => setEmail(e.target.value)} type="mail" placeholder="Your mail" />
                                </FloatingLabel>
                            </div>
                            <div className="input_item">
                                <FloatingLabel controlId="floatingPassword" label="subject">
                                    <Form.Control onChange={(e) => setSubject(e.target.value)} type="phone" placeholder="Your subject" />
                                </FloatingLabel>
                            </div>
                            <div className="input_item">
                                <FloatingLabel controlId="floatingTextarea2" label="Your Message">
                                    <Form.Control
                                        as="textarea"
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Leave a comment here"
                                        style={{ height: '100px' }}
                                    />
                                </FloatingLabel>
                            </div>
                            <div className="submit_btn">
                                {
                                    Debounching == false ?
                                        <Button onClick={handleSubmit}>Submit</Button>
                                        : ""
                                }
                            </div>
                        </div>
                        <div className="contact_right">
                            <div className="contact_item" onClick={MapWindow}>
                                <span><LocationCity /></span>
                                <span>Gurjar Ki Thadi, Durgapur,302018, Jaipur ( Rajasthan )</span>
                            </div>
                            <div className="contact_item" onClick={() => PhoneWindow('+916367416401')}>
                                <span><Phone /></span>
                                <span>+916367416401</span>
                            </div>
                            <div className="contact_item">
                                <a href="mailto:rakeshytseller@gmail.com" style={{ color: 'black' }}>
                                    <span><Mail /></span>
                                    <span>rakeshytseller@gmail.com</span>
                                </a>
                            </div>
                            <div className="contact_item" onClick={WhatsAppWindow}>
                                <span><WhatsApp /></span>
                                <span>+916367416401</span>
                            </div>
                        </div>
                    </div>
                    <div className="maps">
                        <iframe width="100%" height="400px" onAnimationEnd={true} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.9003054629297!2d75.76832325!3d26.87490835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db4538db8a4bd%3A0xb93fcd456ba54dc!2sGurjar%20Ki%20Thadi%2C%20Jaipur%2C%20Rajasthan%2C%20India!5e0!3m2!1sen!2sbd!4v1694059880229!5m2!1sen!2sbd" ></iframe>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact