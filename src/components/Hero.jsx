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
            <button className="butn">Ver Productos</button>
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
                <div className="col">
                  <div className="card shadow-sm">
                    <img src="/combo5.jpg" className="card-img-top" alt="Combo 5" width="100%" height="225" />
                    <div className="card-body">
                      <p className="card-text">Combo 5: pollo adobado + verduras para asar.</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">Ver</button>
                          
                        </div>
                        <small className="text-body-secondary">7 mins</small>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 6 */}
                <div className="col">
                  <div className="card shadow-sm">
                    <img src="/combo6.jpg" className="card-img-top" alt="Combo 6" width="100%" height="225" />
                    <div className="card-body">
                      <p className="card-text">Combo 6: parrillada completa para compartir.</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">Ver</button>
                          
                        </div>
                        <small className="text-body-secondary">5 mins</small>
                      </div>
                    </div>
                  </div>
                </div>

              </div>{/* row */}
            </div>{/* container */}
          </div>{/* album */}
        </div>{/* container principal */}
      </section>
    </>
  );
}

export default Hero;
