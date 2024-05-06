import React from "react";

import { useState } from "react";

import { useEffect } from "react";

export function ExercisesShow({ exercise }) {
  return (
    <div>
      <h1>{exercise.name}</h1>

      <p>
        Start Position:{" "}
        <img src={exercise.start_image_url} alt="Start" style={{ maxWidth: "200px", maxHeight: "200px" }} />
      </p>
      <p>
        End Position: <img src={exercise.end_image_url} alt="End" style={{ maxWidth: "200px", maxHeight: "200px" }} />
      </p>
      <p>Description: {exercise.description}</p>
    </div>
  );
}
