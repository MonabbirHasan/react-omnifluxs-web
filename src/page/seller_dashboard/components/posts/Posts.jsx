import React from 'react';
import "./posts.css";
import DataTable from 'datatables.net-dt';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Avatar, Button, IconButton } from '@mui/material';
import { Table } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import img1 from "../../../../assets/img/img1.png";
import { Delete, Edit, Margin } from '@mui/icons-material';
const Posts = () => {
    let table = new DataTable('#post_data_table');
    return (
        <>
            <div className='post_page'>
                <div className="container">
                    <div className="post_wrapper">
                        <section className='post_form'>
                            <h3>post form</h3>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Enter Your Post Title!"
                                className="mb-3"
                            >
                                <Form.Control type="email" placeholder="name@example.com" />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Enter Post Tags!"
                                className="mb-3"
                            >
                                <Form.Control type="email" placeholder="name@example.com" />
                            </FloatingLabel>
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Attach Post Thumbnail</Form.Label>
                                <Form.Control type="file" />
                            </Form.Group>
                            <FloatingLabel
                                controlId="floatingTextarea"
                                label="Enter Post Description!"
                                className="mb-3"
                            >
                                <Form.Control style={{ height: "200px" }} as="textarea" placeholder="Leave a comment here" />
                            </FloatingLabel>
                            <Button variant='contained'>Submit</Button>
                        </section>
                        <section className='post_table'>
                            <h3>post data table</h3>
                            <div className="">
                                <Table responsive="sm" id='post_data_table'>
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
                                            <th scope="col">Actions</th>
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
                                                <span style={{display:'flex'}}>
                                                    <Button variant='contained' sx={{marginRight:"5px"}} color="success"><Edit sx={{fontSize:"18px"}}/></Button>
                                                    <Button variant='contained' sx={{marginRight:"5px"}} color="error"><Delete sx={{fontSize:"18px"}}/></Button>
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
                                                <span style={{display:'flex'}}>
                                                    <Button variant='contained' sx={{marginRight:"5px"}} color="success"><Edit sx={{fontSize:"18px"}}/></Button>
                                                    <Button variant='contained' sx={{marginRight:"5px"}} color="error"><Delete sx={{fontSize:"18px"}}/></Button>
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
                                                <span style={{display:'flex'}}>
                                                    <Button variant='contained' sx={{marginRight:"5px"}} color="success"><Edit sx={{fontSize:"18px"}}/></Button>
                                                    <Button variant='contained' sx={{marginRight:"5px"}} color="error"><Delete sx={{fontSize:"18px"}}/></Button>
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
                                                <span style={{display:'flex'}}>
                                                    <Button variant='contained' sx={{marginRight:"5px"}} color="success"><Edit sx={{fontSize:"18px"}}/></Button>
                                                    <Button variant='contained' sx={{marginRight:"5px"}} color="error"><Delete sx={{fontSize:"18px"}}/></Button>
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
                                                <span style={{display:'flex'}}>
                                                    <Button variant='contained' sx={{marginRight:"5px"}} color="success"><Edit sx={{fontSize:"18px"}}/></Button>
                                                    <Button variant='contained' sx={{marginRight:"5px"}} color="error"><Delete sx={{fontSize:"18px"}}/></Button>
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
                                                <span style={{display:'flex'}}>
                                                    <Button variant='contained' sx={{marginRight:"5px"}} color="success"><Edit sx={{fontSize:"18px"}}/></Button>
                                                    <Button variant='contained' sx={{marginRight:"5px"}} color="error"><Delete sx={{fontSize:"18px"}}/></Button>
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
                                                <span style={{display:'flex'}}>
                                                    <Button variant='contained' sx={{marginRight:"5px"}} color="success"><Edit sx={{fontSize:"18px"}}/></Button>
                                                    <Button variant='contained' sx={{marginRight:"5px"}} color="error"><Delete sx={{fontSize:"18px"}}/></Button>
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Posts