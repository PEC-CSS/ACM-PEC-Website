import React, { Component } from "react";
import Slider from "./Slider";
import ProjectImg from './../assets/images/Images'

class Home extends Component {
  render() {;
    return (
      // <div><h2>Body</h2></div>
      <div>
        <Slider item={ProjectImg} />
      </div>
    );
  }
}

export default Home;
