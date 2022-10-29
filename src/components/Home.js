import React from "react";
import "../utils/stylesheets/home.css";
import { BlogCard } from "./BlogCard";
import { GroupCard } from "./GroupCard";


const groups = [
  {
    title: "Competitive Programming",
    description: "Mental sport which enables you to code a given problem under provided constraints.",
    image: "https://cdn-icons-png.flaticon.com/512/2942/2942789.png"
  },
  {
    title: "Machine Learning",
    description: "Field of study that gives computers the capability to learn without being explicitly programmed.",
    image: "https://cdn-icons-png.flaticon.com/512/1693/1693746.png"
  },
  {
    title: "Web & App",
    description: "Refers to the building, creating, and maintaining of websites and applications.",
    image: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
  },
  {
    title: "Open Source",
    description: "Open source is source code that is made freely available for possible modification and redistribution.",
    image: "https://cdn-icons-png.flaticon.com/512/3262/3262392.png"
  },
  {
    title: "Meta",
    description: "A graphical and hypothetical iteration of that rich virtual space, with claims of reliability where people can work, play, shop, and socialise.",
    image: "https://cdn-icons-png.flaticon.com/512/6033/6033716.png"
  },
  {
    title: "Cyber Security",
    description: "Practice of protecting systems, networks, and programs from digital attacks.",
    image: "https://cdn-icons-png.flaticon.com/512/2716/2716612.png"
  }
]

const blogs = [
  {
    title: "Why life is sadder than u think",
    description: "Some things are better left unsaid, so let's not talk about it, thanku",
    image: "https://www.cyberark.com/wp-content/uploads/2019/11/Developer.jpg",
    date: "February 31, 2022"
  },
  {
    title: "Why life is sadder than u think",
    description: "Some things are better left unsaid, so let's not talk about it, thanku",
    image: "https://www.cyberark.com/wp-content/uploads/2019/11/Developer.jpg",
    date: "February 31, 2022"
  },
  {
    title: "Why life is sadder than u think",
    description: "Some things are better left unsaid, so let's not talk about it, thanku",
    image: "https://www.cyberark.com/wp-content/uploads/2019/11/Developer.jpg",
    date: "February 31, 2022"
  }
]

function Home() {
  console.log("%PUBLIC_URL%");
  return (
    <div >
      <div className=" home-wrapper bg-Lblue relative">
        <div className="h1-title z-[20]">PEC ACM CSS</div>
        <div className="home-wrapper-description z-[20]">
          PEC ACM is a student chapter of the Association for Computing Machinery at PEC University of
          Technology.
        </div>
        <div className="scroll-down"></div>
        <img src="home1.png" className="home-imgs absolute w-1/12 bottom-20 left-20" alt="home_img" />
        <img src="home2.png" className="home-imgs-2 absolute w-1/12 top-20 right-96 z-[1]" alt="home_img" />
        <img src="home3.png" className="home-imgs-2 absolute w-1/12 top-32 left-96 z-[1]" alt="home_img" />
        <img src="home4.png" className="home-imgs absolute w-[12%] bottom-0 right-[22vw] z-[1]" alt="home_img" />
      </div>
      <div className="home-content b">
        <h2 className="home-content-title">What we do.</h2>
        <hr className="home-content-br" />
        <div className="content-items">
          <div className="content-item">
            <div className="content-item-number">01.</div>
            <div className="content-item-para-title">
              <h1 className="content-item-title">
                Code
              </h1>
              <p className="content-item-para">
                We encourage various coding practices and have different branches supporting every coding style and stack.
              </p>
            </div>

          </div>
          <div className="content-item">
            <div className="content-item-number">02.</div>
            <div className="content-item-para-title">
              <h1 className="content-item-title">
                Compete
              </h1>
              <p className="content-item-para">
                We constantly hold contests and hackathons which encourage development and good coding practices amongst students. The feeling of participation and competing amongst others has always been a good mentor.
              </p>
            </div>

          </div>
          <div className="content-item">
            <div className="content-item-number">03.</div>
            <div className="content-item-para-title">
              <h1 className="content-item-title">
                Create
              </h1>
              <p className="content-item-para">
                We create real life solutions, enriched with latest Technologies and robust mechanisms.
              </p>
            </div>

          </div>
        </div>
      </div>
      <div className="home-content c">
        <div className="groups-content">
          <h2 className="home-content-title">Our Groups</h2>
          <hr className="home-content-br" />
          <div className="groups-list">
            {
              groups.map(({ title, description, image }, i) => {
                return <GroupCard title={title} description={description} image={image} />
              })
            }
          </div>
        </div>
        <div className="parallax-image groups-image" />
      </div>
      <div className="home-content d">
        <div className="parallax-image whowe-image" />
        <div className="whowe-content">
          <h2 className="home-content-title">Who we are</h2>
          <hr className="home-content-br" />
          <div className="whowe-info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque quis voluptates distinctio esse tenetur architecto laborum impedit, sit nesciunt. Eveniet soluta repudiandae architecto? Id aperiam exercitationem odio consequuntur amet aut, eos corrupti cupiditate quasi! Ullam cupiditate atque error similique at veniam maiores tenetur itaque tempora, nobis molestiae quam sunt, suscipit praesentium! Sint, reiciendis fuga eius nulla facilis accusantium dignissimos voluptates ipsum laboriosam, molestias natus.</div>
          <div className="whowe-buttons">
            <a href="/" className="whowe-explore whowe-button">Explore</a>
            <a href="/" className="whowe-team whowe-button">Meet our team</a>
          </div>
        </div>
      </div>
      <div className="home-content f">
        <h2 className="home-content-title">Recent Blogs</h2>
        <hr className="home-content-br" />
        <div className="blogs-list">
          {
            blogs.map(({ title, description, image, date }, i) => {
              return <BlogCard
                title={title}
                description={description}
                image={image}
                date={date}
                i={i}
              />
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Home;
