import React, { useState } from "react";
import "../css/ArracheraCard.css";

export default function TuetanoCard() {
    const [open, setOpen] = useState(false);

    return (
        <div className="col">
            <div className="card h-100 shadow-sm">
                {/* Imagen responsive con ratio */}
                <div className="ratio ratio-16x9">
                    <img
                        src="/tuetano.png"
                        alt="Tacos de Tuétano con Diezmillo"
                        className="card-img-top of-cover"
                        loading="lazy"
                    />
                </div>

                <div className="card-body d-flex flex-column">
                    <p className="card-text">
                        Tuétano dorado y diezmillo asado, servidos en tortilla caliente con cebolla,
                        cilantro y salsa tatemada. Sabor casero 100% mexicano.
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
                        <small className="text-body-secondary">10 mins</small>
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
                                    <h1 className="modal-title fs-5">Ingredientes — Tacos de Tuétano con Diezmillo</h1>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        aria-label="Close"
                                        onClick={() => setOpen(false)}
                                    />
                                </div>
                                <div className="modal-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">600 g diezmillo de res (en cubos)</li>
                                        <li className="list-group-item">4–6 huesos de tuétano (corte de caña)</li>
                                        <li className="list-group-item">Sal y pimienta negra</li>
                                        <li className="list-group-item">1 cda de aceite o manteca</li>
                                        <li className="list-group-item">Tortillas de maíz</li>
                                        <li className="list-group-item">Cebolla blanca picada</li>
                                        <li className="list-group-item">Cilantro picado</li>
                                        <li className="list-group-item">Limón</li>
                                        <li className="list-group-item">Salsa tatemada (o roja al gusto)</li>
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
