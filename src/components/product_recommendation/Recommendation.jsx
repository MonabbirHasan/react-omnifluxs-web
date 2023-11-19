import React, { useState, useEffect } from 'react';
import PageTitle from "../../components/Page_title/PageTitle";
import Cards from "../../components/product-card/Cards"
import { RingLoader } from 'react-spinners';
import "./recommendation.css";

const Recommendation = () => {
    let [YOUTUBE_CHANNEL_DATA, setYOUTUBE_CHANNEL_DATA] = useState([]);
    let [Data_Loader, setLoader] = useState(false);
    let [imgurl, setImgurl] = useState("");
    useEffect(() => {
        setLoader(true);
        fetch('http://127.0.0.1:8000/api/access/youtube_channel', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((response) => response.json())
            .then((data) => {
                setLoader(false);
                setImgurl(data.imageUrl)
                setYOUTUBE_CHANNEL_DATA(data.data);
            }).catch((error) => {
                console.error(error);
                setLoader(false);
            });

    }, []);
    return (
        <div className='Recommendation'>
            <div className="Recommendation_title">
                <PageTitle title="Recommended for you" />
            </div>
            <div className="row">
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
                        : YOUTUBE_CHANNEL_DATA.slice(0, 8).map((item) => (
                            <div className="col-md-3 col-sm-1 col-lg-3">
                                <Cards
                                    id={item.id}
                                    key={item.id}
                                    thumbnail={"http://localhost:5173/src/assets/img/img7.jpg"}
                                    imgurlPath={imgurl}
                                    SlideUrl={item.channel_gallery.split(", ")}
                                    old_price={item.channel_old_price}
                                    new_price={item.channel_price}
                                    badges={item.channel_badge}
                                    pr_view={item.channel_like}
                                    upload_time={item.channel_upload_date}
                                    title={item.channel_title}
                                    listing_id={item.channel_listing_id}
                                    description={item.channel_description}
                                    monitization={item.channel_monetized}
                                    subscriber={item.channel_subscriber}
                                    language={item.channel_language}
                                    channel_category={item.channel_category}
                                />
                            </div>
                        ))
                }
            </div>
        </div>
    )
}

export default Recommendation