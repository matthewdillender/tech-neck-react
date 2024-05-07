import axios from "axios";
import { useState, useEffect } from "react";
import { CategoriesIndex } from "./CategoriesIndex";
import { Modal } from "./Modal"; // Assuming you have a Modal component

export function Content({ currentUser }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedCategoryExercises, setSelectedCategoryExercises] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRoutineIndexModalOpen, setIsRoutineIndexModalOpen] = useState(false);
  const [routines, setRoutines] = useState([]); // State to store routine index data

  useEffect(() => {
    console.log("Content component mounted");
    return () => {
      console.log("Content component unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("currentUser state updated:", currentUser);
  }, [currentUser]);

  useEffect(() => {
    console.log("Routine data:", routines); // Check if routines data is fetched
    if (routines.length > 0) {
      console.log("First routine:", routines[0]); // Check data of the first routine
      console.log("Exercise data:", routines[0].exercise); // Check exercise data of the first routine
      console.log("Category data:", routines[0].exercise.category); // Check category data of the first routine's exercise
    }
  }, [routines]);

  // Function to fetch categories
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

  // Function to handle category selection
  const handleCategorySelect = (categoryId) => {
    setSelectedCategoryId(categoryId);
    setIsModalOpen(true); // Open the modal
  };

  // Function to fetch exercises for a category
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

  // Function to close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCategoryExercises([]); // Clear exercises when modal is closed
  };

  // Function to handle exercise card click and create routine
  const handleExerciseCardClick = (exercise) => {
    console.log("Current User ID:", currentUser ? currentUser.id : "Not logged in");
    console.log("Clicked Exercise:", exercise);

    // Make POST request to create routine
    axios
      .post("http://localhost:3000/routines.json", {
        user_id: currentUser.id,
        exercise_id: exercise.id,
      })
      .then((response) => {
        console.log("Routine created successfully:", response.data);
        // Close modal after adding exercise to routine
        handleCloseModal();
      })
      .catch((error) => {
        console.error("Error creating routine:", error);
      });
  };

  // Function to open routine index modal
  const handleOpenRoutineIndexModal = () => {
    setIsRoutineIndexModalOpen(true);
    // Fetch routine index data
    axios
      .get("http://localhost:3000/routines.json")
      .then((response) => {
        setRoutines(response.data);
        console.log("Routines Index:", response.data); // Log fetched routines index data
      })
      .catch((error) => {
        console.error("Error fetching routines:", error);
      });
  };

  // Function to close routine index modal
  const handleCloseRoutineIndexModal = () => {
    setIsRoutineIndexModalOpen(false);
  };

  // Function to handle routine deletion
  const handleDeleteRoutine = (routineId) => {
    // Make DELETE request to delete routine
    axios
      .delete(`http://localhost:3000/routines/${routineId}.json`)
      .then((response) => {
        console.log("Routine deleted successfully");
        // Remove the deleted routine from the state
        setRoutines((prevRoutines) => prevRoutines.filter((routine) => routine.id !== routineId));
      })
      .catch((error) => {
        console.error("Error deleting routine:", error);
      });
  };

  return (
    <main>
      <CategoriesIndex
        categories={categories}
        selectedCategoryId={selectedCategoryId}
        onCategorySelect={handleCategorySelect}
      />
      <Modal show={isModalOpen} onClose={handleCloseModal}>
        <div className="modal-content">
          <h2>Exercises for Selected Category</h2>
          <div className="exercise-cards">
            {selectedCategoryExercises
              .filter((exercise) => exercise.category_id === selectedCategoryId)
              .map((exercise) => (
                <button
                  key={exercise.id}
                  className="exercise-card-button"
                  onClick={() => handleExerciseCardClick(exercise)}
                >
                  <div className="exercise-card">
                    <h3>{exercise.name}</h3>
                    <p>Description: {exercise.description}</p>
                    <div className="image-container">
                      <p>Start Position:</p>
                      <img src={exercise.start_image_url} alt="Start" />
                    </div>
                    <div className="image-container">
                      <p>End Position:</p>
                      <img src={exercise.end_image_url} alt="End" />
                    </div>
                  </div>
                </button>
              ))}
          </div>
        </div>
      </Modal>
      {/* Button to open routine index modal in navbar */}
      <button onClick={handleOpenRoutineIndexModal}>Open Routine Index</button>
      {/* Button to open routine index modal in footer */}
      <button onClick={handleOpenRoutineIndexModal}>Open Routine Index</button>
      {/* Routine Index Modal */}
      <Modal show={isRoutineIndexModalOpen} onClose={handleCloseRoutineIndexModal}>
        {/* Content for Routine Index Modal */}
        <h2>Routine Index</h2>
        <div className="routine-cards">
          {routines.map((routine) => (
            <div key={routine.id} className="routine-card">
              {routine.exercise && (
                <>
                  <h3>Category: {routine.category.name}</h3>
                  <h4>{routine.exercise.name}</h4>
                  <p>Description: {routine.exercise.description}</p>
                  <img src={routine.exercise.start_image_url} alt="Start" />
                  <img src={routine.exercise.end_image_url} alt="End" />
                  <button onClick={() => handleDeleteRoutine(routine.id)}>Delete</button>
                </>
              )}
            </div>
          ))}
        </div>
      </Modal>
    </main>
  );
}
