import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PageTitle from "../../components/Page_title/PageTitle";
import BlogCard from "../../components/blog_card/BlogCard";
import blogbanner from "../../assets/img/blog-banner.jpg";
import Pagination from 'react-bootstrap/Pagination';
import { Alert, Button, TextField } from '@mui/material';
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
import { ArrowCircleLeftRounded,ArrowCircleRightRounded,ArrowRightRounded,Search } from '@mui/icons-material';
import { RingLoader } from 'react-spinners';
import "./blogs.css";
import { ArrowLeftIcon } from '@mui/x-date-pickers';
const Blogs = () => {
    let [post_search_input, setPost_search_input] = useState(null);
    let [FilterdPostData, setFilteredPostData] = useState([null]);
    let [BlogPostData, setBlogPostData] = useState([]);
    let [Data_Loader, setLoader] = useState(false);
    let [imgurl, setImgurl] = useState("");
    useEffect(() => {
        setLoader(true);
        fetch('http://127.0.0.1:8000/api/access/blog_posts', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((response) => response.json())
            .then((data) => {
                setLoader(false);
                setImgurl(data.image_path)
                localStorage.setItem("blog_post_img_url", JSON.stringify(data.image_path))
                setBlogPostData(data.data);
                console.log(data)
            }).catch((error) => {
                console.error(error);
                setLoader(false);
            });
    }, []);
    /**********************************************************************
     * BINARY SEARCH ALGORITEM IN JAVASCRIPT FOR SEARCH FIND POST
     **********************************************************************/
    function binarySearchByTitle(data, targetTitle) {
        let left = 0;
        let right = data.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const post = data[mid];

            if (post.blog_post_title === targetTitle) {
                return mid; // Target title found, return its index
            } else if (post.blog_post_title < targetTitle) {
                left = mid + 1; // Adjust the left bound
            } else {
                right = mid - 1; // Adjust the right bound
            }
        }

        return -1; // Target title not found in the data
    }

    const targetTitle = post_search_input;
    console.log(post_search_input)
    const result = binarySearchByTitle(BlogPostData, targetTitle);
    if (result !== -1) {
        console.log(`Post with title "${targetTitle}" found at index ${result}.`);
    } else {
        console.log(`Post with title "${targetTitle}" not found.`);
    }
    /************************************
    * FILTER DATA OR SEARCH FIND POST
    *************************************/
    const HandleSearch = () => {
        const searchQuery = post_search_input;
        var filtered_data = BlogPostData.filter((post) =>
            post.blog_post_title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        // console.log(filtered_data)
        setFilteredPostData(filtered_data)
    };

    /****************************
     * PAGINATION START HERE
     * ****************************/
    let [prev,setPrev]=useState(0)
    let [next,setNex]=useState(1)

    return (
        <>
            <Header />
            <div className='blogPage'>
                <div className="blog_banner">
                    <LazyLoadImage
                        alt={"daily update"}
                        src={blogbanner}
                    />
                </div>
                <div className="container">
                    <div className="blog_page_title">
                        <PageTitle title={"Our daily update"} />
                        <div className="blog_search_box">
                            <div>
                                <TextField
                                    id="outlined-basic"
                                    label="search psot"
                                    variant="filled"
                                    onChange={(e) => setPost_search_input(e.target.value)}
                                />
                            </div>
                            <span onClick={HandleSearch}><Search /></span>
                        </div>
                    </div>

                    <div className="blog_wrapper">
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
                                FilterdPostData == null ? FilterdPostData.length > 0 ? (FilterdPostData).reverse().slice(0, -5).map((item) => (
                                    <>
                                        <BlogCard
                                            key={item.id}
                                            id={item.id}
                                            imgurlPath={JSON.parse(localStorage.getItem("blog_post_img_url"))}
                                            date={item.blog_post_publish_at}
                                            thumbnnail={imgurl + "/" + item.blog_post_thumbnail}
                                            title={item.blog_post_title}
                                            category={item.blog_post_category}
                                            description={item.blog_post_description}
                                        />
                                    </>
                                )) : <Alert severity='error' color='success'>Data Not Found!</Alert>
                                    : BlogPostData.length > 0 ? (BlogPostData).reverse().slice(0, -5).map((item) => (
                                        <>
                                            <BlogCard
                                                key={item.id}
                                                id={item.id}
                                                imgurlPath={JSON.parse(localStorage.getItem("blog_post_img_url"))}
                                                date={item.blog_post_publish_at}
                                                thumbnnail={imgurl + "/" + item.blog_post_thumbnail}
                                                title={item.blog_post_title}
                                                category={item.blog_post_category}
                                                description={item.blog_post_description}
                                            />
                                        </>
                                    )) : <Alert severity='error' color='success'>Data Not Found!</Alert>
                        }
                    </div>
                </div>
                {/***************************************
                *   PAGINATION SECTION START HERE
                ***************************************/}
                <section className='pagination'>
                    <Pagination>
                    <Button variant='contained' startIcon={<ArrowCircleLeftRounded/>}/>
                        <Pagination.Item>{30*3.3}</Pagination.Item>
                        <Button variant='contained'><ArrowCircleRightRounded/></Button>
                    </Pagination>
                </section>
                 {/***************************************
                *   PAGINATION SECTION END HERE
                ***************************************/}
            </div>
            <Footer />
        </>
    )
}

export default Blogs