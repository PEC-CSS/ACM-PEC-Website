import React from "react";
import '../assets/stylesheets/home.css';
import Slider from './Slider.js';
import ProjectImg from './../assets/images/Images.js'

function Home(){
    return(
        <div>
            {/* <h2 className="home-content">Home</h2> */}
            <Slider item={ProjectImg} />
        </div>
    )
}

export default Home;