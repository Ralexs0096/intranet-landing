import React, {useState} from 'react';
import {fetchFunctional} from '../api/api';

const FormularioSolicitud = () => {

    const [datos, setDatos] = useState({
      User: '',
      Description: '',
      Type: '',
      AreaCode: '',
      Mail: '',
    });

    const {User, Description, Type, AreaCode, Mail} = datos;

    const recogerInformacion = e => {
      setDatos({
        ...datos,
        [e.target.name] : e.target.value
      })
    }

    

    const enviarSolicitud = e => {
      e.preventDefault();

      try {
        if(User.trim() === '' || Description.trim() === '' || AreaCode.trim() === '' || Type === '' || Mail === ''  ){
          
          if(typeof AreaCode !== 'number'){
            setError(true);
            return;
          }
        }
        setError(false);
  
       fetchFunctional('http://localhost:4001/api/requests', 'POST', datos);
  
        setDatos({
          User: '',
          Description: '',
          Type: '',
          AreaCode: '',
          Mail: '',
        })

        setAlert(true);

      } catch (error) {
        console.log('Error' ,error);
      }
      
    }

    const [error, setError] = useState(false);
    const [alert, setAlert] = useState(false);

    return (
        <div>
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
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-6/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg "
                  src={require('assets/img/img2.jpg')}
                />
                { alert 
                ? 
                  <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
                    <div className="flex">
                      <div className="py-1"><svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                        <div>
                          <p className="font-bold">Solicitud Enviada!</p>
                          <p className="text-sm">Tu solicitud estara siendo procesada en poco tiempo.</p>
                        </div>
                    </div>
                  </div>
                :
                 null}
              </div>
              <div className="w-full md:w-5/12  ml-auto mr-auto px-4">
                <div className="md:pr-12 ">
                  <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">
                  ¿Haz tenido algun inconveniente?
                  </h3>
                  <form
                    onSubmit={enviarSolicitud}
                  >

                    { error 
                    ? 
                      <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
                        <p className="font-bold">Recuerda!</p>
                        <p>Todos los campos son obligatorios</p>
                      </div>
                    : 
                    null}
                    
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        required
                        className="px-3 py-3 placeholder-gray-500 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Nombre"
                        style={{ transition: "all .15s ease" }}
                        name="User"
                        value={User}
                        onChange={recogerInformacion}
                      />
                    </div>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Codigo de Area
                      </label>
                      <input
                        type="text"
                        required
                        pattern="[0-9]{6}"
                        placeholder="### ###"
                        className="px-3 py-3 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        style={{ transition: "all .15s ease" }}
                        name="AreaCode"
                        value={AreaCode}
                        onChange={recogerInformacion}
                      />
                    </div>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Describe tu inconveniente
                      </label>
                      <textarea 
                        type="text"
                        required
                        placeholder="cuentanos..."
                        style={{ transition: "all .15s ease" }} 
                        className="px-3 py-3 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        name="Description"
                        value={Description}
                        onChange={recogerInformacion}
                      >

                      </textarea>
                    </div>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Tipo de solicitud
                      </label>
                      <select 
                        className="px-3 py-3 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        name="Type"
                        value={Type}
                        onChange={recogerInformacion}
                      >
                        <option value="" disabled> -- select --</option>
                        <option value="Conexion">Conexion</option>
                        <option value="Accesos">Accesos</option>
                        <option value="Mantenimiento">Mantenimiento</option>
                        <option value="Correo">Correo</option>
                        <option value="Asignacion de Equipo">Asignacion de Equipo</option>
                        <option value="Otros">Otros</option>
                      </select>
                    </div>

                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Correo
                      </label>
                      <select 
                        className="px-3 py-3 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        name="Mail"
                        value={Mail}
                        onChange={recogerInformacion}
                      >
                        <option value="" disabled> -- select --</option>
                        <option value="noel.morales@signature.com.ni">noel.morales@signature.com.ni</option>
                        <option value="alexander.ruiz@signature.com.ni">alexander.ruiz@signature.com.ni</option>
                        <option value="oscar.aleman@signature.com.ni">oscar.aleman@signature.com.ni</option>
                      </select>
                    </div>

                    <div className="text-center mt-6">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="submit"
                        style={{ transition: "all .15s ease" }}
                      >
                        Enviar
                      </button>
                    </div>
                    </form>
                </div>
              </div>
            </div>
          </div>
          </div>

      
    )
}

export default FormularioSolicitud
