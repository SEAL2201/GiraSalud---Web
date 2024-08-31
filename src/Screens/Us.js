import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import background1 from '../assets/background1.jpg';
import paragraphImage from '../assets/IMG_0134.jpg';
import paragraphImage1 from '../assets/IMG_0222.jpg';
import paragraphImage2 from '../assets/IMG_0171.jpg';
import paragraphImage3 from '../assets/IMG_0207.jpg';
import girasolIcon from '../assets/girasol.png';
import './Us.css'; 
import styles from '../App.module.css';

const professionals = [
  {
    name: "Alexander Azuero Galarza",
    profession: "Psicólogo Industrial Master en Dirección y Gestión de Recursos Humanos",
    description: "Psicólogo especialista en la gestión del talento humano, con más de 3 años de experiencia. Ha formado a 1000 colaboradores en liderazgo, trabajo en equipo, gestión de emociones, seguridad en el trabajo, y riesgos psicosociales. Destaca en dinámicas de equipos, capacitaciones lúdicas, gincanas, y team building; imparte talleres para empresas e instituciones.",
    image: require("../assets/ALEX.png"),
    className: "alexander"
  },
  {
    name: "Ambar Vivas Villamarín",
    profession: "PSICÓLOGA CLÍNICA ESPECIALISTA EN TERAPIA COGNITIVO CONDUCTUAL",
    description: "Psicóloga clínica con 3 años de experiencia trabajando en terapia cognitivo conductual en casos de ansiedad, depresión, trastornos alimenticios, síndrome post COVID, adicciones, trastornos de conducta en niños, y violencia intrafamiliar. Ha ayudado a más de 300 personas y destaca en dinámicas creativas, intervenciones grupales, primeros auxilios psicológicos, y terapia cognitivo conductual.",
    image: require("../assets/AMBAR.png"),
    className: "ambar"
  },
];

const Nosotros = () => {
  return (
    <div name="Nosotros">
      <div className="relative bg-cover bg-center bg-no-repeat h-screen" style={{ backgroundImage: `url(${background1})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-7xl md:text-8xl font-extrabold">GiraSalud</h1>
            <p className="mt-4 text-2xl lg:text-4xl">
              "Todos los aprendizajes más importantes de la vida se hacen jugando"
              <br></br>(Francesco Tonucci)
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-[#f28e1e] py-12"> 
        <h2 className={`text-3xl sm:text-4xl md:text-7xl font-extrabold text-[#eeb741] text-center mb-8 ${styles['fontFamily-MyFont2']}`}>
          Nosotros
        </h2>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="content-container">
            <div className={`text-container ${styles['fontFamily-MyFont4']}`}>
              <ul className="list-disc pl-6 text-white">
                <div className="mb-2 text-3xl lg:text-4xl xl:text-3xl">
                  Somos Girasalud, un equipo de psicólogos que promociona la salud mental por medio de actividades artísticas con material lúdico y terapias psicológicas.
                </div>
                <br></br>
                <li className="mb-4 text-3xl lg:text-4xl xl:text-3xl">
                  <img src={girasolIcon} alt="Girasol" className="inline-block w-8 h-8 sm:w-10 sm:h-10 mx-2"/>
                  En Girasalud, empoderamos a los padres de hijos con dificultades emocionales y de conducta con el objetivo de mejorar su salud mental y calidad de vida.
                </li>
                <li className="mb-4 text-3xl lg:text-4xl xl:text-3xl">
                  <img src={girasolIcon} alt="Girasol" className="inline-block w-8 h-8 sm:w-10 sm:h-10 mx-2"/>
                  Contribuimos en la prevención y promoción de la salud mental por medio de actividades artísticas con material lúdico; y tratamos el malestar emocional a través de la terapia psicológica.
                </li>
                <li className="mb-4 text-3xl lg:text-4xl xl:text-3xl">
                  <img src={girasolIcon} alt="Girasol" className="inline-block w-8 h-8 sm:w-10 sm:h-10 mx-2"/>
                  Ser reconocidos como un espacio de salud mental artístico en la ciudad de Latacunga.
                </li>
              </ul>
            </div>
            
            <div className="carousel-container">
              <div className="carousel-container relative w-full overflow-hidden">
                <Carousel
                  showThumbs={false}
                  autoPlay
                  infiniteLoop
                  showStatus={false}
                  className="w-full h-full"
                >
                  <div className="flex justify-center items-center h-full">
                    <img src={paragraphImage} alt="Girasalud Activity 1" className="object-cover w-full h-full" />
                  </div>
                  <div className="flex justify-center items-center h-full">
                    <img src={paragraphImage1} alt="Girasalud Activity 2" className="object-cover w-full h-full" />
                  </div>
                  <div className="flex justify-center items-center h-full">
                    <img src={paragraphImage2} alt="Girasalud Activity 3" className="object-cover w-full h-full" />
                  </div>
                  <div className="flex justify-center items-center h-full">
                    <img src={paragraphImage3} alt="Girasalud Activity 4" className="object-cover w-full h-full" />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
          
          <br></br>
          <br></br>
          <h2 className={`text-2xl md:text-7xl font-extrabold text-center ${styles['fontFamily-MyFont2']}`} style={{ color: '#eeb741' }}>
            Equipo de GiraSalud
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8">
            {professionals.map((professional, index) => (
              <div
                key={index}
                className={`professional-container rounded-xl p-6 flex flex-col sm:flex-row items-center transform transition-transform duration-500 hover:scale-105 ${
                  index % 2 === 1 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                <div className="professional-image-container">
                  <img
                    className="professional-image"
                    src={professional.image}
                    alt={professional.name}
                  />
                </div>
                <div className="professional-info-container">
                  <h3 className="text-2xl lg:text-2xl">{professional.name}</h3>
                  <p className="text-2xl lg:text-3xl mt-3 mb-4 uppercase">{professional.profession}</p> 
                  <p className={`${styles['fontFamily-MyFont4']} mt-7 text-lg lg:text-2xl`}>
                    {professional.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
