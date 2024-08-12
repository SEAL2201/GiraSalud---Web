import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../assets/pexels-alex-green-5699418.jpg';
import image2 from '../assets/background.jpeg';
import image3 from '../assets/pexels-shvets-production-7176319.jpg';
import image4 from '../assets/pexels-alex-green-5699496.jpg'

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
          <div className="flex flex-col justify-center items-left h-full bg-black bg-opacity-50 p-2">
            <div className="text-left text-white space-y-4">
              <h1 className="text-9xl font-bold animate-pulse">GIRASALUD</h1>
              <h1 className="text-5xl font-bold animate-pulse">EL PODER DE ELEGIR</h1>
            </div>
          </div>
        </div>
        <div className="h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${image2})` }}>
          <div className="flex flex-col justify-center items-left h-full bg-black bg-opacity-50 p-2">
            <div className="text-left text-white space-y-4">
              <h1 className="text-9xl font-bold animate-pulse">GIRASALUD</h1>
              <h1 className="text-5xl font-bold animate-pulse">EL PODER DE ELEGIR</h1>
            </div>
          </div>
        </div>
        <div className="h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${image3})` }}>
          <div className="flex flex-col justify-center items-left h-full bg-black bg-opacity-50 p-2">
            <div className="text-left text-white space-y-4">
              <h1 className="text-9xl font-bold animate-pulse">GIRASALUD</h1>
              <h1 className="text-5xl font-bold animate-pulse">EL PODER DE ELEGIR</h1>
            </div>
          </div>
        </div>
        <div className="h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${image4})` }}>
          <div className="flex flex-col justify-center items-left h-full bg-black bg-opacity-50 p-2">
            <div className="text-left text-white">
              <h1 className="text-9xl font-bold animate-pulse">GIRASALUD</h1>
              <h1 className="text-5xl font-bold animate-pulse">EL PODER DE ELEGIR</h1>
            </div>
            
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Home;
