import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Grow.css";

function Grow() {
    return (
        <div className="grow">
            <Container>
                <div className="text-grow">
                    <h2>WE HELP GROW YOUR BUSINESS</h2>
                    <hr className="hr" />
                </div>
                <div className="total-row">
                    <Row>
                        <Col lg={4}>
                            <div className="bg-effect">
                                <div className="text-col">
                                    <div className="title-grow">
                                        <h2>EFFECTIVE BUDGET CONTROL</h2>
                                    </div>
                                    <div>
                                        <p>Reduce your dispensable cost on each time recruiting management.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="bg-impressive">
                                <div className="text-col">
                                    <div className="title-grow">
                                        <h2>IMPRESSIVE WORKFLOW</h2>
                                    </div>
                                    <div>
                                        <p>Decrease your excessive recruiting activity on each round and well-managed man power.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="bg-accuracy">
                                <div className="text-col">
                                    <div className="title-grow">
                                        <h2>ACCURACY WITHOUT BIAS</h2>
                                    </div>
                                    <div>
                                        <p>Find exactly the right person who fit in your organization with credible, systematic information in which you can keep as the 1st party data.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Grow;