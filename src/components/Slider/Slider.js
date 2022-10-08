import React from "react";
import "./slider.css";
import Project from "../Project";
import arrowButton from "../../utils/images/left_point_btn.svg";

const delay = 3500; // change to 3500 again

export default function Slider(props) {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);
  const pro = document.getElementsByClassName("projectdiv");

  const projects = props.image.slice(0, Math.min(4, props.image.length));

  // console.log(currentImage.default); // Image fixed!

  // reset Time out index is changed
  function resetTimeout() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }

  // Distortion removed
  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  });

  return (
    <div className="slider-wrapper">
      {/* Main Body of Slider */}
      <div className="slide-show">
        <div
          className="slide-show-slider"
          style={{ transform: `translate3d(${index * -100}%, 0, 0)` }}
        >
          {projects.map((_, index) => (
            <div className="slide" key={index}>
              <img
                className="slide-img"
                alt={`Event Number${index + 1}`}
                src={projects[index].src}
                onClick={() => {
                  document.getElementById(`${_.id}`).scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="more-info-btn-container">
        <button
          className="more-info-btn"
          onClick={() => {
            for (let i = 0; i < pro.length; i++) {
              let x = pro[i];
              console.log(x);
              x.classList.remove("hidden");
            }
          }}
        >
          MORE
        </button>
      </div>

      {/* Dots below slider for moving slides */}
      <div className="slide-show-dots">
        {/* Number Showing Current Slide Number (Hide in case of small device) Small device width < 450px */}
        <div className="slide-num">
          0{index + 1} / 0{projects.length}
        </div>

        {/* Previous arrow */}
        <img
          className="btn-prev-slide"
          src={arrowButton}
          alt="previous-arrow"
          onClick={() => {
            setIndex((prevIndex) =>
              prevIndex === 0 ? projects.length - 1 : prevIndex - 1
            );
          }}
        />

        {/* Dots */}
        {projects.map((_, id) => (
          <div
            key={id}
            className={`slide-show-dot${index === id ? " active" : ""}`}
            onClick={() => {
              setIndex(id);
            }}
          />
        ))}

        {/* Next arrow */}
        <img
          className="btn-next-slide drop-shadow"
          src={arrowButton}
          alt="next-arrow"
          onClick={() => {
            setIndex((prevIndex) =>
              prevIndex === projects.length - 1 ? 0 : prevIndex + 1
            );
          }}
        />
      </div>
    </div>
  );
}
