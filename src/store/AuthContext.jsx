import React, { createContext, useState } from "react";

export const LoginContext = createContext();

export const AuthContext = ({ children }) => {
  const [isLoggedIn, setIsloggedIn] = useState(false);

  const logIn = () => {
    setIsloggedIn(true);
    localStorage.setItem("AUTH", true);
  };

  const logOut = () => {
    setIsloggedIn(false);
    localStorage.removeItem("AUTH");
  };

  const value = {
    isLoggedIn,
    logIn,
    logOut,
  };

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};
