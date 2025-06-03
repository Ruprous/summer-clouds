import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import './App.css';

function App() {
  return (
    <BrowserRouter basename="/summer-clouds">
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
