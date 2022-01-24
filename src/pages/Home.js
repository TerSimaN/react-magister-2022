import { Col, Container, Row } from "react-bootstrap";

function Home(props) {
    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={6}>
                        <h2 style={{ textAlign: 'center' }}>
                            Welcome to Foods'n'Breweries
                        </h2>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home;