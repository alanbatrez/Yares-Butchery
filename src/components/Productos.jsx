import { section } from "motion/react-client";
import React, {useRef} from "react";
import Header from "./Header.jsx"
import gsap from "gsap";

import "../css/Productos.css"
import {useGSAP} from "@gsap/react";

function Productos() {

    const listRef = useRef(null);

    useGSAP(() => {
        const items = listRef.current.querySelectorAll(".list");
        console.log(items);

        gsap.from(".welcome-1",{
            y:100,
            opacity: 0,
            duration: .6,
            stagger: 0.2,
            ease: "power2.out",
        });

        gsap.from(items, {
            delay: 2,
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
        });
    }, []);

    return(
        <section className="productos">
            <div className="w-100 h-100">
                <Header/>
                <main className="productos-main">
                    <div className="container pt-5 ">
                        <h1 className="welcome-1 pb-4 text-center">Contamos con una gran variedad de Carnes y productos Mexicanos!</h1>
                        <ul ref={listRef} className="products-list d-flex flex-wrap">
                            <li className="list item1"><a className="listLink" href="#">Carne</a></li>
                            <li className="list item2"><a className="listLink" href="#">Verdura</a></li>
                            <li className="list item3"><a className="listLink" href="#">Quesos</a></li>
                            <li className="list item4"><a className="listLink" href="#">Productos Mexicanos</a></li>
                        </ul>

                    </div>
                    <div className="carne container"></div>
                </main>
            </div>


        </section>
    );
}

export default Productos;
