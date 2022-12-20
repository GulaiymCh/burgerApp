import React from 'react';
import './Ingredient.css';

const Ingredient = (props) => {
  return (
    <div className="lineIngredient">
      <img className="imgIngredient" onClick={props.onClickIngredientPlus} src={props.image} alt="ingredient"/>
      <span className="nameIngredient">{props.name}</span>
      <span className="priceIngredient">Price: {props.price}c</span>
      <span className="countBtn" onClick={props.onClickIngredientPlus}>+</span>
      <span className="countBtn" onClick={props.onclickIngredientMinus}>-</span>
      <span className="deleteBtn" onClick={props.delete}>Delete</span>
    </div>
  );
};

export default Ingredient;