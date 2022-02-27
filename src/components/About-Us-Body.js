// import React, { Component } from 'react';

// class Home extends Component {
//     render() {
//         return (
//                 <div><h2>Body</h2></div>
//             )
//     }
// }

// export default Home;

import React from "react";
import { useState } from "react";
import "../assets/stylesheets/About-Us-body.css";
const Home = () => {
  const [body, setBody] = useState("eb"); // "eb" or "ib"
  const [rotate, setRotate] = useState(false);
  const [btn, setBTN] = useState(0);

  window.addEventListener("scroll", function () {
    var reveals = [];
    reveals.push(document.querySelectorAll(".acm-int-img"));
    reveals.push(document.querySelectorAll(".acm-img"));
    reveals.push(document.querySelectorAll(".acm-hist"));
    reveals.push(document.querySelectorAll(".acm-int-tex"));
    for (var j = 0; j < reveals.length; j++) {
      for (var i = 0; i < reveals[j].length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[j][i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (j === 2 || j === 3) {
          if (elementTop < windowHeight - elementVisible) {
            reveals[j][i].classList.add("slide-right");
          } else {
            reveals[j][i].classList.remove("slide-right");
          }
        } else {
          if (elementTop < windowHeight - elementVisible) {
            reveals[j][i].classList.add("slide-left");
          } else {
            reveals[j][i].classList.remove("slide-left");
          }
        }
      }
    }
  });

  return (
    <>
      <div className="Body1">
        <div className="heading">
          <p className="mission">Our Mission :</p>
          <p className="statement">
            To Be The Most Impactful ACM Student Chapter.
          </p>
          <div class="arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="textbox1">
          <div className="slide-right">
            <p className="heading1">History of PEC</p>
            <p className="text1">
              Punjab Engineering College is a public research & technical
              institution in Chandigarh. It was founded in 1921 in Lahore,
              established in Chandigarh in 1953, and focuses on the field of
              applied sciences, particularly engineering and technology. It is
              known for its two-year and four-year programmes for which the
              entry is through the Joint Entrance Examination – Mains and
              Graduate Aptitude Test in Engineering. It offers degrees such as
              Bachelor of Technology, Master of Technology, and a few others. It
              also has a comprehensive graduate program offering doctoral
              degrees in Science, Technology, Engineering and Mathematics
            </p>
          </div>
          <div className="slide-left">
            <img
              className="img1"
              alt="acm-img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0tv-Ym6RdUjUFOBM3NTf_Tid2nXwVNBD2qA&usqp=CAU"
            />
          </div>
        </div>

        <div className="textbox2">
          <div className="acm-img">
            <img
              className="img2"
              alt="acm-img"
              src="https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZGV8ZW58MHx8MHx8&w=1000&q=80"
            />
          </div>
          <div className="acm-hist">
            <p className="heading2">History of ACM</p>
            <p className="text2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ligula
              nunc, consequat id odio sed, efficitur eleifend ex. Maecenas quis
              interdum urna. In tempus elit vulputate semper condimentum. Morbi
              tincidunt tellus vel condimentum sollicitudin. Morbi consectetur
              libero ac odio sagittis, et ullamcorper libero egestas. Quisque
              nisl purus, sagittis et sapien sit amet, ultricies laoreet neque.
              Curabitur fermentum ac sapien eu finibus. Sed eget molestie
              lectus. Nunc rutrum est in velit convallis consequat. Sed at massa
              ex. Phasellus scelerisque aliquam odio, non venenatis purus
              pretium sed. Aenean vulputate aliquet ipsum id auctor. In
              hendrerit nibh ipsum, quis commodo velit vehicula non. Sed
              interdum lectus urna, id molestie lectus vulputate eget. Morbi
              consectetur, massa sed mollis venenatis, quam dolor gravida felis,
              vitae rutrum est magna egestas libero.
            </p>
          </div>
        </div>

        <div className="textbox3">
          <div className="acm-int-tex">
            <p className="heading3">PEC ACM's Field Of Interest</p>
            <p className="text3">
              Maecenas non urna sed ante interdum faucibus eu eu sem. Nam vitae
              erat consequat, pretium quam vitae, commodo ex. Donec pulvinar
              rhoncus dolor quis malesuada. Etiam imperdiet in magna non
              facilisis. Aenean rutrum, orci et pretium porttitor, ligula enim
              volutpat sapien, nec facilisis tortor erat in lectus. Praesent
              viverra diam eget dolor scelerisque posuere. Ut eget lectus quis
              ex efficitur auctor. Donec erat ligula, blandit non tristique et,
              condimentum vehicula urna. Sed egestas blandit turpis fermentum
              volutpat. In euismod nisl consectetur odio porta accumsan. Aenean
              ac mauris nisl. Mauris elementum sollicitudin suscipit. Donec
              feugiat urna sed ex pellentesque, et vulputate dolor mattis. Sed
              sodales mi est, nec pulvinar elit congue non.
            </p>
          </div>
          <div className="acm-int-img">
            <img
              className="img3"
              alt="acm-img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwW8vR7QBm7e_Vw2N_PlFlfHBd4u-eQ5BR7Q&usqp=CAU"
            />
          </div>
        </div>
      </div>
      <div className="Body2">
        <div className="box1">OUR EXECUTIVE BOARD</div>
        <div className="box2">
          <div className="left">
            <img
              className="img4"
              alt="acm"
              src="https://uploads-eu-west-1.insided.com/deezer-en/attachment/ad9c7945-988f-4569-bf88-2d80876241bb.jpg"
            ></img>
          </div>
          <div className="right">
            <div className="heading4">
              <p>PEC ACM Secretary</p>
            </div>
            <div className="text4">
              <p>Nishant Puri</p>
              <p>Incoming SDE at Microsoft</p>
              <p>Former intern at Gurugram Cyber Police</p>
            </div>
          </div>
        </div>
        {/* <div className="box3">
                        <img className='img5' src="https://images.unsplash.com/photo-1645021790494-182818c51e73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"  />
                        <img className='img6' src='https://images.unsplash.com/photo-1641595171033-eef6fda5e040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80' />
                        <img className='img7' src="https://images.unsplash.com/photo-1645022576935-fc012945f8e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
                        <img className='img8' src="https://images.unsplash.com/photo-1644952720775-c769200e6b67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
                    </div> */}
        <div className="box3">
          <div className="smallbox">
            <div className="btn-div">
              <button
                className={`btn1 ${btn === 0 ? "selec" : ""}`}
                onClick={() => {
                  setBody("eb");
                  setBTN(0);
                  setRotate(function (prev) {
                    return !prev;
                  });
                }}
              >
                EXECUTIVE BODY
              </button>
              <button
                className={`btn1 ${btn === 1 ? "selec" : ""}`}
                onClick={() => {
                  setBody("ib");
                  setBTN(1);
                  setRotate(function (prev) {
                    return !prev;
                  });
                }}
              >
                IMPLEMENTATION BODY
              </button>
            </div>

            <div className={`flip-card ${rotate ? "rotate" : ""}`}>
              <div className={`flip-card-inner ${rotate ? "rotate" : ""}`}>
                {body === "eb" ? (
                  <div>
                    {/* eb */}
                    <div className="ebs">
                      <div className="col1">
                        <ul className="item">
                          <li>Geetika Bansal</li>
                          <li>Parikh Goyal</li>
                          <li>Ankit Goyal</li>
                          <li>Gaurav Sharma</li>
                        </ul>
                      </div>
                      <div className="col1">
                        <ul className="item">
                          <li>Geetika Bansal</li>
                          <li>Parikh Goyal</li>
                          <li>Ankit Goyal</li>
                          <li>Gaurav Sharma</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : (
                  // <div>
                  //     {/* ib  */}
                  //     <div>
                  //         IMPLEMENTATION
                  //     </div>
                  // </div>
                  <div>
                    {/* ib */}
                    <div className="ebs">
                      <div className="col1">
                        <ul className="item">
                          <li>Saiyam Gupta</li>
                          <li>Lakshya Garg</li>
                          <li>Kanisha Kaur</li>
                          <li>Kanika Kaur</li>
                        </ul>
                      </div>
                      <div className="col1">
                        <ul className="item">
                          <li>Kriti Mahajan</li>
                          <li>Kavya Rakheja</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
