import React, {useState} from 'react';
import {nanoid} from "nanoid";
import Burger from "./components/Burger/Burger";
import Ingredients from "./components/Ingredients/Ingredients";
import meatImage from './assets/meat.png';
import cheese from './assets/cheese.png';
import salad from './assets/salad.png';
import bacon from './assets/bacon.png';
import './App.css';

const INGREDIENTS = [
  {name: 'Meat', price: 50, image: meatImage, id: nanoid()},
  {name: 'Cheese', price: 20, image: cheese, id: nanoid()},
  {name: 'Salad', price: 5, image: salad, id: nanoid()},
  {name: 'Bacon', price: 30, image: bacon, id: nanoid()},
];

const App = () => {
  const [ingredients, setIngredients] = useState([
    {name: 'Meat', count: 0, id: INGREDIENTS[0].id, },
    {name: 'Cheese', count: 0, id: INGREDIENTS[1].id},
    {name: 'Salad', count: 0, id: INGREDIENTS[2].id},
    {name: 'Bacon', count: 0, id: INGREDIENTS[3].id},
  ]);
  
  const changeCount = (item, id, count, inform) => {
    if (item.id === id) {
      if (item.count < 1) {
        return inform;
      }
      return {
        ...item,
        count: count,
      };
    }
    return item;
  };
  
  const clickIngredientPlus = (id) => {
    const copyIngredients = ingredients.map(item => {
      return changeCount(item, id, item.count + 1, {...item, count: item.count + 1,});
    });
    setIngredients(copyIngredients);
  };
  
  const clickIngredientMinus = (id) => {
    const copyIngredients = ingredients.map(item => {
      return changeCount(item, id, item.count - 1, item);
    });
    setIngredients(copyIngredients);
  };
  
  const remove = (id) => {
    const copyIngredients = ingredients.map(item => {
      return changeCount(item, id, 0, {...item, count: 0,});
    });
    setIngredients(copyIngredients);
  };
  
  let cost = 0;
  for (let i = 0; i < ingredients.length; i++) {
    cost = cost + (ingredients[i].count * INGREDIENTS[i].price);
  }
  
return (
    <div className="container">
      <h1 className="burger">Burger</h1>
      <div className="burgerIngredients">
        <Ingredients delete={remove} onClickIngredientPlus={clickIngredientPlus} onclickIngredientMinus={clickIngredientMinus} ingredients={INGREDIENTS}/>
        <Burger cost={cost} filling={ingredients} count={ingredients}/>
      </div>
    </div>
  );
};

export default App;

