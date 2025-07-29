// Step: 1, import useEffect
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/pages/Home.css";
import "../styles/components/MealCard.css"

// Meal API: https://www.themealdb.com/api/json/v1/1/random.php

function Home() {
  // Step 2: Create state for the api result
  const [meal, setMeal] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // meal = variable, wuxuu keydinaayaa wixii aan rabnay inaan siino component-ga
  // setMeal = function, wuxuu wax ka badalaayaa "meal", wax wuu ku dari karaa, wuuna ka bixin karaa

  // Step 3: Setup the useEffect
  // useEffect waxay u baahantahay array ebar ah (dependancy array)

  useEffect(() => {
    // Create an async function that calls the API\

    const fetchRandomMeal = async () => {
      try {
        setLoading(true);
        await axios
          .get("https://www.themealdb.com/api/json/v1/1/random.php")
          .then((response) => {
            setMeal(response.data.meals[0]);
            setLoading(false);
          })
          .catch((err) => {
            setError(err.message);
            setLoading(false);
          });
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    // Execute the function
    fetchRandomMeal();
  }, []);

  // Inta lasoo jiidanaayo Cuntada, waxaa tustaa LOADING SCREEN

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (error != null) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="home-container">
      <div className="section-header">
        <h1>Meal of the Day</h1>
      </div>
      <div className="meal-container">
        {meal && (
          <div className="meal-card">
            <div className="meal-card-image">
              <img src={meal.strMealThumb} alt={meal.strMeal} loading="lazy" />
            </div>
            <div className="meal-card-content">
              <h2>{meal.strMeal}</h2>
              <div className="meal-card-meta">
                <span className="tag category">{meal.strCategory}</span>
                <span className="tag area">{meal.strArea}</span>
              </div>
              <div className="meal-instructions">
                <h3>Instructions</h3>
                <p>{meal.strInstructions}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
