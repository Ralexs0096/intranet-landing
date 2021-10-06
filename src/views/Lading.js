import React from "react";

import Navbar from "components/Navbar.js";
import Footer from "components/Footer.js";
import FormularioSolicitud from "components/FormularioSolicitud";
import TablaPbx from "components/TablaPbx";
import BuscadorCorreos from "components/BuscadorCorreos";

export default function Landing() {

  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
            style={{
              minHeight: "75vh"
            }}>
          <div className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage: `url(${require('assets/img/Background-main.jpg')})`
              }}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
          </div>
          <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <div className="pr-12">
                    <h1 className="text-white font-semibold text-5xl">
                      Bienvenido a Signature Intranet
                    </h1>
                    <p className="mt-4 text-lg text-gray-300">
                      Puedes utilizar este recurso para consultar informacion 
                      y realizar algunos procesos de una manera mas eficiente
                    </p>
                  </div>
                </div>

              </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px", transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-gray-300 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-shopping-bag"></i>
                    </div>
                    <h6 className="text-xl font-semibold"><a href="/">SIC</a></h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      <b>Sistema Integral de Compras</b> creado con el fin de optimizar el proceso 
                      de gestion de compra y facilitar la gestion de materiales.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                      <i className="fas fa-calculator"></i>
                    </div>
                    <h6 className="text-xl font-semibold">
                      <a href="/">SIN</a> 
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      <b>Sistema Integral de Nomima</b> creado con el fin de llevar un control integro del personal, asistencia, incidencias entre otras.
                      De una manera facil e intuitiva
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                      <i className="fas fa-clipboard"></i>
                    </div>
                    <h6 className="text-xl font-semibold">
                        <a href="/">Inventario de Activos</a> 
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Creado con el fin de realizar gestion de asignacion y control de activos,
                      historico de mantenimiento y la duracion util del activo. 
                      Asignacion de activos a cada responsable y todo esto de manera integral.
                    </p>
                  </div>
                </div>
              </div>
            </div>


            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Recuerda que este recurso esta construido para tu beneficio
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  Aqui puedes encontrar acceso a tus contactos dentro de Signature,
                  asi como realizar solicitudes de soporte en caso de presentar algun inconveniente tecnico, 
                  ver las extensiones a las cuales llamar en caso de necesitar comunicarte de manera rapida.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                  
                </p>
                
                  <strong>puedes tambien hacer uso de nuestros sistemas. </strong>
                
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                  <img
                    alt="..."
                    src={require('assets/img/img1.jpeg')}
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block"
                      style={{
                        height: "95px",
                        top: "-94px"
                      }}
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-pink-600 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Nuevas oportunidades estan viniendo
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      El secreto del cambio es enfocar toda tu energia, no en la lucha contra lo viejo, 
                      sino en la construccion de lo nuevo
                    </p>
                  </blockquote>
                </div>
              </div>

            </div>
          </div>
        </section>

       <section className="py-20 bg-blue-300">
         <FormularioSolicitud />
       </section>
        
        <section className="py-20 bg-gray-300">
          <TablaPbx />
        </section>
       
        <section className="pb-20 relative block bg-gray-900">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px", transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-900 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <div className="bg-green-100 rounded p-5 grid"> 
                  
                  <BuscadorCorreos />

                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative block py-24 lg:pt-0 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
