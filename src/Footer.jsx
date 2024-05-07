import React from "react";

export function Footer({ handleOpenRoutineIndexModal }) {
  return (
    <footer>
      <button onClick={handleOpenRoutineIndexModal}>Open Routine Index</button>
    </footer>
  );
}
