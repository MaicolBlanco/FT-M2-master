import React from "react";

export default function Card(props) {
/* Tambien se puede destructurar 
export default function Card({name, min, max, img, onClose}) {
  Y ya no se llaman las 'props' si no directamente por nombre -> eje: name*/
  // console.log('hey probando')
  // acá va tu código

  // console.log(props);
  return (
    // <> es igual a <react.Fragment></react.Fragment>
    <>
      <h1>{props.name}</h1>
      <h3>Min</h3>
      <h4>{props.min}</h4>
      <h3>Max</h3>
      <h4>{props.max}</h4>

      <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="Imagen de clima"/>
      {/* Podemos solo llamando la definición de la función */}
      <button onClick={props.onClose}>X</button>
      {/* Tambien se puede hacer el evento del click llamando una callback 
      <button onClick={() => props.onClose()}>X</button>*/}
    </>
  );
}
