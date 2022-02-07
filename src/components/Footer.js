import React, { Component } from 'react';
import "../assets/stylesheets/Footer.css";
import {FaFacebookF,FaTwitter,FaInstagram,FaYoutube} from 'react-icons/fa';

class Home extends Component {
    render() {
        return (
                <div className='Footer '>
                    <div className='Footer__HeadContainer '>
                        <div className='Footer__Head spaced'>
                            <div className='Footer__HeadTitle'>
                                ACM-CSS
                            </div>
                            <div className='Footer__HeadSocialsContainer'>
                                <div className='Footer__HeadTitle'>Socials:</div>
                                <ul className='Footer__HeadSocials'>
                                    <li><a><FaFacebookF className='facebookIcon' /></a></li>
                                    <li><a><FaTwitter className='twitterIcon'/></a></li>
                                    <li><a><FaInstagram  className='instagramIcon'/></a></li>
                                    <li><a><FaYoutube className='youtubeIcon'/></a></li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                    <div className='Footer__MainContainer'>
                        <div className='Footer__Main spaced'>
                            <div className='Footer__MainCols'>
                                about us
                            </div>
                            <div className='Footer__MainCols'>
                                recent blogs
                            </div>
                            <div className='Footer__MainCols'>
                                contact us
                            </div>
                            <div>

                            </div>
                        </div>  
                    </div>
                </div>
            )
    }
}

export default Home;