import React from "react";

const Materia = () => {
  return (
    <div className="card p-4">
      <h2>Materia</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Codigo Materia:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Codigo Materia"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Nombre Materia:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nombre Materia"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Numero Creditos:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Numero Creditos"
          />
        </div>
      </form>
    </div>
  );
};

export default Materia;
