import React from "react";
import { Button, Icon } from "semantic-ui-react";
//import "./Header.scss";
import "./Header.css"
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header>
      <div className="blue-shadow"></div>
      <div className="round-pic"></div>
      <div className="header-container">
        <div className="header-navbar">
          <div className="top-bar">
            <img className="img-header-logo" src={logo} alt=""/>
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
          <h1>Dr Cancio & Asociados</h1>
          <p>
            En nuestro estudio jurídico especializado en derecho integral, nos enorgullece ofrecer un enfoque completo y personalizado para satisfacer las necesidades legales de nuestros clientes. Con años de experiencia en diversas áreas del derecho, nuestro equipo de abogados altamente capacitados se compromete a brindar asesoramiento legal sólido y representación de calidad en cada caso que atendemos. Nos dedicamos a comprender a fondo las circunstancias únicas de nuestros clientes y a diseñar estrategias jurídicas efectivas que busquen proteger sus derechos e intereses. Nuestro objetivo es proporcionar un servicio legal excepcional, basado en la ética, la excelencia profesional y la confianza mutua con nuestros clientes. Estamos aquí para apoyarte en cada paso del proceso legal, brindándote orientación experta y representación confiable en todos los aspectos de tu caso.
          </p>
          <Button onClick={
            () => window.open("https://api.whatsapp.com/send?phone=+5491157541353&text=Hola!%20Quiero%20agendar%20una%20cita%20con%20el%20Dr.%20Cancio%20&%20Asociados", "_blank")
          } className="button" color="green">
            <Icon size="big" name="whatsapp" /> Contactanos
          </Button>
        </div>{" "}
      </div>
    </header>
  );
};

export default Header;
