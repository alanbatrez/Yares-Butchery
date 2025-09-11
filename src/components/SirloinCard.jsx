import React, { useState } from "react";
import "../css/ArracheraCard.css";

function SirloinCard() {
    const [open, setOpen] = useState(false);

    return (
        <div className="col">
            <div className="card shadow-sm">
                <img
                    src="/sirloin.png"
                    className="card-img-top gallery"
                    alt="Arrachera"
                    width="100%"
                    height="225"
                />
                <div className="card-body">
                    <p className="card-text">
                        Sirloin
                        Corte jugoso a la parrilla, tierno y lleno de sabor, ideal para disfrutar al estilo carnita asada.
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
                        <h5>Ingredientes - Sirloin Asado</h5>
                        <ul className="custom-list">
                            <li>Sirloin en cortes medianos</li>
                            <li>Sal de grano y pimienta</li>
                            <li>Tortillas de maíz y harina</li>
                            <li>Guacamole y salsas (roja y verde)</li>
                            <li>Cebollitas y pimientos asados</li>
                            <li>Elotes y papas al carbón</li>
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

export default SirloinCard;
