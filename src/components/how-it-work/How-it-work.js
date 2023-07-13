import React from "react";
import SampleBox from "../utils/sample-box/Sample-box";
//import "./How-it-work.scss";
import "./how.css"

import hands from "../../assets/handshake.svg";
import familia from "../../assets/familia.webp";
import penal from "../../assets/justicia.webp";
import daños from "../../assets/daños.webp";
import comercial from "../../assets/comercial.webp";
import laboral from "../../assets/laboral.webp";
import civil from "../../assets/civil.webp";
import jubilaciones from "../../assets/jubilacion.webp";

const HowItWork = () => {
  const boxDetails = [
    {
      id: 1,
      bkcolor: "#262626",
      iconColor: "#f6f6f6",
      color: "#ffffff",
      title: "Derecho Penal",
      bColor: "#c4c4c481",
      icon: penal,
      desc: "Defensa legal sólida en casos de delitos. Protegemos tus derechos en cada etapa.",
    },
    {
      id: 2,
      bkcolor: "#297EFF",
      iconColor: "#5A9CFF",
      color: "#ffffff",
      title: "Derecho Sucesorio",
      bColor: "#ffffff",
      icon: hands,
      desc: "Planificación sucesoria, testamentos, partición de bienes y resolución de disputas hereditarias.",
    },
    {
      id: 3,
      bkcolor: "#262626",
      iconColor: "#f6f6f6",
      color: "#ffffff",

      title: "Daños y Perjuicios",
      bColor: "#c4c4c481",
      icon: daños,
      desc: "Buscamos la compensación por daños sufridos por accidentes o incumplimientos",
    },
    {
      id: 4,
      bkcolor: "#297EFF",
      iconColor: "#5A9CFF",
      color: "#ffffff",
      title: "Derecho Comercial",
      bColor: "#c4c4c481",
      icon: comercial,
      desc: "Asesoramiento legal para empresas, contratos y protección de propiedad intelectual..",
    },
    {
      id: 5,
      bkcolor: "#297EFF",
      iconColor: "#5A9CFF",
      color: "#ffffff",
      title: "Derecho Laboral",
      bColor: "#c4c4c481",
      icon: laboral,
      desc: "Asesoramiento y representación en casos laborales. Protegemos tus derechos como trabajador.",
    },
    {
      id: 6,
      bkcolor: "#262626",
      iconColor: "#f6f6f6",
      color: "#ffffff",
      title: "Derecho de Familia",
      bColor: "#c4c4c481",
      icon: familia,
      desc: "Asesoramiento y representación en divorcios, custodia, adopciones y otros asuntos familiares.",
    },
    {
      id: 6,
      bkcolor: "#297EFF",
      iconColor: "#5A9CFF",
      color: "#ffffff",
      title: "Derecho Civil",
      bColor: "#c4c4c481",
      icon: civil,
      desc: "Resolvemos problemas legales en contratos, propiedad, sucesiones y más",
    },
    {
      id: 6,
      bkcolor: "#262626",
      iconColor: "#f6f6f6",
      color: "#ffffff",
      title: "Jubilaciones",
      bColor: "#c4c4c481",
      icon: jubilaciones,
      desc: "Ayuda en la obtención de beneficios previsionales y defensa de tus derechos",
    },
  ];

  return (
    <div id="esp" className="how-container">
      <h2>Especializaciones</h2>
      <p>
        Expertos en múltiples áreas del derecho para abordar tus necesidades
        legales específicas
      </p>
      <div className="boxes-container">
        {boxDetails.map((detail) => (
          <SampleBox
            key={detail.id}
            bkColor={detail.bkcolor}
            iconColor={detail.iconColor}
            color={detail.color}
            title={detail.title}
            bColor={detail.bColor}
            icon={detail.icon}
            desc={detail.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default HowItWork;
