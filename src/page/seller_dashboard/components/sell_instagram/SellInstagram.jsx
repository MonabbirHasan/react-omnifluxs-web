import React, { useState } from 'react';
import "./sellinstagram.css";
import { FloatingLabel, Form, InputGroup, Table } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import img1 from "../../../../assets/img/img1.png";
import { Delete, Edit } from '@mui/icons-material';
import FormTitle from '../form_title/FormTitle';
import DataTable from 'datatables.net-dt';
import { Button } from '@mui/material';
const SellInstagram = () => {
    const [listingID, setListingID] = useState('');
    let table = new DataTable('#instagram_page_info_table');
    const generateRandomID = () => {
        const prefix = 'OFRY';
        const randomID = Math.floor(Math.random() * 1000000); // Generate a random number between 0 and 999999
        const formattedID = `${prefix}${randomID.toString().padStart(6, '0')}`; // Add prefix and pad with zeros
        setListingID(formattedID);
    };
    return (
        <div className='sellinstagram_page'>
            <section className='selling_info_form'>
                <div className="form_wrapper">
                    <FormTitle
                        text={"upload new instagram group"}
                        color={"black"}
                        size={"20px"}
                        textstyle={"uppercase"}
                        fontFamily={"fantasy"}
                        letterspacing={".1px"}
                        pt={"20px"}
                        pl={"5px"}
                        pb={"10px"}
                        pr={"0"}
                    />
                    <InputGroup className='mb-3'>
                        <Form.Control
                            placeholder="Listing Id"
                            aria-label="Listing"
                            aria-describedby="basic-addon1"
                            type='text'
                            value={listingID}
                            readOnly
                        />
                        <p><Button onClick={() => generateRandomID()} variant='contained' sx={{ marginTop: "15px" }}>Generate</Button></p>
                    </InputGroup>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Enter Channal Name"
                        className="mb-3"
                    >
                        <Form.Control type="text" name='name' required />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Enter Channal Name"
                        className="mb-3"
                    >
                        <Form.Control type="text" name='name' required />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Enter Channal Email"
                        className="mb-3"
                    >
                        <Form.Control type="email" name="email" required />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Enter Gmail Password"
                        className="mb-3"
                    >
                        <Form.Control type="text" name='password' required />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Facebook Page Name"
                        className="mb-3"
                    >
                        <Form.Control type="text" name='password' required />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Facebook Page Url"
                        className="mb-3"
                    >
                        <Form.Control type="text" name='password' required />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Total followers"
                        className="mb-3"
                    >
                        <Form.Control type="text" name='password' required />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Total Posts"
                        className="mb-3"
                    >
                        <Form.Control type="text" name='password' required />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Lifetime Earning"
                        className="mb-3"
                    >
                        <Form.Control type="text" name='password' required />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Last Month Earning"
                        className="mb-3"
                    >
                        <Form.Control type="text" name='password' required />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Your Expectation Price"
                        className="mb-3"
                    >
                        <Form.Control type="text" name='password' required />
                    </FloatingLabel>
                    <Form.Select aria-label="Default select example">
                        <option>Meta Verified?</option>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                    </Form.Select>
                    <Form.Select aria-label="Default select example">
                        <option>Copyright Strike</option>
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                    </Form.Select>
                    <Form.Select aria-label="Default select example">
                        <option>Page Category</option>
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                    </Form.Select>
                    <Form.Select aria-label="Default select example">
                        <option>Page Language</option>
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                    </Form.Select>
                    <Button variant='contained' sx={{ marginTop: "5px" }}>save</Button>
                </div>
            </section>
            <section className='selling_info_table'>
                <div className="selling_info_table_wrapper">
                    <FormTitle
                        text={"group data table"}
                        color={"black"}
                        size={"20px"}
                        textstyle={"capitalize"}
                        fontFamily={"fantasy"}
                        letterspacing={"1px"}
                        pt={"20px"}
                        pl={"0"}
                        pb={"15px"}
                        pr={"0"}
                    />
                    <Table responsive="sm" id='instagram_page_info_table'>
                        <thead>
                            <tr>
                                <th scope="col">
                                    img
                                </th>
                                <th scope="col">Order</th>
                                <th scope="col">Name</th>
                                <th scope="col">Occupation</th>
                                <th scope="col">Contact</th>
                                <th scope="col">Education</th>
                                <th scope="col" style={{ display: "grid", gridTemplateColumns: "auto auto" }}>
                                    <span>Edite</span>
                                    <span>Delete</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr scope="row">
                                <td>
                                    <label class="control control--checkbox">
                                        <LazyLoadImage src={img1} width={40} height={40} style={{ borderRadius: "100%", border: '3px solid #bbb' }} />
                                        <div class="control__indicator"></div>
                                    </label>
                                </td>
                                <td>
                                    1392
                                </td>
                                <td class="pl-0">
                                    <div class="d-flex align-items-center">
                                        <label class="custom-control ios-switch">
                                            <span class="ios-switch-control-indicator"></span>
                                        </label>
                                        <a href="#">James Yates</a>
                                    </div>
                                </td>
                                <td>
                                    Web Designer
                                    <small class="d-block">Far far away, behind the word mountains</small>
                                </td>
                                <td>+63 983 0962 971</td>
                                <td>NY University</td>
                                <td>
                                    <span style={{ display: 'flex' }}>
                                        <Button variant='contained' sx={{ marginRight: "5px" }} color="success"><Edit sx={{ fontSize: "18px" }} /></Button>
                                        <Button variant='contained' sx={{ marginRight: "5px" }} color="error"><Delete sx={{ fontSize: "18px" }} /></Button>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label class="control control--checkbox">
                                        <LazyLoadImage src={img1} width={40} height={40} style={{ borderRadius: "100%", border: '3px solid #bbb' }} />
                                        <div class="control__indicator"></div>
                                    </label>
                                </td>
                                <td>4616</td>
                                <td class="pl-0">
                                    <div class="d-flex align-items-center">
                                        <label class="custom-control ios-switch">
                                            <span class="ios-switch-control-indicator"></span>
                                        </label>
                                        <a href="#">Matthew Wasil</a>
                                    </div>
                                </td>
                                <td>
                                    Graphic Designer
                                    <small class="d-block">Far far away, behind the word mountains</small>
                                </td>
                                <td>+02 020 3994 929</td>
                                <td>London College</td>
                                <td>
                                    <span style={{ display: 'flex' }}>
                                        <Button variant='contained' sx={{ marginRight: "5px" }} color="success"><Edit sx={{ fontSize: "18px" }} /></Button>
                                        <Button variant='contained' sx={{ marginRight: "5px" }} color="error"><Delete sx={{ fontSize: "18px" }} /></Button>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label class="control control--checkbox">
                                        <LazyLoadImage src={img1} width={40} height={40} style={{ borderRadius: "100%", border: '3px solid #bbb' }} />
                                        <div class="control__indicator"></div>
                                    </label>
                                </td>
                                <td>9841</td>
                                <td class="pl-0">
                                    <div class="d-flex align-items-center">
                                        <label class="custom-control ios-switch">
                                            <span class="ios-switch-control-indicator"></span>
                                        </label>
                                        <a href="#">Sampson Murphy</a>
                                    </div>
                                </td>
                                <td>
                                    Mobile Dev
                                    <small class="d-block">Far far away, behind the word mountains</small>
                                </td>
                                <td>+01 352 1125 0192</td>
                                <td>Senior High</td>
                                <td>
                                    <span style={{ display: 'flex' }}>
                                        <Button variant='contained' sx={{ marginRight: "5px" }} color="success"><Edit sx={{ fontSize: "18px" }} /></Button>
                                        <Button variant='contained' sx={{ marginRight: "5px" }} color="error"><Delete sx={{ fontSize: "18px" }} /></Button>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label class="control control--checkbox">
                                        <LazyLoadImage src={img1} width={40} height={40} style={{ borderRadius: "100%", border: '3px solid #bbb' }} />
                                        <div class="control__indicator"></div>
                                    </label>
                                </td>
                                <td>9548</td>
                                <td class="pl-0">
                                    <div class="d-flex align-items-center">
                                        <label class="custom-control ios-switch">
                                            <span class="ios-switch-control-indicator"></span>
                                        </label>
                                        <a href="#">Gaspar Semenov</a>
                                    </div>
                                </td>
                                <td>
                                    Illustrator
                                    <small class="d-block">Far far away, behind the word mountains</small>
                                </td>
                                <td>+92 020 3994 929</td>
                                <td>College</td>
                                <td>
                                    <span style={{ display: 'flex' }}>
                                        <Button variant='contained' sx={{ marginRight: "5px" }} color="success"><Edit sx={{ fontSize: "18px" }} /></Button>
                                        <Button variant='contained' sx={{ marginRight: "5px" }} color="error"><Delete sx={{ fontSize: "18px" }} /></Button>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label class="control control--checkbox">
                                        <LazyLoadImage src={img1} width={40} height={40} style={{ borderRadius: "100%", border: '3px solid #bbb' }} />
                                        <div class="control__indicator"></div>
                                    </label>
                                </td>
                                <td>4616</td>
                                <td class="pl-0">
                                    <div class="d-flex align-items-center">
                                        <label class="custom-control ios-switch">
                                            <span class="ios-switch-control-indicator"></span>
                                        </label>
                                        <a href="#">Matthew Wasil</a>
                                    </div>
                                </td>
                                <td>
                                    Graphic Designer
                                    <small class="d-block">Far far away, behind the word mountains</small>
                                </td>
                                <td>+02 020 3994 929</td>
                                <td>London College</td>
                                <td>
                                    <span style={{ display: 'flex' }}>
                                        <Button variant='contained' sx={{ marginRight: "5px" }} color="success"><Edit sx={{ fontSize: "18px" }} /></Button>
                                        <Button variant='contained' sx={{ marginRight: "5px" }} color="error"><Delete sx={{ fontSize: "18px" }} /></Button>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label class="control control--checkbox">
                                        <LazyLoadImage src={img1} width={40} height={40} style={{ borderRadius: "100%", border: '3px solid #bbb' }} />
                                        <div class="control__indicator"></div>
                                    </label>
                                </td>
                                <td>9841</td>
                                <td class="pl-0">
                                    <div class="d-flex align-items-center">
                                        <label class="custom-control ios-switch">
                                            <span class="ios-switch-control-indicator"></span>
                                        </label>
                                        <a href="#">Sampson Murphy</a>
                                    </div>
                                </td>
                                <td>
                                    Mobile Dev
                                    <small class="d-block">Far far away, behind the word mountains</small>
                                </td>
                                <td>+01 352 1125 0192</td>
                                <td>Senior High</td>
                                <td>
                                    <span style={{ display: 'flex' }}>
                                        <Button variant='contained' sx={{ marginRight: "5px" }} color="success"><Edit sx={{ fontSize: "18px" }} /></Button>
                                        <Button variant='contained' sx={{ marginRight: "5px" }} color="error"><Delete sx={{ fontSize: "18px" }} /></Button>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label class="control control--checkbox">
                                        <LazyLoadImage src={img1} width={40} height={40} style={{ borderRadius: "100%", border: '3px solid #bbb' }} />
                                        <div class="control__indicator"></div>
                                    </label>
                                </td>
                                <td>9548</td>
                                <td class="pl-0">
                                    <div class="d-flex align-items-center">
                                        <label class="custom-control ios-switch">
                                            <span class="ios-switch-control-indicator"></span>
                                        </label>
                                        <a href="#">Gaspar Semenov</a>
                                    </div>
                                </td>
                                <td>
                                    Illustrator
                                    <small class="d-block">Far far away, behind the word mountains</small>
                                </td>
                                <td>+92 020 3994 929</td>
                                <td>College</td>
                                <td>
                                    <span style={{ display: 'flex' }}>
                                        <Button variant='contained' sx={{ marginRight: "5px" }} color="success"><Edit sx={{ fontSize: "18px" }} /></Button>
                                        <Button variant='contained' sx={{ marginRight: "5px" }} color="error"><Delete sx={{ fontSize: "18px" }} /></Button>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </section>
        </div>
    )
}

export default SellInstagram