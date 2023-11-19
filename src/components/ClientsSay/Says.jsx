import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Star, StarBorder, StarHalf } from '@mui/icons-material';
import PageTitle from '../Page_title/PageTitle'
import "react-multi-carousel/lib/styles.css";
import { RingLoader } from 'react-spinners';
import Carousel from "react-multi-carousel";
import "../../assets/css/media_query.css"

import "./says.css"
import { Alert } from '@mui/material';
const Says = () => {
    let [CLIENT_REVIEW_DATA, setCLIENT_REVIEW_DATA] = useState([]);
    let [Data_Loader, setLoader] = useState(false);

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
    useEffect(() => {
        setLoader(true);
        fetch('http://127.0.0.1:8000/api/access/client_review', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((response) => response.json())
            .then((data) => {
                setLoader(false);
                setCLIENT_REVIEW_DATA(data.data)
                // setImgurl(data.imageUrl)
                // console.log(data.data)
            }).catch((error) => {
                setLoader(false);
                console.error(error);
            });
    }, []);
    return (
        <section className='client_say'>
            <PageTitle title={"What Our Client Say?"} />
            <div className="slide-container">
                {
                    Data_Loader == true ?
                        <>
                            <div style={{
                                justifyContent: "center",
                                display: 'flex',
                                alignItems: "center"
                            }} className="loading">
                                <RingLoader
                                    data-testid="loader"
                                    aria-label="Loading Spinner"
                                    size={150}
                                    color="green"
                                    loading={Data_Loader}
                                />
                            </div>
                        </>
                        :
                        <Carousel
                            responsive={responsive}
                            draggable={true}
                            showDots={true}
                            ssr={true}
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={3000}
                            transitionDuration={500}
                            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}>
                            {
                                CLIENT_REVIEW_DATA.length>0?CLIENT_REVIEW_DATA.map((item) => (
                                    <div className="clients_slider">
                                        <div className="client_item">
                                            <LazyLoadImage
                                                alt={"what our client says"}
                                                width={"100px"}
                                                src={"https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"}
                                            />
                                            {/* client_review_text client_name client_designation client_rating  */}
                                            <p className='client_name'>{item.client_name}</p>
                                            <p className='client_speech'>{item.client_review_text}</p>
                                            <div className='client_rating'>
                                                {
                                                    item.client_rating === 1 ?
                                                        <>
                                                            <span><Star /></span>
                                                            <span><StarBorder /></span>
                                                            <span><StarBorder /></span>
                                                            <span><StarBorder /></span>
                                                            <span><StarBorder /></span>
                                                        </>
                                                        : item.client_rating === "1.5" ?
                                                            <>
                                                                <span><Star /></span>
                                                                <span><StarHalf /></span>
                                                                <span><StarBorder /></span>
                                                                <span><StarBorder /></span>
                                                                <span><StarBorder /></span>
                                                            </> :
                                                            item.client_rating === 2 ?
                                                                <>
                                                                    <span><Star /></span>
                                                                    <span><Star /></span>
                                                                    <span><StarBorder /></span>
                                                                    <span><StarBorder /></span>
                                                                    <span><StarBorder /></span>
                                                                </>
                                                                :
                                                                item.client_rating === 2.5 ?
                                                                    <>
                                                                        <span><Star /></span>
                                                                        <span><Star /></span>
                                                                        <span><StarHalf /></span>
                                                                        <span><StarBorder /></span>
                                                                        <span><StarBorder /></span>
                                                                    </> :
                                                                    item.client_rating === 3 ?
                                                                        <>
                                                                            <span><Star /></span>
                                                                            <span><Star /></span>
                                                                            <span><Star /></span>
                                                                            <span><StarBorder /></span>
                                                                            <span><StarBorder /></span>
                                                                        </> :
                                                                        item.client_rating === 3.5 ?
                                                                            <>
                                                                                <span><Star /></span>
                                                                                <span><Star /></span>
                                                                                <span><Star /></span>
                                                                                <span><StarHalf /></span>
                                                                                <span><StarBorder /></span>
                                                                            </> :
                                                                            item.client_rating === 4 ?
                                                                                <>
                                                                                    <span><Star /></span>
                                                                                    <span><Star /></span>
                                                                                    <span><Star /></span>
                                                                                    <span><Star /></span>
                                                                                    <span><StarBorder /></span>
                                                                                </> :
                                                                                item.client_rating === 4.5 ?
                                                                                    <>
                                                                                        <span><Star /></span>
                                                                                        <span><Star /></span>
                                                                                        <span><Star /></span>
                                                                                        <span><Star /></span>
                                                                                        <span><StarHalf /></span>
                                                                                    </> :
                                                                                    item.client_rating === 5 ?
                                                                                        <>
                                                                                            <span><Star /></span>
                                                                                            <span><Star /></span>
                                                                                            <span><Star /></span>
                                                                                            <span><Star /></span>
                                                                                            <span><Star /></span>
                                                                                        </> :
                                                                                        <>
                                                                                            <span><StarBorder /></span>
                                                                                            <span><StarBorder /></span>
                                                                                            <span><StarBorder /></span>
                                                                                            <span><StarBorder /></span>
                                                                                            <span><StarBorder /></span>
                                                                                        </>

                                                }
                                            </div>
                                        </div>
                                    </div>
                                )):<Alert severity="error" color="success">Data Not Found!</Alert>
                            }
                        </Carousel>
                }
            </div>
        </section>
    )
}

export default Says