import React from "react";
import "./properties.css";
import cariglino from "../../assets/cariglino.webp";

const Properties = () => {
  const cases = [
    {
      id: 1,
      image: "https://www.infobae.com/resizer/v2/https%3A%2F%2Fs3.amazonaws.com%2Farc-wordpress-client-uploads%2Finfobae-wp%2Fwp-content%2Fuploads%2F2019%2F06%2F05224001%2Fpitbull-2.jpg?auth=87667b7149ebe34b1b61aa34225305654c9c21992a5020b3bee81e854b26d7f7&smart=true&width=800&height=600&quality=85",
      title: "Caso Pitbulls",
      description: "No sacrificarán a los pitbulls que atacaron al ladrón en Los Polvorines ni enjuiciarán a su dueña, según el juzgado.",
      link: "https://www.infobae.com/sociedad/2019/06/10/no-sacrificaran-a-los-pitbulls-que-atacaron-al-ladron-en-los-polvorines-ni-enjuiciaran-a-su-duena/",
      featured: true,
      category: "Derecho Penal"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
      title: "Violencia de Género",
      description: "La historia de la mujer que denunció a su ex por violencia de género y terminó presa por falso testimonio",
      link: "https://www.clarin.com/sociedad/viajo-madrid-acosar-ex-puso-gps-auto-detuvieron-volvio-argentina-camino-saco-pulsera-electronica_0_2UolCQOGUa.html",
      category: "Derecho de Familia"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&q=80",
      title: "Secuestrador Negro Sombra",
      description: "La historia del temible secuestrador Negro Sombra: extorsiones, presunta protección policial y una insólita defensa",
      link: "https://www.infobae.com/sociedad/policiales/2019/04/03/la-historia-del-temible-secuestrador-negro-sombra-extorsiones-presunta-proteccion-policial-y-una-insolita-defensa/",
      category: "Derecho Penal"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&q=80",
      title: "Maria Luisa Carmona",
      description: "Abuela asesinada en Marcos Paz - Etapas decisivas del caso",
      link: "https://infobaires24.com.ar/etapas-decisivas-en-el-caso-de-la-abuela-asesinada-en-marcos-paz/",
      category: "Derecho Penal"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80",
      title: "Evasión y Lavado - Intendente Hurlingham",
      description: "El intendente de Hurlingham, Luis Acuña, investigado por lavado de dinero y evasión",
      link: "https://www.diariopopular.com.ar/politica/investigan-al-intendente-acuna-evasion-y-lavado-n212040",
      category: "Derecho Penal"
    },
    {
      id: 6,
      image: cariglino,
      title: "Irregularidades en Contrataciones",
      description: "Denuncian al intendente de Malvinas Argentinas por contrataciones directas irregulares y piden investigación por lavado",
      link: "https://www.telam.com.ar/notas/201510/122641-cariligno-denuncia-irregularidades-contrataciones-lavado.html",
      category: "Derecho Administrativo"
    },
  ];

  const stats = [
    {
      number: "98%",
      label: "Casos Ganados",

      
    },
    {
      number: "30+",
      label: "Años de Experiencia",

    },
    {
      number: "100+",
      label: "Clientes Satisfechos",

    }
  ];

  return (
    <section id="casos" className="cases-section">
      {/* Header */}
      <div className="cases-header">
        <div className="cases-badge">
          <span>Nuestro Trabajo</span>
        </div>
        <h2 className="cases-title">Casos Mediáticos</h2>
        <p className="cases-description">
          Conocé algunos de los expedientes más resonantes que defendimos con éxito y{" "}
          <a href="#abogados" className="cases-link">
            contactanos para analizar tu caso
          </a>
        </p>
      </div>

      {/* Stats */}
      <div className="cases-stats">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <span className="stat-icon">{stat.icon}</span>
            <h3 className="stat-number">{stat.number}</h3>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Cases Grid */}
      <div className="cases-grid">
        {cases.map((caseItem) => (
          <article
            key={caseItem.id}
            className={`case-card ${caseItem.featured ? "case-featured" : ""}`}
          >
            <div className="case-image-wrapper">
              <img
                src={caseItem.image}
                alt={caseItem.title}
                className="case-image"
                loading="lazy"
              />
              <div className="case-overlay"></div>
              <span className="case-badge">
                {caseItem.featured ? "Caso Destacado" : caseItem.category}
              </span>
            </div>

            <div className="case-content">
              <h3 className="case-title">{caseItem.title}</h3>
              <p className="case-description">{caseItem.description}</p>
              <a
                href={caseItem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="case-link-btn"
                aria-label={`Leer más sobre ${caseItem.title}`}
              >
                <span>Ver detalles del caso</span>
                <svg className="link-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* Call to Action */}
      <div className="cases-cta">
        <div className="cta-content">
          <h3 className="cta-title">¿Necesitás Asesoramiento Legal?</h3>
          <p className="cta-description">
            Contamos con más de 30 años de experiencia en casos complejos. 
            Nuestro equipo está listo para defender tus derechos.
          </p>
          <a href="#abogados" className="cta-button">
            <span>Consultá con Nuestros Abogados</span>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="currentColor"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="cases-decoration decoration-1"></div>
      <div className="cases-decoration decoration-2"></div>
    </section>
  );
};

export default Properties;