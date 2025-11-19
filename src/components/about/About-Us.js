import React from "react";
import "./about.css";
import house from "../../assets/img_martillo.webp";

const AboutUs = () => {
  const stats = [
    {
      number: "25+",
      label: "Años de Experiencia",

    },
    {
      number: "100+",
      label: "Casos Resueltos",

    },
    {
      number: "98%",
      label: "Casos Exitosos",

    },
    {
      number: "24/7",
      label: "Atención al Cliente",

    }
  ];

  const features = [
    {
      title: "Asesoramiento Personalizado",
      description: "Cada caso es único. Diseñamos estrategias jurídicas específicas para proteger tus derechos.",
      icon: "👤"
    },
    {
      title: "Equipo Multidisciplinario",
      description: "Abogados especializados en penal, civil, laboral, familia y violencia de género.",
      icon: "👥"
    },
    {
      title: "Ética y Confianza",
      description: "Relaciones basadas en la transparencia, compromiso y respeto mutuo con nuestros clientes.",
      icon: "🤝"
    }
  ];

  return (
    <div id="about" className="about-section">
      {/* Header Section */}
      <div className="about-header">
        <h1 className="about-title">Sobre El Estudio Jurídico Jorge Cancio</h1>
        <div className="about-title-underline"></div>
        <p className="about-subtitle">
          Excelencia legal con pasión y compromiso desde hace más de 25 años
        </p>
      </div>

      {/* Main Content */}
      <div className="about-main-content">
        {/* Image Section with Overlay */}
        <div className="about-image-wrapper">
          <div className="image-overlay-gradient"></div>
          <img className="about-image" src={house} alt="Estudio Jurídico" />
          <div className="image-badge">
            <span className="badge-icon">⚖️</span>
            <span className="badge-text">Justicia & Excelencia</span>
          </div>
        </div>

        {/* Text Content */}
        <div className="about-text-content">
          <h2 className="content-title">Soluciones Legales Integrales</h2>
          <div className="content-divider"></div>
          
          <p className="content-description">
            En nuestro estudio jurídico en Argentina, nos especializamos en
            brindar soluciones legales integrales y personalizadas. Nuestro
            equipo de abogados altamente capacitados cuenta con una amplia
            experiencia en diversas áreas del derecho, como penal, género,
            familia, civil y laboral.
          </p>

          <p className="content-description">
            Nuestra pasión por el derecho y el compromiso con nuestros clientes
            nos impulsan a comprender sus necesidades únicas, diseñando
            estrategias jurídicas efectivas para proteger sus derechos e
            intereses. Valoramos profundamente la ética y la confianza mutua en
            cada interacción.
          </p>

          <p className="content-links-wrapper">
            Conocé en detalle nuestras{" "}
            <a className="content-link" href="#esp">
              especializaciones clave
            </a>{" "}
            y revisá{" "}
            <a className="content-link" href="#casos">
              los casos mediáticos que defendimos
            </a>{" "}
            para entender cómo podemos acompañarte.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="about-stats">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <span className="stat-icon">{stat.icon}</span>
            <h3 className="stat-number">{stat.number}</h3>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Features Section */}
      <div className="about-features">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon-wrapper">
              <span className="feature-icon">{feature.icon}</span>
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="about-decoration decoration-1"></div>
      <div className="about-decoration decoration-2"></div>
      <div className="about-decoration decoration-3"></div>
    </div>
  );
};

export default AboutUs;
