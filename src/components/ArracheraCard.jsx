import React, { useState } from "react";

export default function ArracheraCard() {
  const [open, setOpen] = useState(false);

  return (
      <div className="col">
        <div className="card h-100 shadow-sm">
          {/* Imagen responsive con ratio Bootstrap */}
          <div className="ratio ratio-16x9">
            <img
                src="/arrachera.png"
                alt="Arrachera"
                className="card-img-top of-cover"  // clase para object-fit
                loading="lazy"
            />
          </div>

          <div className="card-body d-flex flex-column">
            <p className="card-text">
              Arrachera marinada lista para asar. Suave, sabrosa y llena de sabor.
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
                      <h1 className="modal-title fs-5">Ingredientes — Arrachera Asada</h1>
                      <button
                          type="button"
                          className="btn-close"
                          aria-label="Close"
                          onClick={() => setOpen(false)}
                      />
                    </div>
                    <div className="modal-body">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">Arrachera Yare's Marinada 500g</li>
                        <li className="list-group-item">Nopales</li>
                        <li className="list-group-item">Sal y pimienta</li>
                        <li className="list-group-item">Cebolla</li>
                        <li className="list-group-item">Guacamole</li>
                        <li className="list-group-item">Tortillas</li>
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
