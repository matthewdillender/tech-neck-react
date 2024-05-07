import axios from "axios";
import { useState } from "react";

export function Login({ setCurrentUser }) {
  const [errors, setErrors] = useState([]);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [modalOpen, setModalOpen] = useState(true); // State to manage modal visibility

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions.json", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        setLoginSuccess(true);
        // Close modal on successful login
        setModalOpen(false);
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  // Function to close modal
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div id="login">
      {modalOpen && ( // Render the modal if modalOpen is true
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h1>Login</h1>
            {loginSuccess && <p>Login successful!</p>}
            <ul>
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
            <form onSubmit={handleSubmit}>
              <div>
                Email: <input name="email" type="email" />
              </div>
              <div>
                Password: <input name="password" type="password" />
              </div>
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
