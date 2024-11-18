import React from "react";

const Aula = () => {
  return (
    <div className="card p-4">
      <h2>Aula</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Codigo Aula:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Codigo Aula"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Nombre Aula:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nombre Aula"
          />
        </div>
      </form>
    </div>
  );
};

export default Aula;
