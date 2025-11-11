"use client";
import { useState, useEffect } from "react";

const MEALDB_BASE_URL = "https://www.themealdb.com/api/json/v1/1/filter.php";

const fetchMealIdeas = async (ingredient = "chicken") => {
  const response = await fetch(`${MEALDB_BASE_URL}?i=${ingredient}`);
  const data = await response.json();

  // console.log(data);
  // console.log(data.meals);
  return data.meals || [];
};

function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    const fetchedMeals = await fetchMealIdeas(ingredient);
    setMeals(fetchedMeals);
  };
  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <article>
      <header>
        <h2 className="mb-2 text-lg font-semibold">Meal Ideas!</h2>
      </header>
      {meals.length === 0 ? (
        <p>No meal ideas found.</p>
      ) : (
        <ul>
          {meals.map((meal) => (
            <li key={meal.idMeal} className="mb-2">
              <p className="font-bold">{meal.strMeal}</p>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

export default MealIdeas;
