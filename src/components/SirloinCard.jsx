import React, { useState } from "react";
import "../css/ArracheraCard.css";

export default function SirloinCard() {
    const [open, setOpen] = useState(false);

    return (
        <div className="col">
            <div className="card h-100 shadow-sm">
                {/* Imagen responsive con ratio */}
                <div className="ratio ratio-16x9">
                    <img
                        src="/sirloin.png"
                        alt="Sirloin a la parrilla"
                        className="card-img-top of-cover"
                        loading="lazy"
                    />
                </div>

                <div className="card-body d-flex flex-column">
                    <p className="card-text">
                        Corte Sirloin jugoso a la parrilla, tierno y lleno de sabor, ideal para disfrutar al estilo carnita asada.
                    </p>

                    <div className="mt-auto d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button
                                type="button"
                                className="btn btn-sm btn-outline-secondary"
                                onClick={() => setOpen(true)}
                            >
                                Ingredientes
                            </button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">
                                Edit
                            </button>
                        </div>
                        <small className="text-body-secondary">11 mins</small>
                    </div>
                </div>
            </div>

            {/* Modal controlado por estado (sin JS de Bootstrap) */}
            {open && (
                <>
                    <div
                        className="modal fade show"
                        style={{ display: "block" }}
                        role="dialog"
                        aria-modal="true"
                    >
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5">Ingredientes — Sirloin Asado</h1>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        aria-label="Close"
                                        onClick={() => setOpen(false)}
                                    />
                                </div>
                                <div className="modal-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Sirloin en cortes medianos</li>
                                        <li className="list-group-item">Sal de grano y pimienta</li>
                                        <li className="list-group-item">Tortillas de maíz o harina</li>
                                        <li className="list-group-item">Guacamole y salsas (roja y verde)</li>
                                        <li className="list-group-item">Cebollitas y pimientos asados</li>
                                        <li className="list-group-item">Elotes y papas al carbón</li>
                                    </ul>
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-secondary" onClick={() => setOpen(false)}>
                                        Cerrar
                                    </button>
                                    <button className="btn btn-primary">Agregar</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Backdrop */}
                    <div className="modal-backdrop fade show" onClick={() => setOpen(false)} />
                </>
            )}
        </div>
    );
}
