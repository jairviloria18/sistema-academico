import React from "react";

const CargaAcademica = () => {
  return (
    <div className="card p-4">
      <h2>Carga Academica</h2>
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
          <label className="form-label">Codigo Aula:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Codigo Aula"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Hora:</label>
          <input type="text" className="form-control" placeholder="Hora" />
        </div>
        <div className="mb-3">
          <label className="form-label">Grupo:</label>
          <input type="text" className="form-control" placeholder="Grupo" />
        </div>
        <div className="mb-3">
          <label className="form-label">Dia:</label>
          <input type="text" className="form-control" placeholder="Dia" />
        </div>
        <div className="mb-3">
          <label className="form-label">Periodo Carga:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Periodo Carga"
          />
        </div>
      </form>
    </div>
  );
};

export default CargaAcademica;
