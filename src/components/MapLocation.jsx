import React, { useRef } from 'react';
import "../css/MapLocation.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const MapLocation = () => {
    const scope = useRef(null);

    useGSAP(() => {
        const mm = gsap.matchMedia(scope);
        const q = gsap.utils.selector(scope);

        mm.add("all", () => {
            gsap.from(q("#map-title"), {
                scrollTrigger: {
                    trigger: q("#map-title"),
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
                opacity: 0,
                y: 40,
                duration: 1,
                ease: "power2.out",
            });

            gsap.from(q("#map-iframe"), {
                scrollTrigger: {
                    trigger: q("#map-iframe"),
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
                opacity: 0,
                scale: 0.95,
                duration: 1,
                ease: "power2.out",
            });

            gsap.from(q(".shop-photo"), {
                scrollTrigger: {
                    trigger: q(".shop-photo"),
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
                opacity: 0,
                y: 40,
                duration: 1,
                ease: "power2.out",
            });

            gsap.from(q(".contact-details"), {
                scrollTrigger: {
                    trigger: q(".contact-details"),
                    start: "top 95%",
                    toggleActions: "play none none reverse",
                },
                opacity: 0,
                y: 40,
                duration: 1,
                ease: "power2.out",
            });

            gsap.from(q(".info-text"), {
                scrollTrigger: {
                    trigger: q(".contact-details"),
                    start: "top 90%",
                    toggleActions: "play none none reverse",
                },
                opacity: 0,
                y: 30,
                duration: 0.7,
                ease: "power2.out",
                stagger: 0.2,
            });
        });

        mm.add("(prefers-reduced-motion: reduce)", () => {
            gsap.set(q(["#map-title", "#map-iframe", ".info-text", ".shop-photo", ".contact-details"]), {
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
        <div id="contact" ref={scope} className="map-wrapper min-vh-100 pt-5 text-center w-100">

            <h2 id="map-title" className="m-3 mb-5 sub-title">
                Ubicacion de Nuestra Sucursal
            </h2>

            <div className="container mb-4">
                <iframe
                    id="map-iframe"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.5800848293784!2d-123.09244212248198!3d49.246450073318044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867407406861f3%3A0x35831fad2d420f1c!2s4304%20Fraser%20St%2C%20Vancouver%2C%20BC%20V5V%204G3!5e0!3m2!1ses-419!2sca!4v1757548990958!5m2!1ses-419!2sca"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación en Google Maps"
                ></iframe>
            </div>
            <div className="pt-5 pb-3 container contact-details">
                <h3 className="info-text">Dirección:</h3>

                <p className="lead info-text">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                         className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                    </svg>
                     4304 Fraser St, Vancouver, British Columbia V5V 4G3
                </p>
                <p className="lead info-text"> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                </svg>Tel: +57 1 234 5678</p>
                <p className="lead info-text">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                         className="bi bi-envelope" viewBox="0 0 16 16">
                        <path
                            d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                    </svg>
                    contacto@ejemplo.com
                </p>
            </div>
            <div className="shop-photo container pb-3">
                <img className="tienda-img img-fluid" src="/tiendaPorFuera.jpg" alt="Foto de la tienda"/>
            </div>


        </div>
    );
};

export default MapLocation;


//TODO investigate about bugs regarding to the letter sizes.
// Implement footer and then continue developing the other sections.
