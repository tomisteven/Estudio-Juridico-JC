import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  CheckCircle,
  Phone,
  BookOpen,
  ArrowRight,
} from "lucide-react";

// Simulando las imágenes importadas
const article2 =
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80";
const article3 =
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80";
const article4 =
  "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80";

const StarRating = ({ rating }) => {
  return (
    <div style={{ display: "flex", gap: "4px" }}>
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          size={20}
          fill={index < rating ? "#f39c12" : "none"}
          color={index < rating ? "#f39c12" : "#d1d5db"}
          strokeWidth={2}
        />
      ))}
    </div>
  );
};

const ArticleCard = ({ article, isActive }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        maxWidth: "1100px",
        height: "600px",
        backgroundColor: "white",
        borderRadius: "24px",
        overflow: "hidden",
        boxShadow: "0 10px 40px rgba(0, 0, 0, 0.12)",
        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        opacity: isActive ? 1 : 0,
        transform: isActive ? "scale(1)" : "scale(0.95)",
      }}
    >
      {/* Image Section */}
      <div
        style={{
          position: "relative",
          width: "45%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <img
          src={article.img}
          alt={article.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        {/* Gradient Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(135deg, rgba(48, 86, 211, 0.3) 0%, rgba(41, 126, 255, 0.2) 100%)",
          }}
        />

        {/* Rating Badge */}
        <div
          style={{
            position: "absolute",
            top: "24px",
            left: "24px",
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(10px)",
            padding: "12px 20px",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          }}
        >
          <Star size={18} fill="#f39c12" color="#f39c12" />
          <span
            style={{
              fontSize: "16px",
              fontWeight: "700",
              color: "#1a1a1a",
            }}
          >
            {article.rating}.0
          </span>
        </div>

        {/* Article Badge */}
        <div
          style={{
            position: "absolute",
            bottom: "24px",
            left: "24px",
            backgroundColor: "#199e2bff",
            color: "white",
            padding: "10px 20px",
            borderRadius: "10px",
            fontSize: "13px",
            fontWeight: "600",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <BookOpen size={16} />
          Artículo Legal
        </div>
      </div>

      {/* Content Section */}
      <div
        style={{
          width: "55%",
          padding: "48px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "'Muli', sans-serif",
        }}
      >
        <div>
          <h2
            style={{
              margin: "0 0 24px 0",
              fontSize: "28px",
              fontWeight: "800",
              color: "#1a1a1a",
              lineHeight: "1.3",
              letterSpacing: "-0.5px",
            }}
          >
            {article.title}
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginBottom: "32px",
            }}
          >
            {article.descriptions.map((desc, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "flex-start",
                }}
              >
                <CheckCircle
                  size={20}
                  color="#27ae60"
                  style={{
                    minWidth: "20px",
                    marginTop: "2px",
                  }}
                />
                <p
                  style={{
                    margin: 0,
                    fontSize: "14px",
                    lineHeight: "1.6",
                    color: "#555555",
                    fontWeight: "400",
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            borderTop: "1px solid #e8e8e8",
            paddingTop: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "16px",
              backgroundColor: "#f8f9fa",
              borderRadius: "12px",
            }}
          >
            <Phone size={20} color="#199e2bff" />
            <p
              style={{
                margin: 0,
                fontSize: "13px",
                color: "#666666",
                fontWeight: "500",
              }}
            >
              {article.mensaje}
            </p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <StarRating rating={article.rating} />
            <button
              onClick={
                () => window.location.href = "https://wa.me/+5491157541353?text=¡Hola!%20Queria%20agendar%20una%20cita%20con%20el%20Dr%20Cancio"
              }
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 24px",
                backgroundColor: "#199e2bff",
                color: "white",
                border: "none",
                borderRadius: "10px",
                fontSize: "14px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#17349b";
                e.currentTarget.style.transform = "translateX(4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#3056d3";
                e.currentTarget.style.transform = "translateX(0)";
              }}
            >
              Leer más
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Articles() {
  const articles = [
    {
      id: 0,
      title: "¿Para qué sirve una Declaratoria de Herederos?",
      descriptions: [
        "Cuando una persona fallece, se inicia la sucesión a fin de determinar quiénes serán los herederos de esa persona o evaluar la validez del testamento.",
        "Al culminar este proceso se dicta una sentencia de declaratoria de herederos que puede ser modificada posteriormente si aparece otro heredero.",
        "Es el paso previo al juicio sucesorio. Los herederos quedan capacitados para iniciar el juicio o vender bienes mediante tracto abreviado con acuerdo unánime.",
      ],
      img: article2,
      rating: 4,
      mensaje:
        "Para más información sobre declaratoria de herederos, contáctanos al +54 11-1234-5678",
    },
    {
      id: 1,
      title: "¿Se Cumplen tus Derechos Laborales?",
      descriptions: [
        "Tenés derecho a la desconexión digital (Ley 27.555). El empleador no puede contactarte ni exigir tareas fuera de la jornada laboral.",
        "Un empleo registrado incluye recibo de sueldo, aportes, vacaciones, licencias por enfermedad, aguinaldo e indemnización por despido.",
        "No estás obligado a trabajar en feriados, salvo casos excepcionales de fuerza mayor o situaciones críticas de la empresa.",
        "Tenés derecho a licencia de hasta 10 días al año para rendir exámenes de enseñanza media o universitaria.",
      ],
      img: article3,
      rating: 5,
      mensaje:
        "Para más información sobre tus derechos laborales, contáctanos al +54 11-1234-5678",
    },
    {
      id: 2,
      title: "¿Qué Hacer Frente a un Accidente de Tránsito?",
      descriptions: [
        "Detenete de inmediato e intercambiá datos de licencia de conducir y seguro. Si interviene la policía, brindales los mismos datos.",
        "Si la otra persona se dio a la fuga y hay testigos, ellos pueden ayudarte con información para reclamar. La fuga con heridos es abandono de persona (Art. 106 CP).",
        "Debés denunciar el accidente ante la aseguradora dentro de los 3 días. Si no lo hacés, puede negarse a cubrir los daños.",
      ],
      img: article4,
      rating: 5,
      mensaje:
        "Para más información sobre denuncias de accidente de tránsito, contáctanos al +54 11-1234-5678",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNavigation = (direction) => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    setTimeout(() => {
      if (direction === "next") {
        setCurrentIndex((prev) => (prev + 1) % articles.length);
      } else {
        setCurrentIndex(
          (prev) => (prev - 1 + articles.length) % articles.length
        );
      }
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section
      style={{
        fontFamily: "'Muli', sans-serif",
        backgroundColor: "#fafafa",
        padding: "150px 0",
        minHeight: "100vh",
        marginTop: "-155px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Background */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(48, 86, 211, 0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Header */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "64px",
          maxWidth: "800px",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            padding: "10px 24px",
            backgroundColor: "rgba(48, 86, 211, 0.1)",
            borderRadius: "30px",
            marginBottom: "20px",
          }}
        >
          <BookOpen size={18} color="#199e2bff" />
          <span
            style={{
              color: "#199e2bff",
              fontSize: "14px",
              fontWeight: "600",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Recursos Legales
          </span>
        </div>

        <h2
          style={{
            margin: "0 0 16px 0",
            fontSize: "48px",
            fontWeight: "800",
            color: "#1a1a1a",
            lineHeight: "1.2",
            letterSpacing: "-1px",
          }}
        >
          Artículos Útiles
        </h2>

        <p
          style={{
            margin: "0",
            fontSize: "18px",
            lineHeight: "1.7",
            color: "#666666",
            fontWeight: "400",
          }}
        >
          Información legal actualizada para conocer tus derechos y obligaciones
        </p>
      </div>

      {/* Carousel Container */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Navigation Button - Left */}
        <button
          onClick={() => handleNavigation("prev")}
          style={{
            position: "absolute",
            left: "0",
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            backgroundColor: "white",
            border: "2px solid #e8e8e8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
            zIndex: 10,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#3056d3";
            e.currentTarget.style.borderColor = "#3056d3";
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "white";
            e.currentTarget.style.borderColor = "#e8e8e8";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <ChevronLeft
            size={28}
            color="#3056d3"
            style={{ transition: "color 0.3s ease" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
          />
        </button>

        {/* Article Card */}
        <ArticleCard
          article={articles[currentIndex]}
          isActive={!isTransitioning}
        />

        {/* Navigation Button - Right */}
        <button
          onClick={() => handleNavigation("next")}
          style={{
            position: "absolute",
            right: "0",
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            backgroundColor: "white",
            border: "2px solid #e8e8e8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
            zIndex: 10,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#27ae60";
            e.currentTarget.style.borderColor = "#27ae60";
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "white";
            e.currentTarget.style.borderColor = "#e8e8e8";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <ChevronRight
            size={28}
            color="#199e2bff"
            style={{ transition: "color 0.3s ease" }}
          />
        </button>
      </div>

      {/* Indicators */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          marginTop: "48px",
          alignItems: "center",
        }}
      >
        {articles.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setIsTransitioning(false);
                }, 300);
              }
            }}
            style={{
              width: currentIndex === index ? "40px" : "12px",
              height: "12px",
              borderRadius: "6px",
              backgroundColor: currentIndex === index ? "#199e2bff" : "#d1d5db",
              border: "none",
              cursor: "pointer",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
        ))}
      </div>

      {/* Article Counter */}
      <div
        style={{
          marginTop: "24px",
          fontSize: "14px",
          fontWeight: "600",
          color: "#999999",
        }}
      >
        {currentIndex + 1} / {articles.length}
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media only screen and (max-width: 968px) {
          section > div:nth-child(3) {
            padding: 0 20px !important;
          }
          section > div:nth-child(3) > button {
            display: none !important;
          }
          section > div:nth-child(3) > div > div:first-child {
            width: 100% !important;
          }
          section > div:nth-child(3) > div > div:last-child {
            width: 100% !important;
            padding: 32px !important;
          }
          section > div:nth-child(3) > div {
            flex-direction: column !important;
            height: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
