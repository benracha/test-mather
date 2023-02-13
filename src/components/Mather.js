import React from "react";
import { Container } from "react-bootstrap";
import "./Mather.css";

function Mather() {
    return (
        <div className="mather">
            <Container>
                <div className="text-mather">
                    <h2>THE MATHER</h2>
                </div>
                <div className="slogan">
                    <h3>
                        SIMPLE, GOOD VALUE, PROFESSIONAL
                        WITH EXPERIENCE AND EXPERTISE.
                    </h3>
                </div>
                <div className="detail-mather">
                    <h5>
                        We offer value services at an affordable price
                        and are ready to make everything easy for you.
                    </h5>
                </div>
                <div className="vdo">
                    <video>
                        <source src="/static/media/video2.58f2cf20a9d0d5ef7f38.mp4" />
                    </video>
                </div>
            </Container>
        </div>
    )
}

export default Mather;