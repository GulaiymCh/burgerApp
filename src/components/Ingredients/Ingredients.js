import React from 'react';
import {nanoid} from "nanoid";
import Ingredient from "../Ingredient/Ingredient";

const Ingredients = (props) => {
  const ingredientsArray = props.ingredients.map(item => {
    return (
      <Ingredient
        key={nanoid()}
        onClickIngredientPlus={() => props.onClickIngredientPlus(item.id)}
        onclickIngredientMinus={() => props.onclickIngredientMinus(item.id)}
        image={item.image}
        name={item.name}
        price={item.price}
        delete={() => props.delete(item.id)}
      />
    );
  });
  
  return (
    <fieldset className="box">
      <legend className="boxTitle">Ingredients</legend>
      {ingredientsArray}
    </fieldset>
  );
};

export default Ingredients;