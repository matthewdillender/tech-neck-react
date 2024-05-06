import axios from "axios";
import { useState } from "react";
import "./Header.css";

export function LogoutLink() {
  const [logoutSuccess, setLogoutSuccess] = useState(false); // New state variable

  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    setLogoutSuccess(true); // Set logout success state to true
    // Optionally, you can redirect or perform any other action here
    window.location.href = "/";
  };

  return (
    <div>
      {logoutSuccess && <p>Logout successful!</p>} {/* Display success message */}
      <div onClick={handleClick} style={{ cursor: "pointer" }}>
        Logout
      </div>
    </div>
  );
}
