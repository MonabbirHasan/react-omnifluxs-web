import React, { Component, useEffect, useState } from 'react';
import {
  NavLink,
  useNavigate,
  useParams
} from 'react-router-dom';
import { Favorite, ThumbDown, ThumbDownOffAlt, ThumbUp, ThumbUpOffAlt } from '@mui/icons-material';
import { Alert, Avatar, Button, Divider, Stack, TextField } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Social_Share from "../../components/Social_Share/Share";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { BallTriangle } from 'react-loader-spinner';
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
import Form from 'react-bootstrap/Form';
import "./BlogDetails.css";
const BlogDetails = () => {
  let [ShowHideReplyComBox, setShowHideReplyComBox] = useState(false);
  let [PostDisLike, setPostDisLike] = useState(false);
  let [BlogPostData, setBlogPostData] = useState([]);
  let [DataLoader, setDataLoader] = useState(false);
  let [PostLike, setPostLike] = useState(false);
  let [All_Post, setAll_Post] = useState([]);
  const [value, setValue] = useState(false);
  let [imgurl, setImgurl] = useState("");
  let navigate = useNavigate();
  let { id } = useParams();
  let [blog_post_comments_input, setBlog_post_comment_input] = useState("");
  /*******************************************************
   * GET POST SINGLE DATA FROM API FUNCTION START HERE
   * *****************************************************/
  async function singleData() {
    setDataLoader(true);
    await fetch('http://127.0.0.1:8000/api/access/blog_posts/' + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setDataLoader(false)
        setBlogPostData(data.data)
        console.log(data)
      }).catch((error) => {
        setDataLoader(false)
        console.error(error);
      });
  }
  /*******************************************************
  * USEFFECT WITH FETCH ALL DATA FROM API START HERE
  * *****************************************************/
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/access/blog_posts', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setAll_Post(data.data)
        setImgurl(data.image_path)
        console.log(data)
      }).catch((error) => {
        console.error(error);
      });
    singleData()
  }, [id])
  /*******************************************************
  * CREATE URL SLUG USING BLOG POST TITLE START HERE
  * *****************************************************/
  function createSlug(inputString) {
    // Convert to lowercase and replace spaces with hyphens
    const slug = inputString.toLowerCase().replace(/\s+/g, '-');
    // Remove special characters and symbols
    const cleanedSlug = slug.replace(/[^a-zA-Z0-9-]/g, '');
    // Remove leading and trailing hyphens
    const finalSlug = cleanedSlug.replace(/^-+|-+$/g, '');
    return finalSlug;
  }
  /******************************************************************************
  * SHOW SHARE MODAL OR SHOW FROM PARENT TO CHILD COMPONENT START HERE
  * *****************************************************************************/
  const setValueFromChild = (newValue) => {
    setValue(newValue);
  };
    /******************************************************************************
  * BLOG POST COMMENT FUNCTION START HERE
  * *****************************************************************************/
