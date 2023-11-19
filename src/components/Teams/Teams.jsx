import React, { useState, useEffect } from 'react';
import { Email, Facebook, Instagram } from '@mui/icons-material';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PageTitle from '../Page_title/PageTitle'
import "react-multi-carousel/lib/styles.css";
import { RingLoader } from 'react-spinners';
import Carousel from "react-multi-carousel";
import "../../assets/css/media_query.css"
import { Alert } from '@mui/material';
import "./teams.css"

const Teams = () => {
    let [TEAM_MEMBER_DATA, setTEAM_MEMBER_DATA] = useState([]);
    let [imgurlPath, setImgurl] = useState('');
    let [Data_Loader, setLoader] = useState(false);
    useEffect(() => {
        setLoader(true);
        fetch('http://127.0.0.1:8000/api/access/team_member', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((response) => response.json())
            .then((data) => {
                setLoader(false);
                setTEAM_MEMBER_DATA(data.data)
                setImgurl(data.imageUrl)
                // console.log(data.data)
            }).catch((error) => {
                setLoader(false);
                console.error(error);
            });
    }, []);



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
    function facebook(url) { window.open(url) }
    function instagram(url) { window.open(url) }
    function twitter(url) { window.open(url) }
    return (
        <section className='teams'>
            <PageTitle title={"our dedicated teams"} />
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
                            TEAM_MEMBER_DATA.length>0?TEAM_MEMBER_DATA.map((item) => (
                                <div className="teams_wrapper" key={item.id}>
                                    <div className="teams_item">
                                        <LazyLoadImage
                                            alt={"our teams"}
                                            src={imgurlPath + "/" + item.team_member_profile_image}
                                        />
                                        <p className='team_name'>{item.team_member_first_name}</p>
                                        <p className='team_designation'>{item.team_member_department}</p>
                                        <div className="team_social" hidden>
                                            <span onClick={() => facebook(item.team_member_social_url.split(",")[0])}><Facebook /></span>
                                            <span onClick={() => instagram(item.item.team_member_social_url.split(",")[1])}><Instagram /></span>
                                            <span onClick={() => twitter(item.item.item.team_member_social_url.split(",")[1])}><Email /></span>
                                        </div>
                                    </div>
                                </div>
                            )):<Alert severity="error" color="success">Data Not Found!</Alert>
                        }
                    </Carousel>
            }
        </section>
    )
}

export default Teams