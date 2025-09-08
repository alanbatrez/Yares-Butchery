import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";
import { motion } from "motion/react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(o => !o);
  const closeMenu = () => setOpen(false);


  const titleContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const wordContainer = {
    hidden: { opacity: 1 },
    show: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };
  const letter = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 8, stiffness: 60 },
    },
  };

  const words = ["Yares", "Mexican", "Butchery"];
  const wordColors = ["#46A654", "#030303ff", "#D93D4A"];

  const renderWord = (word, color, idx) => (
    <motion.span
      key={idx}
      variants={wordContainer}
      style={{ display: "inline-flex", gap: "2px", color, fontWeight: 800 }}
    >
      {word.split("").map((ch, i) => (
        <motion.span key={i} variants={letter}>{ch}</motion.span>
      ))}
    </motion.span>
  );

  return (
    <header className="site-header">
      <nav className="navbar" role="navigation" aria-label="Principal">
        <div className="nav-wrapper">

          <div className="logo">
            <Link to="/">
              <img src="/yareslogo.jpg" alt="Yares Logo" />
            </Link>
          </div>


          <div className="title">
            <motion.h1
              variants={titleContainer}
              initial="hidden"
              animate="show"
              style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", justifyContent: "center" }}
            >
              {words.map((w, i) => renderWord(w, wordColors[i], i))}
            </motion.h1>
          </div>


          <div className="nav-menu desktop-only">
            <ul className="navbar-content">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/productos">Productos</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><a href="#carnitaAsada">Carnita Asada</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>


          <button
            className="hamburger"
            aria-label="Abrir menú"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={toggleMenu}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>
      </nav>


      <div
        id="mobile-menu"
        className={`nav-drawer ${open ? "open" : ""}`}
        onClick={closeMenu}
      >
        <div className="nav-drawer-panel" onClick={e => e.stopPropagation()}>
          <button className="drawer-close" aria-label="Cerrar" onClick={closeMenu}>✕</button>
          <ul className="navbar-content mobile">
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/productos" onClick={closeMenu}>Productos</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
            <li><a href="#carnitaAsada" onClick={closeMenu}>Carnita Asada</a></li>
            <li><a href="#contacto" onClick={closeMenu}>Contacto</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}
