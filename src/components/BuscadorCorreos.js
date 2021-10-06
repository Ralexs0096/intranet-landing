import React, { useContext, useEffect } from "react";
import dataContext from "../context/informacion/dataContext";

const BuscadorCorreos = () => {
  const { emailInput, setEmailInput, dataEmail, obtenerDataEmail } = useContext(
    dataContext
  );

  useEffect(() => {
    obtenerDataEmail();
  }, [emailInput]);

  return (
    <>
      <div
        col-span-2
        row-span-2
        bg-orange-100
        rounded
        p-5
        flex
        items-center
        justify-center
      >
        <p className="text-4xl font-semibold text-white text-center border-green-500 my-10">
          Encuentra un Correo
        </p>

        <input
          type="text"
          className="px-3 py-3 bg-gray-100 text-sm rounded mt-10 w-full"
          onChange={(e) => setEmailInput(e.target.value)}
        />
        {dataEmail.length === 0
          ? null
          : dataEmail.map((item) => (
              <div
                className="max-w-lg w-full rounded-lg shadow-lg p-4 bg-white mt-5"
                key={item._id}
              >
                <h3 className="font-semibold text-sm text-gray-700 tracking-wide">
                  {item.FirstName} {item.LastName}
                </h3>
                <p className="text-gray-500 my-1 text-sm">{item.Email}</p>
                <div className="">
                  <button className="uppercase font-semibold tracking-wide bg-blue-100 text-blue-700 px-4 py-2 rounded-lg mt-2 focus:outline-none hover:bg-blue-200 text-sm">
                    Escribirle
                  </button>
                </div>
              </div>
            ))}
      </div>
    </>
  );
};

export default BuscadorCorreos;
