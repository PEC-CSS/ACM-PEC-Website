import React from "react";
import "../assets/stylesheets/project.css";

function Project(props) {
  return (
    <div id={props.id}>
      <div className="project-tile" style={{ backgroundColor: "lightblue" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img className="card-img" id="image" src={props.imgsrc} alt="" />
        </div>
        <div className="card-desc" id="project_description">
          <h2 className="card-h2">{props.title}</h2>
          <p className="card-text">{props.descrip}</p>
          <h4 className="card-h4">
            Repository:{" "}
            <a href={props.repo} className="card-link" target="new">
              {props.repo}
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Project;
