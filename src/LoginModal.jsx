import React from "react";
import { useState } from "react";
import "./LoginModal.css";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { Login } from "./Login";

export function LoginModal() {
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(true);

  const handleCloseLoginModal = () => {
    setIsLoginModalVisible(false);
  };

  const handleContinueAsGuest = () => {
    handleCloseLoginModal();
    // Implement functionality for continuing as a guest if needed
  };

  return (
    <Modal show={isLoginModalVisible} onClose={handleCloseLoginModal}>
      <div className="login-modal-content">
        <h2>Login</h2>
        <Login />
        <div className="separator"></div>
        <h2>Signup</h2>
        <Signup />
        <button className="continue-button" onClick={handleContinueAsGuest}>
          Continue as Guest
        </button>
      </div>
    </Modal>
  );
}
