import React from 'react';
import {nanoid} from "nanoid";
import './Count.css';

const Count = ({count}) => {
  const showCountMeal = count.map(item => {
    return <span key={nanoid()} className="count">{item.name}: {item.count}</span>
  });
  
  return (
    <div className="countBlock">
      <h4>Count:</h4>
      {showCountMeal}
    </div>
  );
};

export default Count;