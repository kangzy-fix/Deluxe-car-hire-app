import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/footer.css";

const quickLinks = [
    {
        path: "/about",
        display: "About",
    },
    {
        path: "#",
        display: "Terms & Conditions",
    },
    {
        path: "#",
        display: "Privacy Policy",
    },
    {
        path: "/cars",
        display: "Car Listing",
    },
    {
        path: "/blogs",
        display: "Blog",
    },
    {
        path: "/contact",
        display: "Contact",
    },
];

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg="4" md="4" sm="12">
                        <div className="logo footer__logo">
                            <h1>
                                <Link to="home" className="d-flex align-items-center gap-2">
                                <i class="ri-car-line"></i>
                                <span>
                                    Rent Car Kenya <br /> Services
                                </span>

                            </Link>
                        </h1>
                    </div>
                    <p className="footer__logo-content" >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos libero non, veniam
                        laborum placeat perspiciatis, odio deleniti ab quibusdam, iusto maxime quidem tenetur!
                        Fuga excepturi eius tempora assumenda eligendi quod!
                    </p>
                </Col>
                <Col lg="2" md="4" sm="6">
                    <div className="mb-4">
                        <h5 className="footer__link-title">Quick Links</h5>

                        <ListGroup>
                            {quickLinks.map((item, index) => (
                                <ListGroupItem key={index} className="p-0 mt-3 quick__links">
                                    <Link to={item.path}>{item.display}</Link>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </div>
                </Col>

                <Col lg="3" md="4" sm="6">
                    <div className="mb-4">
                        <h5 className="footer__link-title mb-4">Head Office</h5>
                        <p className="office__info">80100 Nairobi, Kenya</p>
                        <p className="office__info"> Phone: +254 700 000 000</p>

                        <p className="office__info">Email:kangzyfix@gmail.com</p>
                        <p className="office__info">Website: www.rentcarke.com</p>
                        <p className="office__info">Working Hours: 8:00am - 5:00pm</p>
                    </div>
                </Col>

                <Col lg="3" md="4" sm="12">
                    <div className="mb-4">
                        <h5 className="footer__link-title ">Follow Us</h5>
                        <p className="office__info">Facebook</p>
                        <p className="office__info">Twitter</p>
                        <p className="office__info">Instagram</p>
                        <p className="office__info">Youtube</p>
                        <p className="office__info">Linkedin</p>
                        <p className="footer__link-title">Newsletter</p>
                        <p className="section__description">Subscribe to our newsletter</p>
                        <div className="newsletter" >
                            <input type="email" placeholder="Email" />
                            <span>
                                <i class="ri-send-plane-line"></i>
                            </span>
                        </div>
                    </div>
                </Col>

                <col lg="12">
                    <div className="footer__bottom">
                        <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                            <i class="r1-copyriht-line"></i>Copyright {year} Rent Car Kenya. All Rights Reserved
                        </p>
                    </div>
                </col>
            </Row>
        </Container>
    </footer >
);
};

export default Footer;
