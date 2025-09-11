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
        <div ref={scope} className="map-wrapper pt-5 text-center w-100">
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

            <div className="shop-photo container mb-4">
                <img className="tienda-img img-fluid" src="/tiendaPorFuera.jpg" alt="Foto de la tienda" />
            </div>

            <div className="pt-5 pb-3 container contact-details">
                <h3 className="info-text">Dirección:</h3>
                <p className="lead info-text">4304 Fraser St, Vancouver, British Columbia V5V 4G3</p>
                <p className="lead info-text">Tel: +57 1 234 5678</p>
                <p className="lead info-text">Email: contacto@ejemplo.com</p>
            </div>
        </div>
    );
};

export default MapLocation;


//TODO investigate about bugs regarding to the letter sizes.
// Implement footer and then continue developing the other sections.
