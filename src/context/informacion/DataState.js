import React, { useReducer, useState } from "react";

import dataContext from "./dataContext";
import dataReducer from "./dataReducer";

const DataState = (props) => {
  
    const [emailInput, setEmailInput] = useState('');
    const [pbxInput, setPbxInput] = useState('');

    const initialState = {
        dataPbx: [],
        dataEmail: [],
    };

  const [state, dispatch] = useReducer(dataReducer, initialState);

  // funciones
  const obtenerDataPbx = async () => {
    try {
        if(pbxInput.length > 0){
            const resultado = await fetch(
                `http://localhost:5000/api/users/pbxfilter?name=${pbxInput}`
              );
              const data = await resultado.json();
              dispatch({
                type: "FILTRAR_PBX",
                payload: data.users,
              });
        } else {
            const resultado = await fetch("http://localhost:5000/api/users?limite=8");
            const data = await resultado.json();
            dispatch({
              type: "MOSTRAR_PBX",
              payload: data.user,
            });
        }
    } catch (error) {
      console.log(error);
    }
  };

  const obtenerDataEmail = async () => {
    try {
      if (emailInput.length > 0) {
        const resultado = await fetch(
          `http://localhost:5000/api/users/mailfilter?name=${emailInput}`
        );
        const data = await resultado.json();
        dispatch({
          type: "FILTRAR_CORREO",
          payload: data.users,
        });
      } else {
        dispatch({
          type: "VALORES_INICIALES",
          payload: [],
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <dataContext.Provider
      value={{
        dataPbx: state.dataPbx,
        dataEmail: state.dataEmail,
        obtenerDataPbx,
        obtenerDataEmail,
        setEmailInput,
        emailInput,
        pbxInput,
        setPbxInput
      }}
    >
      {props.children}
    </dataContext.Provider>
  );
};

export default DataState;
