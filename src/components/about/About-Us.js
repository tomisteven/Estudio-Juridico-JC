import React from "react";
//import './About-Us.scss'
import "./about.css"
import house from '../../assets/img_martillo.webp'

const AboutUs = () => {
  return (
    <div id="about" className="about-container">
      <div className="dotted"></div>
      <div className="dotted dTwo"></div>
      <div className="dotted dThree"></div>
      <h2 >Sobre El Estudio Juridico Jorge Cancio</h2>
      <p className="about-phrase"></p>
      <div className="about-content">

        <img className="about-image" src={house} alt="main-house" />
        <div className="about-p">
          <h3>Soluciones Integrales</h3>
          <p>
          Somos un estudio jurídico especializado en derecho integral, comprometido en brindar soluciones legales completas y personalizadas a nuestros clientes. Con un equipo de abogados altamente capacitados y experiencia en diversas áreas del derecho, nos esforzamos por comprender las necesidades únicas de cada cliente y diseñar estrategias jurídicas efectivas para proteger sus derechos e intereses. Nuestro objetivo es proporcionar un servicio legal excepcional basado en la ética y la confianza mutua con nuestros clientes, ofreciendo orientación experta y representación confiable en todos los aspectos de su caso.
          </p>
        </div>
        <div className="blue-border"></div>
      </div>
    </div>
  );
};

export default AboutUs;
