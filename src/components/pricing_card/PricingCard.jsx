import React from 'react'
import "./pricingCard.css";
import { Button, IconButton } from '@mui/material';
import { CheckCircleOutline } from '@mui/icons-material';
const PricingCard = ({price,package_name,}) => {
    return (
        <div className='pricingCard'>
            <div className="pricing_card">
                <div className="packege_name">
                    <h3>{package_name}</h3>
                    <h4 className='price'>${price}/ <span>month</span></h4>
                </div>
                <hr />
                <div className="package_info_list">
                    <span>
                        <IconButton><CheckCircleOutline /></IconButton>
                        <p style={{ margin: '0', display: 'inline-block' }}>content upload</p>
                    </span>
                    <span>
                        <IconButton><CheckCircleOutline /></IconButton>
                        <p style={{ margin: '0', display: 'inline-block' }}>Responsive Design</p>
                    </span>
                    <span>
                        <IconButton><CheckCircleOutline /></IconButton>
                        <p style={{ margin: '0', display: 'inline-block' }}>Design Customization</p>
                    </span>
                    <span>
                        <IconButton><CheckCircleOutline /></IconButton>
                        <p style={{ margin: '0', display: 'inline-block' }}>E-Commerce Functionality</p>
                    </span>
                    <span>
                        <IconButton><CheckCircleOutline /></IconButton>
                        <p style={{ margin: '0', display: 'inline-block' }}>Number of Pages</p>
                    </span>
                    <span>
                        <IconButton><CheckCircleOutline /></IconButton>
                        <p style={{ margin: '0', display: 'inline-block' }}>Plugins/Extensions Installation</p>
                    </span>
                    <span>
                        <IconButton><CheckCircleOutline /></IconButton>
                        <p style={{ margin: '0', display: 'inline-block' }}>Number of Products</p>
                    </span>
                    <span>
                        <IconButton><CheckCircleOutline /></IconButton>
                        <p style={{ margin: '0', display: 'inline-block' }}>Revisions</p>
                    </span>
                    <span>
                        <IconButton><CheckCircleOutline /></IconButton>
                        <p style={{ margin: '0', display: 'inline-block' }}>Delivery Time</p>
                    </span>
                    <span>
                        <IconButton><CheckCircleOutline /></IconButton>
                        <p style={{ margin: '0', display: 'inline-block' }}>social media integration</p>
                    </span>
                    <span>
                        <IconButton><CheckCircleOutline /></IconButton>
                        <p style={{ margin: '0', display: 'inline-block' }}>life-time support</p>
                    </span>
                </div>
                <div className="puches_btn">
                    <Button variant='contained'>Purchase</Button>
                </div>
            </div>
        </div>
    )
}

export default PricingCard