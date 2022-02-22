import React, { useState } from 'react';
import '../assets/stylesheets/header.css';
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare, FaLinkedin} from 'react-icons/fa';
import { TiThMenuOutline } from 'react-icons/ti';
import logoacm from "../assets/images/pec_acm_logo.png";


const Header = () => {
        const [showMediaIcons, setShowMediaIcons] = useState(false);
        return (
                <>
                <nav className='main-nav'>
                    {/* Logo */}
                    <div className='logo'>
                        <h2>
                            <img src={logoacm} alt='ACM PEC'/>
                        </h2>
                    </div>
                    {/* Menu */}
                    <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
                        <ul>
                            <li className='hover-underline-animation'>Home</li>
                            <li className='hover-underline-animation'>Events</li>
                            <li className='hover-underline-animation'>Projects</li>   
                            <li className='hover-underline-animation'>About Us</li>
                        </ul>
                    </div>
                    {/* Social Media Desktop*/}
                    <div className='social-media'>
                        <ul className='social-media-desktop'>
                            <li><a href='https://www.facebook.com/pecacm' target="new"><FaFacebookSquare className='facebook'/></a></li>
                            <li><a href='https://instagram.com/pecacm' target="new"><FaInstagramSquare className='instagram'/></a></li>
                            <li><a href='https://www.linkedin.com/company/pec-acm-student-chapter/' target="new"><FaLinkedin className='linkedin'/></a></li>
                            <li><a href='https://www.youtube.com/c/PECACMStudentChapter' target="new"><FaYoutubeSquare className='youtube'/></a></li>
                        </ul>
                        {/* Menu For Mobile */}
                        <div className='hamburger-menu'>
                            <a href='#foo' onClick={() => setShowMediaIcons(!showMediaIcons)}><TiThMenuOutline /></a>
                        </div>

                    </div>
                </nav>
                
                
                </>
                
            )
    }

export default Header;