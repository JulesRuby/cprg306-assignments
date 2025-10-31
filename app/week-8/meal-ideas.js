"use client";
import { useState, useEffect } from "react";

const MEALDB_BASE_URL = "https://www.themealdb.com/api/json/v1/1/filter.php";

const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(`${MEALDB_BASE_URL}?i=${ingredient}`);
  const data = await response.json();
  return data.meals || [];
};

function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

}
