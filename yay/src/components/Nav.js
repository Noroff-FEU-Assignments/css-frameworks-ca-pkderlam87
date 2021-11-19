import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { NavLink } from "react-router-dom";
import { MainTitleNav } from '../styles/StyledNavbar';
import { CustomNavLink } from '../styles/StyledNavbar';
import { CustomNav } from '../styles/StyledNavbar';
import { CustomButton } from '../styles/Button';
import { CustomNavbar } from '../styles/StyledNavbar';

function Navigation() {
    return (
        <>
            <CustomNavbar expand="lg">
                <Container>
                    <Navbar.Brand to="/Home"><NavLink to="/Home" className="nav-link"><MainTitleNav>The YAY Company</MainTitleNav></NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <CustomNav><Nav>
                            <CustomNavLink to="/Home">Home</CustomNavLink>
                            <CustomNavLink to="/News">News</CustomNavLink>
                            <CustomNavLink to="/Contact">Contact</CustomNavLink>
                        </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <CustomButton variant="outline-success">Go</CustomButton>
                            </Form>
                        </CustomNav>
                    </Navbar.Collapse>
                </Container>
            </CustomNavbar>
        </>
    )
}

export default Navigation
