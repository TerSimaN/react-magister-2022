import { Card, Col } from "react-bootstrap";


function FoodsGridItem({food}) {
    return (
        <>
            <Col md={4}>
                <Card style={{ width: '12rem' }}>
                    <Card.Img variant="top" src={food.image} />
                    <Card.Body>
                        <Card.Title>{food.type}</Card.Title>
                        <Card.Link href={food.image}>Open image</Card.Link>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default FoodsGridItem;