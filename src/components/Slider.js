import React from "react";
import { Link } from 'react-router-dom';
import "./../assets/stylesheets/slider.css";
import arrowButton from './../assets/images/left_point_btn.svg'

const delay = 3500; // change to 3500 again

export default function Slider(props) {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  const projects = props.item.slice(0, Math.min(4, props.item.length));

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
    <>
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
                src={projects[index]}
              />
              <div className="more-info-btn">
                <Link to="/Announcements">More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots below slider for moving slides */}
      <div className="slide-show-dots">
          
        {/* Number Showing Current Slide Number (Hide in case of small device) Small device width < 450px */}
        <div className="slide-num">0{index + 1} / 0{projects.length}</div>

        {/* Previous arrow */}
        <img
          className="btn-prev-slide"
          src={arrowButton}
          alt="previous-arrow"
          onClick={() => {
            setIndex((prevIndex) =>
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
          )
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
          )
          }}
        />
      </div>
    </>
  );
}
