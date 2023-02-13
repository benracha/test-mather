import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Service.css";

function Service() {
    return (
        <div className="service" id="service">
            <Container>
                <div className="text-service">
                    <div>
                        <h2>SERVICE</h2>
                    </div>
                    <hr className="hr" />
                    <p>
                        <em>
                            We keep on diversifying and expanding ourselves into full system integration service.
                        </em>
                    </p>
                </div>
                <Row>
                    <Col lg={4}>
                        <div className="item">
                            <div className="icon">
                                <i></i>
                            </div>
                            <div>
                                <h4>DATA RESEARCH</h4>
                            </div>
                            <div>
                                <p>
                                    Study and research desired target by survey and collecting data both on-site and online (Digital Platform).
                                    Then, analyze data in quantitative and qualitative terms in order to observe target's behavior, interest, etc. in order to lead effective strategy plans.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="item">
                            <div className="icon">
                                <i></i>
                            </div>
                            <div>
                                <h4>DATA ANALYSIS</h4>
                            </div>
                            <div>
                                <p>
                                    Execute In-depth data science analysis , as well as creating reports by Data Visualization.
                                    In order to generate new strategic planning with Data Driven in the future.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                    <div className="item">
                            <div className="icon">
                                <i></i>
                            </div>
                            <div>
                                <h4>DATA TRANFORMATION</h4>
                            </div>
                            <div>
                                <p>
                                    Design, organize and develop digital data input systems to ensure the effectiveness of data utilization such as data collecting
                                    design in various platforms and system designing to support the transformation from manual data to digital data.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                    <div className="item2">
                            <div className="icon">
                                <i></i>
                            </div>
                            <div>
                                <h4>AI TECHNOLOGY</h4>
                            </div>
                            <div>
                                <p>
                                    Developing Artificial Intelligence (AI) technologies to avoid unconscious human error in complex issues decision making.
                                    This service included 3 domains which are signal, image and NLP. We also provide AI design and develop services to support customers in collecting and analyzing data effectively.
                                </p>

                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                    <div className="item2">
                            <div className="icon">
                                <i></i>
                            </div>
                            <div>
                                <h4>WEB AND SYSTEM</h4>
                            </div>
                            <div>
                                <p>
                                    Provide entirely design and develop web application services to serve the best experiences to users while representing the company's identity.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Service;