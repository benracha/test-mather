import React from "react";
import "./Testimonials.css";
import { Carousel, Container } from "react-bootstrap";

function Testimonials() {
    return (
        <div className="testimonials" id="testimonials">
            <Container>
                <div className="total-testimonials">
                    <h2>TESTIMONIALS</h2>
                    <hr className="hrw" />
                </div>
                <Carousel>
                    <Carousel.Item interval={2000}>
                        <Carousel.Caption>
                            <p>We keep on diversifying and expanding ourselves into full system integration service.
                                We are committed to creating and managing integrated solution for all our customer's business development needs,
                                with a focus on the IT solution.</p>
                            <div className="img">
                                <img src="https://themather.asia/static/media/mart.da903d7e8c53e1eedf1d.png" alt="" />
                            </div>
                            <h3>Kasamart Neerapatama</h3>
                            <span>Founder</span>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <Carousel.Caption>
                            <p>Nowadays, the world is changing faster. more variety more complicated Which makes it difficult to make decisions in the traditional way. Artificial intelligence and data science are essential to make every decision more efficient.
                                This will help your business to be accurate with rapidly changing consumer behavior as well.</p>
                            <div className="img">
                                <img src="https://themather.asia/static/media/moss1.bc199a61c638541d7629.png" alt="" />
                            </div>
                            <h3>Somprasonk.G</h3>
                            <span>Co-founder/MD</span>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
        // <div>
        //     <div>
        //         <h2>TESTIMONIALS</h2>
        //     </div>
        //     <div>
        //         <p>
        //             We keep on diversifying and expanding ourselves into full system integration service.
        //             We are committed to creating and managing integrated solution for all our customer's business development needs,
        //             with a focus on the IT solution.
        //         </p>
        //     </div>
        //     <div>
        //         <img className="img-responsive" src="https://themather.asia/assets/img/testimonial/mart.png" alt="" />
        //     </div>
        //     <div>
        //         <h5>Kasamart Neerapatama</h5>
        //         <h5>FOUNDER</h5>
        //     </div>
        //     <div>
        //         <div>
        //             <i></i>
        //         </div>
        //         <div>
        //             <i></i>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Testimonials;