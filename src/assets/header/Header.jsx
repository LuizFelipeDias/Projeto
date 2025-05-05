import React from "react";
import './Header.css'; // Importando o arquivo de estilo para o Header

function Header() {
  return (
    <div className="binary-header-container">
      <diV className="title">BUSCA BINÁRIA</diV>
      <div className="menu">
        <ul className="navbar">

        <a href="#TAD">TAD</a>
        <a href="#Pilha">Pilha</a>
        <a href="#BuscaBinaria">Pesquisa Binária</a>
        <a href="#Fila">Fila</a>
        <a href="#ListaEncadeada">Lista Encadeada</a>
        <a href="#ArvoreBinaria">Árvore Binária</a>

        </ul>
      </div>

    </div>
  );
}

export default Header;
