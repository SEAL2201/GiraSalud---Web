import React from "react";
import contactImage from "../assets/LogoFormulario.png";
import styles from '../App.module.css';

const Contact = () => {
  return (
    <div name="Contact" className="flex justify-center items-center min-h-screen bg-gray-100 py-6 md:py-12 px-4 md:px-8">
      <div className="w-full max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <h2 className={`text-3xl sm:text-4xl md:text-7xl font-extrabold text-[#eeb741] text-center mb-8 ${styles['fontFamily-MyFont2']}`}>
          Contactanos
        </h2>
        <div className="flex flex-col md:flex-row">
          {/* Contenedor de la imagen */}
          <div className="w-full md:w-1/2 flex justify-center items-center p-4">
            <div className="relative w-full h-96">
              <img
                className="object-contain w-full h-full"
                src={contactImage}
                alt="Contáctanos"
                style={{ width: '100%', height: '100%', maxHeight: '600px' }} // Ajusta el tamaño aquí
              />
            </div>
          </div>
          {/* Contenedor del formulario */}
          <div className="p-4 md:p-8 flex-1">
            <form
              className="space-y-4"
              method="POST"
              action="https://getform.io/f/zbzkmrja"
            >
              <div>
                <label htmlFor="Name" className={`block text-lg md:text-2xl font-medium text-gray-700 ${styles['fontFamily-MyFont4']}`}>
                  Nombre
                </label>
                <input
                  id="Name"
                  name="Name"
                  type="text"
                  className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm md:text-2xl ${styles.inputBackground}`}
                />
              </div>
              <div>
                <label htmlFor="Email" className={`block text-lg md:text-2xl font-medium text-gray-700 ${styles['fontFamily-MyFont4']}`}>
                  Email
                </label>
                <input
                  id="Email"
                  name="Email"
                  type="email"
                  className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm md:text-2xl ${styles.inputBackground}`}
                />
              </div>
              <div>
                <label htmlFor="Phone" className={`block text-lg md:text-2xl font-medium text-gray-700 ${styles['fontFamily-MyFont4']}`}>
                  Teléfono
                </label>
                <input
                  id="Phone"
                  name="Phone"
                  type="phone"
                  className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm md:text-2xl ${styles.inputBackground}`}
                />
              </div>
              <div>
                <label htmlFor="Message" className={`block text-lg md:text-2xl font-medium text-gray-700 ${styles['fontFamily-MyFont4']}`}>
                  Mensaje
                </label>
                <textarea
                  id="Message"
                  name="Message"
                  rows="4"
                  className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm md:text-2xl ${styles.inputBackground}`}
                ></textarea>
              </div>
              <button
                type="submit"
                className={`${styles.btnGradient} ${styles.btnGrow} w-full text-sm md:text-lg py-2 px-4 border border-transparent rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${styles['fontFamily-MyFont4']}`}
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
