import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./assets/header/Header"; // Importando o Header
import BinarySearch from "./BinarySearch";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header /> {/* Renderiza o Header com o Navbar dentro */}
        <main>
          <Routes>
            <Route path="/" element={<BinarySearch />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};


export default App;
