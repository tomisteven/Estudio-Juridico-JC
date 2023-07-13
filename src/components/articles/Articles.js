import React, { useState } from "react";
import "./articles.css";
//import article from "../../assets/article.webp";
import article2 from "../../assets/article2.jpg";
import article3 from "../../assets/article3.jpg";
import { Button, Icon, Rating } from "semantic-ui-react";


export default function Articles() {
  const articles = [
    {
      id: 1,
      title: "¿Para que sirve una declaratoria de 1 ?",
      description:
        "Cuando una persona fallece, se inicia la sucesion a fin de determinar quienes seran los herederos de esa persona o a fin de evaluar la validez del testamento.",
      description2:
        "Cuando culmina este proceso se dicta una sentencia de declaratoria de herederos la cual puede ser modificada posteriori en caso de aparecer otro heredero",
      description3:
        "La declaratoria de herederos es el paso previo al juicio sucesorio. Una vez terminado el trámite de la declaratoria, los herederos están capacitados para iniciar el juicio sucesorio o bien vender los bienes mediante lo que denomina “tracto abreviado”, en este caso, debe haber acuerdo unanime entre los herederos.",
      img: article2,
      rating: 4,
    },
    {
      id: 2,
      title: "¿Para que sirve una declaratoria de 2 ?",
      description:
        "Cuando una persona fallece, se inicia la sucesion a fin de determinar quienes seran los herederos de esa persona o a fin de evaluar la validez del testamento.",
      description2:
        "Cuando culmina este proceso se dicta una sentencia de declaratoria de herederos la cual puede ser modificada posteriori en caso de aparecer otro heredero",
      description3:
        "La declaratoria de herederos es el paso previo al juicio sucesorio. Una vez terminado el trámite de la declaratoria, los herederos están capacitados para iniciar el juicio sucesorio o bien vender los bienes mediante lo que denomina “tracto abreviado”, en este caso, debe haber acuerdo unanime entre los herederos.",
      img: article2,
      rating: 4,
    },
    {
      id: 3,
      title: "¿Para que sirve una declaratoria de 3 ?",
      description:
        "Cuando una persona fallece, se inicia la sucesion a fin de determinar quienes seran los herederos de esa persona o a fin de evaluar la validez del testamento.",
      description2:
        "Cuando culmina este proceso se dicta una sentencia de declaratoria de herederos la cual puede ser modificada posteriori en caso de aparecer otro heredero",
      description3:
        "La declaratoria de herederos es el paso previo al juicio sucesorio. Una vez terminado el trámite de la declaratoria, los herederos están capacitados para iniciar el juicio sucesorio o bien vender los bienes mediante lo que denomina “tracto abreviado”, en este caso, debe haber acuerdo unanime entre los herederos.",
      img: article3,
      rating: 4,
    },
    {
      id: 4,
      title: "¿Para que sirve una declaratoria de 4 ?",
      description:
        "Cuando una persona fallece, se inicia la sucesion a fin de determinar quienes seran los herederos de esa persona o a fin de evaluar la validez del testamento.",
      description2:
        "Cuando culmina este proceso se dicta una sentencia de declaratoria de herederos la cual puede ser modificada posteriori en caso de aparecer otro heredero",
      description3:
        "La declaratoria de herederos es el paso previo al juicio sucesorio. Una vez terminado el trámite de la declaratoria, los herederos están capacitados para iniciar el juicio sucesorio o bien vender los bienes mediante lo que denomina “tracto abreviado”, en este caso, debe haber acuerdo unanime entre los herederos.",
      img: article2,
      rating: 4,
    },
    {
      id: 5,
      title: "¿Para que sirve una declaratoria de 5 ?",
      description:
        "Cuando una persona fallece, se inicia la sucesion a fin de determinar quienes seran los herederos de esa persona o a fin de evaluar la validez del testamento.",
      description2:
        "Cuando culmina este proceso se dicta una sentencia de declaratoria de herederos la cual puede ser modificada posteriori en caso de aparecer otro heredero",
      description3:
        "La declaratoria de herederos es el paso previo al juicio sucesorio. Una vez terminado el trámite de la declaratoria, los herederos están capacitados para iniciar el juicio sucesorio o bien vender los bienes mediante lo que denomina “tracto abreviado”, en este caso, debe haber acuerdo unanime entre los herederos.",
      img: article2,
      rating: 4,
    },
    {
      id: 6,
      title: "¿Para que sirve una declaratoria de 6 ?",
      description:
        "Cuando una persona fallece, se inicia la sucesion a fin de determinar quienes seran los herederos de esa persona o a fin de evaluar la validez del testamento.",
      description2:
        "Cuando culmina este proceso se dicta una sentencia de declaratoria de herederos la cual puede ser modificada posteriori en caso de aparecer otro heredero",
      description3:
        "La declaratoria de herederos es el paso previo al juicio sucesorio. Una vez terminado el trámite de la declaratoria, los herederos están capacitados para iniciar el juicio sucesorio o bien vender los bienes mediante lo que denomina “tracto abreviado”, en este caso, debe haber acuerdo unanime entre los herederos.",
      img: article3,
      rating: 4,
    },
  ];
  const [articleActive, setArticleActive] = useState(articles[0]);
 // const [classActive, setClassActive] = useState("article-active");

  const handleArticle = (dir) => {
    if(dir){
      console.log("Izquierda");
      if (articleActive.id - 1 > 1) {
        console.log(articles[articleActive].id);
        setArticleActive(articles[articleActive.id - 1]);
      } else {
        console.log(articleActive.id);
        setArticleActive(articles[articles]);
      }
    }
    else{
      console.log("Derecha");
      if (articleActive.id + 1 > articles.length) {
        console.log(articles[0].id);
        setArticleActive(articles[0]);
      } else {
        console.log(articleActive.id);
        setArticleActive(articles[articleActive.id]);
      }
    }
  };

  return (
    <section>
      <h2 className="title-articles">Articulos Utiles</h2>
      <div class="cont-articles">
        <Button
          className="btn-articles"
          onClick={() => handleArticle(true)}
        >
          <Icon name="arrow left" size="small" />
        </Button>
        <div class="card-articles">
          <div class="card-header-articles">
            <div class="cont-img-header">
              <img className="img-card-articles" src={article2} alt="" />
            </div>
          </div>
          <div class="card-body-articles">
            <h2>{articleActive.title}</h2>
            <div class="p-cont">
              <p>
                <Icon
                  className="icon-articles"
                  name="point"
                  color="green"
                  size="tiny"
                />
                Cuando una persona fallece, se inicia la sucesion a fin de
                determinar quienes seran los herederos de esa persona o a fin de
                evaluar la validez del testamento.
              </p>
            </div>
            <div class="p-cont">
              <p>
                <Icon
                  className="icon-articles"
                  name="point"
                  color="green"
                  size="tiny"
                />
                Cuando culmina este proceso se dicta una sentencia de
                declaratoria de herederos la cual puede ser modificada
                posteriori en caso de aparecer otro heredero
              </p>
            </div>
            <div class="p-cont">
              <p>
                <Icon
                  className="icon-articles"
                  name="point"
                  color="green"
                  size="tiny"
                />
                La declaratoria de herederos es el paso previo al juicio
                sucesorio. Una vez terminado el trámite de la declaratoria, los
                herederos están capacitados para iniciar el juicio sucesorio o
                bien vender los bienes mediante lo que denomina “tracto
                abreviado”, en este caso, debe haber acuerdo unanime entre los
                herederos.
              </p>
            </div>

            <div class="footer-card">
              <Rating
                className="star-bottom"
                disabled
                icon="star"
                size="massive"
                defaultRating={3}
                maxRating={5}
              />
            </div>
          </div>
        </div>
        <Button
          className="btn-articles"
          onClick={() => handleArticle(false)}
        >
          <Icon name="arrow right" size="small" />
        </Button>
      </div>
    </section>
  );
}
