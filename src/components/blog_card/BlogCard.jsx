import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { NavLink, useNavigate } from 'react-router-dom';
import "./blog_card.css";
const BlogCard = ({ date, category, title, description, thumbnnail, id }) => {
  var navigate = useNavigate();
  function createSlug(inputString) {
    // Convert to lowercase and replace spaces with hyphens
    const slug = inputString.toLowerCase().replace(/\s+/g, '-');
    // Remove special characters and symbols
    const cleanedSlug = slug.replace(/[^a-zA-Z0-9-]/g, '');
    // Remove leading and trailing hyphens
    const finalSlug = cleanedSlug.replace(/^-+|-+$/g, '');
    return finalSlug;
  }

  return (
    <div className='blog_cards'>
      <div className="blog_card_wrapper">
        <div className="blog_card_item">
          <div className="blog_post_thumbnail">
            <LazyLoadImage src={thumbnnail} />
          </div>
          <div className="blog_post_content">
            <div className="author_info">
              <div className='author_name'>
                <LazyLoadImage src={thumbnnail} />
                <p>Jhone Doe</p>
              </div>
              <div className='blog_post_category'>
                <span className='badge badge-success'>{"youtube"}</span>
              </div>
            </div>
            <div className="blog_post_details">
              <NavLink to={"/blog-details/" + id + "&" + createSlug(title)}>{title.slice(0, 50)}</NavLink>
              <p>{description.slice(0, 120)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard