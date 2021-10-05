import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
    const activeStyle = {
        fontWeight: 'bold',
        color: 'red',
        textDecoration: 'none'
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">Menu</Navbar.Brand>
                    <Nav className="me-auto">
                        <div className="navbar">
                            <NavLink activeStyle={activeStyle} to="/home">Home</NavLink>
                            <NavLink activeStyle={activeStyle} to="/aboutUs">About Us</NavLink>
                            <NavLink activeStyle={activeStyle} to="/services">Services</NavLink>
                            <NavLink activeStyle={activeStyle} to="/speciallity">Speciallity</NavLink>
                        </div>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;