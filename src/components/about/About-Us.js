import React from "react";
//import './About-Us.scss'
import "./about.css";
import house from "../../assets/img_martillo.webp";

const AboutUs = () => {
  return (
    <div id="about" className="about-container">
      <div className="dotted"></div>
      <div className="dotted dTwo"></div>
      <div className="dotted dThree"></div>
      <h2>Sobre El Estudio Juridico Jorge Cancio</h2>
      <p className="about-phrase"></p>
      <div className="about-content">
        <img className="about-image" src={house} alt="main-house" />
        <div className="about-p">
          <h3>Soluciones Integrales</h3>
          <p>
            En nuestro estudio jurídico en Argentina, nos especializamos en
            brindar soluciones legales integrales y personalizadas. Nuestro
            equipo de abogados altamente capacitados cuenta con una amplia
            experiencia en diversas áreas del derecho, como penal, género,
            familia, civil y laboral. Nuestra pasión por el derecho y el
            compromiso con nuestros clientes nos impulsan a comprender sus
            necesidades únicas, diseñando estrategias jurídicas efectivas para
            proteger sus derechos e intereses. Valoramos profundamente la ética
            y la confianza mutua en cada interacción con nuestros clientes.
            Nuestra prioridad es ofrecer un servicio legal excepcional,
            brindando orientación experta y representación confiable en todos
            los aspectos de su caso. Ya sea que enfrentes un desafío legal
            complicado o necesites asesoramiento en algún asunto específico,
            estamos aquí para ayudarte. Como un referente en el campo del
            derecho, nos esforzamos por establecer relaciones a largo plazo con
            nuestros clientes. Queremos ser tu aliado de confianza a lo largo de
            tu trayectoria legal, ofreciéndote el respaldo de un equipo
            comprometido y profesional. Si buscas resultados positivos
            respaldados por un equipo experimentado, nuestro estudio jurídico
            está listo para ofrecerte la mejor asesoría y representación.
          </p>
        </div>
        <div className="blue-border"></div>
      </div>
    </div>
  );
};

export default AboutUs;
