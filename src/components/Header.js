import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import "./Header.css";

function Header() {
    return (
        <div className="header">
            <Navbar collapseOnSelect expand="lg">
                <Navbar.Brand href="#home">
                    <img src="https://themather.asia/static/media/banner.bcd37209059c1bc5e643.png" alt="logo" width={250} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="#home">
                            HOME
                        </Nav.Link>
                        <Nav.Link href="#service">
                            SERVICE
                        </Nav.Link>
                        <Nav.Link href="#portfolio">
                            PORTFOLIO
                        </Nav.Link>
                        <Nav.Link href="#team">
                            TEAM
                        </Nav.Link>
                        <Nav.Link href="#testimonials">
                            TESTIMONIALS
                        </Nav.Link>
                        <Nav.Link href="#contact">
                            CONTACT
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header;