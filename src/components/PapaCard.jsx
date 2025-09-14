import React, { useState } from "react";
import "../css/ArracheraCard.css";

export default function PapaCard() {
    const [open, setOpen] = useState(false);

    return (
        <div className="col">
            <div className="card h-100 shadow-sm">
                {/* Imagen responsive con ratio */}
                <div className="ratio ratio-16x9">
                    <img
                        src="/papaAsada.png"
                        alt="Papa Asada con diezmillo"
                        className="card-img-top of-cover"
                        loading="lazy"
                    />
                </div>

                <div className="card-body d-flex flex-column">
                    <p className="card-text">
                        Papa horneada rellena de diezmillo asado en cubos, coronada con crema y mantequilla derretida.
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
                        <small className="text-body-secondary">9 mins</small>
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
                                    <h1 className="modal-title fs-5">Ingredientes — Loaded potato de diezmillo</h1>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        aria-label="Close"
                                        onClick={() => setOpen(false)}
                                    />
                                </div>
                                <div className="modal-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">2 papas grandes (russet)</li>
                                        <li className="list-group-item">300 g de diezmillo (beef chuck) en cubos</li>
                                        <li className="list-group-item">Sal y pimienta al gusto</li>
                                        <li className="list-group-item">1 cda de aceite para dorar</li>
                                        <li className="list-group-item">2 cdas de mantequilla (para servir)</li>
                                        <li className="list-group-item">2 cdas de crema ácida</li>
                                        <li className="list-group-item">Cebollín o perejil picado (opcional)</li>
                                        <li className="list-group-item">Ajo picado o en polvo (opcional)</li>
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
