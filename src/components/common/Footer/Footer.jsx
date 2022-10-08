import React from 'react'
import { Link } from 'react-router-dom';
import logoacm from "../../../utils/images/pec_acm_logo.jpg";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={`${styles.mainFooter} flex flex-col md:flex-row gap-4 p-4 shadow relative bg-right-bottom md:bg-right-top`}>
        <div className="basis-full md:basis-1/4">
          <div className={`flex justify-center items-center flex-col ${styles.logo} h-full`}>
            <img src={logoacm} alt='ACM PEC' />
            <a href="https://pec.ac.in/" target="_blank" rel="noopener noreferrer">
              <h2 className='text-white text-xl font-extrabold hover-underline-animation'>PEC University of Technology</h2>
            </a>
          </div>
        </div>
        <div className='basis-full md:basis-1/4'>
          <h2 className='text-white font-extrabold text-1xl md:text-2xl p-4'>Contact Info</h2>
          <ul className='list-none'>
            <li className='p-4 text-lg'>
              <span className='hover-underline-animation'><i className='fas fa-home text-white' /> Sector 12, Chandigarh, 160012</span>
            </li>
            <li className='p-4 text-lg'>
              <a href='tel:0172 275 3051' className='hover-underline-animation'><i className='fas fa-phone-alt text-white' /> 0172 275 3051</a>
            </li>
            <li className='p-4 text-lg'>
              <a href="https://pec.ac.in/" target="_blank" rel="noopener noreferrer" className='hover-underline-animation'><i className='fas fa-globe text-white' /> https://pec.ac.in</a>
            </li>
          </ul>
        </div>
        <div className='basis-full md:basis-1/4'>
          <h2 className='text-white font-extrabold text-1xl md:text-2xl p-4'>Important Links</h2>
          <ul className='list-none'>
            <li className='p-4 text-lg'><Link to={{ pathname: "./Events" }} className='hover-underline-animation'>College Events</Link></li>
            <li className='p-4 text-lg'><Link to='./Projects' className='hover-underline-animation'>Student Projects</Link></li>
            <li className='p-4 text-lg'><Link to={{ pathname: "./About-Us" }} className='hover-underline-animation'>About Us</Link></li>
            <li className='p-4 text-lg'><Link to={{ pathname: "./blogs" }} className='hover-underline-animation'>Our Blogs</Link></li>
          </ul>
        </div>
        <div className='basis-full md:basis-1/4'>
          <h2 className='text-white font-extrabold text-1xl md:text-2xl p-4'>Social Links</h2>
          <ul className='list-none'>
            <li className='p-4 text-lg'><a href='https://www.facebook.com/pecacm' target="_blank" rel="noopener noreferrer" className='hover-underline-animation'><i className="fab fa-facebook text-white" /> Facebook</a></li>
            <li className='p-4 text-lg'><a href='https://instagram.com/pecacm' target="_blank" rel="noopener noreferrer" className='hover-underline-animation'><i className="fab fa-instagram text-white" /> Instagram</a></li>
            <li className='p-4 text-lg'><a href='https://www.linkedin.com/company/pec-acm-student-chapter/' target="_blank" rel="noopener noreferrer" className='hover-underline-animation'><i className="fab fa-linkedin-in text-white" /> LinkedIn</a></li>
            <li className='p-4 text-lg'><a href='https://www.youtube.com/c/PECACMStudentChapter' target="_blank" rel="noopener noreferrer" className='hover-underline-animation'><i className="fab fa-youtube text-white" /> YouTube</a></li>
            {/* <li className='p-4 text-lg'><a href='https://github.com/PEC-CSS' target="_blank" rel="noopener noreferrer" className='hover-underline-animation'>Github</a></li>
            <li className='p-4 text-lg'><a href='https://www.reddit.com/r/pecacm' target="_blank" rel="noopener noreferrer" className='hover-underline-animation'>Reddit</a></li> */}
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer