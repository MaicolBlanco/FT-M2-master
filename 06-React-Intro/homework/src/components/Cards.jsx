import React from "react";
import Card from "./Card";

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <>
      {props.cities.map((city) => {
        return (
          <Card
            key = {city.id}
            max={city.main.temp_max}
            min={city.main.min}
            name={city.name}
            img={city.weather[0].icon}
            onClose={() => alert(city.name)}
          />
        );
      })}
    </>
  );
}
