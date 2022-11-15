import { useEffect, useState } from "react";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
  },
};

export default function Drinks() {
  const [drinks, setDrinks] = useState([]);
  useEffect(() => {
    fetch("https://the-cocktail-db.p.rapidapi.com/popular.php", options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setDrinks(response.drinks);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="drinks">
      {drinks.map((drink, i) => {
        const keys = Object.keys(drink).filter((key) =>
          key.includes("Ingredient")
        );
        const ingredients = keys.map((key) => drink[key]).filter((key) => key);
        return (
          <div key={i} className="card">
            <img src={drink.strDrinkThumb} alt="" />
            <div>
              <h3>{drink.strDrink}</h3>
              <p>Category: {drink.strCategory}</p>
              <p>Instructions: {drink.strInstructions}</p>
              <ul>
                Ingredients:
                {ingredients.map((ing, i) => (
                  <li key={i}>{ing}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
