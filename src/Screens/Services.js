import React, { useState } from "react";
import styles from '../App.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faDesktop, faUsers, faHandHoldingHeart, faIndustry, faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import Slider from "react-slick"; // Importa el componente Slider

const services = [
  {
    title: "Terapia Psicologica",
    icon: faBrain,
    iconColor: "#827054",
    details: [
      { 
        title: "Atención psicológica individual", 
        description: "Proporciona un espacio seguro y de apoyo para explorar y entender tus pensamientos y emociones, ayudándote a superar desafíos personales, mejorar tu bienestar emocional", 
        Importance: "Un psicólogo es un experto en el comportamiento humano que utiliza su conocimiento para ayudar a las personas a superar estos desafíos. En momentos de dificultad, la psicoterapia ofrece un espacio seguro para explorar y entender los sentimientos y comportamientos que afectan tu bienestar", 
        Benefits: ["Aumenta el autoconocimiento personal", "Mejora la calidad de vida", "Aumenta el bienestar personal, social y familiar", "Aumenta la relajación y emociones positivas", "Disminuyen las emociones negativas (ansiedad, tristeza, ira, irritabilidad, etc.)", "Manejo del Estrés y conductas adictivas"],
        image: require('../assets/IMG_0249.jpg')
      },
      { 
        title: "Atención niños y adolescentes", 
        description: "Proporciona un espacio seguro y comprensivo para abordar sus desafíos emocionales y de desarrollo, ayudándoles a crecer con resiliencia y bienestar.", 
        Importance: "Los niños y adolescentes enfrentan un mundo de cambios y desafíos únicos. En Gira Salud, ofrecemos un espacio seguro y de confianza donde pueden expresar sus sentimientos, enfrentar sus miedos y desarrollar habilidades para una vida saludable. Utilizamos técnicas adaptadas a su edad para fomentar su bienestar emocional y crecimiento personal.", 
        Benefits: ["Mejora en el rendimiento escolar y social.", "Gestión efectiva de emociones y comportamientos.", "Fomento de relaciones interpersonales saludables.", "Prevención de problemas de salud mental a largo plazo.", "Promueve la adaptación y el afrontamiento positivo."],
        image: require('../assets/photo_5129678144436022606_y (1).jpg')
      },
      { 
        title: "Terapia de Pareja", 
        description: "Fortalece la relación al mejorar la comunicación y resolver conflictos, creando una conexión más profunda y satisfactoria cuando ambos miembros están comprometidos con el proceso.", 
        Importance: "Las relaciones de pareja pueden enfrentar altibajos. En Gira Salud, la terapia de pareja está diseñada para ayudar a mejorar la comunicación, resolver conflictos y fortalecer la conexión emocional. La terapia de pareja funciona mejor cuando ambos miembros están dispuestos a colaborar y apoyarse mutuamente en el proceso de cambio.",
        Benefits: ["Comunicación más efectiva.", "Resolución de conflictos.", "Mayor conexión emocional y satisfacción en la relación.","Restablecimiento de la confianza mutua.", "Estrategias para manejar el estrés y la presión externa."],
        image: require('../assets/pexels-timur-weber-8559997.jpg')
      },
    ]
  },
  {
    title: "Consulta on-line - PSICOCLICK",
    icon: faDesktop,
    iconColor: "#827054",
    details: [
      { 
        title: "Atención psicológica individual Online", 
        description: "Proporciona un espacio seguro y de apoyo para explorar y entender tus pensamientos y emociones, ayudándote a superar desafíos personales, mejorar tu bienestar emocional", 
        Importance: "Un psicólogo es un experto en el comportamiento humano que utiliza su conocimiento para ayudar a las personas a superar estos desafíos. En momentos de dificultad, la psicoterapia ofrece un espacio seguro para explorar y entender los sentimientos y comportamientos que afectan tu bienestar", 
        Benefits: ["Mejora la salud mental", "Aumento de la autoestima", "Desarrollo de estrategias de afrontamiento"],
        image: require('../assets/pexels-anna-nekrashevich-12433024.jpg')
      },
      { 
        title: "Atención Adolescentes Online", 
        description: "Proporciona un espacio seguro y comprensivo para abordar sus desafíos emocionales y de desarrollo, ayudándoles a crecer con resiliencia y bienestar.", 
        Importance: "Los niños y adolescentes enfrentan un mundo de cambios y desafíos únicos. En Gira Salud, ofrecemos un espacio seguro y de confianza donde pueden expresar sus sentimientos, enfrentar sus miedos y desarrollar habilidades para una vida saludable. Utilizamos técnicas adaptadas a su edad para fomentar su bienestar emocional y crecimiento personal.", 
        Benefits: ["Desarrollo emocional saludable", "Mejor manejo del estrés", "Aumento de la resiliencia"],
        image: require('../assets/pexels-julia-m-cameron-4144532.jpg')
      },
      { 
        title: "Atención Duelo Migratorio", 
        description: "Es esencial para ayudar a las personas a manejar las complejas emociones asociadas con la migración, facilitando una adaptación saludable y bienestar emocional.", 
        Importance: "El duelo migratorio puede tener un impacto profundo en el bienestar emocional y psicológico. Las personas que migran a menudo enfrentan sentimientos de tristeza, soledad, ansiedad y desorientación que pueden afectar su capacidad para integrarse y prosperar en un nuevo entorno.", 
        Benefits: ["Adaptación a la Nueva Realidad", "Reconstrucción de la Identidad", "Reducción de sentimientos de Soledad y Aislamiento", "Fortalecimiento de la Resiliencia"],
        image: require('../assets/mujer-con-ansiedad-psicologia-buenos-aires.jpg')
      },
    ]
  },
  {
    title: "Formacion Empresarial",
    icon: faUsers,
    iconColor: "#827054",
    details: [
      { 
        title: "Gincana Deportivo", 
        description: "Son dinámicas competitivas y recreativas diseñadas para fortalecer los equipos de trabajo mediante actividades lúdicas .", 
        Importance: "Actividades deportivas y lúdicas. Dinámicas de grupos y psicoeducación Tema orientado a la necesidad e integración de la institución.", 
        Benefits: ["Impulsa la productividad", "Mejora de la comunicación", "Fortalece los vínculos de equipo", "Promueve la competitividad sana, Incrementa la motivación, la cooperación y el compromiso."],
        image: require('../assets/IMG_0206.jpg')
      },
      { 
        title: "Capacitaciones y Talleres", 
        description: "La capacitación empresarial es vital para el éxito y el crecimiento de cualquier organización. Al invertir en el desarrollo de habilidades y competencias, las empresas pueden mejorar significativamente el rendimiento y la satisfacción de sus empleados..", 
        Importance: "Capacitaciones en comunicación efectiva, trabajo en equipo y liderazgo. Talleres de prevención de estrés y burnout. Talleres de sensibilización en discriminacion, acoso laboral y toda forma de violencia contra la mujer. Talleres de prevención de consecuencias por consumo de alcohol y otras sustancias psicoactivas. Capacitaciones enfocadas a la promoción de la gestión emocional y la prevención de trastornos de ansiedad.", 
        Benefits: ["Fomenta el cuidado de la salud mental", "Cumplimiento a los programas del MDT", "Fortalece la seguridad y salud en el trabajo", "Promueve un entorno inclusivo y respetuoso", "Construye sentimientos de pertenencia  hacia la empresa "],
        image: require('../assets/WhatsApp Image.jpg')
      },
    ]
  },
];

