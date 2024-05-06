import "./CategoriesIndex.css";
import { useState, useEffect } from "react";
import axios from "axios";

export function CategoriesIndex(props) {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    // Fetch exercises for the selected category here
    axios
      .get(`http://localhost:3000/exercises.json?category_id=${props.selectedCategoryId}`)
      .then((response) => {
        setExercises(response.data);
      })
      .catch((error) => {
        console.error("Error fetching exercises:", error);
      });
  }, [props.selectedCategoryId]); // Trigger the effect whenever the selected category changes

  return (
    <div className="categories-container">
      <h1>Exercise Categories</h1>
      <div className="category-list">
        {props.categories.map((category) => (
          <button key={category.id} className="category-card" onClick={() => props.onCategorySelect(category.id)}>
            <div>
              <h2>{category.name}</h2>
              <img
                src={category.category_image_url}
                alt={category.name}
                style={{ maxWidth: "15%", height: "auto" }} // Inline styling for image size
              />
              <p>Description: {category.description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
