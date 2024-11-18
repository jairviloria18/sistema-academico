import React from "react";

const Facultad = () => {
  return (
    <div className="card p-4">
      <h2>Facultad</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Codigo Facultad:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Codigo Facultad"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Nombre Facultad:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nombre Facultad"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Numero Programas:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Numero Programas"
          />
        </div>
      </form>
    </div>
  );
};

export default Facultad;