const additionalButtons = [
  {
    title: "LudiFamilia",
    icon: faHandHoldingHeart,
    description: "Ofrecemos talleres diseñados para brindar apoyo y herramientas prácticas a padres que enfrentan los desafíos de la crianza, ayudándolos a fortalecer el vínculo familiar y promover un desarrollo saludable en sus hijos.",
    What_we_offer: [
      "Talleres Creativos: Pintura, escultura y teatro en familia.",
      "Juegos Interactivos: Dinámicas que promueven la cooperación y la empatía.",
      "Apoyo para Padres: Estrategias y recursos para mejorar el bienestar emocional familiar."
    ],
    Benefits: ["Mejora la comunicación y la conexión entre padres e hijos.", "Ayuda a manejar emociones y reducir el estrés.", "Crea un ambiente positivo en tu hogar más armonioso y comprensivo."],
  },
  {
    title: "Programa Orientación Vocacional",
    icon: faIndustry,
    description: "Descubre tus fortalezas y define tu futuro. Nuestro programa guía a adolescentes y adultos hacia decisiones profesionales que les apasionen, ya sea en su primer camino o en la elección de una maestría. Encuentra claridad en tu próximo paso.",
    What_we_offer: [
      "Asesoramiento vocacional individual",
      "Evaluación de intereses y habilidades",
      "Orientación sobre opciones educativas y profesionales",
      "Planificación de carrera a corto y largo plazo"
    ],
  },
  {
    title: "Programa ExpresArte Senior",
    icon: faPaintBrush,
    description: "Empodera a maestros con talleres creativos que integran el arte y la lúdica para mejorar el manejo emocional en el aula. Fomenta un ambiente escolar y laboral más sano, además de promover el bienestar emocional en la educación.",
    What_we_offer: [
      "Talleres Interactivos: Capacitación en manejo del estrés, prevención de riesgos psicosociales y estrategias de apoyo emocional.",
      "Actividades Artísticas: Dinámicas creativas que facilitan la comunicación y el aprendizaje en ambientes educativos y familiares.",
      "Asesoramiento Personalizado: Orientación para implementar prácticas efectivas en el entorno escolar."
    ],
    Benefits: ["Mejora del ambiente escolar y laboral.", "Proporciona herramientas para gestionar conflictos y promover el bienestar emocional.", "Mejora la colaboración entre educadores y estudiantes."],
  },
  {
    title: "Programa ExpresArte Kids",
    icon: faPaintBrush,
    description: "Descubre un espacio donde la imaginación y las emociones se encuentran. A través de talleres artísticos y lúdicos, ayudamos a niños y adolescentes a desarrollar su inteligencia emocional y habilidades sociales, todo mientras se divierten y expresan ¡Porque crecer es un arte!",
    What_we_offer: [
      "Actividades artísticas y lúdicas con talleres de pintura, teatro, música  y dinámicas de juego para expresar y manejar emociones.",
      "Fortalecimiento en habilidades sociales como la empatía, la escucha activa y la resolución de conflictos.",
      "Actividades diseñadas para facilitar el aprendizaje y la comunicación en un ambiente seguro y divertido."
    ],
    Benefits: ["Gestión Emocional: Ayuda a los niños a identificar y expresar sus emociones de manera saludable.", "Prevención de Problemas Sociales:** Enseña habilidades para enfrentar el bullying y otros problemas sociales.", "Desarrollo de Habilidades: Fomenta habilidades cognitivas, motrices y sociales a través del arte y el juego."],
  }
];

