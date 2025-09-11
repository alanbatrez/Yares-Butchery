import React, { useState } from "react";
import "../css/ArracheraCard.css";

function Costillas() {
    const [open, setOpen] = useState(false);

    return (
        <div className="col">
            <div className="card shadow-sm">
                <img
                    src="/costillas.jpg"
                    className="card-img-top gallery"
                    alt="Costillas puerco BBQ"
                    width="100%"
                    height="225"
                />
                <div className="card-body">
                    <p className="card-text">
                        Costillas jugosas listas para asar. Tiernas, ahumadas y llenas de sabor
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button
                                type="button"
                                className="btn btn-sm btn-outline-primary"
                                onClick={() => setOpen(true)}
                            >
                                Ingredientes
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            {/* Modal */}
            {open && (
                <div className="custom-overlay">
                    <div className="custom-window">
                        <h5>Ingredientes - Costilla BBQ</h5>
                        <ul className="custom-list">
                        <li>2 racks de costilla de cerdo Yare's</li>
                        <li>Sal y pimienta al gusto</li>
                        <li>Rub seco: 2 cda azúcar morena, 1 cda paprika, 1 cdta ajo en polvo, 1 cdta cebolla en polvo, 1/2 cdta comino, 1/2 cdta chile en polvo</li>
                        <li>Glaseado BBQ: 1 taza salsa BBQ, 2 cda miel o melaza, 1 cda vinagre de manzana, 1 cdta mostaza, 1 cdta salsa Worcestershire</li>
                        <li>Para rociar (opcional): 1/2 taza jugo de manzana o mezcla 50/50 vinagre de manzana + agua</li>
                        <li>Extras al gusto: chipotle/adobo, ajo fresco, cebolla</li>
                        <li>Acompañantes: nopales asados, cebolla, guacamole y tortillas</li>
                    </ul>
                        <button
                            className="btn btn-sm btn-danger custom-close-btn"
                            onClick={() => setOpen(false)}
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Costillas;
