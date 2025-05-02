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
      <div className="vs-container">
        {/* Lado do código */}
        <div className="code-editor">
          <div className="editor-header">App.js</div>
          <div className="editor-body">
            <pre>
              <code>
{`function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}`}
              </code>
            </pre>
          </div>
        </div>

        {/* Lado do preview */}
        <div className="code-preview">
          <div className="preview-header">Preview</div>
          <div className="preview-body">
            <MyApp />
          </div>
        </div>
      </div>

      {/* Cards abaixo do container */}
      <Cards />
    </div>
  );
}

export default BinarySearch;
