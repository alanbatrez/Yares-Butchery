import React, { useRef, useEffect } from "react";
import "../css/Hero.css";
import Header from "../components/Header";
import ArracheraCard from "./ArracheraCard";
import Costillas from "./Costillas";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DiscadaCard from "./DiscadaCard";
import TuetanoCard from "./TuetanoCard";
import { Link, useLocation } from "react-router-dom";
import SirloinCard from "./SirloinCard";
import PapaCard from "./PapaCard.jsx";
import MapLocation from "./MapLocation.jsx";
import Footerp from "./Footerp.jsx";

gsap.registerPlugin(ScrollTrigger); // ✅ solo ScrollTrigger

function Hero() {
  const { hash } = useLocation();

  // scroll suave a #carnitaAsada si viene con hash
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [hash]);

  // refrescar triggers cuando todo cargue (por imágenes)
  useEffect(() => {
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  const scope = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    // Títulos
    mm.add("all", () => {
      gsap.from("#asada-title", {
        scrollTrigger: {
          trigger: "#asada-title",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power2.out",
      });

      gsap.from(".sub-text", {
        scrollTrigger: {
          trigger: ".sub-text",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power2.out",
        delay: 0.15,
      });
    });

    // Grid de cards (elige el selector según tu markup)
    // Opción A: si tu div tiene className="album py-5 bg-body-tertiary"
    const gridSelector = ".album";
    // Opción B si quieres seguir usando tu clase antigua:
    // const gridSelector = ".photos-gallery";

    mm.add("(max-width: 768px)", () => {
      gsap.from(gridSelector, {
        scrollTrigger: {
          trigger: gridSelector,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 16,
        duration: 0.7,
        ease: "power2.out",
      });
    });

    mm.add("(min-width: 769px)", () => {
      gsap.from(gridSelector, {
        scrollTrigger: {
          trigger: gridSelector,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        duration: 1.2,
        ease: "power1.inOut",
      });
    });

    // Accesibilidad: sin animaciones si el usuario lo prefiere
    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(["#asada-title", ".sub-text", gridSelector], {
        clearProps: "all",
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotation: 0,
      });
      ScrollTrigger.getAll().forEach((st) => st.kill());
    });

    return () => mm.revert();
  }, { scope });

  return (
      <>
        <Header />

        <section className="hero">
          <img
              className="hero-img"
              src="/butchery.jpg"
              alt="Carnes y cortes - Yares"
              loading="eager"
              decoding="async"
          />
          <div className="hero-overlay" aria-hidden="true"></div>

          <div className="hero-content">
            <div className="test">
              <h2 className="welcome">¡Solo lo mejor de México!</h2>
              <p id="texto">La mejor carne de res, cerdo y pollo, ¡directo a tu mesa!</p>
              <Link to="/productos" className="butn mt-5 text-decoration-none">
                Productos
              </Link>
            </div>
          </div>
        </section>

        <section ref={scope} id="carnitaAsada" className="carnitaAsada">
          {/* Título */}
          <div className="container py-lg-5">
            <div className="row">
              <div className="col">
                <div className="title-asada p-3 d-flex flex-column justify-content-center align-items-center text-center">
                  <h2 id="asada-title">Todo para la Carnita Asada</h2>
                  <p className="sub-text lead">
                    Aquí encontrarás algunas buenas recetas para tu carnita asada
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="album py-5 bg-body-tertiary">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <ArracheraCard />
                <Costillas />
                <DiscadaCard />
                <TuetanoCard />
                <SirloinCard />
                <PapaCard />
              </div>
            </div>
          </div>

          {/* Texto final */}
          <div className="container">
            <p id="sub-text" className="sub-text lead my-5">
              Recuerda: en Yare's Mexican Butchery no solo encontrarás la mejor carne estilo mexicana,
              sino también una gran variedad de productos mexicanos como salsas, tortillas, dulces típicos, etc.
            </p>
          </div>
        </section>

        <MapLocation />
        <Footerp />
      </>
  );
}

export default Hero;
