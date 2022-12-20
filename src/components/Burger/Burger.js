import React from 'react';
import './Burger.css';
import BurgerFilling from "../BurgerFilling/BurgerFilling";
import Count from "../Count/Count";

const Burger = (props) => {
  return (
    <fieldset className="box">
      <legend className="boxTitle">Burger</legend>
      <div className="Burger">
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
        <BurgerFilling filling={props.filling}/>
        <div className="BreadBottom"></div>
      </div>
      <p className="price">Price: {props.cost} c</p>
      <Count count={props.filling}/>
    </fieldset>
  );
};

export default Burger;