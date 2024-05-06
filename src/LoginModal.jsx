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
        <Login />
        <div className="separator"></div>
        <Signup />
        <button className="continue-button" onClick={handleContinueAsGuest}>
          Continue as Guest
        </button>
      </div>
    </Modal>
  );
}
