import React, { useRef } from "react";
import { Mail, Person, Phone, Web } from "@mui/icons-material";
import "./weborder.css";
import { Button, Select } from '@mui/material';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
import SignatureCanvas from 'react-signature-canvas';
const WebOrder = () => {

    const signatureCanvasRef = useRef(null);

    const handleSave = () => {
        if (signatureCanvasRef.current.isEmpty()) {
            // Handle the case when the canvas is empty (no signature)
            alert('Please provide a signature before saving.');
        } else {
            // Convert the canvas content to an image
            const canvasDataUrl = signatureCanvasRef.current.toDataURL('image/png');
            // Create a link element to download the image
            const a = document.createElement('a');
            a.href = canvasDataUrl;
            a.download = 'signature.png';
            a.click();
        }
    };
    const website_type = [
        {
            "id": "",
            "name": "E-commerce Websites",
        },
        {
            "id": "",
            "name": "Blogging Websites",
        },
        {
            "id": "",
            "name": "News Websites",
        },
        {
            "id": "",
            "name": "Social Media Websites",
        },
        {
            "id": "",
            "name": "Educational Websites",
        },
        {
            "id": "",
            "name": "Portfolio Websites",
        },
        {
            "id": "",
            "name": "Corporate Websites",
        },
        {
            "id": "",
            "name": "Government Websites",
        },
        {
            "id": "",
            "name": "Nonprofit Websites",
        },
        {
            "id": "",
            "name": "Travel and Tourism Websites",
        },
        {
            "id": "",
            "name": "Entertainment Websites",
        },
        {
            "id": "",
            "name": "Health and Fitness Websites",
        },
        {
            "id": "",
            "name": "Real Estate Websites",
        },
        {
            "id": "",
            "name": "Job Search Websites",
        },
        {
            "id": "",
            "name": "Review and Rating Websites",
        },
        {
            "id": "",
            "name": "Community Forums and Discussion Boards",
        },
        {
            "id": "",
            "name": "Personal Blogs",
        },
        {
            "id": "",
            "name": "Dating Websites",
        },
        {
            "id": "",
            "name": "Recipe and Food Websites",
        },
        {
            "id": "",
            "name": "Technology and Gadgets Websites",
        },
        {
            "id": "",
            "name": "Fashion and Lifestyle Websites",
        },
        {
            "id": "",
            "name": "Gaming Websites",
        },
        {
            "id": "",
            "name": "Sports Websites",
        },
        {
            "id": "",
            "name": "Finance and Investment Websites",
        },
        {
            "id": "",
            "name": "Travel Blogs",
        },
        {
            "id": "",
            "name": "Music Streaming Websites",
        },
        {
            "id": "",
            "name": "Photography Websites",
        },
        {
            "id": "",
            "name": "Art and Design Marketplaces",
        },
        {
            "id": "",
            "name": "Freelance and Gig Platforms",
        },
        {
            "id": "",
            "name": "Auction Websites",
        },
        {
            "id": "",
            "name": "Legal and Law Firm Websites",
        },
        {
            "id": "",
            "name": "Medical and Healthcare Portals",
        },
        {
            "id": "",
            "name": "Government Transparency Websites",
        },
        {
            "id": "",
            "name": "Video Sharing Websites",
        },
        {
            "id": "",
            "name": "Charity and Fundraising Websites",
        },
        {
            "id": "",
            "name": "Tech Support and Troubleshooting Forums",
        },
        {
            "id": "",
            "name": "Weather Forecast Websites",
        },
        {
            "id": "",
            "name": "Environmental and Conservation Websites",
        },
        {
            "id": "",
            "name": "Cryptocurrency and Blockchain Websites",
        },
        {
            "id": "",
            "name": "Language Learning Websites",
        },
        {
            "id": "",
            "name": "Hobby and Interest-Based Forums",
        },
        {
            "id": "",
            "name": "Family and Parenting Blogs",
        },
        {
            "id": "",
            "name": "Agriculture and Farming Websites",
        },
        {
            "id": "",
            "name": "Astronomy and Space Exploration Websites",
        },
        {
            "id": "",
            "name": "Science and Research Journals",
        },
        {
            "id": "",
            "name": "DIY and Home Improvement Websites",
        },
        {
            "id": "",
            "name": "Culinary and Cooking Schools",
        },
        {
            "id": "",
            "name": "Religious and Spiritual Websites",
        },
        {
            "id": "",
            "name": "Hiking and Outdoor Adventure Blogs",
        },
        {
            "id": "",
            "name": "Podcast Websites",
        },
    ]
    const mobile_app_type = [
        { "id": "1", "name": "Social Media Apps" },
        { "id": "2", "name": "Messaging Apps" },
        { "id": "3", "name": "E-commerce and Shopping Apps" },
        { "id": "4", "name": "Entertainment Apps" },
        { "id": "5", "name": "News and Magazine Apps" },
        { "id": "6", "name": "Health and Fitness Apps" },
        { "id": "7", "name": "Travel and Navigation Apps" },
        { "id": "8", "name": "Food and Restaurant Apps" },
        { "id": "9", "name": "Weather Apps" },
        { "id": "10", "name": "Finance and Banking Apps" },
        { "id": "11", "name": "Productivity and Utility Apps" },
        { "id": "12", "name": "Education and Learning Apps" },
        { "id": "13", "name": "Gaming Apps" },
        { "id": "14", "name": "Lifestyle Apps" },
        { "id": "15", "name": "Utilities and Tools Apps" },
        { "id": "16", "name": "Camera and Photo Editing Apps" },
        { "id": "17", "name": "Communication Apps" },
        { "id": "18", "name": "Travel Booking Apps" },
        { "id": "19", "name": "Event and Ticketing Apps" },
        { "id": "20", "name": "Dating Apps" },
        { "id": "21", "name": "Weather Apps" },
        { "id": "22", "name": "Gardening and Home Improvement Apps" },
        { "id": "23", "name": "Parenting Apps" },
        { "id": "24", "name": "Note-Taking Apps" },
        { "id": "25", "name": "Job Search and Career Apps" },
        { "id": "26", "name": "Car and Transportation Apps" },
        { "id": "27", "name": "Security and Antivirus Apps" },
        { "id": "28", "name": "Augmented Reality (AR) and Virtual Reality (VR) Apps" },
        { "id": "29", "name": "Local Services Apps" },
        { "id": "30", "name": "Emergency and Safety Apps" }
    ];
    return (
        <>
            <Header />
            <div className='WebOrder'>
                <div className="container">
                    <div className="web_order_wrapper">

                        <Tabs
                            defaultActiveKey="profile"
                            id="justify-tab-example"
                            className="mb-3"
                            justify
                        >
                            {/* WEBSITE SECTION START HERE */}
                            <Tab eventKey="custom_website" title="Custom Website Solution" className="custom_solution">
                                <div className="website_summary">
                                    <div className="website">
                                        <h6 className="section_name">Website Type Selection</h6>
                                        <Form.Select aria-label="Default select example">
                                            <option>Select Your Website Type</option>
                                            {
                                                website_type.map((items, index) => (
                                                    <option className="option_tags" key={index} value={index}>{items.name}</option>
                                                ))
                                            }
                                        </Form.Select>
                                    </div>
                                    <hr />
                                    <div className="website">
                                        <h6 className="section_name">Responsive Selection</h6>
                                        <Form.Select aria-aria-label="default select example">
                                            <option selected>Responsive</option>
                                            <option value={1}>Yes</option>
                                            <option value={2}>No</option>
                                        </Form.Select>
                                    </div>
                                    <hr />
                                    <div className="website">
                                        <h6 className="section_name">color selection</h6>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text id="basic-addon1">Heading Colors</InputGroup.Text>
                                            <Form.Control type="color" aria-describedby="basic-addon1" />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text id="basic-addon1">Paragraph Colors</InputGroup.Text>
                                            <Form.Control type="color" aria-describedby="basic-addon1" />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text id="basic-addon1">Background Colors</InputGroup.Text>
                                            <Form.Control type="color" aria-describedby="basic-addon1" />
                                        </InputGroup>
                                    </div>
                                    <hr />
                                    <div className="website">
                                        <h6 className="section_name">Logo selection</h6>
                                        <Form.Select aria-label="default select example">
                                            <option selected>Do You Have A Logo?</option>
                                            <option value="1">Yes, I Have Logo</option>
                                            <option value="2">I Don't Have My Website Logo</option>
                                        </Form.Select>
                                    </div>
                                    <hr />
                                    <div className="website">
                                        <h6 className="section_name">Server selection</h6>
                                        <Form.Select aria-label="default select example">
                                            <option selected>Do You Have Server?</option>
                                            <option value="1">I Have Only Domain</option>
                                            <option value="2">I Have Domain & Hosting</option>
                                            <option value="3">I Don't Have Domain & Hosting</option>
                                        </Form.Select>
                                    </div>
                                    <hr />
                                    <div className="website">
                                        <h6 className="section_name">Authontication selection</h6>
                                        <Form.Select aria-label="default select example">
                                            <option selected>Which Auth Service Do You Need?</option>
                                            <option value="1">Face Auth</option>
                                            <option value="2">Password Auth</option>
                                            <option value="3">FingerPrint Auth</option>
                                            <option value="4">Social Media Auth</option>
                                        </Form.Select>
                                    </div>
                                    <hr />
                                    <div className="website">
                                        <h6 className="section_name">Example Website</h6>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text id="basic-addon1"><Web /></InputGroup.Text>
                                            <Form.Control
                                                placeholder="Enter Your Example URL"
                                                type="url"
                                                aria-label="Name"
                                                aria-describedby="basic-addon1"
                                            />
                                        </InputGroup>
                                    </div>
                                    <hr />
                                    <div className="website">
                                        <h6 className="section_name">Front-End Technology</h6>
                                        <Form.Select>
                                            <option selected>Select Your Front-End Technology</option>
                                            <option value="1">HTML & CSS</option>
                                            <option value="2">React.Js</option>
                                            <option value="3">Angular.Js</option>
                                            <option value="4">Vue.Js</option>
                                            <option value="5">Svelte.Js</option>
                                            <option value="6">Blazer</option>
                                            <option value="6">Blazer</option>
                                        </Form.Select>
                                    </div>
                                    <hr />
                                    <div className="website">
                                        <h6 className="section_name">Back-End Technology</h6>
                                        <Form.Select>
                                            <option selected>Select Your Back-End Technology</option>
                                            <option value="1">Ruby & Rails</option>
                                            <option value="2">Python & Django</option>
                                            <option value="3">JavaScript & NodeJs</option>
                                            <option value="4">PHP & Laravel</option>
                                            <option value="5">C# & ASP.Net</option>
                                            <option value="6">Java & Spring</option>
                                        </Form.Select>
                                    </div>
                                    <hr />
                                    <div className="website">
                                        <h6 className="section_name">Select Website Duration</h6>
                                        <Form.Select>
                                            <option value="1">1-3 month</option>
                                            <option value="2">3-6 month</option>
                                            <option value="3">6-12 month</option>
                                            <option value="4">2 month</option>
                                            <option value="5">4 month</option>
                                        </Form.Select>
                                    </div>
                                    <hr />
                                    <div className="website">
                                        <h6 className="section_name">third party solution</h6>
                                        <Form.Select>
                                            <option value="1">wordpress</option>
                                            <option value="1">Joomla</option>
                                            <option value="1">Drupal</option>
                                            <option value="1">Wix</option>
                                            <option value="1">Squarespace</option>
                                            <option value="1">Magento</option>
                                            <option value="1">Weebly</option>
                                            <option value="1">Blogger</option>
                                            <option value="1">BigCommerce</option>
                                            <option value="1">PrestaShop</option>
                                            <option value="1">Ghost</option>
                                        </Form.Select>
                                    </div>
                                    <hr />
                                    <div className="website">
                                        <h6 className="section_name">Which System Do You Need!</h6>
                                        <Form.Select>
                                            <option value="1">Feedback and Support Chat</option>
                                            <option value="1">Chating System</option>
                                        </Form.Select>
                                    </div>
                                    <hr />
                                    <div className="website">
                                        <h6 className="section_name">Website Language</h6>
                                        <Form.Select>
                                            <option value="1">Multi Language</option>
                                            <option value="2">Single Language</option>
                                        </Form.Select>
                                    </div>
                                    <hr />
                                    <div className="website">
                                        <h6 className="section_name">Search Engine Optimization</h6>
                                        <Form.Select>
                                            <option value="1">Yes, I need</option>
                                            <option value="2">no I don't Need</option>
                                        </Form.Select>
                                    </div>
                                </div>
                                <div className="input_box">
                                    <h6 className="section_name">Please Feil The Form!</h6>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1"><Person /></InputGroup.Text>
                                        <Form.Control
                                            placeholder="Your Name"
                                            aria-label="Name"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1"><Mail /></InputGroup.Text>
                                        <Form.Control
                                            placeholder="Your Email"
                                            aria-label="Email"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1"><Phone /></InputGroup.Text>
                                        <Form.Control
                                            placeholder="Your Phone"
                                            aria-label="Phone"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                    <div className="website">
                                        <h6 className="section_name">Now Write Your Requirements Here!</h6>
                                        <div className="form-group">
                                            <textarea name="" className="form-control" id="" cols="30" rows="10"></textarea>
                                        </div>
                                    </div>
                                    <div className="website mt-4">
                                        <h6 className="section_name">Your Agreement!</h6>
                                        <SignatureCanvas
                                            ref={signatureCanvasRef}
                                            penColor='black'
                                            canvasProps={{
                                                width: 500,
                                                height: 200,
                                                className: 'sigCanvas',
                                                autoSave: true,
                                            }}
                                        />
                                    </div>
                                    <Button onClick={handleSave} variant="contained">Submit</Button>
                                </div>
                            </Tab>
                            {/* MOBILE APPS SECTION START HERE */}
                            <Tab eventKey="mobile_app" title="Mobile Apps" className="custom_solution">
                                <div className="website_summary">
                                    <div className="website">
                                        <h6 className="section_name">Mobile Apps Type Selection</h6>
                                        <Form.Select>
                                            {
                                                mobile_app_type.map((items) => (
                                                    <option value={items.id}>{items.name}</option>
                                                ))
                                            }
                                        </Form.Select>
                                    </div>
                                    <div className="website">
                                        <h6 className="section_name">operating system</h6>
                                        <Form.Select>
                                            <option value="1">Only for android</option>
                                            <option value="2">Only for IOS</option>
                                            <option value="3">Hybrid for all mobile device</option>
                                        </Form.Select>
                                    </div>
                                    <div className="website">
                                        <h6 className="section_name">color selection</h6>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text id="basic-addon1">Heading Colors</InputGroup.Text>
                                            <Form.Control type="color" aria-describedby="basic-addon1" />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text id="basic-addon1">Paragraph Colors</InputGroup.Text>
                                            <Form.Control type="color" aria-describedby="basic-addon1" />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text id="basic-addon1">Background Colors</InputGroup.Text>
                                            <Form.Control type="color" aria-describedby="basic-addon1" />
                                        </InputGroup>
                                    </div>
                                    <div className="website">
                                        <h6 className="section_name">Data Back Up & sync</h6>
                                        <Form.Select>
                                            <option value="1">Yes</option>
                                            <option value="2">No</option>
                                        </Form.Select>
                                    </div>
                                    <div className="website">
                                        <h6 className="section_name">Languages</h6>
                                        <Form.Select>
                                            <option value="1">Multi-language</option>
                                            <option value="2">Single Lanugage</option>
                                        </Form.Select>
                                    </div>
                                    <div className="website">
                                        <h6 className="section_name">Third-party Services</h6>
                                        <Form.Select>
                                            <option value="1">social media platforms</option>
                                            <option value="2">payment gateways</option>
                                            <option value="3">data analytics</option>
                                        </Form.Select>
                                    </div>
                                    <div className="website">
                                        <h6 className="section_name">User Feedback and Support</h6>
                                        <Form.Select>
                                            <option value="1">Yes</option>
                                            <option value="2">No</option>
                                        </Form.Select>
                                    </div>
                                    <div className="website">
                                        <h6 className="section_name">Offline Access</h6>
                                        <Form.Select>
                                            <option value="1">Yes</option>
                                            <option value="2">No</option>
                                        </Form.Select>
                                    </div>
                                    <div className="website">
                                        <h6 className="section_name">User Registration and Authentication</h6>
                                        <Form.Select>
                                            <option value="1">Face Authentication</option>
                                            <option value="2">Eye Authentication</option>
                                            <option value="3">Voice Authentication</option>
                                            <option value="4">Finger Authentication</option>
                                            <option value="4">PassWord Authentication</option>
                                        </Form.Select>
                                    </div>
                                    <div className="website">
                                        <h6 className="section_name">Voice Commands and Voice Search</h6>
                                        <Form.Select>
                                            <option value="1">Yes</option>
                                            <option value="2">No</option>
                                        </Form.Select>
                                    </div>
                                    <div className="website">
                                        <h6 className="section_name">Ai Chatbot</h6>
                                        <Form.Select>
                                            <option value="1">Yes</option>
                                            <option value="2">No</option>
                                        </Form.Select>
                                    </div>
                                    <div className="website">
                                        <h6 className="section_name">UI/UX</h6>
                                        <Form.Select>
                                            <option value="1">Yes, I have UI/UX</option>
                                            <option value="2">No, I don't Have UI/UX</option>
                                            <option value="2">No, I Have Example</option>
                                        </Form.Select>
                                    </div>
                                    <div className="website">
                                        <h6 className="section_name">Example URL Here</h6>
                                        <input type="url" className="form-control" />
                                    </div>
                                    <div className="website">
                                        <h6 className="section_name">Search Engine Optimization</h6>
                                        <Form.Select>
                                            <option value="1">Yes, I need</option>
                                            <option value="2">no I don't Need</option>
                                        </Form.Select>
                                    </div>
                                    <div className="website">
                                        <h6 className="section_name">Project Durations</h6>
                                        <Form.Select>
                                            <option value="1">1-2 month</option>
                                            <option value="2">2-3 month</option>
                                            <option value="3">3-4 month</option>
                                            <option value="4">4-5 month</option>
                                            <option value="5">5-6 month</option>
                                            <option value="6">6-7 month</option>
                                            <option value="7">7-8 month</option>
                                            <option value="7">8-9 month</option>
                                            <option value="8">9-10 month</option>
                                            <option value="9">10-11 month</option>
                                            <option value="10">11-12 month</option>
                                        </Form.Select>
                                    </div>
                                    <div className="input_box">
                                        <h6 className="section_name">Please Feil The Form!</h6>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text id="basic-addon1"><Person /></InputGroup.Text>
                                            <Form.Control
                                                placeholder="Your Name"
                                                aria-label="Name"
                                                aria-describedby="basic-addon1"
                                            />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text id="basic-addon1"><Mail /></InputGroup.Text>
                                            <Form.Control
                                                placeholder="Your Email"
                                                aria-label="Email"
                                                aria-describedby="basic-addon1"
                                            />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text id="basic-addon1"><Phone /></InputGroup.Text>
                                            <Form.Control
                                                placeholder="Your Phone"
                                                aria-label="Phone"
                                                aria-describedby="basic-addon1"
                                            />
                                        </InputGroup>
                                        <div className="website">
                                            <h6 className="section_name">Now Write Your Requirements Here!</h6>
                                            <div className="form-group">
                                                <textarea name="" className="form-control" id="" cols="30" rows="10"></textarea>
                                            </div>
                                        </div>
                                        <div className="website mt-4">
                                            <h6 className="section_name">Your Agreement!</h6>
                                            <SignatureCanvas
                                                ref={signatureCanvasRef}
                                                penColor='black'
                                                canvasProps={{
                                                    width: 500,
                                                    height: 200,
                                                    className: 'sigCanvas',
                                                    autoSave: true,
                                                }}
                                            />
                                        </div>
                                        <Button onClick={handleSave} variant="contained">Submit</Button>
                                    </div>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default WebOrder