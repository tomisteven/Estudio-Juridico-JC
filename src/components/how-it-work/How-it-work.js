import React, { useState } from "react";
import {
  Scale,
  Users,
  AlertCircle,
  Briefcase,
  FileText,
  Home,
  Shield,
  CircleDollarSign,
  ChevronRight
} from "lucide-react";

const SpecializationCard = ({ icon: Icon, title, desc, index, color, bgColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        width: 'calc(25% - 24px)',
        minWidth: '280px',
        marginBottom: '32px',
        borderRadius: '20px',
        background: isHovered ? bgColor : 'white',
        border: `2px solid ${isHovered ? color : '#e8e8e8'}`,
        padding: '32px',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: isHovered ? 'translateY(-12px) scale(1.02)' : 'translateY(0) scale(1)',
        boxShadow: isHovered
          ? `0 20px 40px ${color}30`
          : '0 4px 12px rgba(0, 0, 0, 0.06)',
        cursor: 'pointer',
        overflow: 'hidden',
      }}
    >
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        right: '-50%',
        width: '200%',
        height: '200%',
        background: `radial-gradient(circle, ${color}08 0%, transparent 70%)`,
        opacity: isHovered ? 1 : 0,
        transition: 'opacity 0.4s ease',
        pointerEvents: 'none',
      }} />

      {/* Number Badge */}
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        backgroundColor: isHovered ? 'rgba(255,255,255,0.2)' : `${color}15`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '14px',
        fontWeight: '700',
        color: isHovered ? 'white' : color,
        transition: 'all 0.3s ease',
      }}>
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Icon Container */}
      <div style={{
        width: '72px',
        height: '72px',
        borderRadius: '18px',
        backgroundColor: isHovered ? 'rgba(255,255,255,0.2)' : `${color}15`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '24px',
        transition: 'all 0.4s ease',
        transform: isHovered ? 'rotate(5deg) scale(1.1)' : 'rotate(0) scale(1)',
      }}>
        <Icon
          size={36}
          color={isHovered ? 'white' : color}
          strokeWidth={2}
          style={{ transition: 'all 0.3s ease' }}
        />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h3 style={{
          margin: '0 0 12px 0',
          fontSize: '20px',
          fontWeight: '700',
          color: isHovered ? 'white' : '#1a1a1a',
          lineHeight: '1.3',
          fontFamily: "'Muli', sans-serif",
          transition: 'color 0.3s ease',
        }}>
          {title}
        </h3>

        <p style={{
          margin: '0 0 20px 0',
          fontSize: '15px',
          lineHeight: '1.6',
          color: isHovered ? 'rgba(255,255,255,0.9)' : '#666666',
          fontFamily: "'Muli', sans-serif",
          transition: 'color 0.3s ease',
          minHeight: '72px',
        }}>
          {desc}
        </p>

        {/* Arrow Indicator */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '14px',
          fontWeight: '600',
          color: isHovered ? 'white' : color,
          transition: 'all 0.3s ease',
          transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
        }}>
          <span>Más información</span>
          <ChevronRight
            size={18}
            style={{
              transition: 'transform 0.3s ease',
              transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
            }}
          />
        </div>
      </div>
    </div>
  );
};

