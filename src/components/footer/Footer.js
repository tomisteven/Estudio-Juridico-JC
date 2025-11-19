import React from "react";
import "./footer.css";
import logo from "../../assets/logo.webp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const specializations = [
    { name: "Derecho Civil", href: "#esp" },
    { name: "Derecho Penal", href: "#esp" },
    { name: "Derecho Laboral", href: "#esp" },
    { name: "Derecho de Familia", href: "#esp" },
    { name: "Violencia de Género", href: "#esp" },
    { name: "Daños y Perjuicios", href: "#esp" },
  ];

  const quickLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Sobre Nosotros", href: "#about" },
    { name: "Especialidades", href: "#esp" },
    { name: "Casos Destacados", href: "#casos" },
    { name: "Nuestros Abogados", href: "#abogados" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      url: "https://www.facebook.com/jorgecancioabogado",
      color: "#1877f2"
    },
    {
      name: "Instagram",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      url: "https://www.instagram.com/cancio_jorge/?hl=es-la",
      color: "#e4405f"
    },
    {
      name: "Twitter",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      url: "https://twitter.com/drjorgecancio",
      color: "#1da1f2"
    },
  ];

  return (
    <footer id="contacto" className="footer" role="contentinfo">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-brand">
            <img src={logo} alt="Estudio Jurídico Jorge Cancio" className="footer-logo" />
            <h3 className="brand-title">Estudio Jurídico Integral</h3>
            <p className="brand-subtitle">Dr. Jorge Cancio & Asociados</p>
            <p className="brand-description">
              Más de 30 años defendiendo tus derechos en Don Torcuato y alrededores.
              Comprometidos con la justicia y la excelencia profesional.
            </p>
          </div>

          <div className="footer-links">
            {/* Especialidades */}
            <div className="footer-column">
              <h4 className="column-title">Especialidades</h4>
              <ul className="link-list">
                {specializations.map((spec, index) => (
                  <li key={index}>
                    <a href={spec.href} className="footer-link">
                      <svg className="link-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {spec.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Enlaces Rápidos */}
            <div className="footer-column">
              <h4 className="column-title">Enlaces Rápidos</h4>
              <ul className="link-list">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      <svg className="link-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacto */}
            <div className="footer-column">
              <h4 className="column-title">Contacto</h4>
              <ul className="contact-list">
                <li className="contact-item">
                  <svg className="contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <a href="tel:+541157541353" className="contact-link">
                    +54 11 5754-1353
                  </a>
                </li>
                <li className="contact-item">
                  <svg className="contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <a href="mailto:drcancio@hotmail.com" className="contact-link">
                    drcancio@hotmail.com
                  </a>
                </li>
                <li className="contact-item">
                  <svg className="contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <a 
                    href="https://goo.gl/maps/r383EhBJgmErtzyi6" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    Menéndez y Pelayo 1504, Don Torcuato
                  </a>
                </li>
              </ul>

              {/* Horario */}
              <div className="office-hours">
                <h5 className="hours-title">Horario de Atención</h5>
                <p className="hours-text">Lunes a Viernes: 9:00 - 18:00</p>
                <p className="hours-text">Urgencias: 24/7</p>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section - Social Media */}
        <div className="footer-social">
          <h4 className="social-title">Seguinos en Redes Sociales</h4>
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                style={{ '--social-color': social.color }}
                aria-label={`Seguir en ${social.name}`}
              >
                <span className="social-icon">{social.icon}</span>
                <span className="social-name">{social.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="copyright-content">
            <p className="copyright-text">
              © {currentYear} Estudio Jurídico Jorge Cancio. Todos los derechos reservados.
            </p>
            <p className="credit-text">
              Diseñado y desarrollado por{" "}
              <a
                href="https://www.factosdev.com.ar"
                target="_blank"
                rel="noopener noreferrer"
                className="credit-link"
              >
                Factos DEV
              </a>
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="footer-decoration decoration-1"></div>
        <div className="footer-decoration decoration-2"></div>
      </div>
    </footer>
  );
};

export default Footer;
