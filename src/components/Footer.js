import React from "react";
import logoacm from "../assets/images/pec_acm_logo.png";
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaYoutubeSquare,
    FaLinkedin,
} from "react-icons/fa";
import '../assets/stylesheets/footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="left-footer">
                <p>PEC ACM CSS</p>
            </div>
            <div className="middle-footer">
                <img src={logoacm} alt="" />
            </div>
            <div className="right-footer">
                <p>Social Networks</p>
                <ul className="social-media-desktop">
                    <li>
                        <a href="https://www.facebook.com/pecacm" target="new">
                            <FaFacebookSquare className="facebook footer-icon-social" />
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com/pecacm" target="new">
                            <FaInstagramSquare className="instagram footer-icon-social" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/company/pec-acm-student-chapter/"
                            target="new"
                        >
                            <FaLinkedin className="linkedin footer-icon-social" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.youtube.com/c/PECACMStudentChapter"
                            target="new"
                        >
                            <FaYoutubeSquare className="youtube footer-icon-social" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
