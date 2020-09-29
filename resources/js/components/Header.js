import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
    return (
        <Navbar bg="light" expand="lg" className="mb-5">
            <Navbar.Brand href="#home">Shark Attack!</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link>Sharks</Nav.Link>
                    <Nav.Link href="/create">Add new shark</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
