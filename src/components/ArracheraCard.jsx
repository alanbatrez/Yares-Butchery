import React, { useState } from "react";
import "../css/ArracheraCard.css";

function ArracheraCard() {
  const [open, setOpen] = useState(false);

  return (
    <div className="col">
      <div className="card shadow-sm">
        <img
          src="/arrachera.png"
          className="card-img-top gallery"
          alt="Arrachera"
          width="100%"
          height="225"
        />
        <div className="card-body">
          <p className="card-text">
            Arrachera marinada lista para asar. Suave, sabrosa y llena de sabor.
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
            <h5>Ingredientes - Arrachera Asada</h5>
            <ul className="custom-list">
              <li>Arrachera Yare's Marinada 500g</li>
              <li>Nopales</li>
              <li>Sal y pimienta</li>
              <li>Cebolla</li>
              <li>Guacamole</li>
              <li>Tortillas</li>
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

export default ArracheraCard;
