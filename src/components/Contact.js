import React from "react";
import { Container } from "react-bootstrap";
import "./Contact.css";

function Contact() {
    return (
        <div className="contact" id="contact">
            <Container>

                <div className="text-contact">
                    <h2>CONTACT</h2>
                    <hr className="hr" />
                </div>
                <div className="detail-contact">
                    <h3>Your right person is waiting to join you...</h3>
                    <h4>Dont't hesitate.</h4>
                    <h5 className="box-h5">The Mather</h5>
                </div>
                <div className="box-dl">
                    <a href="https://themather.asia/static/media/CredentialTheMather2023.2261a555c28afa67b69a.pdf">
                        <button className="btn-dl">DOWNLOAD CREDENTAIL</button>
                    </a>
                </div>
                <div className="total-contact">
                    <div>
                        <div className="set-h5">
                            <h5>Spring formal no county ye waited. My whether cheered at regular it of promise blushes perhaps.</h5>
                        </div>
                        <div className="box-contact">
                            <div className="icon">
                                <i></i>
                            </div>
                            <div className="detail-box">
                                <div className="title">
                                    Address:
                                </div>
                                <div>
                                    555 Rasa Tower Phahonyothin Rd, Chatuchak, Bangkok 10900
                                </div>
                            </div>
                        </div>

                        <div className="box-contact">
                            <div className="icon">
                                <i></i>
                            </div>
                            <div className="detail-box">
                                <div className="title">
                                    Phone number:
                                </div>
                                <div>
                                    02-937-0555
                                </div>
                            </div>
                        </div>
                        <div className="box-contact">
                            <div className="icon">
                                <i></i>
                            </div>
                            <div className="detail-box">
                                <div className="title">
                                    Email:
                                </div>
                                <div>
                                    info@themather.asia
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container >
        </div >
    )
}

export default Contact;