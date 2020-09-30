import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <Navbar bg="light" expand="lg" className="mb-5">
            <Navbar.Brand href="#home">Shark Attack!</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link
                        to="/"
                        as={NavLink}
                        exact
                        activeClassName="active"
                    >
                        Sharks
                    </Nav.Link>
                    <Nav.Link
                        to="/create"
                        as={NavLink}
                        activeClassName="active"
                    >
                        Create new shark
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
