import axios from "axios";
import { useState, useEffect } from "react";
import { CategoriesIndex } from "./CategoriesIndex";
import { Modal } from "./Modal"; // Assuming you have a Modal component

export function Content() {
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedCategoryExercises, setSelectedCategoryExercises] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleIndexCategories = () => {
    axios
      .get("http://localhost:3000/categories.json")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  };

  useEffect(handleIndexCategories, []);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategoryId(categoryId);
    setIsModalOpen(true); // Open the modal
  };

  const fetchExercisesForCategory = (categoryId) => {
    axios
      .get(`http://localhost:3000/exercises.json?category_id=${categoryId}`)
      .then((response) => {
        setSelectedCategoryExercises(response.data);
      })
      .catch((error) => {
        console.error("Error fetching exercises:", error);
      });
  };

  useEffect(() => {
    if (selectedCategoryId !== null) {
      fetchExercisesForCategory(selectedCategoryId);
    }
  }, [selectedCategoryId]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCategoryExercises([]); // Clear exercises when modal is closed
  };

  return (
    <main>
      <CategoriesIndex
        categories={categories}
        selectedCategoryId={selectedCategoryId}
        onCategorySelect={handleCategorySelect}
      />
      <Modal show={isModalOpen} onClose={handleCloseModal}>
        <h2>Exercises for Selected Category</h2>
        <ul>
          {selectedCategoryExercises
            .filter((exercise) => exercise.category_id === selectedCategoryId) // Filter exercises by category_id
            .map((exercise) => (
              <li key={exercise.id}>
                <h3>{exercise.name}</h3>
                <p>Description: {exercise.description}</p>
                <div>
                  <p>Start Position:</p>
                  <img src={exercise.start_image_url} alt="Start" style={{ maxWidth: "200px", maxHeight: "200px" }} />
                </div>
                <div>
                  <p>End Position:</p>
                  <img src={exercise.end_image_url} alt="End" style={{ maxWidth: "200px", maxHeight: "200px" }} />
                </div>
              </li>
            ))}
        </ul>
      </Modal>
    </main>
  );
}
