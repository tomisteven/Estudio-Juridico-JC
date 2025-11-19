import React from "react";
//import "./testimonials.scss";
import "./test.css";
import TestimonialA from "../utils/testimonial/Testimonial-1";
import TestimonialB from "../utils/testimonial/testimonial-2";
import Profile01 from "../../assets/juncos.webp";
import Profile03 from "../../assets/rox.webp";
import Profile04 from "../../assets/aixa.jpg";

const Testmonials = () => {
  const userArray = [
    {
      photo: Profile01,
      name: "Dr. Diego Juncos",
      esp: [
        "- Derecho Penal",
        "- Derecho Civil",
        "- Derecho Comercial",
        "- Daño y Perjuicios",
      ],
      text: "Justicia tarda, pero llegamos: luchamos por resultados justos y equitativos.",
    },
    {
      photo: Profile03,
      name: "Roxana C. Pawluszek",
      esp: [
        "- Derecho Civil",
        "- Derecho Laboral",
        "- Violencia de Género",
        "- Derecho Penal",
      ],
      text: "La verdad prevalecerá: defendemos sus derechos y buscamos la verdad.",
    },
    {
      photo: Profile04,
      name: "Dra. Aixa Cancio",
      esp: [
        "- Derecho Civil",
        "- Derecho Laboral",
        "- Violencia de Género",
        "- Derecho Penal",
        "- Derecho de Familia",
        "- Derecho Comercial",
      ],
      text: "Comprometidos con la justicia: su caso es nuestra prioridad.",
    },
  ];

  return (
    <div id="abogados" className="testimonials-main">
      <h1>Nuestros Abogados</h1>
      <p className="description">
        Soluciones efectivas para cualquier problema.
      </p>
      <div className="testb-container">
          <TestimonialB />
        </div>
      <div className="testimonials-container">
        <div className="dotted"></div>
        <div className="dotted d2 "></div>
        <div className="dotted d3 "></div>
        <div className="dotted d4 "></div>
        <div className="cards-grid">
          {userArray.map((user, index) => (
            <div className={`card-wrapper card-${index + 1}`} key={user.name}>
              <TestimonialA
                photo={user.photo}
                name={user.name}
                esp={user.esp}
                text={user.text}
              />
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};

export default Testmonials;
