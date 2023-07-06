import React from "react";
//import "./testimonials.scss";
import "./test.css";
import TestimonialA from "../utils/testimonial/Testimonial-1";
import TestimonialB from "../utils/testimonial/testimonial-2";
import Profile01 from "../../assets/juncos.jpg";
import Profile03 from "../../assets/rox.jpg";

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
      name: "Dr. Roxana Pawluszec",
      esp: ["- Derecho Civil", "- Derecho Laboral"],
      text: "La verdad prevalecerá: defendemos sus derechos y buscamos la verdad.",
    },
  ];

  return (
    <div id="abogados" className="testimonials-main">
      <h2>Nuestros Abogados</h2>
      <p className="description">
        Soluciones efectivas para cualquier problema.
      </p>
      <div className="testimonials-container">
        <div className="dotted"></div>
        <div className="dotted d2 "></div>
        <div className="dotted d3 "></div>
        <div className="dotted d4 "></div>
        {userArray.map((user) => (
          <TestimonialA
            key={user.name}
            photo={user.photo}
            name={user.name}
            esp={user.esp}
            text={user.text}
          />
        ))}

        <div className="testb-container">
          <TestimonialB />
        </div>
      </div>
    </div>
  );
};

export default Testmonials;
