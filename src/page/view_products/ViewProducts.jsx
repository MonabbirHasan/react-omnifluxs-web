import React, { useState } from 'react'
import "./product.css"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PageTitle from '../../components/Page_title/PageTitle';
import { YOUTUBE_DATA } from '../../utils/static/youtubeData';
import Cards from "../../components/product-card/Cards";
import Pagination from 'react-bootstrap/Pagination';
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Search} from '@mui/icons-material';
import { Button } from 'react-bootstrap';
import social_banner from "../../assets/img/socialmedia-banner.jpg";
const ViewProducts = () => {
  let [ActivePag, setActivePage] = useState("")
  const paginationHanlder = (PageNumber) => {
    setActivePage(PageNumber)
  }
  return (
    <>
      <Header />
      <div className='view_product_page'>
        <div className="view_all_product_banner">
          <LazyLoadImage src={social_banner} />
        </div>
        <div className="container">
          <div className="view_all_product_wrapper">
            <div className="filter_section">
              <div className="filter_wrapper">
                <InputGroup className="mb-3">
                  <Form.Control placeholder='Enter Channel Name!' aria-label="Text input with dropdown button" />
                  <Form.Control placeholder='Enter Price' aria-label="Text input with dropdown button" />
                  <DropdownButton
                    variant="outline-secondary"
                    title="Subscriber"
                    id="input-group-dropdown-1"
                  >
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                  </DropdownButton>
                  <DropdownButton
                    variant="outline-secondary"
                    title="verified"
                    id="input-group-dropdown-1"
                  >
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                  </DropdownButton>
                  <DropdownButton
                    variant="outline-secondary"
                    title="monetized"
                    id="input-group-dropdown-1"
                  >
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                  </DropdownButton>
                  <DropdownButton
                    variant="outline-secondary"
                    title="category"
                    id="input-group-dropdown-1"
                  >
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                  </DropdownButton>
                  <Button className='search-btn'><Search /></Button>
                </InputGroup>
              </div>
            </div>
            <div className="product_category_title">
              <PageTitle FontSize="1.5rem" StrokeWidth={"1px"} title={"youtube channels"} />
            </div>
            <div className="row">
              {
                YOUTUBE_DATA.map((item) => (
                  <div className="col-md-3 col-sm-1 col-lg-3">
                    <Cards
                      id={item.id}
                      key={item.id}
                      thumbnail={item.channel_thumbnail}
                      SlideUrl={item.channel_gallery}
                      old_price={item.channel_old_price}
                      new_price={item.channel_price}
                      badges={item.channel_badge}
                      pr_view={item.product_view}
                      upload_time={item.channel_upload_time}
                      title={item.channel_title}
                      listing_id={item.listing_id}
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
            {/*  twitter accounts section start here */}
            <div className="twitter_container">
              <div className="product_category_title">
                <PageTitle FontSize="1.5rem" StrokeWidth={"1px"} title={"twitter group"} />
              </div>
              <div className="row">
                {
                  YOUTUBE_DATA.slice(0,4).map((item) => (
                    <div className="col-md-3 col-sm-1 col-lg-3">
                      <Cards
                        key={item.id}
                        thumbnail={item.channel_thumbnail}
                        SlideUrl={item.channel_gallery}
                        old_price={item.channel_old_price}
                        new_price={item.channel_price}
                        badges={item.channel_badge}
                        pr_view={item.product_view}
                        upload_time={item.channel_upload_time}
                        title={item.channel_title}
                        listing_id={item.listing_id}
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
            {/*  twitter accounts section end here */}
            {/*  facebook accounts section start here */}
            <div className="facebook_container">
              <div className="product_category_title">
                <PageTitle FontSize="1.5rem" StrokeWidth={"1px"} title={"facebook page"} />
              </div>
              <div className="row">
                {
                  YOUTUBE_DATA.slice(0,4).map((item) => (
                    <div className="col-md-3 col-sm-1 col-lg-3">
                      <Cards
                        key={item.id}
                        thumbnail={item.channel_thumbnail}
                        SlideUrl={item.channel_gallery}
                        old_price={item.channel_old_price}
                        new_price={item.channel_price}
                        badges={item.channel_badge}
                        pr_view={item.product_view}
                        upload_time={item.channel_upload_time}
                        title={item.channel_title}
                        listing_id={item.listing_id}
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
            {/*  facebook accounts section end here */}
            {/*  instagram accounts section start here */}
            <div className="instagram_container">
              <div className="product_category_title">
                <PageTitle FontSize="1.5rem" StrokeWidth={"1px"} title={"instagram profile"} />
              </div>
              <div className="row">
                {
                  YOUTUBE_DATA.slice(0,4).map((item) => (
                    <div className="col-md-3 col-sm-1 col-lg-3">
                      <Cards
                        key={item.id}
                        thumbnail={item.channel_thumbnail}
                        SlideUrl={item.channel_gallery}
                        old_price={item.channel_old_price}
                        new_price={item.channel_price}
                        badges={item.channel_badge}
                        pr_view={item.product_view}
                        upload_time={item.channel_upload_time}
                        title={item.channel_title}
                        listing_id={item.listing_id}
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
            {/*  instagram accounts section end here */}
            {/*  telegram accounts section start here */}
            <div className="telegram_container">
              <div className="product_category_title">
                <PageTitle FontSize="1.5rem" StrokeWidth={"1px"} title={"telegram channel"} />
              </div>
              <div className="row">
                {
                  YOUTUBE_DATA.slice(0,4).map((item) => (
                    <div className="col-md-3 col-sm-1 col-lg-3">
                      <Cards
                        key={item.id}
                        thumbnail={item.channel_thumbnail}
                        SlideUrl={item.channel_gallery}
                        old_price={item.channel_old_price}
                        new_price={item.channel_price}
                        badges={item.channel_badge}
                        pr_view={item.product_view}
                        upload_time={item.channel_upload_time}
                        title={item.channel_title}
                        listing_id={item.listing_id}
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
            {/*  telegram accounts section end here */}
            {/* pagination section start here */}
            <section>
              <Pagination className='pagination_box'>
                <Pagination.First />
                <Pagination.Item active onClick={() => paginationHanlder(1)}>{1}</Pagination.Item>
                <Pagination.Item onClick={() => paginationHanlder(2)}>{2}</Pagination.Item>
                <Pagination.Item onClick={() => paginationHanlder(3)}>{3}</Pagination.Item>
                <Pagination.Item onClick={() => paginationHanlder(4)}>{4}</Pagination.Item>
                <Pagination.Item onClick={() => paginationHanlder(5)}>{5}</Pagination.Item>
                <Pagination.Item onClick={() => paginationHanlder(6)}>{6}</Pagination.Item>
                <Pagination.Last />
              </Pagination>
            </section>
            {/* pagination section end start */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ViewProducts