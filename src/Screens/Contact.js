import React from "react";
import contactImage from "../assets/LogoFormulario.jpg";
import styles from '../App.module.css';

const Contact = () => {
  return (
    <div name="Contact" className="flex justify-center items-center min-h-screen bg-gray-100 py-6 md:py-12 px-4 md:px-8">
      <div className="w-full max-w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Imagen en dispositivos móviles */}
          <div className="block md:hidden w-full flex justify-center items-center p-4">
            <img
              className="object-contain w-90 h-80" // Ajusta el tamaño aquí
              src={contactImage}
              alt="Contáctanos"
            />
          </div>
          {/* Imagen en pantallas grandes */}
          <div className="hidden md:block md:w-1/2 flex justify-center items-center p-4 md:p-0">
            <img
              className="object-cover w-300 h-300"
              src={contactImage}
              alt="Contáctanos"
            />
          </div>
          <div className="p-4 md:p-8 flex-1">
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-6 text-center md:text-left">
              Contáctanos
            </h2>
            <form
              className="space-y-4"
              method="POST"
              action="https://getform.io/f/zbzkmrja"
            >
              <div>
                <label htmlFor="Name" className="block text-lg md:text-xl font-medium text-gray-700">
                  Nombre
                </label>
                <input
                  id="Name"
                  name="Name"
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm md:text-base"
                />
              </div>
              <div>
                <label htmlFor="Email" className="block text-lg md:text-xl font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="Email"
                  name="Email"
                  type="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm md:text-base"
                />
              </div>
              <div>
                <label htmlFor="Phone" className="block text-lg md:text-xl font-medium text-gray-700">
                  Teléfono
                </label>
                <input
                  id="Phone"
                  name="Phone"
                  type="phone"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm md:text-base"
                />
              </div>
              <div>
                <label htmlFor="Message" className="block text-lg md:text-xl font-medium text-gray-700">
                  Mensaje
                </label>
                <textarea
                  id="Message"
                  name="Message"
                  rows="4"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm md:text-base"
                ></textarea>
              </div>
              <button
                type="submit"
                className={`${styles.btnGradient} ${styles.btnGrow} w-full text-sm md:text-lg py-2 px-4 border border-transparent rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2`}
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
