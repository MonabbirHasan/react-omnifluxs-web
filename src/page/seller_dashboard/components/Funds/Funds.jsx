import React, { useState } from 'react'
import { AttachMoneyRounded, Money } from '@mui/icons-material';
import { pay_methods } from '../../../../utils/static/paymentmethodData';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import InputGroup from 'react-bootstrap/InputGroup';
import { NavLink } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Button } from '@mui/material';
import "./funds.css";
const Funds = () => {
  const [show, setShow] = useState(false);
  let [pay_info, setPayinfo] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = (method_name, charges, total_amount) => {
    setShow(true)
    setPayinfo({
      name: method_name,
      charges: charges,
      amount: total_amount
    })
  };
  // Binanse 
  // Blockchain 
  // Google Pay
  // Paytm
  // Phone Pay
  // Coinbase
  // Phone pay
  // Wise
  // Web Money
  // Payoneer
  // Perfect Money 
  // Payeer
  // Crypto

  return (
    <>
      <div className='funds_page'>
        {/* PAYMENT METHODS SECTION START HERE */}
        <section className="add_funds_wrapper">
          <div className="fund_title_section">
            <h3>add funds</h3>
            <p><NavLink to={""}>payment history</NavLink></p>
          </div>
          <div className="pay_methods_section">
            {
              pay_methods.map((items) => (
                <>
                  <div className="payment_cards">
                    <LazyLoadImage src={items.img} />
                    <div style={{ justifyContent: "center", textAlign: "center" }}>
                      <Button onClick={() => handleShow(items.name, items.fees, "")} variant='contained'>Pay now</Button>
                    </div>
                  </div>
                </>
              ))
            }
          </div>
        </section>
        {/* payment modal start here */}
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton style={{ background: "#4285F4" }}>
            <Modal.Title className='text-capitalize text-white'>Payment By {pay_info.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <p>Transaction Limit: 1.00 - 10,000.00 $</p>
              <p>Charge: <strong>{pay_info.charges}</strong></p>
            </div>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1"><Money /></InputGroup.Text>
              <Form.Control
                placeholder="Enter The Amount"
                aria-label="Enter The Amount"
                aria-describedby="basic-addon1"
              />
              <InputGroup.Text id="basic-addon1"><AttachMoneyRounded /></InputGroup.Text>
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button sx={{ marginRight: '5px' }} variant="outlined" color="error" onClick={handleClose}>
              Close
            </Button>
            <Button variant="outlined">Continue</Button>
          </Modal.Footer>
        </Modal>
        {/* payment modal end here */}
      </div>
    </>
  )
}

export default Funds