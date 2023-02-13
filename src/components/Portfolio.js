import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./Portfolio.css";
import Web from "./Web";
import Mobile from "./Mobile";
import Strategy from "./Strategy";
import Ai from "./Ai";

function Portfolio() {

    const [showWeb, setShowWeb] = useState(true)
    const [showMobile, setShowMobile] = useState(false)
    const [showStrategy, setShowStrategy] = useState(false)
    const [showAi, setShowAi] = useState(false)
    const [buttonWeb, setButtonWeb] = useState(true);
    const [buttonMobile, setButtonMobile] = useState(false);
    const [buttonStrategy, setButtonStrategy] = useState(false);
    const [buttonAi, setButtonAi] = useState(false);

    function clickWeb() {
        setButtonWeb(true)
        setButtonMobile(false)
        setButtonStrategy(false)
        setButtonAi(false)
        setShowMobile(false)
        setShowWeb(true)
        setShowStrategy(false)
        setShowAi(false)
    }

    function clickMobile() {
        setButtonWeb(false)
        setButtonMobile(true)
        setButtonStrategy(false)
        setButtonAi(false)
        setShowMobile(true)
        setShowWeb(false)
        setShowStrategy(false)
        setShowAi(false)
    }

    function clickStrategy() {
        setButtonWeb(false)
        setButtonMobile(false)
        setButtonStrategy(true)
        setButtonAi(false)
        setShowMobile(false)
        setShowWeb(false)
        setShowStrategy(true)
        setShowAi(false)
    }

    function clickAi() {
        setButtonWeb(false)
        setButtonMobile(false)
        setButtonStrategy(false)
        setButtonAi(true)
        setShowMobile(false)
        setShowWeb(false)
        setShowStrategy(false)
        setShowAi(true)
    }



    return (
        <div className="portfolio" id="portfolio">
            <Container>
                <div className="text-portfolio">
                    <h2>PORTFOLIO</h2>
                    <hr className="hr" />
                </div>
                <div className="total-portfolio">
                    <div className="btn-total">
                        <div className="btn-portfolio">
                            <button
                                onClick={() => clickWeb()}
                                className={"btn-web " + (buttonWeb ? "click-btn":'')}>
                                WEB APPLICATION & SYSTEM
                            </button>
                            <button
                                onClick={() => clickMobile()}
                                className={"btn-mobile " + (buttonMobile ? "click-btn":'')}>
                                MOBILE APPLICATION
                            </button>
                            <button
                                onClick={() => clickStrategy()}
                                className={"btn-strategy " + (buttonStrategy ? "click-btn":'')}>
                                STRATEGY & DATA-DRIVEN
                            </button>
                            <button
                                onClick={() => clickAi()}
                                className={"btn-ai " + (buttonAi ? "click-btn":'')}>
                                AI
                            </button>
                        </div>
                    </div>
                    {showWeb && <Web />}
                    {showMobile && <Mobile />}
                    {showStrategy && <Strategy />}
                    {showAi  && <Ai />}

                    {/* <Row mb={5} mt={4}>
                            <Col lg={6}>
                                <div className="item-web">
                                    <img src="https://themather.asia/static/media/ha.dcc645fd4281c7990a2e.png" alt="" />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="item-web">
                                    <img src="https://themather.asia/static/media/dii.84770addcf3761169027.png" alt="" />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="item-web">
                                    <img src="https://themather.asia/static/media/prime.32a862b32d22aa43172c.png" alt="" />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="item-web">
                                    <img src="https://themather.asia/static/media/blue.4066608deadbfeb24f29.png" alt="" />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="item-web">
                                    <img src="https://themather.asia/static/media/image17.57381818dfb9eb5a2e00.png" alt="" />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="item-web">
                                    <img src="https://themather.asia/static/media/image15.22b8fc93df080a4c4930.png" alt="" />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="item-web">
                                    <img src="https://themather.asia/static/media/image22.0369ea3535875abd54dd.png" alt="" />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="item-web">
                                    <img src="https://themather.asia/static/media/image3.763ab9377994b98a3ee4.png" alt="" />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="item-web">
                                    <img src="https://themather.asia/static/media/cul.a13a8325acef49b4d91d.png" alt="" />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="item-web">
                                    <img src="https://themather.asia/static/media/image20.02c855cbcbd27937cdb9.png" alt="" />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="item-web">
                                    <img src="https://themather.asia/static/media/ainu.72cc71ccd911163c6cda.png" alt="" />
                                </div>
                            </Col>
                        </Row> */}
                    {/* <section id="mobile">
                        <Row>
                            <Col lg={6}>
                                <div className="item-web">
                                    <img src="https://themather.asia/static/media/image8.4c6ff186cc89ea5ffbd8.png" alt="" />
                                </div>
                            </Col>
                        </Row>
                    </section>
                    <section id="strategy">
                        <Row>
                            <Col lg={6}>
                                <div className="item-web">
                                    <img src="https://themather.asia/static/media/h.0b7b80b75f3a0e5cb459.png" alt="" />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="item-web">
                                    <img src="https://themather.asia/static/media/ainu.72cc71ccd911163c6cda.png" alt="" />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="item-web">
                                    <img src="https://themather.asia/static/media/a.0740cdb216fb75db69b2.jpg" alt="" />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="item-web">
                                    <img src="https://themather.asia/static/media/hi.1d29c92496c3a12717c1.png" alt="" />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="item-web">
                                    <img src="https://themather.asia/static/media/toa.eb7de3f330b4720334bf.png" alt="" />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="item-web">
                                    <img src="https://themather.asia/static/media/thai.d7733a57b83c0a3fb0eb.png" alt="" />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="item-web">
                                    <img src="	https://themather.asia/static/media/me.ed3cb598b1d21e58e0fe.png" alt="" />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="item-web">
                                    <img src="https://themather.asia/static/media/grace.794df886322f1ae6348e.png" alt="" />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="item-web">
                                    <img src="https://themather.asia/static/media/water.4d4a13a991f86161e2be.png" alt="" />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="item-web">
                                    <img src="https://themather.asia/static/media/kpis1.4007761fc8033a1311b3.png" alt="" />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="item-web">
                                    <img src="https://themather.asia/static/media/e.c0728168a627a174812b.png" alt="" />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="item-web">
                                    <img src="https://themather.asia/static/media/recrafting.08da4b8ad01b662bde8f.png" alt="" />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="item-web">
                                    <img src="https://themather.asia/static/media/ka.a3ce1b6cae077fc6cbce.png" alt="" />
                                </div>
                            </Col>
                        </Row>
                    </section>
                    <section id="ai">
                        <Row>
                            <Col lg={6}>
                                <div className="item-web">
                                    <img src="https://themather.asia/static/media/e.c0728168a627a174812b.png" alt="" />
                                </div>
                            </Col>
                        </Row>
                    </section> */}
                </div>
            </Container>
        </div>
    )
}

export default Portfolio;