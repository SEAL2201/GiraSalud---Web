import React, { useState } from "react";
import { GiToolbox, GiCrafting, GiBookshelf, GiMusicalNotes } from "react-icons/gi";
import styles from '../App.module.css';

// Importar los PDFs de la carpeta local
import cuento1 from "../assets/documents/cuento el-arbol-de-los-recuerdos-para niños en duelo.pdf";
import cuento2 from "../assets/documents/Cuento-El-pato-y-la-Muerte.pdf";
import cuento3 from "../assets/documents/FABULAS-Y-CUENTOS-PARA-TRABAJRA-LOS-VALORES.pdf";
import cuento4 from "../assets/documents/Elogio de la amistad.pdf";
import cuento5 from "../assets/documents/Cuentos-para-vivir-el-duelo.pdf";
import cuento6 from "../assets/documents/cuentos para educar niños felices.pdf";

const resources = [
  {
    id: 1,
    title: "Kits de Habilidades para la Vida",
    icon: <GiToolbox color="#565B80" />,
    content: "MUY PRONTO!",
  },
  {
    id: 2,
    title: "Manualidades Emocionales",
    icon: <GiCrafting color="#565B80" />,
    content: "MUY PRONTO!",
  },
  {
    id: 3,
    title: "Cuentos Infantiles",
    icon: <GiBookshelf color="#565B80" />,
    content: "Aquí podrás leer cuentos infantiles.",
  },
  {
    id: 4,
    title: "Cancionario",
    icon: <GiMusicalNotes color="#565B80" />,
    content: "MUY PRONTO!",
    special: true,
  },
];

const cuentosLinks = [
  { id: 1, title: "El árbol de los Recuerdos", file: cuento1 },
  { id: 2, title: "El Pato y la Muerte", file: cuento2 },
  { id: 3, title: "Fábulas Valores para Vivir mejor", file: cuento3 },
  { id: 4, title: "Elogio de la Amistad", file: cuento4 },
  { id: 5, title: "Cuentos para vivir el duelo", file: cuento5 },
  { id: 6, title: "Cuentos para educar niños felices", file: cuento6 },
];

const Resources = () => {
  const [selectedResource, setSelectedResource] = useState(null);

  const openDetails = (resource) => {
    setSelectedResource(resource);
  };

  const closeDetails = () => {
    setSelectedResource(null);
  };

  return (
    <div name="Semillero" className="bg-gray-100 py-12 min-h-screen flex items-center justify-center">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-8 ${styles['fontFamily-MyFont2']}`}>
          Semillero
        </h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className={`w-full ${styles.btnGradient} shadow-md rounded-lg p-4 sm:p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 ${
                resource.special ? 'md:col-span-3' : ''
              }`}
              style={resource.special ? { height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' } : {}}
            >
              <div className="text-4xl sm:text-5xl md:text-6xl mb-4">
                {resource.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{resource.title}</h3>
              <button
                onClick={() => openDetails(resource)}
                className="mt-4 bg-[#565B80] hover:bg-[#4a5070] text-white py-2 px-4 rounded transition-colors"
              >
                Ver detalles
              </button>
            </div>
          ))}
        </div>

        {selectedResource && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 sm:p-8 rounded-lg max-w-3xl mx-4 w-full">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{selectedResource.title}</h2>
              <div className="text-2xl sm:text-4xl text-[#565B80] mb-4">
                {selectedResource.icon}
              </div>

              {selectedResource.title === "Cuentos Infantiles" ? (
                <div className="overflow-x-auto">
                  <div className="flex space-x-4">
                    {cuentosLinks.map((cuento) => (
                      <a
                        key={cuento.id}
                        href={cuento.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 text-white py-3 px-5 rounded-lg shadow-md hover:bg-blue-600 transition-colors transform hover:scale-105"
                      >
                        {cuento.title}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="text-gray-700">{selectedResource.content}</p>
              )}

              <button onClick={closeDetails} className="mt-4 bg-[#565B80] hover:bg-[#4a5070] text-white py-2 px-4 rounded transition-colors">
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resources;
