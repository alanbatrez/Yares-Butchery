import React, { useState } from "react";
import "../css/ArracheraCard.css";

function DiscadaCard() {
    const [open, setOpen] = useState(false);

    return (
        <div className="col">
            <div className="card shadow-sm">
                <img
                    src="/discada.png"
                    className="card-img-top gallery object-fit-cover"
                    alt="Discada Platillo"
                    width="100%"
                    height="225"
                />
                <div className="card-body">
                    <p className="card-text">
                        Discada norteña al disco Yare's style. Mezcla de res, cerdo y chorizo con pimientos, bien sazonada y lista para taquear.
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
                        <h5>Ingredientes – Discada Yare's</h5>
                        <ul className="custom-list">
                            <li>500 g bistec de res Yare's en cubos</li>
                            <li>500 g lomo de cerdo Yare's en cubos</li>
                            <li>250 g tocino Yare's en tiras</li>
                            <li>250 g chorizo Yare's fresco</li>
                            <li>1 cebolla blanca y 4 dientes de ajo</li>
                            <li>2–3 pimientos morrones y 3–4 chiles serranos/jalapeños</li>
                            <li>Sal, pimienta, comino, orégano, paprika</li>
                            <li>1 taza cerveza clara o jugo de manzana</li>
                            <li>Tortillas y limón para servir</li>
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

export default DiscadaCard;
