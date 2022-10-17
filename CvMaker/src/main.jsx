import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* this browser router helps over routing of the system */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
