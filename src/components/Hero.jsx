import React, {useRef} from "react";
import "../css/Hero.css";
import Header from "../components/Header";
import ArracheraCard from "./ArracheraCard";
import Costillas from "./Costillas";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DiscadaCard from "./DiscadaCard";
import TuetanoCard from "./TuetanoCard";
import {Link} from "react-router-dom";
import SirloinCard from "./SirloinCard";
import PapaCard from "./PapaCard.jsx";
import MapLocation from "./MapLocation.jsx";


gsap.registerPlugin(ScrollTrigger, useGSAP);

function Hero() {
  const scope = useRef(null);
  useGSAP(() => {
    const mm = gsap.matchMedia();


    mm.add("all", () => {
      gsap.from("#asada-title", {
        scrollTrigger: {
          trigger: "#asada-title",
          start: "top 80%",
          toggleActions: "play none none reverse",

        },
        opacity: 0,
        y: 40,
        duration: 1.0,
        ease: "power2.out",
      });

      gsap.from(".info-text", {
        scrollTrigger: {
          trigger: ".info-text",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 40,
        duration: 1.0,
        ease: "power2.out",
        delay: 0.15,
      });
    });


    mm.add("(max-width: 768px)", () => {
      gsap.from(".photos-gallery", {
        scrollTrigger: {
          trigger: ".photos-gallery",
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
      gsap.from(".photos-gallery", {
        scrollTrigger: {
          trigger: ".photos-gallery",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        duration: 2.0,
        delay:1.2,
        ease: "power1.inOut"
      });
    });


    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(["#asada-title", ".info-text", ".photos-gallery"], {
        clearProps: "all",
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotation: 0,
      });
      ScrollTrigger.getAll().forEach(st => st.kill());
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

      <section ref={scope} className="carnitaAsada" id="carnitaAsada">
        <div className="container">
          <div className="row py-lg-5">
            <div className="title-asada p-3 d-flex flex-column justify-content-center align-content-center text-center">
              <h2 id="asada-title">Todo Para la Carnita Asada</h2>
              <p className="info-text lead text-body-secondary">
                Aquí encontrarás algunas buenas recetas para tu carnita asada
              </p>
            </div>
          </div>

          <div className="photos-gallery album bg-body-tertiary">
            <div className="container wallpaper">
              <div className="under-wallpaper row p-4 row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                
                
                <ArracheraCard />

                {/* 2 */}
                <Costillas />


                <DiscadaCard />

                {/* 4 */}
                <TuetanoCard/>

                {/* 5 */}
                <SirloinCard/>

                {/* 6 */}
                <PapaCard />

              </div>{/* row */}
            </div>{/* container */}

          </div>{/* album */}
          <p className="lead m-5"> Recuerda en Yare's Mexican Butchery no solo encontraras la mejor carne estilo mexicana
          si no tambien, una gran variedad de productos mexicanos como salsas, tortillas, dulces tipicos, etc.</p>
        </div>{/* container principal */}

      </section>


      <MapLocation/>
    </>
  );
}

export default Hero;
