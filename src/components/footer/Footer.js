import React from "react";
//import "./Footer.scss";
import "./footer.css";
import logo from "../../assets/logo.png";
import map from "../../assets/map.jpg";

const Footer = () => {
  return (
    <footer>
      <div className="main-container">
        <div className="footer-navbar">
          <img src={logo} alt={logo}></img>
          <div className="socials">
            <a className="follow-us" href="!#">
              Redes Sociales
            </a>
            <div className="media">
              <a href="!#">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
              <a href="!#">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
              <a href="!#">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </div>
          </div>
        </div>

        <div className="options">
          <div className="menu">
            <div className="popular">
              <h3>Especilizaciones</h3>
              <ul>
                <li>
                  {" "}
                  <a href="!#"> Derecho Civil </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="!#"> Derecho Penal </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="!#"> Daños y Perjuicios </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="!#"> Jubilaciones </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="!#"> Derecho Comercial </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="!#"> Derecho Laboral </a>{" "}
                </li>
              </ul>
            </div>
            <div className="column-f">
              <div className="homepress">
                <h3>Contacto</h3>
                <ul>
                  <li>
                    {" "}
                    <a href="!#"> +54 11 5754-1353 </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="!#"> Estudiojuridico@hotmail.com </a>{" "}
                  </li>
                </ul>
              </div>
              <div className="quick">
                <h3>Ubicacion</h3>
                <ul>
                  <li>
                    {" "}
                    <a href="!#">
                      {" "}
                      Menendez y Pelayo, 1504, Don Torcuato{" "}
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <img className="img-map" src={map} alt="" />
        </div>

        <p className="copyright">
          Diseñado y Realizado por ® Digital Code - 2023{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
