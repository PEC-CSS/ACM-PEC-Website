import React, { useState } from "react";
import Project from "./Project";
import Slider from "./Slider/Slider.js";
import ProjectImg from "./../utils/images/Images.js";
import { useEffect } from "react";
import sanityClient from "../sanity/client";

function ProjectMain() {
    const [projectPosts, setProjectPosts] = useState([]);

    useEffect(() => {
        const query = `*[_type=='project'] {
      _id,
      title,
      mainImage{
              asset->{
              _id,
              url
            }
          },
      description,
      repository
  }`;
        sanityClient
            .fetch(query)
            .then((data) => setProjectPosts(data))
            .catch((err) => console.log(err.message));
    });
    return (
        <>
            {/* Slider Props:
      1. Image links (Only First four images are shown in slider) 
      2. ID of */}
            <Slider image={ProjectImg} />
            {projectPosts.map((project) => (
                <Project
                    key={project._id}
                    id={ProjectImg[project.id]?.id}
                    title={project.title}
                    descrip={project.description}
                    imgsrc={project.mainImage.asset.url}
                    repo={project.repository}
                />
            ))}
        </>
    );
}

export default ProjectMain;
