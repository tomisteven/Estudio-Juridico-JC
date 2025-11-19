import React from "react";
import "./LawyerCard.css";

const LawyerCard = ({ lawyer, featured = false }) => {
  const { photo, name, role, specialties, university, quote } = lawyer;

  return (
    <div className={`lawyer-card ${featured ? 'lawyer-card-featured' : ''}`}>
      {/* Background Glow Effect */}
      <div className="card-glow"></div>
      
      {/* Card Content */}
      <div className="card-content">
        {/* Photo Section */}
        <div className="photo-container">
          <div className="photo-ring"></div>
          <img src={photo} alt={name} className="lawyer-photo" />
          {featured && <div className="featured-badge">Socio Fundador</div>}
        </div>

        {/* Info Section */}
        <div className="info-container">
          <h3 className="lawyer-name">{name}</h3>
          <p className="lawyer-role">{role}</p>
          
          {university && (
            <p className="lawyer-university">{university}</p>
          )}

          {/* Quote */}
          <div className="quote-container">
            <svg className="quote-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 8.5C10 8.22386 9.77614 8 9.5 8H6.5C6.22386 8 6 8.22386 6 8.5V11.5C6 11.7761 6.22386 12 6.5 12H8.5V13C8.5 13.8284 7.82843 14.5 7 14.5C6.72386 14.5 6.5 14.7239 6.5 15V15.5C6.5 15.7761 6.72386 16 7 16C8.65685 16 10 14.6569 10 13V8.5Z" fill="currentColor"/>
              <path d="M18 8.5C18 8.22386 17.7761 8 17.5 8H14.5C14.2239 8 14 8.22386 14 8.5V11.5C14 11.7761 14.2239 12 14.5 12H16.5V13C16.5 13.8284 15.8284 14.5 15 14.5C14.7239 14.5 14.5 14.7239 14.5 15V15.5C14.5 15.7761 14.7239 16 15 16C16.6569 16 18 14.6569 18 13V8.5Z" fill="currentColor"/>
            </svg>
            <p className="lawyer-quote">{quote}</p>
          </div>

          {/* Specialties */}
          <div className="specialties-container">
            <h4 className="specialties-title">Especialidades</h4>
            <div className="specialties-grid">
              {specialties.map((specialty, index) => (
                <span key={index} className="specialty-badge">
                  {specialty}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Corner Element */}
      <div className="corner-decoration"></div>
    </div>
  );
};

export default LawyerCard;
