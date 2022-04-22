import React from 'react';
import Card from '../Card/Card.jsx';
import style from './Cards.module.css';


export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div style={{'display':'flex', 'justify-content': 'space-around'}}>
    {cities.map((city) =>{
      return (
        <Card
        key = {city.id}
        max={city.main.temp_max}
        min={city.main.temp_max}
        name={city.name}
        img={city.weather[0].icon}
        onClose={() => alert(city.name)}
        />
      )

    })}
    </div>
  )
};
