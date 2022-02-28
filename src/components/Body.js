import React, { Component } from "react";
import Slider from "./Slider";
import ProjectImg from './../utils/images/Images.js'

class Body extends Component {
  render() {;
    return (
      // <div><h2>Body</h2></div>
      <div>
        <Slider item={ProjectImg} />
      </div>
    );
  }
}

export default Body;
