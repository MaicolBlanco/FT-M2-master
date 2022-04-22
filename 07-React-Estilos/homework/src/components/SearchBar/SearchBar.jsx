import React from 'react';
import objecStyle from './SearchBar.module.css';

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div className={objecStyle.contenedor}>
      <input className={objecStyle.input} type="text" placeholder='Ciudad...'/>
      <button className={objecStyle.button} onClick={ () => props.onSearch('nombreCiudad')}>Agregar</button>
    </div>
  )
};