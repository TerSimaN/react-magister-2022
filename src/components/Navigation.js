import { Navbar, Container, Nav } from 'react-bootstrap';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';

function Navigation(props) {

    const [color, toggleColor] = useState(true);

    return (
        <>
            <Navbar bg={color ? 'light' : 'dark'} variant={color ? 'light' : 'dark'}>
                <Container>
                    <Navbar.Brand>Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>Foods</Nav.Link>
                        <Nav.Link>Breweries</Nav.Link>
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