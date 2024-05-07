// App.jsx
import React, { useState } from "react";
import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { LoginModal } from "./LoginModal";

function App() {
  const defaultUser = { id: 3, username: "Guest" }; // Default user information
  const [currentUser, setCurrentUser] = useState(defaultUser); // State to manage current user

  return (
    <div>
      <Header />
      <Content currentUser={currentUser} />
      <Footer />
      <LoginModal setCurrentUser={setCurrentUser} />
    </div>
  );
}

export default App;
