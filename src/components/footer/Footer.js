import React from "react";
//import "./Footer.scss";
import { Icon } from "semantic-ui-react";
import "./footer.css";
import logo from "../../assets/logo.webp";
import map from "../../assets/map.webp";

const Footer = () => {
  return (
    <footer>
      <div className="main-container">
        <div className="footer-navbar">
          <img src={logo} alt="Doctor Jorge Cancio del estudio juridico en don torcuato"></img>
          <div className="socials">
            <a className="follow-us" href="!#">
              Redes Sociales
            </a>
            <div className="media">
              <a
                href="https://www.facebook.com/jorgecancioabogado"
                target="_blank"
                rel="noreferrer"
              >
                <Icon color="blue" size="large" name="facebook" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/cancio_jorge/?hl=es-la"
              >
                <Icon size="large" color="orange" name="instagram" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/i/flow/login?redirect_after_login=%2Fdrjorgecancio%3Flang%3Des"
              >
                <Icon size="large" color="teal" name="twitter" />
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
                    <a href="!#"> +54 11 5754-1353 </a>{" "}
                  </li>
                  <li>
                    <a href="!#"> drcancio@hotmail.com </a>{" "}
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
          Diseñado y Realizado por ®{" "}
          <a
            href="https://tomsteven.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Digital Code
          </a>{" "}
          - 2023{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
