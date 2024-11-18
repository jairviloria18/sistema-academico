import React from "react";

const Docente = () => {
  return (
    <div className="card p-4">
      <h2>Docente</h2>
      <form>
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
          <label className="form-label">Apellido Docente:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Apellido Docente"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Fecha Nacimiento:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Fecha Nacimiento"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Sexo:</label>
          <input type="text" className="form-control" placeholder="Sexo" />
        </div>
        <div className="mb-3">
          <label className="form-label">Celular:</label>
          <input type="text" className="form-control" placeholder="Celular" />
        </div>
        <div className="mb-3">
          <label className="form-label">Correo:</label>
          <input type="text" className="form-control" placeholder="Correo" />
        </div>
        <div className="mb-3">
          <label className="form-label">Direccion:</label>
          <input type="text" className="form-control" placeholder="Direccion" />
        </div>
        <div className="mb-3">
          <label className="form-label">Ciudad:</label>
          <input type="text" className="form-control" placeholder="Ciudad" />
        </div>
        <div className="mb-3">
          <label className="form-label">Departamento:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Departamento"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Pais:</label>
          <input type="text" className="form-control" placeholder="Pais" />
        </div>
      </form>
    </div>
  );
};

export default Docente;
