import React from "react";
import "./testimonial-1.css";
import quote1 from "../../../assets/quote1.svg";

const TestimonialA = ({ photo, name, esp, text }) => {

  return (
    <div className="testimonial1-container">
      <div className="text1-container">
        <img className="quote" src={quote1} alt="quote" />
        <p>
          {text}
        </p>
        <div className="blue-shadow"></div>
        <img className="profile-pic" src={photo} alt="Profile" />
      </div>

      <p className="name">{name}</p>
      {esp.map((e) => (
        <p className="position">{e}</p>
      ))}
    </div>
  );
};

export default TestimonialA;
