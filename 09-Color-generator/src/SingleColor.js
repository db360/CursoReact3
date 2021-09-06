import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {

  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(","); // Une el string de 3 de rgb con comas
  const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false) // timeout para la alerta a los 3 seg
    },3000)
    return () => clearTimeout(timeout) // limpia el timeout
  }, [alert])
  return (
    <article
      className={`color ${index > 9 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true); // ensela la alerta de copiado
        navigator.clipboard.writeText(hexValue) // copiar a elemento copiado
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert"> Copied To Clipboard</p>}


    </article>
  );
};

export default SingleColor;
