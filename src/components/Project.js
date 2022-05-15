import React from "react";
import '../utils/stylesheets/project.css';

function Project(props) {
  return (
    <div id={props.id}>
      <div className="project-tile" style={{ backgroundColor: "lightblue" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img className="project-card-img" id="image" src={props.imgsrc} alt="" />
        </div>
        <div className="project-card-desc" id="project_description">
          <h2 className="project-card-h2">{props.title}</h2>
          <p className="project-card-text">{props.descrip}</p>
          <h4 className="project-card-h4">
            Repository:{" "}
            <a href={props.repo} className="project-card-link" target="new">
              {props.repo}
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Project;
