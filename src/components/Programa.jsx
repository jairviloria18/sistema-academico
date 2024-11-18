import React from "react";

const Programa = () => {
  return (
    <div className="card p-4">
      <h2>Programa</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Codigo Programa:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Codigo Programa"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Nombre Programa:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nombre Programa"
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

export default Programa;
