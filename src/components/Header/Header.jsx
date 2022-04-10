import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'

const Header = () => {
    return (
        <div>
            <Navbar data-aos="fade" data-aos-duration="1000" variant='dark' expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img src="https://i0.wp.com/soleos.in/wp-content/uploads/2021/03/Logo_Final_white-1024x261-1.png?w=1024&ssl=1" height={50} width={150} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='nav-links-container'>
                        <Nav className="me-auto text-center">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                            <NavDropdown title="Services" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">EV Charger</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Solar</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#link">Gallery</Nav.Link>
                            <Nav.Link href="#link">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header