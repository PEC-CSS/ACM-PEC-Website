import React, {Component} from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Project from "./Project";
import logo from "../../assets/images/pec_acm_logo.jpg"


function ProjectMain() {
  return (
    <>
            <Header/> 
            <Project
                title="ACM-CSS WEBSITE"
                imgsrc={logo}
                descrip="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                repo="https://github.com/PEC-CSS/ACM-PEC-Website"
            />
            <Project
                title="Stock Watchlist"
                descrip="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
                imgsrc="https://image.cnbcfm.com/api/v1/image/106895886-1623424433335-gettyimages-1318384825-210464_7.jpeg?v=1623685977&w=1340&h=500"
                repo="https://github.com/PEC-CSS/Stock-Watchlist"
            />
            <Footer/>
            </>
  )
}

export default ProjectMain




