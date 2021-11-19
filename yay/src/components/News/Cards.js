import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import news1 from '../images/news/news1.jpg';
import news2 from '../images/news/news2.jpg';
import news3 from '../images/news/news3.jpg';
import news4 from '../images/news/news4.jpg';
import news5 from '../images/news/news5.jpg';
import news6 from '../images/news/news6.jpg';
import news7 from '../images/news/news7.jpg';
import news8 from '../images/news/news8.jpg';
import Paragraph from '../Paragraph';
import { CustomCard } from '../../styles/NewsStyles/StyledCards';
import { CustomButtonCard } from '../../styles/Button';
import { DetailButton } from '../../styles/Button';
import { WrapperFlex } from '../../styles/layout';
import { CustomRow } from '../../styles/NewsStyles/StyledCards';

function Cards() {
    return (
        <>
            <CustomRow xs={1} md={3} lg={4} className="g-4">
                <Col gap={3}>
                    <CustomCard>
                        <Card.Img variant="top" src={news1} />
                        <Card.Body>
                            <Card.Title>Nunc porttitor vel</Card.Title>
                            <Paragraph content="Nunc malesuada eget est fringilla dapibus."></Paragraph>
                            <WrapperFlex>
                                <CustomButtonCard variant="primary">More</CustomButtonCard><DetailButton></DetailButton>
                            </WrapperFlex>
                        </Card.Body>
                    </CustomCard>
                </Col>
                <Col>
                    <CustomCard>
                        <Card.Img variant="top" src={news2} />
                        <Card.Body>
                            <Card.Title>Nunc porttitor vel</Card.Title>
                            <Paragraph content="Nunc malesuada eget est fringilla dapibus."></Paragraph>
                            <WrapperFlex>
                                <CustomButtonCard variant="primary">More</CustomButtonCard><DetailButton></DetailButton>
                            </WrapperFlex>
                        </Card.Body>
                    </CustomCard>
                </Col>
                <Col gap={3}>
                    <CustomCard>
                        <Card.Img variant="top" src={news3} />
                        <Card.Body>
                            <Card.Title>Nunc porttitor vel</Card.Title>
                            <Paragraph content="Nunc malesuada eget est fringilla dapibus."></Paragraph>
                            <WrapperFlex>
                                <CustomButtonCard variant="primary">More</CustomButtonCard><DetailButton></DetailButton>
                            </WrapperFlex>
                        </Card.Body>
                    </CustomCard>
                </Col>
                <Col>
                    <CustomCard>
                        <Card.Img variant="top" src={news4} />
                        <Card.Body>
                            <Card.Title>Nunc porttitor vel</Card.Title>
                            <Paragraph content="Nunc malesuada eget est fringilla dapibus."></Paragraph>
                            <WrapperFlex>
                                <CustomButtonCard variant="primary">More</CustomButtonCard><DetailButton></DetailButton>
                            </WrapperFlex>
                        </Card.Body>
                    </CustomCard>
                </Col>
                <Col>
                    <CustomCard>
                        <Card.Img variant="top" src={news5} />
                        <Card.Body>
                            <Card.Title>Nunc porttitor vel</Card.Title>
                            <Paragraph content="Nunc malesuada eget est fringilla dapibus."></Paragraph>
                            <WrapperFlex>
                                <CustomButtonCard variant="primary">More</CustomButtonCard><DetailButton></DetailButton>
                            </WrapperFlex>
                        </Card.Body>
                    </CustomCard>
                </Col>
                <Col>
                    <CustomCard>
                        <Card.Img variant="top" src={news6} />
                        <Card.Body>
                            <Card.Title>Nunc porttitor vel</Card.Title>
                            <Paragraph content="Nunc malesuada eget est fringilla dapibus."></Paragraph>
                            <WrapperFlex>
                                <CustomButtonCard variant="primary">More</CustomButtonCard><DetailButton></DetailButton>
                            </WrapperFlex>
                        </Card.Body>
                    </CustomCard>
                </Col>
                <Col>
                    <CustomCard>
                        <Card.Img variant="top" src={news7} />
                        <Card.Body>
                            <Card.Title>Nunc porttitor vel</Card.Title>
                            <Paragraph content="Nunc malesuada eget est fringilla dapibus."></Paragraph>
                            <WrapperFlex>
                                <CustomButtonCard variant="primary">More</CustomButtonCard><DetailButton></DetailButton>
                            </WrapperFlex>
                        </Card.Body>
                    </CustomCard>
                </Col>
                <Col>
                    <CustomCard>
                        <Card.Img variant="top" src={news8} />
                        <Card.Body>
                            <Card.Title>Nunc porttitor vel</Card.Title>
                            <Paragraph content="Nunc malesuada eget est fringilla dapibus."></Paragraph>
                            <WrapperFlex>
                                <CustomButtonCard variant="primary">More</CustomButtonCard><DetailButton></DetailButton>
                            </WrapperFlex>
                        </Card.Body>
                    </CustomCard>
                </Col>
            </CustomRow>
        </>
    )
}

export default Cards
