import React, { useState } from "react";
import styles from '../App.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faDesktop, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

const services = [
  {
    title: "ATENCION PSICOLOGICA",
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
        title: "Atención para Padres", 
        description: "Ofrece herramientas y apoyo para enfrentar los desafíos de la crianza, mejorando la comunicación y la relación con tus hijos para construir un entorno familiar más saludable", 
        Importance: "La crianza puede ser desafiante y, en ocasiones, abrumadora. Nuestro servicio de atención para padres proporciona orientación para fortalecer la relación entre padres e hijos. Trabajamos juntos para crear un entorno familiar positivo y armonioso.", 
        Benefits: ["Mejora de habilidades parentales.", "Reducción del estrés familiar.", "Fortalecimiento de la relación con los hijos.", "Mejora de la dinámica familiar.", "Incremento de la confianza y autoestima en los hijos."],
        image: require('../assets/pexels-gabby-k-7352875.jpg')
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
      { 
        title: "Orientación Vocacional", 
        description: "La orientación vocacional te ayuda a descubrir tus fortalezas e intereses, guiándote hacia decisiones informadas y satisfactorias para tu futuro profesional y académico.", 
        Importance: "Elegir la carrera adecuada puede ser una de las decisiones más importantes de la vida. Nuestro servicio de orientación vocacional ayuda a identificar tus intereses, habilidades y valores para tomar decisiones informadas sobre tu futuro profesional. Ofrecemos herramientas y apoyo para planificar una carrera satisfactoria y alineada con tus objetivos personales", 
        Benefits: ["Decisiones de carrera informadas.", "Alineación de intereses y habilidades con objetivos profesionales.", "Planificación de un futuro profesional satisfactorio.", "Identificación de oportunidades de desarrollo profesional."],
        image: require('../assets/pexels-thisisengineering-3862370.jpg')
      },
    ]
  },
  {
    title: "ATENCION ONLINE - PSICOCLICK",
    icon: faDesktop,
    iconColor: "#827054",
    details: [
      { 
        title: "Atención psicológica individual Online", 
        description: "Proporciona un espacio seguro y de apoyo para explorar y entender tus pensamientos y emociones, ayudándote a superar desafíos personales, mejorar tu bienestar emocional", 
        Importance: "Un psicólogo es un experto en el comportamiento humano que utiliza su conocimiento para ayudar a las personas a superar estos desafíos. En momentos de dificultad, la psicoterapia ofrece un espacio seguro para explorar y entender los sentimientos y comportamientos que afectan tu bienestar", 
        Benefits: ["Mejora la salud mental", "Aumento de la autoestima", "Desarrollo de estrategias de afrontamiento"]
      },
      { 
        title: "Atención para Padres Online", 
        description: "Ofrece herramientas y apoyo para enfrentar los desafíos de la crianza, mejorando la comunicación y la relación con tus hijos para construir un entorno familiar más saludable", 
        Importance: "La crianza puede ser desafiante y, en ocasiones, abrumadora. Nuestro servicio de atención para padres proporciona orientación para fortalecer la relación entre padres e hijos. Trabajamos juntos para crear un entorno familiar positivo y armonioso.", 
        Benefits: ["Mejora la comunicación familiar", "Reducción del estrés parental", "Desarrollo de habilidades de crianza"]
      },
      { 
        title: "Atención niños y adolescentes Online", 
        description: "Proporciona un espacio seguro y comprensivo para abordar sus desafíos emocionales y de desarrollo, ayudándoles a crecer con resiliencia y bienestar.", 
        Importance: "Los niños y adolescentes enfrentan un mundo de cambios y desafíos únicos. En Gira Salud, ofrecemos un espacio seguro y de confianza donde pueden expresar sus sentimientos, enfrentar sus miedos y desarrollar habilidades para una vida saludable. Utilizamos técnicas adaptadas a su edad para fomentar su bienestar emocional y crecimiento personal.", 
        Benefits: ["Desarrollo emocional saludable", "Mejor manejo del estrés", "Aumento de la resiliencia"]
      },
      { 
        title: "Terapia de Pareja Online", 
        description: "Fortalece la relación al mejorar la comunicación y resolver conflictos, creando una conexión más profunda y satisfactoria cuando ambos miembros están comprometidos con el proceso.", 
        Importance: "Las relaciones de pareja pueden enfrentar altibajos. En Gira Salud, la terapia de pareja está diseñada para ayudar a mejorar la comunicación, resolver conflictos y fortalecer la conexión emocional. La terapia de pareja funciona mejor cuando ambos miembros están dispuestos a colaborar y apoyarse mutuamente en el proceso de cambio.",
        Benefits: ["Mejora de la comunicación", "Resolución de conflictos", "Fortalecimiento de la relación emocional"]
      },
      { 
        title: "Atención Duelo Migratorio", 
        description: "Es esencial para ayudar a las personas a manejar las complejas emociones asociadas con la migración, facilitando una adaptación saludable y bienestar emocional.", 
        Importance: "El duelo migratorio puede tener un impacto profundo en el bienestar emocional y psicológico. Las personas que migran a menudo enfrentan sentimientos de tristeza, soledad, ansiedad y desorientación que pueden afectar su capacidad para integrarse y prosperar en un nuevo entorno.", 
        Benefits: ["Adaptación a la Nueva Realidad", "Reconstrucción de la Identidad", "Reducción de sentimientos de Soledad y Aislamiento", "Fortalecimiento de la Resiliencia"]
      },
    ]
  },
  {
    title: "FORMACION FAMILIAR Y EMPRESARIAL",
    icon: faUsers,
    iconColor: "#827054",
    details: [
      { 
        title: "Formación Familiar", 
        description: "Es esencial para promover una comunicación efectiva, resolver conflictos y crear un entorno de apoyo, lo que contribuye al bienestar y la resiliencia de todos los miembros de la familia.", 
        Importance: "La formación familiar es crucial para el bienestar emocional y psicológico de todos los miembros de la familia. Un entorno familiar saludable y funcional es fundamental para el desarrollo positivo de los niños y el bienestar general de los adultos. Al mejorar la comunicación y la cooperación dentro de la familia, se pueden prevenir y resolver conflictos, reduciendo el estrés y promoviendo un ambiente de apoyo y amor", 
        Benefits: ["Mejora de la Comunicación", "Ayuda en la resolución de Conflictos", "Fortalece los Vínculos Familiares"],
        image: require('../assets/pexels-yankrukov-5792901.jpg')
      },
      { 
        title: "Formación Empresarial", 
        description: "Es fundamental para mejorar la productividad, fomentar un ambiente laboral positivo y promover el desarrollo personal y profesional de los empleados en la organización.", 
        Importance: "La formación empresarial es vital para el éxito y el crecimiento de cualquier organización. Al invertir en el desarrollo de habilidades y competencias, las empresas pueden mejorar significativamente el rendimiento y la satisfacción de sus empleados. Una fuerza laboral bien capacitada y motivada es más productiva, creativa y capaz de enfrentar desafíos con eficacia.", 
        Benefits: ["Aumento de la Productividad", "Mejora del Ambiente Laboral", "Desarrollo del Liderazgo.", "Fortalecimiento del Trabajo en Equipo", "Fortalecimiento del Trabajo en Equipo"],
        image: require('../assets/pexels-tima-miroshnichenko-5439458.jpg')
      },
    ]
  },
];

