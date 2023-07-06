import React from "react";
import "./card.css";
import user from "../../../assets/user.svg";

const Card = ({ pic, data, link, desc }) => {
  return (
    <div className="card">
      <div className="blue-shadow"></div>
      <img className="card-image" src={pic} alt="Bath" />
      <div className="card-body">
        <div className="card-content">
          <a href="!#">
            <img src={user} alt="user" />
            <span>Dr Jorge Cancio</span>
          </a>
          <h4>
            <a className="card-title" href="!#">
              {data}
            </a>
          </h4>
          <p>{desc}</p>
        </div>
        <div className="cont-btn-ver">
          <a className="btn-ver" href={link}>
            Ver Nota
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
