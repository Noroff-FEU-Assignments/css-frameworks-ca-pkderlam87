import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import news1 from '../images/news/news1.jpg';
import news2 from '../images/news/news2.jpg';
import news3 from '../images/news/news3.jpg';
import news4 from '../images/news/news4.jpg';
import news5 from '../images/news/news5.jpg';
import news6 from '../images/news/news6.jpg';
import news7 from '../images/news/news7.jpg';
import news8 from '../images/news/news8.jpg';
import Paragraph from '../Paragraph';

function Cards() {
    return (
        <>
            <Container>
                <Row xs={1} md={4} className="g-4 justify-content-md-center">
                    <Col gap={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={news1} />
                            <Card.Body>
                                <Card.Title>Nunc porttitor vel</Card.Title>
                                <Paragraph content="Nunc malesuada eget est fringilla dapibus."></Paragraph>
                                <Button variant="primary">More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={news2} />
                            <Card.Body>
                                <Card.Title>Nunc porttitor vel</Card.Title>
                                <Paragraph content="Nunc malesuada eget est fringilla dapibus."></Paragraph>
                                <Button variant="primary">More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col gap={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={news3} />
                            <Card.Body>
                                <Card.Title>Nunc porttitor vel</Card.Title>
                                <Paragraph content="Nunc malesuada eget est fringilla dapibus."></Paragraph>
                                <Button variant="primary">More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={news4} />
                            <Card.Body>
                                <Card.Title>Nunc porttitor vel</Card.Title>
                                <Paragraph content="Nunc malesuada eget est fringilla dapibus."></Paragraph>
                                <Button variant="primary">More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={news5} />
                            <Card.Body>
                                <Card.Title>Nunc porttitor vel</Card.Title>
                                <Paragraph content="Nunc malesuada eget est fringilla dapibus."></Paragraph>
                                <Button variant="primary">More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={news6} />
                            <Card.Body>
                                <Card.Title>Nunc porttitor vel</Card.Title>
                                <Paragraph content="Nunc malesuada eget est fringilla dapibus."></Paragraph>
                                <Button variant="primary">More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={news7} />
                            <Card.Body>
                                <Card.Title>Nunc porttitor vel</Card.Title>
                                <Paragraph content="Nunc malesuada eget est fringilla dapibus."></Paragraph>
                                <Button variant="primary">More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={news8} />
                            <Card.Body>
                                <Card.Title>Nunc porttitor vel</Card.Title>
                                <Paragraph content="Nunc malesuada eget est fringilla dapibus."></Paragraph>
                                <Button variant="primary">More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Cards
