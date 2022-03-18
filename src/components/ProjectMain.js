import React from "react";
import Project from "./Project";
import Slider from "./Slider/Slider.js";
import ProjectImg from "./../utils/images/Images.js";
import projectList from "../data/projectlist.json";

function ProjectMain() {
  return (
    <>
      {/* Slider Props:
      1. Image links (Only First four images are shown in slider) 
      2. ID of */}
      <Slider image={ProjectImg} />
      {projectList.map((project) => (
        <Project
          key={project.id}
          // id={project.id}
          id={ProjectImg[project.id]?.id}
          title={project.title}
          descrip={project.description}
          imgsrc={project.imgSrc}
          repo={project.repo}
        />
      ))}
    </>
  );
}

export default ProjectMain;
