import React from "react";

const DetalleAsistencia = () => {
  return (
    <div className="card p-4">
      <h2>Detalle Asistencia</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Codigo Asistencia:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Codigo Asistencia"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Identificacion:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Identificacion"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Nombre:</label>
          <input type="text" className="form-control" placeholder="Nombre" />
        </div>
        <div className="mb-3">
          <label className="form-label">Apellido:</label>
          <input type="text" className="form-control" placeholder="Apellido" />
        </div>
        <div className="mb-3">
          <label className="form-label">Correo:</label>
          <input type="text" className="form-control" placeholder="Correo" />
        </div>
        <div className="mb-3">
          <label className="form-label">Estado:</label>
          <input type="text" className="form-control" placeholder="Estado" />
        </div>
      </form>
    </div>
  );
};

export default DetalleAsistencia;
