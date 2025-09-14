import React, { useState } from "react";
import "../css/ArracheraCard.css"; // si aquí tienes .gallery con tamaños raros, ver nota abajo

export default function Costillas() {
    const [open, setOpen] = useState(false);

    return (
        <div className="col">
            <div className="card h-100 shadow-sm">
                {/* Imagen responsive con ratio */}
                <div className="ratio ratio-16x9">
                    <img
                        src="/costillas.jpg"
                        alt="Costillas puerco BBQ"
                        className="card-img-top of-cover"  /* object-fit: cover */
                        loading="lazy"
                    />
                </div>

                <div className="card-body d-flex flex-column">
                    <p className="card-text">
                        Costillas jugosas listas para asar. Tiernas, ahumadas y llenas de sabor.
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
                        <small className="text-body-secondary">12 mins</small>
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
                                    <h1 className="modal-title fs-5">Ingredientes — Costilla BBQ</h1>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        aria-label="Close"
                                        onClick={() => setOpen(false)}
                                    />
                                </div>
                                <div className="modal-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">2 racks de costilla de cerdo Yare's</li>
                                        <li className="list-group-item">Sal y pimienta al gusto</li>
                                        <li className="list-group-item">
                                            Rub seco: 2 cda azúcar morena, 1 cda paprika, 1 cdta ajo en polvo,
                                            1 cdta cebolla en polvo, 1/2 cdta comino, 1/2 cdta chile en polvo
                                        </li>
                                        <li className="list-group-item">
                                            Glaseado BBQ: 1 taza salsa BBQ, 2 cda miel o melaza,
                                            1 cda vinagre de manzana, 1 cdta mostaza, 1 cdta Worcestershire
                                        </li>
                                        <li className="list-group-item">
                                            Para rociar (opcional): 1/2 taza jugo de manzana o mezcla 50/50
                                            vinagre de manzana + agua
                                        </li>
                                        <li className="list-group-item">Extras: chipotle/adobo, ajo fresco, cebolla</li>
                                        <li className="list-group-item">Acompañantes: nopales, cebolla, guacamole, tortillas</li>
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
