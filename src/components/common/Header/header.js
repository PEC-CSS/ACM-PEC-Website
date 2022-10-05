import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare, FaLinkedin} from 'react-icons/fa';
import { TiThMenuOutline } from 'react-icons/ti';

import logoacm from "../../../utils/images/pec_acm_logo.jpg";

import './header.css';


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
                            <li ><Link to='/' className='hover-underline-animation'>Home</Link></li>
                            <li><Link to={{pathname: "./Events"}}  className='hover-underline-animation'>Events</Link></li>
                            <li><Link to='./Projects'  className='hover-underline-animation'>Projects</Link></li>   
                            <li><Link to={{pathname: "./About-Us"}}  className='hover-underline-animation no-wrap'>About Us</Link></li>
                            <li><Link to={{pathname: "./blogs"}}  className='hover-underline-animation'>Blogs</Link></li>

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
