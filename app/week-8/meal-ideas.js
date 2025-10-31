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

  useEffect(() => {
    const loadMealIdeas = async () => {
      const fetchedMeals = await fetchMealIdeas(ingredient);
      setMeals(fetchedMeals);
    };
    loadMealIdeas();
  }, [ingredient]);

  return (
    <article>
      <h2 className="mb-2 text-lg font-semibold">
        Meal Ideas with {ingredient}
      </h2>
      {meals.length === 0 ? (
        <p>No meal ideas found.</p>
      ) : (
        <code>
          <pre>{JSON.stringify(meals, null, 2)}</pre>
        </code>
      )}
    </article>
  );
}

export default MealIdeas;
