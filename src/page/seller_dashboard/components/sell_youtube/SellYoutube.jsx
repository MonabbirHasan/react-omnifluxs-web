import React, { useState, useTransition } from 'react';
import "./sellyoutube.css";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { InputGroup, Table } from 'react-bootstrap';
import FormTitle from '../form_title/FormTitle';
import { Button, IconButton, Switch } from '@mui/material';
import { Delete, Edit, FindInPage } from '@mui/icons-material';
import DataTable from 'datatables.net-dt';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import img1 from "../../../../assets/img/img1.png";
const SellYoutube = () => {
    let table = new DataTable('#youtube_channel_info_table');
    // FORM DATA HANDLE HERE
    const [listingID, setListingID] = useState('');
    let [listingid, setListingid] = useState('');
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [subscriber, setSubscriber] = useState('');
    let [creationdate, setCreationdate] = useState('');
    let [channel_link, setChannel_link] = useState('');
    let [channel_price, setChannel_price] = useState('');
    let [real_time_views, setReal_time_views] = useState('');
    let [last28_days_views, setLast28_days_views] = useState('');
    let [life_time_views, setLife_time_views] = useState('');
    let [last28_days_revenue, setLast28_days_revenue] = useState('');
    let [life_time_revenue, setLife_time_revenue] = useState('');
    let [copyright_strike, setCopyright_strike] = useState('');
    let [community_strike, setCommunity_strike] = useState('');
    let [monetized, setMonetized] = useState('');
    let [channel_category, setChannel_category] = useState('');
    let [channel_language, setChannel_language] = useState('');
    let [channel_type, setChannel_type] = useState('');
    let [channel_content_type, setChannel_content_type] = useState('');
    let [channel_audience_age, setChannel_audience_age] = useState('');
    // FORM DATA HANDLE HERE
    const generateRandomID = () => {
        const prefix = 'OFRY';
        const randomID = Math.floor(Math.random() * 1000000); // Generate a random number between 0 and 999999
        const formattedID = `${prefix}${randomID.toString().padStart(6, '0')}`; // Add prefix and pad with zeros
        setListingID(formattedID);
    };
    function save_channel() {
        let youtube_channel_input_data = {
            channel_id: listingID,
            channel_name: name,
            channel_email: email,
            email_password: password,
            channel_subscriber: subscriber,
            channel_creation_date: creationdate,
            channel_link: channel_link,
            channel_realtime_views: real_time_views,
            channel_last28_days_views: last28_days_views,
            channel_lifetime_views: life_time_views,
            channel_price: channel_price,
            channel_copyright_strike: copyright_strike,
            channel_community_strike: community_strike,
            channel_monetized: monetized,
            channel_category: channel_category,
            channel_language: channel_language,
            channel_type: channel_type,
            channel_content_type: channel_content_type,
            channel_audience_age: channel_audience_age
        }
    }
    return (
        <>
            <div className='sellyoutube_page'>
                <section className="selling_info_form">
                    <div className="form_wrapper">
                        <FormTitle
                            text={"upload new channel"}
                            color={"black"}
                            size={"20px"}
                            textstyle={"capitalize"}
                            fontFamily={"fantasy"}
                            letterspacing={"1px"}
                            pt={"20px"}
                            pl={"5px"}
                            pb={"0"}
                            pr={"0"}
                        />
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Listing Id"
                                aria-label="Listing"
                                aria-describedby="basic-addon1"
                                type='text'
                                value={listingID}
                                readOnly
                            />
                            <p className='mt-3'><Button onClick={() => generateRandomID()} variant='contained'>Generate</Button></p>
                        </InputGroup>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Enter Channal Name"
                            className="mb-3"
                        >
                            <Form.Control value={name} onChange={(e) => setName(e.target.value)} type="text" name='name' required />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Enter Channal Email"
                            className="mb-3"
                        >
                            <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" required />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Enter Gmail Password"
                            className="mb-3"
                        >
                            <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="text" name='password' required />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Subscribers"
                            className="mb-3"
                        >
                            <Form.Control value={subscriber} onChange={(e) => setSubscriber(e.target.value)} type="text" name='subscriber' />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Creation Date"
                            className="mb-3"
                        >
                            <Form.Control value={creationdate} onChange={(e) => setCreationdate(e.target.value)} type="datetime-local" name='date' />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Channel Link"
                            className="mb-3"
                        >
                            <Form.Control value={channel_link} onChange={(e) => setChannel_link(e.target.value)} type="url" name='url' />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Real-time Views"
                            className="mb-3"
                        >
                            <Form.Control value={real_time_views} onChange={(e) => setReal_time_views(e.target.value)} type="text" name='views' />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Views(Last 28 Days)"
                            className="mb-3"
                        >
                            <Form.Control value={last28_days_views} onChange={(e) => setLast28_days_views(e.target.value)} type="text" name='views' />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Life Time Views"
                            className="mb-3"
                        >
                            <Form.Control value={life_time_views} onChange={(e) => setLife_time_views(e.target.value)} type="text" name='views' />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Revenue(Last 28 Days)"
                            className="mb-3"
                        >
                            <Form.Control value={last28_days_revenue} onChange={(e) => setLast28_days_revenue(e.target.value)} type="text" name='revenue' />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Life Time Revenue"
                            className="mb-3"
                        >
                            <Form.Control value={life_time_revenue} onChange={(e) => setLife_time_revenue(e.target.value)} type="text" name='revenue' />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Channel Price"
                            className="mb-3"
                        >
                            <Form.Control value={channel_price} onChange={(e) => setChannel_price(e.target.value)} type="text" name='price' />
                        </FloatingLabel>
                        <Form.Select value={copyright_strike} onChange={(e) => setCopyright_strike(e.target.value)} aria-label="Default select example">
                            <option>Copyright Strike</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                        <Form.Select value={community_strike} onChange={(e) => setCommunity_strike(e.target.value)} aria-label="Default select example">
                            <option>Community Strike</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                        <Form.Select value={monetized} onChange={(e) => setMonetized(e.target.value)} aria-label="Default select example">
                            <option>Monetized</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                        <Form.Select value={channel_category} onChange={(e) => setChannel_category(e.target.value)} aria-label="Default select example">
                            <option>select Category</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                        <Form.Select value={channel_language} onChange={(e) => setChannel_language(e.target.value)} aria-label="Default select example">
                            <option>select Language</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                        <Form.Select value={channel_type} onChange={(e) => setChannel_type(e.target.value)} aria-label="Default select example">
                            <option>select Channel Type</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                        <Form.Select value={channel_content_type} onChange={(e) => setChannel_content_type(e.target.value)} aria-label="Default select example">
                            <option>select Content Type</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                        <Form.Select value={channel_audience_age} onChange={(e) => setChannel_audience_age(e.target.value)} aria-label="Default select example">
                            <option>select Audience Age(Most)</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                        <Button onClick={() => save_channel()} variant='contained'>save</Button>
                    </div>
                </section>
                <section className='selling-info_table'>
                    <div className="selling_info_table_wrapper">
                        <FormTitle
                            text={"channel data table"}
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
                        <Table responsive="sm" id='youtube_channel_info_table'>
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
        </>
    )
}

export default SellYoutube