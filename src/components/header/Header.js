import React from "react";
import { Button} from "semantic-ui-react";
//import "./Header.scss";
import "./Header.css";
import logo from "../../assets/logo.webp";

const Header = () => {
  const scollEvent = (e) => {
    const widthWindow = window.innerWidth;
    if (widthWindow > 1000) {
      const position = window.pageYOffset;
      const header = document.querySelector(".header-navbar");
      const links = document.querySelectorAll(".links a");
      const title = document.querySelector(".title");

      if (position > 100) {
        header.classList.add("header-scroll");
        title.classList.add("title-c");
        links.forEach((link) => {
          link.classList.remove("l-color");
          link.classList.add("links-color");
        });
      } else {
        header.classList.remove("header-scroll");
        title.classList.remove("title-c");
        links.forEach((link) => {
          link.classList.remove("links-color");
          link.classList.add("l-color");
        });
      }
    }
  };

  window.addEventListener("scroll", scollEvent);

  return (
    <header id="inicio">
      <div className="blue-shadow"></div>
      <div className="round-pic"></div>
      <div className="header-container">
        <div className="header-navbar">
          <div className="top-bar">
            <img className="img-header-logo" src={logo} alt="" />
            <a className="title" href="#inicio">
              Estudio Jurídico Integral
            </a>
            <div className="links">
              <a className="l-color" href="#inicio">
                Inicio
              </a>
              <a className="l-color" href="#about">
                Nosotros
              </a>
              <a className="l-color" href="#casos">
                Casos
              </a>
              <a className="l-color" href="#esp">
                Especializaciones
              </a>
              <a className="l-color" href="#abogados">
                Abogados
              </a>
            </div>
          </div>
        </div>
        <div className="message">
          <h1>Estudio Juridíco Dr Jorge Cancio & Asociados</h1>
          <p>
            En nuestro estudio jurídico, ofrecemos soluciones legales integrales
            y expertas para tus necesidades legales. Nuestro equipo de abogados
            altamente calificados y experimentados está comprometido en
            brindarte asesoramiento legal personalizado y efectivo en una amplia
            gama de áreas legales. Desde derecho civil y penal hasta derecho
            laboral y de familia, contamos con la experiencia necesaria para
            representarte y proteger tus intereses. Nuestra pasión por la
            justicia y la excelencia en el servicio al cliente nos distingue.
            Confía en nosotros para obtener resultados favorables. ¡Contáctanos
            hoy mismo para una consulta!
          </p>
          <div class="cont-butons">
          <Button
              size=""
              className="btn-w"
              icon="whatsapp"
              color="green"
              onClick={() =>
                window.open("https://wa.me/+5491157541353?text=¡Hola!%20Queria%20agendar%20una%20cita%20con%20el%20Dr%20Cancio", "_blank")
              }
            />
            <Button
              icon="location arrow"
              className="btn-g"
              color="orange"
              onClick={() =>
                window.open("https://goo.gl/maps/r383EhBJgmErtzyi6", "_blank")
              }
            />
            <Button
              icon="facebook"
              color="blue"
              className="btn-f"
              onClick={() =>
                window.open(
                  "https://www.facebook.com/jorgecancioabogado/?locale=es_LA",
                  "_blank"
                )
              }
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

/* onClick={() =>
                window.open(
                  "https://api.whatsapp.com/send?phone=+5491157541353&text=Hola!%20Quiero%20agendar%20una%20cita%20con%20el%20Dr.%20Cancio%20&%20Asociados",
                  "_blank"
                )
              } */
