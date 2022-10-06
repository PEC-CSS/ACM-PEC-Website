import React from "react";
import '../utils/stylesheets/project.css';
import "../utils/stylesheets/Events.css";
import projectlist from'../data/projectlist.json';

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
      return (
        <div className="events-container center">
          <div key={props._id}>
              <article className="event-card reveal fade-bottom">
                  <div className="card-container">
                      <div className="card-img">
                          <img
                              src={props.imgsrc}
                              alt="event-img"
                              className="img-fluid"
                          />
                      </div>
                      <div className="card-content">
                          {/* <div className="event-date">
                              <p>
                                  <BiTimeFive className="timer-icon" />
                                  <span className="date">Event Date - </span>
                                  {new Date(event.publishedAt).toLocaleDateString()}
                              </p> */}
                          {/* </div> */}
                          <div className="event-heading">{props.title}</div>
                          <div>
                              <p className="event-details">
                                  {props.descrip}
                              </p>
                              <h4 className="project-card-h4">
                               Repository:{" "}
                              <a href={props.repo} className="project-card-link" target="new">
                                  {props.repo}
                                  </a>
                                  </h4>
                          </div>
                      </div>
                  </div>
              </article>
          </div>
          </div>
      );
  // });
};

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
