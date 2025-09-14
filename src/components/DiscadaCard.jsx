import React, { useState } from "react";
import "../css/ArracheraCard.css";

export default function DiscadaCard() {
    const [open, setOpen] = useState(false);

    return (
        <div className="col">
            <div className="card h-100 shadow-sm">
                {/* Imagen responsive con ratio */}
                <div className="ratio ratio-16x9">
                    <img
                        src="/discada.png"
                        alt="Discada Platillo"
                        className="card-img-top of-cover" // object-fit: cover
                        loading="lazy"
                    />
                </div>

                <div className="card-body d-flex flex-column">
                    <p className="card-text">
                        Discada norteña al disco Yare's style. Mezcla de res, cerdo y chorizo con pimientos, bien sazonada y lista para taquear.
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
                        <small className="text-body-secondary">14 mins</small>
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
                                    <h1 className="modal-title fs-5">Ingredientes — Discada Yare's</h1>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        aria-label="Close"
                                        onClick={() => setOpen(false)}
                                    />
                                </div>
                                <div className="modal-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">500 g bistec de res Yare's en cubos</li>
                                        <li className="list-group-item">500 g lomo de cerdo Yare's en cubos</li>
                                        <li className="list-group-item">250 g tocino Yare's en tiras</li>
                                        <li className="list-group-item">250 g chorizo Yare's fresco</li>
                                        <li className="list-group-item">1 cebolla blanca y 4 dientes de ajo</li>
                                        <li className="list-group-item">2–3 pimientos morrones y 3–4 chiles serranos/jalapeños</li>
                                        <li className="list-group-item">Sal, pimienta, comino, orégano, paprika</li>
                                        <li className="list-group-item">1 taza cerveza clara o jugo de manzana</li>
                                        <li className="list-group-item">Tortillas y limón para servir</li>
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
