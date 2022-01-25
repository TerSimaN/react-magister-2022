import { Navbar, Container, Nav } from 'react-bootstrap';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { LinkContainer } from 'react-router-bootstrap';

function Navigation(props) {

    const [color, toggleColor] = useState(true);

    return (
        <>
            <Navbar bg={color ? 'light' : 'dark'} variant={color ? 'light' : 'dark'}>
                <Container>
                    <Navbar.Brand>Food'N'Breweries</Navbar.Brand>
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link href="/">Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/foods">
                            <Nav.Link href="/foods">Foods</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/breweries">
                            <Nav.Link href="/breweries">Breweries</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <FontAwesomeIcon
                        className={color ? 'text-dark' : 'text-light'}
                        onClick={() => toggleColor(!color)} 
                        icon={color ? faToggleOn : faToggleOff} />
                </Container>
            </Navbar>
        </>
    );
}

export default Navigation;