import { Card, Col, ListGroup, ListGroupItem } from "react-bootstrap";

function BreweriesGridItem({brewery}) {
    return (
        <>
            <Col md={4}>
                <Card style={{ width: '16rem' }}>
                    <Card.Header as="h5">Brewery: "{brewery.name}"</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroupItem>Type: "{brewery.brewery_type}"</ListGroupItem>
                        <ListGroupItem>City: {brewery.city}</ListGroupItem>
                        <ListGroupItem>State: {brewery.state === null ? "None" : brewery.state}</ListGroupItem>
                        <ListGroupItem>Country: {brewery.country}</ListGroupItem>
                        <ListGroupItem style={{ textAlign: 'center' }}>
                            <Card.Link href={brewery.website_url}>Website Link</Card.Link>
                        </ListGroupItem>
                    </ListGroup>
                </Card>
            </Col>
        </>
    )
}

export default BreweriesGridItem;