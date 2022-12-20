import React from 'react';
import {nanoid} from "nanoid";

const BurgerFilling = (props) => {
  const fillingArray = props.filling.map(item => {
    const filling = [];
    if (item.name === 'Meat') {
      for (let i = 0; i < item.count; i++) {
        filling.push(<div key={nanoid()} className="Meat"></div>);
      }
    } else if (item.name === 'Cheese') {
      for (let i = 0; i < item.count; i++) {
        filling.push(<div key={nanoid()} className="Cheese"></div>);
      }
    } else if (item.name === 'Salad') {
      for (let i = 0; i < item.count; i++) {
        filling.push(<div key={nanoid()} className="Salad"></div>);
      }
    } else if (item.name === 'Bacon') {
      for (let i = 0; i < item.count; i++) {
        filling.push(<div key={nanoid()} className="Bacon"></div>);
      }
    }
    
    return filling;
  });
  
  return (
    <>
      {fillingArray}
    </>
  );
};

export default BurgerFilling;