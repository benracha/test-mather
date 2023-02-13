import React from "react";
import { Row, Col } from "react-bootstrap";

function Mobile() {
    return (
        <Row>
            <Col lg={6}>
                <div className="animate__animated animate__zoomIn animate__faster">
                    <a href="https://www.haier.com/th/">
                        <div className="item-web">
                            <img src="https://themather.asia/static/media/image8.4c6ff186cc89ea5ffbd8.png" alt="" />
                            <div className="overlay">
                                <div className="text">Mobile Application</div>
                            </div>
                        </div>
                    </a>
                </div>
            </Col>
        </Row>
    )
}

export default Mobile;