const handleComment=()=>{
  alert("")
}

  return (
    <>
      <Header />
      <div className='BlogDetailsPage'>
        <div className="container">
          <div className="blog_details_wrapper">
            <div className="row">
              <div className="col-md-8">
                <div className="blog_left">
                  {
                    DataLoader == true ?
                      <>
                        <div style={{
                          justifyContent: "center",
                          display: 'flex',
                          alignItems: "center"
                        }} className="loading">
                          <BallTriangle
                            height={100}
                            width={100}
                            radius={5}
                            color="#2196f3"
                            ariaLabel="ball-triangle-loading"
                            wrapperClass={{}}
                            wrapperStyle=""
                            visible={DataLoader}
                          />
                        </div>
                      </> :
                      <section>
                        <div className="blog_thumbnail">
                          <LazyLoadImage src={imgurl + "/" + BlogPostData.blog_post_thumbnail} />
                        </div>
                        <div className="blog_author">
                          <LazyLoadImage src={imgurl + "/" + BlogPostData.blog_post_thumbnail} className='author_img' />
                          <span>Iverson</span>
                        </div>
                        <div className="blog_content">
                          <h3 className='blog_title'>{BlogPostData.blog_post_title}</h3>
                          <p>{BlogPostData.blog_post_description}</p>
                        </div>
                      </section>
                  }
                  {/**************************************
                   COMMENT SECTION STYLE START HERE
                  ***************************************/}
                  <Divider />
                  <section className='comments_section'>
                    <div className="comment_box">
                      <FloatingLabel
                        controlId="floatingTextarea"
                        label="Add a Comments"
                        className="mb-3"
                      >
                        <Form.Control as="textarea" placeholder="Leave a comment here" />
                      </FloatingLabel>
                      <Button fullWidth variant='outlined'>Post</Button>
                    </div>
                    <div className="comment_list_area">
                      <Divider variant="middle" />
                      {/******************************
                       * COMMENT ITEMS START HERE
                       * *****************************/}
                      <div className="comments_items">
                        <div className="comment_author">
                          <Stack direction="row" spacing={2}>
                            {/* <Avatar sizes='30px'>OM</Avatar> */}
                            <Avatar sx={{ width: 50, height: 50 }} alt="Remy Sharp" src={imgurl + "/" + BlogPostData.blog_post_thumbnail} />
                          </Stack>
                        </div>
                        <div className="comment_content">
                          <p>
                            <span className='comment_author_name'>Mark Hamilton||</span>
                            <span style={{ fontSize: '12px', fontWeight: 'normal', marginLeft: "5px" }}>1h</span>
                          </p>
                          <p className='comment_description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Nihil suscipit, accusamus pariatur fuga quae porro nemo itaque omnis reprehenderit.
                            Porro qui harum in quasi et minus sapiente debitis odio, dolorem,
                            assumenda laudantium nemo quod libero rerum ullam nisi inventore,
                            unde voluptatibus ducimus tempora? Adipisci sed perferendis ea quos nobis incidunt.
                          </p>
                          <div className="comment_reation">
                            <span style={{ cursor: "pointer" }} onClick={() => ShowHideReplyComBox == false ? setShowHideReplyComBox(true) : setShowHideReplyComBox(false)}>reply</span>
                            <span style={{ cursor: "pointer" }} onClick={() => setValue(true)}>Share</span>
                            <span><sup>.</sup></span>
                            <span>100 likes</span>
                            <span style={{ cursor: "pointer" }} onClick={() => {
                              PostLike == false ? setPostLike(true) || setPostDisLike(false) : setPostLike(false)
                            }}>
                              {PostLike == true ? <ThumbUp /> : <ThumbUpOffAlt />}
                            </span>
                            <span style={{ cursor: "pointer" }} onClick={() => {
                              PostDisLike == false ? setPostDisLike(true) || setPostLike(false) : setPostDisLike(false)
                            }}>
                              {PostDisLike == false ? <ThumbDownOffAlt /> : <ThumbDown />}
                            </span>
                            {/****************************************
                            * REPLY COMMENT SECTION START HERE
                            * ***************************************/}
                            {
                              ShowHideReplyComBox == true ?
                                <div className="reply_com_box">
                                  <TextField 
                                  value={blog_post_comments_input} 
                                  onChange={(e) => setBlog_post_comment_input(e.target.value)} 
                                  fullWidth 
                                  id="filled-basic"
                                  label="Write Your Comment"
                                  variant="filled" />
                                  <br />
                                  <Button 
                                  onClick={()=>handleComment(BlogPostData.id,)} 
                                  sx={{ marginTop: "2px" }} 
                                  fullWidth 
                                  variant='contained'>send</Button>
                                </div>
                                :
                                ""
                            }
                          </div>
                        </div>
                      </div>
                      {/******************************
                      * COMMENT ITEMS END HERE
                      * *****************************/}
                    </div>
                  </section>

                  <Social_Share setValueFromChild={setValueFromChild} showModals={value} />
                  {/**************************************
                  COMMENT SECTION STYLE END HERE
                  ***************************************/}
                </div>
              </div>
              {/*************************************************
              * RECENT BLOG RIGHT SIDEBAR START HERE
              ***************************************************/}
              <div className="col-md-4">
                <div className="blog_right">
                  <div className="single_blog_sidebar_title">
                    <h3>recent blogs</h3>
                  </div>
                  {
                    All_Post.length > 0 ? All_Post.reverse().slice(10, -2).map((items) => (
                      <div className="blog_item" key={items.id}>
                        <LazyLoadImage src={imgurl + "/" + items.blog_post_thumbnail} />
                        <div className="info">
                          <h6>
                            <NavLink to={"/blog-details/" + items.id + "&" + createSlug(items.blog_post_title)}>{items.blog_post_title.slice(0, 50)}</NavLink>
                          </h6>
                          <p>{items.blog_post_description.slice(0, 80)}</p>
                        </div>
                      </div>
                    )) : <Alert severity='error' color='success'>Data Not Found!</Alert>
                  }
                </div>
              </div>
              {/*************************************************
              * RECENT BLOG RIGHT SIDEBAR END HERE
              ***************************************************/}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}


export default BlogDetails