import React from "react";
import "../utils/stylesheets/home.css";

function Home() {
  return (
    <div >
      <div className=" home-wrapper">
        <div className="h1-title">PEC ACM Website something</div>
        <div className="home-wrapper-description">
          PEC ACM is a student chapter of the ACM at PEC University of
          Technology
        </div>
        <div className="scroll-down"></div>
      </div>
      <div className="home-content b">
        <h2 className="home-content-title">What we do.</h2>
        <hr className="home-content-br"/>
        <div className="content-items">
          <div className="content-item">
              <div className="content-item-number">01.</div>
                <div className="content-item-para-title">
                <h1 className="content-item-title">
                Creativity
            </h1>
            <p className="content-item-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, urna eu tincidunt consectetur, nisi
            </p>
                </div>

          </div>
          <div className="content-item">
              <div className="content-item-number">02.</div>
                <div className="content-item-para-title">
                <h1 className="content-item-title">
                something
            </h1>
            <p className="content-item-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, urna eu tincidunt consectetur, nisi
            </p>
                </div>

          </div>
          <div className="content-item">
              <div className="content-item-number">03.</div>
                <div className="content-item-para-title">
                <h1 className="content-item-title">
                Lorem
            </h1>
            <p className="content-item-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, urna eu tincidunt consectetur, nisi
            </p>
                </div>

          </div>
        </div>
      </div>
      <div className="home-content c">
        <h2 className="home-content home">c</h2>
      </div>
      <div className="home-content d">
        <h2 className="home-content home">d</h2>
      </div>
      <div className="home-content e">
        <h2 className="home-content home">e</h2>
      </div>
      <div className="home-content f">
        <h2 className="home-content home">f</h2>
      </div>
    </div>
  );
}

export default Home;
