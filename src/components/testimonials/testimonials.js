import React from "react";
import "./test.css";
import LawyerCard from "../utils/testimonial/LawyerCard";
import Profile01 from "../../assets/juncos.webp";
import Profile03 from "../../assets/rox.webp";
import Profile04 from "../../assets/aixa.jpg";
import Profile02 from "../../assets/jorge.webp";

const Testmonials = () => {
  const lawyersArray = [
    {
      photo: Profile02,
      name: "Dr. Jorge Cancio",
      role: "Socio Fundador",
      specialties: [
        "Derecho Penal",
        "Criminología",
      ],
      university: "Universidad de Buenos Aires",
      quote: "En nuestro estudio jurídico, nos enorgullece ofrecer una representación legal excepcional, buscando la justicia y protegiendo los derechos de nuestros clientes con pasión y experiencia.",
      featured: true,
    },
    {
      photo: Profile01,
      name: "Dr. Diego Juncos",
      role: "Abogado Asociado",
      specialties: [
        "Derecho Penal",
        "Derecho Civil",
        "Derecho Comercial",
        "Daño y Perjuicios",
      ],
      quote: "Justicia tarda, pero llegamos: luchamos por resultados justos y equitativos.",
      featured: false,
    },
    {
      photo: Profile03,
      name: "Roxana C. Pawluszek",
      role: "Abogada Asociada",
      specialties: [
        "Derecho Civil",
        "Derecho Laboral",
        "Violencia de Género",
        "Derecho Penal",
      ],
      quote: "La verdad prevalecerá: defendemos sus derechos y buscamos la verdad.",
      featured: false,
    },
    {
      photo: Profile04,
      name: "Dra. Aixa Cancio",
      role: "Abogada Asociada",
      specialties: [
        "Derecho Civil",
        "Derecho Laboral",
        "Violencia de Género",
        "Derecho Penal",
        "Derecho de Familia",
        "Derecho Comercial",
      ],
      quote: "Comprometidos con la justicia: su caso es nuestra prioridad.",
      featured: false,
    },
  ];

  const featuredLawyer = lawyersArray.find(lawyer => lawyer.featured);
  const otherLawyers = lawyersArray.filter(lawyer => !lawyer.featured);

  return (
    <div id="abogados" className="lawyers-section">
      <div className="lawyers-header">
        <h1 className="lawyers-title">Nuestros Abogados</h1>
        <p className="lawyers-subtitle">
          Un equipo de profesionales comprometidos con la excelencia y la justicia
        </p>
      </div>

      {/* Featured Lawyer */}
      {featuredLawyer && (
        <div className="featured-lawyer-container">
          <LawyerCard lawyer={featuredLawyer} featured={true} />
        </div>
      )}

      {/* Other Lawyers Grid */}
      <div className="lawyers-grid">
        {otherLawyers.map((lawyer, index) => (
          <LawyerCard key={lawyer.name} lawyer={lawyer} featured={false} />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="decorative-circle circle-1"></div>
      <div className="decorative-circle circle-2"></div>
      <div className="decorative-gradient gradient-1"></div>
      <div className="decorative-gradient gradient-2"></div>
    </div>
  );
};

export default Testmonials;
