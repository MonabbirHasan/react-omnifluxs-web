import React, { useState } from 'react'
import InputGroup from 'react-bootstrap/InputGroup';
import { Form, Modal } from 'react-bootstrap';
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import "./Share.css";
import {
    CopyAll,
    CopyAllRounded,
    Email,
    FacebookOutlined,
    Instagram,
    LinkedIn,
    Pinterest,
    Reddit,
    Telegram,
    Twitter,
    WhatsApp
} from '@mui/icons-material';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

function Share({ setValueFromChild, showModals }) {
    const handleClose = () => {
        setShow(false)
        setValueFromChild(false);
    };
    const [show, setShow] = useState(false);
    // showModals == true ? true : show
    const CopyLinkURL = () => {}
    const ShareFacebook = () => {}
    const ShareInstagram = () => {}
    const ShareRaddit = () => {}
    const ShareTwitter = () => {}
    const ShareWhatsApp = () => {}
    const SharePinterest = () => {}
    const ShareLinkedin = () => {}
    const ShareTelegram = () => {}
    const ShareEmail = () => {}

    return (
        <div className='share_component'>
            <Modal show={showModals == true ? true : show} className='share_modals' onHide={handleClose}>
                <Modal.Header closeButton className='modal_body'>
                    <Modal.Title>Share</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modal_body'>
                    <Carousel responsive={responsive}>
                        <div id='Share_slider_item' onClick={() => ShareFacebook()}><FacebookOutlined /></div>
                        <div id='Share_slider_item' onClick={() => ShareTwitter()}><Twitter /></div>
                        <div id='Share_slider_item' onClick={() => ShareInstagram()}><Instagram /></div>
                        <div id='Share_slider_item' onClick={() => ShareWhatsApp()}><WhatsApp /></div>
                        <div id='Share_slider_item' onClick={() => ShareEmail()}><Email /></div>
                        <div id='Share_slider_item' onClick={() => ShareRaddit()}><Reddit /></div>
                        <div id='Share_slider_item' onClick={() => SharePinterest()}><Pinterest /></div>
                        <div id='Share_slider_item' onClick={() => ShareLinkedin()}><LinkedIn /></div>
                        <div id='Share_slider_item' onClick={() => ShareTelegram()}><Telegram /></div>
                        <div id='Share_slider_item' onClick={() => CopyLinkURL()}><CopyAll /></div>
                    </Carousel>
                    <InputGroup className="mb-0 mt-4">
                        <Form.Control
                            value={"https://youtube.com/watch=link"}
                        />
                        <InputGroup.Text
                            style={{ cursor: 'pointer' }}
                            id="basic-addon1">
                            <CopyAllRounded />
                        </InputGroup.Text>
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer className='modal_body'></Modal.Footer>
            </Modal>
        </div>
    )
}

export default Share