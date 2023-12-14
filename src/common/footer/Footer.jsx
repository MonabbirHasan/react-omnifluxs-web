import React from "react";
import { Button, Image } from "react-bootstrap";
import logo from "../../assets/img/logo.png";
import { NavLink } from "react-router-dom";
import "../../assets/css/media_query.css";
import "./footer.css";
import {
  Facebook,
  HelpCenter,
  Instagram,
  Mail,
  Phone,
  Telegram,
  Twitter,
  WhatsApp,
  YouTube,
} from "@mui/icons-material";
const Footer = () => {
  const WEB_SOCIAL_WINDOW = (url) => {
    window.open(url);
  };
  return (
    <footer>
      <div className="footer_wrapper">
        <div className="footer_right_contact">
          <span
            onClick={() =>
              WEB_SOCIAL_WINDOW(
                "https://api.whatsapp.com/send?phone=916367416401&text=Welcome, I am Here To Help You"
              )
            }
          >
            <WhatsApp />
          </span>
          <span
            onClick={() =>
              WEB_SOCIAL_WINDOW("https://t.me/rakeshyoutubechannelseller")
            }
          >
            <Telegram />
          </span>
          <span
            onClick={() =>
              WEB_SOCIAL_WINDOW(
                "https://instagram.com/rakeshytseller?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D"
              )
            }
          >
            <Instagram />
          </span>
          <span
            onClick={() =>
              WEB_SOCIAL_WINDOW(
                "https://www.facebook.com/rakeshgurjar2003?mibextid=ZbWKwL"
              )
            }
          >
            <Facebook />
          </span>
          <span
            onClick={() =>
              WEB_SOCIAL_WINDOW(
                "https://youtube.com/@ranjeetcpmking?si=bzKSfKobtXZszSCV"
              )
            }
          >
            <YouTube />
          </span>
          <span onClick={() => WEB_SOCIAL_WINDOW("tel:+916367416401")}>
            <Phone />
          </span>
          <span
            onClick={() => WEB_SOCIAL_WINDOW("mailto:rakeshytseller@gmail.com")}
          >
            <Mail />
          </span>
          <span>
            <NavLink to={"/help"}>
              <HelpCenter />
            </NavLink>
          </span>
        </div>
        <div className="footer_wraper">
          <div className="row">
            <div className="col-md-4 col-sm">
              <div className="footer_item">
                <Image src={logo} />
                <p>
                  Long Established Fact That A Reader Will Be Distracted By The
                  Readable Content Of A Page When Looking At Its Layout. The
                  Point Of Using Lorem Ipsum Is That It Has A More-Or-Less
                  Normal Distribution Of Letters, As Opposed To Using 'Content
                  Here, Content Here', Making It Look Like Readable English.
                  Many Desktop Publishing Packages And Web Page Editors Now Use
                  Lorem Ipsum As Their Default Model Text, And A Search For
                  'Lorem Ipsum' Will Uncover Many Web Sites Still In Their
                  Infancy. Various Versions Have Evolved Over The Years,
                  Sometimes By Accident, Sometimes On Purpose (Injected Humour
                  And The Like)
                </p>
              </div>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4 col-sm">
              <div className="footer_item">
                <h3>contact with us</h3>
                <div className="subscriber_box">
                  <input type="text" placeholder="Subscribe our channel" />
                  <Button>Submit</Button>
                </div>
                <div className="footer_social">
                  <p>follow us</p>
                  <span>
                    <Facebook />
                  </span>
                  <span>
                    <Instagram />
                  </span>
                  <span>
                    <Twitter />
                  </span>
                  <span>
                    <YouTube />
                  </span>
                  <span>
                    <WhatsApp />
                  </span>
                  <span>
                    <Mail />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#0099ff"
              fill-opacity="1"
              d="M0,96L48,80C96,64,192,32,288,42.7C384,53,480,107,576,154.7C672,203,768,245,864,234.7C960,224,1056,160,1152,128C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="footer_ilend">
        <p>
          all right reserved. <span>omnifluxs.com</span> teams
        </p>
      </div>
    </footer>
  );
};

export default Footer;