const HowItWork = () => {
  const specializations = [
    {
      icon: Scale,
      title: "Derecho Penal",
      desc: "Defensa legal sólida en casos de delitos. Protegemos tus derechos en cada etapa del proceso judicial.",
      color: "#3056d3",
      bgColor: "linear-gradient(135deg, #3056d3 0%, #4169e8 100%)",
    },
    {
      icon: FileText,
      title: "Derecho Sucesorio",
      desc: "Planificación sucesoria, testamentos, partición de bienes y resolución de disputas hereditarias.",
      color: "#297EFF",
      bgColor: "linear-gradient(135deg, #297EFF 0%, #4a94ff 100%)",
    },
    {
      icon: AlertCircle,
      title: "Daños y Perjuicios",
      desc: "Buscamos la compensación justa por daños sufridos en accidentes o incumplimientos contractuales.",
      color: "#e74c3c",
      bgColor: "linear-gradient(135deg, #e74c3c 0%, #ec7063 100%)",
    },
    {
      icon: Briefcase,
      title: "Derecho Comercial",
      desc: "Asesoramiento legal integral para empresas, contratos y protección de propiedad intelectual.",
      color: "#16a085",
      bgColor: "linear-gradient(135deg, #16a085 0%, #1abc9c 100%)",
    },
    {
      icon: Users,
      title: "Derecho Laboral",
      desc: "Asesoramiento y representación en casos laborales. Defendemos tus derechos como trabajador.",
      color: "#f39c12",
      bgColor: "linear-gradient(135deg, #f39c12 0%, #f1c40f 100%)",
    },
    {
      icon: Home,
      title: "Derecho de Familia",
      desc: "Asesoramiento en divorcios, custodia, adopciones y otros asuntos familiares con empatía.",
      color: "#9b59b6",
      bgColor: "linear-gradient(135deg, #9b59b6 0%, #a569bd 100%)",
    },
    {
      icon: Shield,
      title: "Derecho Civil",
      desc: "Soluciones legales en contratos, propiedad, obligaciones, sucesiones y responsabilidad civil.",
      color: "#34495e",
      bgColor: "linear-gradient(135deg, #34495e 0%, #515a5a 100%)",
    },
    {
      icon: CircleDollarSign,
      title: "Jubilaciones",
      desc: "Asistencia en la obtención de beneficios previsionales y defensa de tus derechos jubilatorios.",
      color: "#27ae60",
      bgColor: "linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)",
    },
  ];

  return (
    <div id="esp" style={{
      fontFamily: "'Muli', sans-serif",
      backgroundColor: '#fafafa',
      padding: '100px 0',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative Background Elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '-5%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(48, 86, 211, 0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '15%',
        right: '-8%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(41, 126, 255, 0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 24px',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Header Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: '72px',
          maxWidth: '800px',
          margin: '0 auto 72px',
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            padding: '10px 24px',
            backgroundColor: 'rgba(48, 86, 211, 0.1)',
            borderRadius: '30px',
            marginBottom: '20px',
          }}>
            <Scale size={18} color="#3056d3" />
            <span style={{
              color: '#3056d3',
              fontSize: '14px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}>
              Áreas de Práctica
            </span>
          </div>

          <h2 style={{
            margin: '0 0 20px 0',
            fontSize: '48px',
            fontWeight: '800',
            color: '#1a1a1a',
            lineHeight: '1.2',
            letterSpacing: '-1px',
          }}>
            Nuestras Especializaciones
          </h2>

          <p style={{
            margin: '0',
            fontSize: '19px',
            lineHeight: '1.7',
            color: '#666666',
            fontWeight: '400',
          }}>
            Expertos en múltiples áreas del derecho para abordar tus necesidades legales específicas con profesionalismo y dedicación
          </p>
        </div>

        {/* Specializations Grid */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '32px',
          justifyContent: 'center',
        }}>
          {specializations.map((spec, index) => (
            <SpecializationCard
              key={index}
              icon={spec.icon}
              title={spec.title}
              desc={spec.desc}
              index={index}
              color={spec.color}
              bgColor={spec.bgColor}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div style={{
          marginTop: '80px',
          textAlign: 'center',
          padding: '56px 48px',
          background: 'linear-gradient(135deg, #3056d3 0%, #297EFF 100%)',
          borderRadius: '24px',
          color: 'white',
          boxShadow: '0 20px 40px rgba(48, 86, 211, 0.2)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            opacity: 0.3,
          }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h3 style={{
              margin: '0 0 16px 0',
              fontSize: '32px',
              fontWeight: '700',
            }}>
              ¿Necesitás Asesoramiento Legal?
            </h3>
            <p style={{
              margin: '0 auto 32px',
              fontSize: '18px',
              opacity: 0.95,
              maxWidth: '600px',
              lineHeight: '1.6',
            }}>
              Contáctanos hoy mismo para una consulta personalizada. Estamos aquí para proteger tus derechos.
            </p>
            <a
              href="#contacto"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px 40px',
                backgroundColor: 'white',
                color: '#3056d3',
                fontSize: '16px',
                fontWeight: '700',
                textDecoration: 'none',
                borderRadius: '12px',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
              }}
            >
              Solicitar Consulta
              <ChevronRight size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media only screen and (max-width: 1200px) {
          div[style*="calc(25% - 24px)"] {
            width: calc(33.333% - 24px) !important;
          }
        }

        @media only screen and (max-width: 768px) {
          div[style*="calc(25% - 24px)"] {
            width: calc(50% - 24px) !important;
            min-width: 240px !important;
          }
        }

        @media only screen and (max-width: 480px) {
          div[style*="calc(25% - 24px)"] {
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
};

export default HowItWork;