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
      { title: "Atención psicológica individual" },
      { title: "Atención psicológica niños" },
      { title: "Atención psicológica adolescentes" },
    ]
  },
  {
    title: "ATENCION ONLINE - PSICOCLICK",
    icon: faDesktop,
    iconColor: "#827054",
    details: [
      { title: "Sesiones de terapia en línea" },
    ]
  },
  {
    title: "FORMACION FAMILIAR Y EMPRESARIAL",
    icon: faUsers,
    iconColor: "#827054",
    details: [
      { title: "Formación para familias" },
      { title: "Formación para empresas" },
    ]
  },
];

const Services = () => {
  const [hoveredServiceIndex, setHoveredServiceIndex] = useState(null);

  return (
    <div name="Servicios" className={styles.services}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <br />
        <br />
        <h2 className={`text-5xl font-extrabold text-gray-900 text-center ${styles['fontFamily-MyFont2']}`}>SERVICIOS</h2>
        <br />
        <p className={`text-4xl text-gray-600 text-center ${styles['fontFamily-MyFont1']}`}>
          Somos GIRASALUD, un equipo de psicólogos que contribuye a la prevención y promoción de la salud mental por medio de actividades artísticas con material lúdico y terapias psicológicas. Es por ello que brindamos un espacio de salud mental lúdico y seguro donde puedes ser tú mismo.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <Disclosure.Button className={`flex flex-col items-center w-full text-center text-3xl font-medium text-gray-900 focus:outline-none ${styles['fontFamily-MyFont2']}`}>
                    <div className={styles.disclosureButtonContent}>
                      <FontAwesomeIcon icon={service.icon} className="text-6xl mb-4" style={{ color: service.iconColor }} />
                      <span className={styles.serviceTitle}>{service.title}</span>
                    </div>
                    <ChevronUpIcon className={`${open ? 'transform rotate-180' : ''} w-5 h-5 text-gray-500`} />
                  </Disclosure.Button>
                  <Disclosure.Panel className="pt-4 text-lg text-gray-600">
                    <div className="flex flex-col space-y-4">
                      {service.details.map((detail, index) => (
                        <button
                          key={index}
                          className={`bg-yellow-500 hover:bg-yellow-600 text-white text-4xl font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 ${styles['fontFamily-MyFont3']}`}
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
      </div>
    </div>
  );
};

export default Services;
