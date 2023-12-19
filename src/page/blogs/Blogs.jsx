import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PageTitle from "../../components/Page_title/PageTitle";
import BlogCard from "../../components/blog_card/BlogCard";
import blogbanner from "../../assets/img/blog-banner.jpg";
import Pagination from "react-bootstrap/Pagination";
import { Alert, Button, TextField } from "@mui/material";
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
import {
  ArrowCircleLeftRounded,
  ArrowCircleRightRounded,
  Search,
} from "@mui/icons-material";
import "./blogs.css";
const Blogs = () => {
  let [post_search_input, setPost_search_input] = useState(null);
  /************************************
   * FILTER DATA OR SEARCH FIND POST
   *************************************/
  const HandleSearch = () => {};

  return (
    <>
      <Header />
      <div className="blogPage">
        <div className="blog_banner">
          <LazyLoadImage alt={"daily update"} src={blogbanner} />
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
              <span onClick={HandleSearch}>
                <Search />
              </span>
            </div>
          </div>
          <div className="blog_wrapper">
            {Array.from({ length: 20 }, (x) => {
              return (
                <BlogCard
                  key={1}
                  id={1}
                  date={"10.02.2023"}
                  thumbnnail="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  title={"we sell largest youtube channel on this website"}
                  category={"youtube"}
                  description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa autem neque quisquam, quos quia similique?"
                />
              );
            })}
          </div>
        </div>
        {/***************************************
         *   PAGINATION SECTION START HERE
         ***************************************/}
        <section className="pagination">
          <Pagination>
            <Button
              variant="contained"
              startIcon={<ArrowCircleLeftRounded />}
            />
            <Pagination.Item>{30 * 3.3}</Pagination.Item>
            <Button variant="contained">
              <ArrowCircleRightRounded />
            </Button>
          </Pagination>
        </section>
        {/***************************************
         *   PAGINATION SECTION END HERE
         ***************************************/}
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
