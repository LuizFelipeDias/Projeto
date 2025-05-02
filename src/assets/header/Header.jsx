import React from "react";
import Navbar from "./Navbar"; // Importando o Navbar
import './Header.css'; // Importando o arquivo de estilo para o Header

function Header() {
  return (
    <div className="binary-header-container">
      <h1 className="title">Busca Binária</h1>
      <p className="students-name">Alunos</p>
      <Navbar /> {/* Aqui está o Navbar sendo renderizado dentro do Header */}
    </div>
  );
}

export default Header;
