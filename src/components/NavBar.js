import React from "react";
import { NavBar, Container, Nav } from "react-bootstrap";
import { NavBar, Nav, NavDropdown } from "react-bootstrap";
export const NavBar = () => {
    return (
        <NavBar expand='lg'>
            <Container>
                <Navbar.Brand href='#home'><img src={''} alt='logo'/></Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link href='#home'>Home</Nav.Link>
                        <Nav.Link href='#about'>Link</Nav.Link>
                        <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
                            <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                            <NavDropdown.Item href='#action/3.2'>Another action</NavDropdown.Item>
                            <NavDropdown.Item href='#action/3.3'>Something else</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href='#action/3.4'>Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </NavBar>
    )
}