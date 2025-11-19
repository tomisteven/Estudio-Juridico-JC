import React, { useState } from "react";
import { Facebook, Twitter, Instagram, ExternalLink, Scale, Shield, Award } from "lucide-react";
import cariglino from "../../assets/cariglino.webp";
// Simulando las imágenes importadas
const bath01 = "https://www.infobae.com/resizer/v2/https%3A%2F%2Fs3.amazonaws.com%2Farc-wordpress-client-uploads%2Finfobae-wp%2Fwp-content%2Fuploads%2F2019%2F06%2F05224001%2Fpitbull-2.jpg?auth=87667b7149ebe34b1b61aa34225305654c9c21992a5020b3bee81e854b26d7f7&smart=true&width=350&height=197&quality=85";
const acoso = "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80";
const leiva = "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&q=80";
const user = "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&q=80";
const acuña = "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80";
//const cariglino = "../../assets/cariglino.webp";

const CaseCard = ({ pic, data, link, desc, featured = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`case-card ${featured ? 'featured' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        borderRadius: '16px',
        overflow: 'hidden',
        backgroundColor: '#ffffff',
        boxShadow: isHovered
          ? '0 20px 40px rgba(48, 86, 211, 0.15)'
          : '0 4px 12px rgba(0, 0, 0, 0.08)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        width: featured ? '100%' : 'calc(50% - 16px)',
        marginBottom: '32px',
        border: '1px solid #f0f0f0',
      }}
    >
      <div style={{
        position: 'relative',
        height: featured ? '320px' : '220px',
        overflow: 'hidden',
        backgroundColor: '#e8e8e8',
      }}>
        <img
          src={pic}
          alt={data}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: isHovered ? 'scale(1.08)' : 'scale(1)',
          }}
        />
        <div style={{
          position: 'absolute',
          top: '16px',
          left: '16px',
          backgroundColor: '#3056d3',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '8px',
          fontSize: '12px',
          fontWeight: '600',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
        }}>
          {featured ? 'Caso Destacado' : 'Caso Mediático'}
        </div>
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '50%',
          background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
        }} />
      </div>

      <div style={{
        padding: featured ? '32px' : '24px',
      }}>
        <h3 style={{
          margin: '0 0 12px 0',
          fontSize: featured ? '24px' : '20px',
          fontWeight: '700',
          color: '#1a1a1a',
          lineHeight: '1.3',
          fontFamily: "'Muli', sans-serif",
        }}>
          {data}
        </h3>

        <p style={{
          margin: '0 0 20px 0',
          fontSize: '15px',
          lineHeight: '1.6',
          color: '#666666',
          fontFamily: "'Muli', sans-serif",
        }}>
          {desc}
        </p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#3056d3',
            fontSize: '14px',
            fontWeight: '600',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            padding: '12px 24px',
            borderRadius: '8px',
            backgroundColor: isHovered ? 'rgba(48, 86, 211, 0.08)' : 'transparent',
            border: '2px solid',
            borderColor: isHovered ? '#3056d3' : 'transparent',
          }}
        >
          Ver más detalles
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
};

const Properties = () => {
  const cards = [
    {
      pic: bath01,
      id: 1,
      data: "Caso Pitbulls",
      link: "https://www.infobae.com/sociedad/2019/06/10/no-sacrificaran-a-los-pitbulls-que-atacaron-al-ladron-en-los-polvorines-ni-enjuiciaran-a-su-duena/",
      desc: "No sacrificarán a los pitbulls que atacaron al ladrón en Los Polvorines ni enjuiciarán a su dueña",
      featured: true,
    },
    {
      pic: acoso,
      id: 2,
      data: "Separados, Amenazas y más",
      link: "https://www.clarin.com/sociedad/viajo-madrid-acosar-ex-puso-gps-auto-detuvieron-volvio-argentina-camino-saco-pulsera-electronica_0_2UolCQOGUa.html",
      desc: "La historia de la mujer que denunció a su ex por violencia de género y terminó presa por falso testimonio",
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
      data: "Evasión y lavado - Intendente Hurlingham",
      link: "https://www.diariopopular.com.ar/politica/investigan-al-intendente-acuna-evasion-y-lavado-n212040",
      desc: "El intendente de Hurlingham, Luis Acuña, investigado por lavado de dinero y evasión",
    },
    {
      pic: cariglino,
      id: 5,
      data: "Irregularidades en Contrataciones",
      link: "https://www.telam.com.ar/notas/201510/122641-cariligno-denuncia-irregularidades-contrataciones-lavado.html",
      desc: "Denuncian al intendente de Malvinas Argentinas por contrataciones directas irregulares y piden investigación por lavado",
    },
  ];

  const stats = [
    { icon: Scale, label: "Casos Ganados", value: "95%" },
    { icon: Shield, label: "Años de Experiencia", value: "20+" },
    { icon: Award, label: "Clientes Satisfechos", value: "500+" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      color: '#1877f2',
      url: 'https://www.facebook.com/jorgecancioabogado',
      label: 'Facebook'
    },
    {
      icon: Twitter,
      color: '#1da1f2',
      url: 'https://www.twitter.com/drjorgecancio',
      label: 'Twitter'
    },
    {
      icon: Instagram,
      color: '#e4405f',
      url: 'https://www.instagram.com/estudiojuridicojorgecancio',
      label: 'Instagram'
    },
  ];

  return (
    <div id="casos" style={{
      fontFamily: "'Muli', sans-serif",
      backgroundColor: '#fafafa',
      padding: '80px 0',
      minHeight: '100vh',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
      }}>
        {/* Header Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: '64px',
        }}>
          <div style={{
            display: 'inline-block',
            padding: '8px 20px',
            backgroundColor: 'rgba(48, 86, 211, 0.1)',
            borderRadius: '24px',
            marginBottom: '16px',
          }}>
            <span style={{
              color: '#3056d3',
              fontSize: '14px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}>
              Nuestro Trabajo
            </span>
          </div>

          <h2 style={{
            margin: '0 0 20px 0',
            fontSize: '42px',
            fontWeight: '800',
            color: '#1a1a1a',
            lineHeight: '1.2',
            letterSpacing: '-0.5px',
          }}>
            Casos Mediáticos
          </h2>

          <p style={{
            margin: '0 auto',
            maxWidth: '700px',
            fontSize: '18px',
            lineHeight: '1.7',
            color: '#666666',
            fontWeight: '400',
          }}>
            Conocé algunos de los expedientes más resonantes que defendimos y{' '}
            <a
              href="#contacto"
              style={{
                color: '#3056d3',
                fontWeight: '600',
                textDecoration: 'none',
                borderBottom: '2px solid #3056d3',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#17349b';
                e.target.style.borderColor = '#17349b';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#3056d3';
                e.target.style.borderColor = '#3056d3';
              }}
            >
              contactanos para analizar tu caso
            </a>
          </p>
        </div>

        {/* Stats Section */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '48px',
          marginBottom: '64px',
          flexWrap: 'wrap',
        }}>
          {stats.map((stat, index) => (
            <div key={index} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '12px',
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                backgroundColor: 'rgba(48, 86, 211, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <stat.icon size={32} color="#3056d3" strokeWidth={2} />
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '28px',
                  fontWeight: '700',
                  color: '#1a1a1a',
                  marginBottom: '4px',
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: '14px',
                  color: '#666666',
                  fontWeight: '500',
                }}>
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cases Grid */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '32px',
          marginBottom: '64px',
        }}>
          {cards.map((card) => (
            <CaseCard
              key={card.id}
              pic={card.pic}
              data={card.data}
              link={card.link}
              desc={card.desc}
              featured={card.featured}
            />
          ))}
        </div>

        {/* Social Media Section */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '24px',
          padding: '48px',
          textAlign: 'center',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)',
        }}>
          <h3 style={{
            margin: '0 0 16px 0',
            fontSize: '24px',
            fontWeight: '700',
            color: '#1a1a1a',
          }}>
            Seguinos en Redes Sociales
          </h3>
          <p style={{
            margin: '0 0 32px 0',
            fontSize: '16px',
            color: '#666666',
          }}>
            Mantente actualizado con nuestras últimas noticias y casos
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
          }}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '14px 28px',
                  borderRadius: '12px',
                  backgroundColor: 'white',
                  color: social.color,
                  textDecoration: 'none',
                  fontSize: '15px',
                  fontWeight: '600',
                  border: '2px solid',
                  borderColor: social.color,
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = social.color;
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = `0 8px 16px ${social.color}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = social.color;
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <social.icon size={20} />
                <span>{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media only screen and (max-width: 768px) {
          .case-card {
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Properties;