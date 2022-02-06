import { Navbar, Container, Nav } from 'react-bootstrap';
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector } from 'react-redux';
import ToggleTheme from './ToggleTheme';

function Navigation(props) {

    const theme = useSelector((state) => state.darkTheme);

    return (
        <>
            <Navbar bg={theme ? 'dark' : 'light'} variant={theme ? 'dark' : 'light'}>
                <Container>
                    <Navbar.Brand>Food'N'Breweries</Navbar.Brand>
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link href="/">Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/breweries">
                            <Nav.Link href="/breweries">Breweries</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <ToggleTheme />
                </Container>
            </Navbar>
        </>
    );
}

export default Navigation;