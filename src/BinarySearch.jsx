// src/BinarySearch.jsx
import React from "react";
import './BinarySearch.css';
import Cards from "./pages/Cards"; // <-- Importando os cards
import Explicacao from "./pages/Explicacao"; // <-- Importando os Explicacao

function MyButton() {
  return <button>I'm a button</button>;
}

function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}

function BinarySearch() {
  return (
    <div>
      <Explicacao />
      
      {/* Cards abaixo do container */}
      <Cards />
    </div>
  );
}

export default BinarySearch;
