import React from 'react';
import "./yt_shop_card.css";
import PageTitle from '../Page_title/PageTitle';
import { Button, IconButton } from '@mui/material';
import { Favorite, FavoriteBorderOutlined, Hearing, PlusOne, ShoppingCart } from '@mui/icons-material';
const YtShopCard = ({ views, category, price, title }) => {
    return (
        <div>
            <div className="package_card">
                <div className='details'>
                    <h6>{views}</h6>
                    <p>{category}</p>
                    <h4 className='price'>{price}$</h4>
                </div>
                <ul>
                    <li>Quality Viewers</li>
                    <li>30 Sec - 5 Min Retention</li>
                    <li>Starts in 24H</li>
                    <li>Refil Guaranteed</li>
                    <li>Secure Payment / 256 bit SSL</li>
                </ul>
                <span className='yt_shop_btn'>
                    <IconButton><ShoppingCart /></IconButton>
                    <IconButton><FavoriteBorderOutlined /></IconButton>
                    <Button variant='contained'>Buy Now</Button>
                </span>
            </div>
        </div>
    )
}

export default YtShopCard