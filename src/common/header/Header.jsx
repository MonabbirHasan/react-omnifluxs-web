import React, { useState } from "react";
import {
  LocalGroceryStoreOutlined,
  FavoriteBorder,
  PersonOutline,
  Login,
  Logout,
  Person,
} from "@mui/icons-material";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { Badge, Box, Button, IconButton, Stack } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../../assets/img/logo.png";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import { Col, Image, Modal, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import "./header.css";

const Header = () => {
  const navigate = useNavigate();
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

  return (
    <header>
      <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="/">
            <Image
              src={logo}
              width={"50px"}
              style={{ borderRadius: "10px", marginRight: "10px" }}
            />
            <span>
              omni<span className="brand_part_tow">fluxs</span>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="m-auto my-2 my-lg-0"
              style={{ maxHeight: "100%" }}
              navbarScroll
            >
              <Nav.Link>
                <NavLink to={"/"}>Home</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to={"/about"}>About</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to={"/services"}>services</NavLink>
              </Nav.Link>
              <NavDropdown title="more" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">
                  <NavLink to={"/shop"}>Website Shop</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">
                  <NavLink to={"/smm-panel"}>YouTube Shop</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.4">
                  <NavLink to={"/courses"}>Our Course</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.5">
                  <NavLink to={"/web-order"}>Custom Order</NavLink>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link hidden>
                <NavLink to={"/pricing"}>pricing</NavLink>
              </Nav.Link>
              {/* <Nav.Link>
                <NavLink to={"/blogs"}>blogs</NavLink>
              </Nav.Link> */}
              {/* <Nav.Link>
                <NavLink to={"/portfolio"}>portfolio</NavLink>
              </Nav.Link> */}
              {/* <NavDropdown title="Products" id="navbarScrollingDropdown">
                  <NavDropdown.Item>
                      <NavLink to={""}>YouTube</NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                      <NavLink to={""}>Facebook</NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                      <NavLink to={""}>Instagram</NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                      <NavLink to={""}>Twitter</NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                      <NavLink to={""}>Telegram</NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                      <NavLink to={""}>Discord</NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                      <NavLink to={""}>TikTok</NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                      <NavLink to={""}>Likee</NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                      <NavLink>Pub G</NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                      <NavLink to={""}>Free Fire</NavLink>
                  </NavDropdown.Item>
              </NavDropdown> */}
              <Nav.Link>
                <NavLink to={"/contact"}>Contact Us</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to={"/community"}>community</NavLink>
              </Nav.Link>
            </Nav>
            {/* user profile */}
            <div hidden className="user">
              <>
                <Badge
                  onClick={() => navigate("/carts", { replace: true })}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  overlap="circular"
                  color="default"
                  badgeContent={30}
                  showZero
                >
                  <LocalGroceryStoreOutlined />
                </Badge>
              </>
              <>
                <Badge
                  onClick={() => navigate("/wishlists", { replace: true })}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  overlap="circular"
                  color="default"
                  badgeContent={30}
                  showZero
                >
                  <FavoriteBorder />
                </Badge>
              </>
              <>
                <Badge>
                  {
                    <NavLink to={"/seller_dashboard/user/monabbirhasan"}>
                      <Person />
                    </NavLink>
                  }
                </Badge>
              </>
            </div>
            <Button variant="outlined" color="success" onClick={()=>navigate("/signup")}>
              join
            </Button>
            {/* user profile */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/********************************
       * ALL MODALS SECTION START HERE
       *********************************/}

      {/********************************
       * ALL MODALS SECTION END HERE
       *********************************/}
    </header>
  );
};

export default Header;
