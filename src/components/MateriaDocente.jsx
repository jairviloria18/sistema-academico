import React from "react";

const MateriaDocente = () => {
  return (
    <div className="card p-4">
      <h2>Materia Docente</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Codigo Materia Docente:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Codigo Materia Docente"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Id Docente:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Id Docente"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Nombre Docente:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nombre Docente"
          />
        </div>
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
      </form>
    </div>
  );
};

export default MateriaDocente;
