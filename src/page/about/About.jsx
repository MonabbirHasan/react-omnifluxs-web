import React from "react";
import { Facebook, WhatsApp, YouTube } from "@mui/icons-material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ourmission from "../../assets/img/ourmission.jpg";
import ourvission from "../../assets/img/ourvission.jpg";
import owner from "../../assets/img/teams/owner.jpg";
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
import about from "../../assets/img/about.png";
import { IconButton } from "@mui/material";
import "../../assets/css/media_query.css";
import "./about.css";
const About = () => {
  const FOUNDER_SOCIAL = (url) => {
    window.open(url);
  };

  return (
    <>
      <Header />
      <div className="about_page">
        <div className="about_banner">
          <LazyLoadImage alt={"about us"} src={about} />
          <div className="owner_info">
            <div className="owner_right">
              <div>
                <LazyLoadImage width="150px" height="200px" src={owner} />
              </div>
              <div className="owner_details">
                <h5>Rakesh Gurjar</h5>
                <p>co-founder at (omnifluxs.com)</p>
                <div className="follower">
                  <span>
                    <IconButton onClick={() => FOUNDER_SOCIAL("https://www.youtube.com")}>
                      <YouTube />
                    </IconButton>
                  </span>
                  <span>
                    <IconButton onClick={() => FOUNDER_SOCIAL("https://www.facebook.com/rakeshgurjar2003?mibextid=ZbWKwL")}>
                      <Facebook />
                    </IconButton>
                  </span>
                  <span>
                    <IconButton onClick={() => FOUNDER_SOCIAL("https://wa.me/+916367416401")}>
                      <WhatsApp />
                    </IconButton>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="about_wrapper">
            {/* <PageTitle title={"About our platform"} /> */}
            <div className="about">
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc.
              </p>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32.
              </p>
            </div>
            <div className="ourmission">
              <div className="mission_img">
                <LazyLoadImage src={ourmission} />
              </div>
              <div className="mission_content">
                <h3>our mission</h3>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend to repeat predefined chunks as
                  necessary, making this the first true generator on the
                  Internet. It uses a dictionary of over 200 Latin words,
                  combined with a handful of model sentence structures,
                </p>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend to repeat predefined chunks as
                  necessary, making this the first true generator on the
                  Internet. It uses a dictionary of over 200 Latin words,
                  combined with a handful of model sentence structures,
                </p>
              </div>
            </div>
            <div className="ourvission">
              <div className="vission_content">
                <h3>our vission</h3>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend to repeat predefined chunks as
                  necessary, making this the first true generator on the
                  Internet. It uses a dictionary of over 200 Latin words,
                  combined with a handful of model sentence structures,
                </p>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend to repeat predefined chunks as
                  necessary, making this the first true generator on the
                  Internet. It uses a dictionary of over 200 Latin words,
                  combined with a handful of model sentence structures,
                </p>
              </div>
              <div className="vission_img">
                <LazyLoadImage src={ourvission} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
