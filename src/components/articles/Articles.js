import React, { useState } from "react";
import "./articles.css";
//import article from "../../assets/article.webp";
import article2 from "../../assets/herederos.webp";
import article3 from "../../assets/article3.webp";
import article4 from "../../assets/accidente.webp";
import { Icon, Rating } from "semantic-ui-react";

export default function Articles() {
  const articles = [
    {
      id: 0,
      title: "¿Para que sirve una declaratoria de Herederos ?",
      descriptions: [
        "Cuando una persona fallece, se inicia la sucesion a fin de determinar quienes seran los herederos de esa persona o a fin de evaluar la validez del testamento.",
        "Cuando culmina este proceso se dicta una sentencia de declaratoria de herederos la cual puede ser modificada posteriori en caso de aparecer otro heredero",
        "La declaratoria de herederos es el paso previo al juicio sucesorio. Una vez terminado el trámite de la declaratoria, los herederos están capacitados para iniciar el juicio sucesorio o bien vender los bienes mediante lo que denomina “tracto abreviado”, en este caso, debe haber acuerdo unanime entre los herederos.",
      ],
      img: article2,
      rating: 4,
      mensaje:
        "Para mas informacion sobre declaratoria de herederos, contactanos al +54 11-1234-5678",
    },
    {
      id: 1,
      title: "¿Se cumplen tus Derechos Laborales?",
      descriptions: [
        "Como trabajador tenes derecho a la desconexion digital contemplada en la ley 27.555. El empleador no podra contactar ni exigir la realizacion de tareas, por ningun medio, fuera de la jornada laboral.",
        "Un empleo registrado implica un recibo de sueldom aportes y contribuciones, vacaciones, licencias por enfermedad o accidentes, aguiinaldo, indemnizacion por despido, etc. Si no estas registrado, no tenes estos derechos.",
        "El trabajador no esta obligado a trabajar en dias feriados, salvo casos de peligro, accidente inminente de fuerza mayor o excepciones de la economia naciona o la empresa, juzgado su comportamiento en base a la colaboracion.",
        "Para rendir un examen de enseñanza medio ouniversitaria, el trabajador tiene derecho a gozar un maximo de 10 dias de licencia por año calendario (aunque haya convenios que otorgan mayor cantidad de dias)",
      ],
      img: article3,
      rating: 5,
      mensaje:
        "Para mas informacion sobre tus derechos laborales, contactanos al +54 11-1234-5678",
    },
    {
      id: 2,
      title: "¿Que hacer Frente a un Accidente de Transito?",
      descriptions: [
        "Quieenes participen en un accidente deben detenerse de inmediato e intercambiar los datos de la licencia de conducir y del seguro del auto, si interviene la posicia tambien deben brindarles esos mismos datos.",
        "Si la persona que te choco se dio a la fuga y hay testigos ellos pueden ayudarte con informacion para reclamar por daños. Quien se da a la fuga en un accidente de trabsido y deja herodos puede ser juzgado por abandono de persona (Art. 106 del codigo penal)",
        "No te olvides que el accidente de transito se debe denunciar ante la compania de seguros dentro de los 3 dias de ocurrido el hecho. Si no lo haces, la aseguradora puede negarse a cubrir los daños.",
      ],
      img: article4,
      rating: 5,
      mensaje:
        "Para mas informacion sobre denuncias de accidente de transito, contactanos al +54 11-1234-5678",
    },
  ];
  const [articleActive, setArticleActive] = useState(articles[0]);

  const handleArticle = (dir) => {
    if (dir) {
      if (articleActive.id === 0) {
        const card = document.querySelector(".card-articles");
        card.classList.add("article-active-left");
        setTimeout(() => {
          card.classList.remove("article-active-left");
          setArticleActive(articles[articles.length - 1]);
        }, 700);
      } else {
        const card = document.querySelector(".card-articles");
        card.classList.add("article-active-left");
        setTimeout(() => {
          card.classList.remove("article-active-left");
          setArticleActive(articles[articleActive.id - 1]);
        }, 800);
      }
    } else {
      if (articleActive.id === articles.length - 1) {
         const card = document.querySelector(".card-articles");
        card.classList.add("article-active-rigth");
        setTimeout(() => {
          card.classList.remove("article-active-rigth");
          setArticleActive(articles[0]);
        }, 800);
        /* const btn = document.querySelector(".btn-articles-r");
        btn.style.display = "none"; */
      } else {
        const card = document.querySelector(".card-articles");
        card.classList.add("article-active-rigth");
        setTimeout(() => {
          card.classList.remove("article-active-rigth");
          setArticleActive(articles[articleActive.id + 1]);
        }, 700);
      }
    }
  };

/* const handleArticle = (dir) => {
    if (dir) {
      if (articleActive.id === 0) {
        setArticleActive(articles[articles.length - 1]);
      } else {
        setArticleActive(articles[articleActive.id - 1]);
      }
    } else {
      if (articleActive.id === articles.length) {
        setArticleActive(articles[0]);
      } else {
        setArticleActive(articles[articleActive.id + 1]);
      }
    }
  }; */


  return (
    <section>
      <h2 className="title-articles">Articulos Utiles</h2>
      <div class="cont-articles">
        <button className="btn-articles-l" onClick={() => handleArticle(true)}>
          <Icon name="arrow left" size="big" color="orange" />
        </button>
        <div id="#card-article" class="card-articles">
          <div class="card-header-articles">
            <div class="cont-img-header">
              <img
                className="img-card-articles"
                src={articleActive.img}
                alt=""
              />
            </div>
          </div>
          <div class="card-body-articles">
            <h2>{articleActive.title}</h2>
            {articleActive.descriptions.map((item) => {
              return (
                <div class="p-cont">
                  <p>
                    <Icon
                      className="icon-articles"
                      name="point"
                      color="green"
                      size="tiny"
                    />
                    {item}
                  </p>
                </div>
              );
            })}

            <div class="footer-card">
              <Icon
                className="icon-articles-p"
                name="phone"
                color="red"
                size="tiny"
              />
              <p className="p-footer">{articleActive.mensaje}</p>
              <Rating
                className="star-bottom"
                disabled
                icon="star"
                size="massive"
                defaultRating={articleActive.rating}
                maxRating={5}
              />
            </div>
          </div>
        </div>
        <button className="btn-articles-r" onClick={() => handleArticle(false)}>
          <Icon name="arrow right" color="green" size="big" />
        </button>
        {/* <Button className="btn-articles" onClick={() => handleArticle(false)}>
          <Icon color="green" name="arrow right" size="small" />
        </Button> */}
      </div>
    </section>
  );
}
