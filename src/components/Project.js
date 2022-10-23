import React, {useState} from "react";
import "../utils/stylesheets/project.css";
import "../utils/stylesheets/Events.css";
// import sanityClient from "../sanity/client";

// function Project(props) {
//   return (
//     <div id={props.id}>
//     <article className="event-card reveal fade-bottom">

//       <div className="event-container" style={{ backgroundColor: "lightblue" }}>
//         <div style={{ display: "flex", justifyContent: "center" }}>
//           <img className="project-card-img" id="image" src={props.imgsrc} alt="" />
//         </div>
//         <div className="card-content" id="project_description">
//           <h2 className="project-card-h2">{props.title}</h2>
//           <p className="project-card-text">{props.descrip}</p>
//           <h4 className="project-card-h4">
//             Repository:{" "}
//             <a href={props.repo} className="project-card-link" target="new">
//               {props.repo}
//             </a>
//           </h4>
//         </div>
//       </div>
//       </article>
//     </div>
//   );
// }
function Project(props) {
  // return events.map((event) => {
    //this checks direction to toggle height of cardcontent
    const open = {
      height:"fit-content"
    }
    const close = {
      height:"200px"
    }
    //
    //this state stores height of content and more button text 
    const [height, setheight] = useState({
      isClicked:false,
      value:close,
      text:"...read more",
      filter:`blur(${5}px)`
    })
    //this handler changes height of content and more button text 
    const handleHeight = () =>{
         if(height.isClicked===false){
          setheight({
            isClicked:true,
            value:open,
            text:"...show less",
            filter:`blur(${0}px)`
          })
         }else{
          setheight({
            isClicked:false,
            value:close,
            text:"...read more",
            filter:`blur(${5}px)`
          })
         }
    }
  return (
    <div id="projectdiv"  className="events-container projectdiv">
      <div key={props._id}>
        <article  className="event-card reveal fade-bottom">
          <div className="card-container">
            <div className="card-img-wrapper">
              <img src={props.imgsrc} alt="event-img" className="project-card-img" />
            </div>
            <div style={height.value} className="card-content">
              {/* <div className="event-date">
                              <p>
                                  <BiTimeFive className="timer-icon" />
                                  <span className="date">Event Date - </span>
                                  {new Date(event.publishedAt).toLocaleDateString()}
                              </p> */}
              {/* </div> */}
              <div className="event-heading">{props.title}</div>
              <div>
                <p className="event-details">{props.descrip}</p>
                <h4 className="project-card-h4">
                  Repository:{" "}
                  <a
                    href={props.repo}
                    className="project-card-link"
                    target="new"
                  >
                    {props.repo}
                  </a>
                  <div style={{backdropFilter:height.filter}} className="more-btn__wrapper">
                  <button onClick={handleHeight} className="more-btn">
                    {height.text}
                  </button>
                  </div>
                </h4>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
  // });
}

// function Events() {
//   const [eventPosts, setEventPosts] = useState([]);

//   useEffect(() => {
//       const query = `*[_type=='event'] {
//           _id,
//           title,
//           mainImage{
//                   asset->{
//                   _id,
//                   url
//                 }
//               },
//           content,
//           publishedAt,
//       }`;
// sanityClient
//     .fetch(query)
//     .then((data) => setEventPosts(data))
//     .catch((err) => console.log(err.message));
//   });
// return (
//     <div>
//         <div className="event-wrapper">
//             <h1 className="title">Events</h1>
//             <div>Ongoing Events</div>
//         </div>
//         <div className="events-section">
//             <div className="event-container">
//                 {/* <Eventlist events={eventPosts} /> */}
//             </div>
//         </div>
//     </div>
// );
// }

export default Project;
