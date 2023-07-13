import React from "react";
//import "./Properties.scss";
import "./properties.css";
import { Button, Icon } from "semantic-ui-react";

import Card from "../utils/card/card";
import MainCard from "../utils/main-card/main-card";

import bath01 from "../../assets/pitbulls.webp";
import acoso from "../../assets/acoso_ex.webp";
import leiva from "../../assets/leiva.webp";
import user from "../../assets/mariacarmona.webp";
import acuña from "../../assets/acuña.webp";
import cariglino from "../../assets/cariglino.webp";

const Properties = () => {
  const cards = [
    {
      pic: bath01,
      id: 1,
      data: "Caso Pitbulls",
      link: "https://www.infobae.com/sociedad/2019/06/10/no-sacrificaran-a-los-pitbulls-que-atacaron-al-ladron-en-los-polvorines-ni-enjuiciaran-a-su-duena/",
      desc: "No sacrificarán a los pitbulls que atacaron al ladrón en Los Polvorines ni enjuiciarán a su dueña",
    },
    {
      pic: acoso,
      id: 2,
      data: "Separados, Amenazas y más",
      link: "https://www.clarin.com/sociedad/viajo-madrid-acosar-ex-puso-gps-auto-detuvieron-volvio-argentina-camino-saco-pulsera-electronica_0_2UolCQOGUa.html#:~:text=Carlos%20Marcelo%20Di%20Stefano%20tiene,Madrid%20para%20alejarse%20del%20peligro.",
      desc: "Separados, amenazas y más: la historia de la mujer que denunció a su ex por violencia de género y terminó presa por falso testimonio",
    },
    {
      pic: leiva,
      id: 3,
      data: "Secuestrador Negro Sombra",
      link: "https://www.infobae.com/sociedad/policiales/2019/04/03/la-historia-del-temible-secuestrador-negro-sombra-extorsiones-presunta-proteccion-policial-y-una-insolita-defensa/",
      desc: "La historia del temible secuestrador Negro Sombra: extorsiones, presunta protección policial y una insólita defensa",
    },
    {
      pic: user,
      id: 4,
      data: "Maria Luisa Carmona",
      link: "https://infobaires24.com.ar/etapas-decisivas-en-el-caso-de-la-abuela-asesinada-en-marcos-paz/",
      desc: "Abuela asesinada en Marcos Paz",
    },
    {
      pic: acuña,
      id: 6,
      data: "Evasión y lavado por parte del intendente de Hurlingham",
      link: "https://infobaires24.com.ar/etapas-dhttps://www.diariopopular.com.ar/politica/investigan-al-intendente-acuna-evasion-y-lavado-n212040",
      desc: "El intendente del municipio bonaerense de Hurlingham, Luis Acuña, y toda su familia, son investigados por lavado de dinero y evasión, de acuerdo con una causa penal",
    },
    {
      pic: cariglino,
      id: 5,
      data: "Denuncian a Cariglino por irregularidades en las contrataciones directas y piden investigarlo por lavado",
      link: "https://www.telam.com.ar/notas/201510/122641-cariligno-denuncia-irregularidades-contrataciones-lavado.html",
      desc: "El abogado penalista Jorge Cancio, quien también lleva adelante denuncias de familiares por mala praxis del sistema de salud de Malvinas Argentinas, denunció hoy que el intendente del citado partido bonaerense realizó contrataciones directas “que violan claramente toda la legislación” por lo que pidió que se lo investigue por posible “lavado de dinero” - TELAM SE 2022. Queda expresamente prohibida la utilización de este contenido sin citar la autoría de TELAM, la omisión de este requisito es violatorio del Régimen Legal de la Propiedad Intelectual, Ley 11.723. lo que habilita el reclamo de nuestros derechos por vía judicial.",
    },
  ];

  return (
    <div id="casos" className="properties-container">
      <h2> Casos Mediaticos </h2>
      <p> </p>
      <div className="cards-container">
        <MainCard />
        {cards.map((card) => (
          <Card
            key={card.id}
            pic={card.pic}
            data={card.data}
            link={card.link}
            desc={card.desc}
          />
        ))}
      </div>
      <div className="button-container">
        <Button
          onClick={() =>
            (window.location.href =
              "https://www.facebook.com/jorgecancioabogado")
          }
          size="small"
          color="facebook"
        >
          <Icon className="icon" size="big" name="facebook" />
        </Button>
        <Button
          onClick={() =>
            (window.location.href = "https://www.twitter.com/drjorgecancio")
          }
          size="small"
          color="twitter"
        >
          <Icon className="icon" size="big" name="twitter" />
        </Button>
        <Button
          onClick={() =>
            (window.location.href =
              "https://www.instagram.com/estudiojuridicojorgecancio")
          }
          size="small"
          color="orange"
        >
          <Icon className="icon" size="big" name="instagram" />
        </Button>
      </div>
    </div>
  );
};

export default Properties;
