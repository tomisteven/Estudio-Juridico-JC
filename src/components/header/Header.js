import React from "react";
import { Button, Icon } from "semantic-ui-react";
//import "./Header.scss";
import "./Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header>
      <div className="blue-shadow"></div>
      <div className="round-pic"></div>
      <div className="header-container">
        <div className="header-navbar">
          <div className="top-bar">
            <img className="img-header-logo" src={logo} alt="" />
            <a className="title" href="!#">
              Estudio Juridico Integral
            </a>
            <div className="links">
              <a href="!#">Inicio</a>
              <a href="#about">Nosotros</a>
              <a href="#casos">Casos</a>
              <a href="#esp">Especializaciones</a>
              <a href="#abogados">Abogados</a>
            </div>
          </div>
        </div>{" "}
        {/*  Navbar */}
        <div className="message">
          <h1>Dr Jorge Cancio & Asociados</h1>
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
          <Button
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/send?phone=+5491157541353&text=Hola!%20Quiero%20agendar%20una%20cita%20con%20el%20Dr.%20Cancio%20&%20Asociados",
                "_blank"
              )
            }
            className="button"
            color="green"
          >
            <Icon size="big" name="whatsapp" /> Contactanos
          </Button>
        </div>{" "}
      </div>
    </header>
  );
};

export default Header;
