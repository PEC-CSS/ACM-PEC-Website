import React, { Component } from 'react';

import {FaEnvelope, FaPhone, FaMapMarker} from "react-icons/fa"

import '../utils/stylesheets/footer.css';


class Footer extends Component {
    render() {
        return (
            <>
                <div className='footer-main'>
                    <div className="footer-left">
                        <h3>ABOUT US</h3>
                        <hr className="footer-hr"/>
                        <div className="lfooter-content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam fugiat minus iure sapiente possimus debitis repellat vero earum 
                        </div>

                        <h3>SUBSCRIBE NEWSLETTER</h3>
                        <hr className="footer-hr" />
                        <div className="textbox-footer">
                            <div className="input-group mb-3 footer-inputbox">
                                <input type="text" className="form-control footer-input" placeholder="Email*" aria-label="Recipient's username" aria-describedby="basic-addon2" />

                                <span className="input-group-text footer-input-btn" id="basic-addon2"><FaEnvelope /></span>
                            </div>
                        </div>
                    </div>
                    <div className="footer-right">
                        <h3>CONTACT INFO</h3>
                        <hr className="footer-hr"/>
                        <div className="rfooter-content">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis dolore dignissimos, molestiae distinctio id incidunt provident cum. Aspernatur, dignissimos animi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, velit!
                        </div>
                        <div className="rfooter-contact">
                            <div className="contact-footer">    
                                <FaMapMarker className='footer-i' />
                                <div className="contact-text-footer">
                                    123 North West, Florida, USA
                                </div>
                            </div>
                            <div className="contact-footer">
                                <FaEnvelope className="footer-i" />
                                <div className="contact-text-footer">
                                    example@domain.com
                                </div>
                            </div>
                            <div className="contact-footer">
                                <FaPhone className="footer-i" />
                                <div className="contact-text-footer">
                                    1-800-222-000
                                </div>
                            </div>

                        </div>
                    </div>
                
                </div>
            </>
            )
    }
}

export default Footer;
