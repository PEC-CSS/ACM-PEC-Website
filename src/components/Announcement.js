import React from "react";
import {Carousel} from 'react-bootstrap'
import "../assets/stylesheets/home.css"
import "bootstrap/dist/css/bootstrap.min.css"



const Announcement = () => {
    return (
        <div>
            {/* <div className='announcements-head'>
                Announcements
            </div> */}
            <div className="posture">
                <Carousel className="block">
                    <Carousel.Item>
                        <div className="container">
                            <img
                                className="d-block w-100"
                                src="https://m.media-amazon.com/images/I/61peIdz-C2L._SL1024_.jpg"
                                alt="First slide"
                            />
                            {/* <Carousel.Caption>
                            <div className="class" >
                                <a href='https://www.google.com'>Read More...</a>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </div>

                        </Carousel.Caption> */}
                            <div className="block-text">
                                <h3>some heading</h3>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="container">
                            <img
                                className="d-block w-100"
                                src="https://m.media-amazon.com/images/I/61peIdz-C2L._SL1024_.jpg"
                                alt="Second slide"
                            />

                            {/* <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption> */}
                            <div className="block-text">
                                <h3>some heading</h3>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="container">
                            <img
                                className="d-block w-100"
                                src="https://m.media-amazon.com/images/I/61peIdz-C2L._SL1024_.jpg"
                                alt="Third slide"
                            />

                            {/* <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption> */}
                            <div className="block-text">
                                <h3>some heading</h3>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>

            {/* <div className='announce'>

                <h3>Announcements</h3>
            </div> */}
            
        </div>
    );
};

export default Announcement;
