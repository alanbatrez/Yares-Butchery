import React, { useState } from "react";
import "../css/ArracheraCard.css";

function TuetanoCard() {
    const [open, setOpen] = useState(false);

    return (
        <div className="col">
            <div className="card shadow-sm">
                <img
                    src="/tuetano.png"
                    className="card-img-top gallery"
                    alt="Tacos de Tuetano con Diezmillo"
                    width="100%"
                    height="225"
                />
                <div className="card-body">
                    <p className="card-text">
                        Tuétano dorado y diezmillo asado, servidos en tortilla caliente con cebolla,
                        cilantro y salsa tatemada. Sabor casero 100% mexicano.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button
                                type="button"
                                className="btn btn-sm btn-outline-primary"
                                onClick={() => setOpen(true)}
                            >
                                Ver
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            {/* Modal */}
            {open && (
                <div className="custom-overlay">
                    <div className="custom-window">
                        <h5>Ingredientes – Tacos de Tuétano con Diezmillo</h5>
                        <ul className="custom-list">
                            <li>600 g diezmillo de res (en cubos)</li>
                            <li>4–6 huesos de tuétano (corte de caña)</li>
                            <li>Sal y pimienta negra</li>
                            <li>1 cda de aceite o manteca</li>
                            <li>Tortillas de maíz</li>
                            <li>Cebolla blanca picada</li>
                            <li>Cilantro picado</li>
                            <li>Limón</li>
                            <li>Salsa tatemada (o roja al gusto)</li>
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

export default TuetanoCard;