const Services = () => {
  const [hoveredServiceIndex, setHoveredServiceIndex] = useState(null);
  const [selectedDetail, setSelectedDetail] = useState(null);

  const handleButtonClick = (detail) => {
    setSelectedDetail(detail);
  };

  const handleCloseModal = () => {
    setSelectedDetail(null);
  };

  return (
    <div name="Servicios" className={styles.services}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <br></br>
        <br></br>
        <h2 className={`text-3xl md:text-5xl font-extrabold text-gray-900 text-center ${styles['fontFamily-MyFont2']}`}>SERVICIOS</h2><br></br>
        <p className={`text-xl md:text-4xl text-gray-600 text-center ${styles['fontFamily-MyFont4']}`}>
          Somos GIRASALUD, un equipo de psicólogos que contribuye a la prevención y promoción de la salud mental por medio de actividades artísticas con material lúdico y terapias psicológicas. Es por ello que brindamos un espacio de salud mental lúdico y seguro donde puedes ser tú mismo.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Disclosure
              key={index}
              as="div"
              className={`bg-green shadow-md rounded-lg p-6 ${styles.serviceContainer} ${hoveredServiceIndex === index ? 'bg-blue-100' : ''}`}
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
                          className={`bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-yellow-600 text-white text-base md:text-3xl font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 ${styles['fontFamily-MyFont3']}`}
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
        {selectedDetail && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 p-4">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-lg md:max-w-4xl max-h-[71%] flex flex-col md:flex-row overflow-hidden">
              {/* Imagen en el modal */}
              <div className="flex-shrink-0 w-full md:w-1/3 h-64 md:h-auto">
                <img src={selectedDetail.image} alt="Service" className="w-full h-full object-cover" />
              </div>
              {/* Contenido del modal */}
              <div className={`flex-1 p-4 md:p-6 overflow-y-auto ${styles['fontFamily-MyFont4']}`}>
                <h2 className="text-2xl md:text-4xl font-bold mb-4">{selectedDetail.title}</h2>
                <p className="text-base md:text-lg text-gray-700 mb-4"><strong>Descripción:</strong> {selectedDetail.description}</p>
                <p className="text-base md:text-lg text-gray-700 mb-4"><strong>Importancia:</strong> {selectedDetail.Importance}</p>
                {selectedDetail.Benefits && (
                  <div className="text-base md:text-lg text-gray-700 mb-4">
                    <strong>Beneficios:</strong>
                    <ul className="list-disc list-inside mt-2">
                      {selectedDetail.Benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <button
                  className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4"
                  onClick={handleCloseModal}
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
