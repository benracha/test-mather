import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Team.css";

function Team() {
    return (
        <div className="team" id="team">
            <Container>
                <div className="text-team">
                    <div>
                        <h2>TEAM MEMBERS</h2>
                        <hr className="hr" />
                    </div>
                    <div className="detail-team">
                        <p>
                            <em>
                                Resolution possession discovered surrounded advantages has but few add.
                                Yet walls times spoil put. Be it
                                <br />
                                reserved contempt rendered smallest.
                                Studied to passage it mention calling believe an.
                            </em>
                        </p>
                    </div>
                </div>
                <Row>
                    <Col md={4}>
                        <div className="card-team">
                            <div className="img-team">
                                <img src="https://themather.asia/static/media/mart.da903d7e8c53e1eedf1d.png" alt="" width={200} />
                            </div>
                            <div className="name">
                                <h6>Kasamart</h6>
                                <span>Founder</span>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="card-team">
                            <div className="img-team">
                                <img src="https://themather.asia/static/media/moss1.bc199a61c638541d7629.png" alt="" width={200} />
                            </div>
                            <div className="name">
                                <h6>Somprasonk.G</h6>
                                <span>Co-founder/MD</span>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="card-team">
                            <div className="img-team">
                                <img src="https://themather.asia/static/media/dew.c6907acc834fdd7ebf2e.jpg" alt="" width={200} />
                            </div>
                            <div className="name">
                                <h6>Kheokao.D</h6>
                                <span>Head of Business Solution</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default Team;