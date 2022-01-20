import { Navbar, Container, Nav } from 'react-bootstrap';

function Navigation(props) {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand>Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>Foods</Nav.Link>
                        <Nav.Link>Breweries</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigation;