import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContext } from "./store/AuthContext";
import { TodoContextProvider } from "./store/TodoContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContext>
    <TodoContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </TodoContextProvider>
  </AuthContext>
);
