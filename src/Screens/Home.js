import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../assets/pexels-alex-green-5699418.jpg';
import image2 from '../assets/background.jpeg';
import image3 from '../assets/pexels-shvets-production-7176319.jpg';
import image4 from '../assets/pexels-alex-green-5699496.jpg';
import logo from '../assets/logoNavBar.png'; // Asegúrate de que el logotipo esté en la carpeta de assets

const Home = () => {
  return (
    <div name="Inicio" className="h-screen">
      <Carousel
        showThumbs={false}
        infiniteLoop
        useKeyboardArrows
        autoPlay
        showStatus={false}
        className="h-full"
      >
        <div className="h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${image1})` }}>
          <div className="flex justify-center items-center h-full bg-black bg-opacity-50">
            <img src={logo} alt="GIRASALUD" style={{ width: '750px', height: 'auto' }} /> {/* Tamaño ajustado */}
          </div>
        </div>
        <div className="h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${image2})` }}>
          <div className="flex justify-center items-center h-full bg-black bg-opacity-50">
            <img src={logo} alt="GIRASALUD" style={{ width: '750px', height: 'auto' }} /> {/* Tamaño ajustado */}
          </div>
        </div>
        <div className="h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${image3})` }}>
          <div className="flex justify-center items-center h-full bg-black bg-opacity-50">
            <img src={logo} alt="GIRASALUD" style={{ width: '750px', height: 'auto' }} /> {/* Tamaño ajustado */}
          </div>
        </div>
        <div className="h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${image4})` }}>
          <div className="flex justify-center items-center h-full bg-black bg-opacity-50">
            <img src={logo} alt="GIRASALUD" style={{ width: '750px', height: 'auto' }} /> {/* Tamaño ajustado */}
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Home;
