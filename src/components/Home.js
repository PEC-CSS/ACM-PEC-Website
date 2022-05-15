import React from "react";
import "../utils/stylesheets/home.css";
import { GroupCard } from "./GroupCard";


const groups = [
  {
    title: "Competitive Programming",
    description: "comding best, do comding, cp good cf op cc nab hehehehehe",
    image: "https://cdn-icons-png.flaticon.com/512/2942/2942789.png"
  },
  {
    title: "Machine Learning",
    description: "AI will take over the world and kill me ono i am bery scared plaj help",
    image: "https://cdn-icons-png.flaticon.com/512/1693/1693746.png"
  },
  {
    title: "Web & App",
    description: "make websites and apps cuz why not, dev op after all",
    image: "https://cdn-icons.flaticon.com/png/512/954/premium/954574.png?token=exp=1652651202~hmac=1257d8288f125c6a8979738ee1dc30ea"
  },
  {
    title: "Open Source",
    description: "make pr, get pr merged and then get lgtm gw. Hehe ez",
    image: "https://cdn-icons.flaticon.com/png/512/3262/premium/3262393.png?token=exp=1652650907~hmac=38d90f2fe22b1b66df0d828251f58dfa"
  },
  {
    title: "Meta",
    description: "publicity design podlog i am everything, i am universal",
    image: "https://cdn-icons-png.flaticon.com/512/6033/6033716.png"
  },
  {
    title: "Cyber Security",
    description: "I want to be a hamkerman but I am non existant :crycatok:",
    image: "https://cdn-icons-png.flaticon.com/512/2716/2716612.png"
  }
]

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
        <div className="groups-content">
          <h2 className="home-content-title groups-title">Our Groups</h2>
          <hr className="home-content-br"/>
          <div className="groups-list">
            {
              groups.map( ({title,description,image},i)=>{
                return <GroupCard title={title} description={description} image={image} />
              })
            }
          </div>
        </div>
        <div className="groups-image" />
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
