import React, { useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import "../styles/header.css";

const navLinks = [
    {
        path: "/home",
        display: "Home",
    },
    {
        path: "/about",
        display: "About",
    },
    {
        path: "/contact",
        display: "Contact"
    },
    {
        path: "/blogs",
        display: "Blogs",

    },
    {
        path: "/cars",
        display: "Cars",

    },

];
const Header = () => {
    const menuRef = useRef(null);
    const toggleMenu = () =>
        menuRef.current.classList.toggle("menu_active");
        return (
            <header className="header">
              <div className="header__top">
                <Container>
                  <Row>
                    <Col lg="6" md="6" sm="6">
                      <div className="header__top__left">
                        <span>Need Help?</span>
                        <span className="header__top__help">
                          <i class="ri-phone-fill"></i> +254 743 828 153
                        </span>
                      </div>
                    </Col>
                  </Row>
                </Container>
            </div>
            <Col lg="6" md="6" sm="6">
                <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                    <link to="#" className='d-flex align-items-center gap-1'>
                        <i class="r1-login-circle-line"></i>Login
                    </link>

                    <link to="#" className='d-flex align-items-center gap-1'>
                        <i class="ri-user-add-line"></i>Register
                    </link>
                </div>
            </Col>


            <div className='header__middle'>
                <Container>
                    <Row>
                        <Col lg="4" md="3" sm="4">
                            <div className="logo">
                                <h1>
                                    <link to="/home" className='d-flex align-items-center gap-2'>
                                        <i class="ri-car-line"></i>
                                        <span>
                                            Rent A Car <br /> Kenya
                                        </span>
                                    </link>
                                </h1>
                            </div>

                        </Col>



                        <Col lg="3" md="3" sm="4">
                            <div className="header__location d-flex align-items-center gap-2">
                                <span>
                                    <i class="ri-earth-line"></i>
                                </span>

                                <div className="header__location__content">
                                    <h4>Kenya</h4>
                                    <h6>Westlands, Nairobi</h6>
                                </div>
                            </div>
                        </Col>

                        <Col lg="3" md="3" sm="4">
                            <div className="header__location d-flex align-items-center gap-2">
                                <span>
                                    <i class="ri-time-line"></i>
                                </span>
                                <div className="header__location__content">
                                    <h4>Monday to Sunday</h4>
                                    <h6>8:00am - 5:00pm</h6>
                                </div>
                            </div>
                        </Col>


                        <Col
                            lg="2"
                            md="3"
                            sm="0"
                            className=" d-flex align-items-center justify-content-end "
                        >
                            <button className="header__btn btn ">
                                <Link to="/contact">
                                    <i class="ri-phone-line"></i> Request a call
                                </Link>
                            </button>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="main__navbar">
                <Container>
                    <div className="navigation__wrapper d-flex align-items-center justify-content-between">
                        <span className="mobile__menu">
                            <i class="ri-menu-line" onClick={toggleMenu}></i>
                        </span>

                        <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                            <div className="menu">
                                {navLinks.map((item, index) => (
                                    <NavLink
                                        to={item.path}
                                        className={(navClass) =>
                                            navClass.isActive ? "nav__active nav__item" : "nav__item"
                                        }
                                        key={index}
                                    >
                                        {item.display}
                                    </NavLink>
                                ))}
                            </div>
                        </div>

                        <div className="nav__right">
                            <div className="search__box">
                                <input type="text" placeholder="Search" />
                                <span>
                                    <i class="ri-search-line"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </header>
    );
};

export default Header;