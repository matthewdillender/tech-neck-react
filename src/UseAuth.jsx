// // import { createContext, useContext, useState } from "react";

// // // Create the authentication context
// // const AuthContext = createContext();

// // // Create a custom hook to access the authentication context
// // export const useAuth = () => useContext(AuthContext);

// // // Create the authentication provider component
// // export const AuthProvider = ({ children }) => {
// //   const [currentUser, setCurrentUser] = useState(null);

// //   // Function to handle user login
// //   const loginUser = (userData) => {
// //     setCurrentUser(userData);
// //     // Optionally, you can save user data to local storage or perform other actions
// //     localStorage.setItem("currentUser", JSON.stringify(userData));
// //     console.log("User logged in");
//   };

// //   // Function to handle user logout
// //   const logoutUser = () => {
// //     setCurrentUser(null);
// //     // Optionally, you can clear user data from local storage or perform other actions
// //     localStorage.removeItem("currentUser");
// //   };

// //   return <AuthContext.Provider value={{ currentUser, loginUser, logoutUser }}>{children}</AuthContext.Provider>;
// // };
