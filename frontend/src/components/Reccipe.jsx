import React from "react";
import { BASE_URL } from "../App";

const Reccipe = (props) => {
  const { id, ingredients, name, category, image, description } = props;

  return (
    <div>
      <img src={BASE_URL + image} alt="kajakep" />
      <h2>{name}</h2>
      <h3>Hozzávalók:</h3>
      <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ul>
      <h3>Elkészítés</h3>
      <p>{description}</p>
    </div>
  );
};

export default Reccipe;