const Services = () => {
  const [hoveredServiceIndex, setHoveredServiceIndex] = useState(null);
  const [modalContent, setModalContent] = useState(null);

  const handleButtonClick = (content) => {
    setModalContent(content);
  };

  const handleCloseModal = () => {
    setModalContent(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div name="Servicios" className={`${styles.pageBackground} ${styles.services}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <br />
        <br />
        <h2 className={`text-3xl md:text-7xl font-extrabold text-center ${styles.titleColor} ${styles['fontFamily-MyFont2']}`}>SERVICIOS</h2>
        <br />
        <p className={`text-xl md:text-4xl text-white font-extrabold text-center ${styles['fontFamily-MyFont4']}`}>
          Somos GIRASALUD, un equipo de psicólogos que contribuye a la prevención y promoción de la salud mental por medio de actividades artísticas con material lúdico y terapias psicológicas. Es por ello que brindamos un espacio de salud mental lúdico y seguro donde puedes ser tú mismo.
        </p>

        {/* Botones adicionales */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalButtons.map((button, index) => (
            <div
              key={index}
              className={`${styles.additionalButton} flex flex-col items-center p-4 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer`}
              onClick={() => handleButtonClick(button)}
            >
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-4">
                <FontAwesomeIcon icon={button.icon} className="text-3xl" style={{ color: "#827054" }} />
              </div>
              <div className="flex flex-col items-center">
                <span className={`text-lg font-semibold text-center ${styles['fontFamily-MyFont4']}`}>{button.title}</span>
                <p className={`text-gray-600 text-center text-1xl ${styles['fontFamily-MyFont4']}`}>{button.description}</p>
                {/* Carrusel de imágenes */}
                {button.images && (
                  <div className="w-full mt-4">
                    <Slider {...settings}>
                      {button.images.map((img, idx) => (
                        <div key={idx} className="px-2">
                          <img src={img} alt={`Carousel ${idx}`} className="w-full h-auto object-cover rounded-lg" />
                        </div>
                      ))}
                    </Slider>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>


        {/* Servicios existentes */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Disclosure
              key={index}
              as="div"
              className={`bg-white shadow-md rounded-lg p-6 ${styles.serviceContainer} ${hoveredServiceIndex === index ? 'bg-blue-100' : ''}`}
              onMouseEnter={() => setHoveredServiceIndex(index)}
              onMouseLeave={() => setHoveredServiceIndex(null)}
            >
              {({ open }) => (
                <>
                  <Disclosure.Button className={`flex flex-col items-center w-full text-center text-xl md:text-3xl font-medium text-gray-900 focus:outline-none ${styles['fontFamily-MyFont2']}`}>
                    <div className={styles.disclosureButtonContent}>
                      <FontAwesomeIcon icon={service.icon} className="text-4xl md:text-6xl mb-4" style={{ color: service.iconColor }} />
                      <span className={styles.serviceTitle}>{service.title}</span>
                    </div>
                    <ChevronUpIcon className={`${open ? 'transform rotate-180' : ''} w-5 h-5 text-gray-500`} />
                  </Disclosure.Button>
                  <Disclosure.Panel className="pt-4 text-base md:text-lg text-gray-600">
                    <div className="flex flex-col space-y-4">
                      {service.details.map((detail, index) => (
                        <button
                          key={index}
                          className={`bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-yellow-600 text-white text-base md:text-3xl font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 ${styles['fontFamily-MyFont4']}`}
                          onClick={() => handleButtonClick(detail)}
                        >
                          {detail.title}
                        </button>
                      ))}
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>

        {/* Modal */}
        {modalContent && (
    <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 p-4 overflow-y-auto">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-lg md:max-w-4xl max-h-[80vh] flex flex-col md:flex-row overflow-hidden">
            {/* Imagen en el modal */}
            {modalContent.image && (
                <div className="flex-shrink-0 w-full md:w-1/3 h-64 md:h-auto">
                    <img src={modalContent.image} alt="Service" className="w-full h-full object-cover" />
                </div>
            )}
            {/* Contenido del modal */}
            <div className="flex-1 p-6 overflow-y-auto">
                <h3 className={`text-2xl font-bold mb-4 ${styles['fontFamily-MyFont4']}`}>{modalContent.title}</h3>
                <p className={`text-lg mb-4 ${styles['fontFamily-MyFont4']}`}>{modalContent.description}</p>
                {modalContent.What_we_offer && (
                    <div className={`mb-4 ${styles['fontFamily-MyFont4']}`}>
                        <h4 className={`text-xl font-semibold ${styles['fontFamily-MyFont1']}`}>¿Qué ofrecemos?</h4>
                        <p>{modalContent.What_we_offer}</p>
                    </div>
                )}
                {modalContent.Important && (
                    <div className="mb-4">
                        <h4 className="text-xl font-semibold">Importancia:</h4>
                        <p>{modalContent.Important}</p>
                    </div>
                )}
                {modalContent.Benefits && (
                    <div className="mb-4">
                        <h4 className={`text-xl font-semibold ${styles['fontFamily-MyFont2']}`}>Beneficios:</h4>
                        <ul className={`list-disc pl-5 ${styles['fontFamily-MyFont4']}`}>
                            {modalContent.Benefits.map((benefit, index) => (
                                <li key={index} className="text-base">{benefit}</li>
                            ))}
                        </ul>
                    </div>
                )}
                <button
                    onClick={handleCloseModal}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg mt-4"
                >
                    Cerrar
                </button>
            </div>
        </div>
    </div>
)}

      </div>
    </div>
  );
};

export default Services;

