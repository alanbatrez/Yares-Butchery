import React, { useState } from "react";
import "../css/ArracheraCard.css";

function PapaCard() {
    const [open, setOpen] = useState(false);

    return (
        <div className="col">
            <div className="card shadow-sm">
                <img
                    src="/papaAsada.png"
                    className="card-img-top gallery"
                    alt="Arrachera"
                    width="100%"
                    height="225"
                />
                <div className="card-body">
                    <p className="card-text">
                        Papa horneada rellena de diezmillo asado en cubos, coronada con crema y mantequilla derretida.
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
                        <h5>Ingredientes - Loaded potato de diezmillo</h5>
                        <ul className="custom-list">
                            <li>2 papas grandes (russet)</li>
                            <li>300 g de diezmillo (beef chuck) en cubos</li>
                            <li>Sal y pimienta al gusto</li>
                            <li>1 cda de aceite para dorar</li>
                            <li>2 cdas de mantequilla (para servir)</li>
                            <li>2 cdas de crema ácida</li>
                            <li>Cebollín o perejil picado (opcional)</li>
                            <li>Ajo picado o en polvo (opcional)</li>
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

export default PapaCard;
