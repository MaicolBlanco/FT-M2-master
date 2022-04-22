import React from "react";
import objecStyle from "./Card.module.css";

export default function Card({ name, img, max, min, onClose }) {
  // acá va tu código
  return (
    <div className={objecStyle.card}>
      <button onClick={() => onClose()} className={objecStyle.closeButton}>X</button>
      <div className={objecStyle.body}>
        <h1 className={objecStyle.title}>{name}</h1>
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p>Min</p>
            <p>{min}</p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p>Max</p>
            <p>{max}</p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <img
              className={objecStyle.icon}
              src={`http://openweathermap.org/img/wn/${img}@2x.png`}
              alt="Imagen del clima"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
