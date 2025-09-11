// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";        // 👈 importa Hero
import Productos from "./components/Productos";
import About from "./components/About";


function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
