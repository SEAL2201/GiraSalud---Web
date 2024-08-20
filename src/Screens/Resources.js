import React, { useState } from "react";
import { GiToolbox, GiCrafting, GiBookshelf, GiMusicalNotes } from "react-icons/gi";
import styles from '../App.module.css';
import '../App.module.css';

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
    content: "MUY PRONTO!",
  },
  {
    id: 4,
    title: "Cancionario",
    icon: <GiMusicalNotes color="#565B80" />,
    content: "MUY PRONTO!",
    special: true
  },
];

const Resources = () => {
  const [selectedResource, setSelectedResource] = useState(null);

  const openDetails = (resource) => {
    setSelectedResource(resource);
  };

  const closeDetails = () => {
    setSelectedResource(null);
  };

  const colors = ["#F0A532", "#F2BB41", "#F0A532", "#F2BB41"];

  return (
    <div name="Semillero" className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-8 ${styles['fontFamily-MyFont2']}`}>
          Semillero
        </h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <div
              key={resource.id}
              style={{ backgroundColor: colors[index % colors.length] }}
              className={`${
                resource.special ? 'col-span-full' : '' 
              } ${styles.btnGradient} shadow-md rounded-lg p-4 sm:p-6 flex flex-col items-center text-center`}
            >
              <div className="text-4xl sm:text-5xl md:text-6xl mb-4">
                {resource.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{resource.title}</h3>
              <button onClick={() => openDetails(resource)} className="mt-4 bg-[#565B80] hover:bg-[#4a5070] text-white py-2 px-4 rounded">
                Ver detalles
              </button>
            </div>
          ))}
        </div>
        {selectedResource && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 sm:p-8 rounded-lg max-w-md mx-4">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{selectedResource.title}</h2>
              <div className="text-2xl sm:text-4xl text-[#565B80] mb-4">
                {selectedResource.icon}
              </div>
              <p className="text-gray-700">{selectedResource.content}</p>
              <button onClick={closeDetails} className="mt-4 bg-[#565B80] hover:bg-[#4a5070] text-white py-2 px-4 rounded">
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
