import React from "react";

const Asistencia = () => {
  return (
    <div className="card p-4">
      <h2>Asistencia</h2>
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
          <label className="form-label">Docente Responsable:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Docente Responsable"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Asignatura:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Asignatura"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Codigo Asignatura:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Codigo Asignatura"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Grupo:</label>
          <input type="text" className="form-control" placeholder="Grupo" />
        </div>
        <div className="mb-3">
          <label className="form-label">Tema:</label>
          <input type="text" className="form-control" placeholder="Tema" />
        </div>
        <div className="mb-3">
          <label className="form-label">Fecha:</label>
          <input type="text" className="form-control" placeholder="Fecha" />
        </div>
        <div className="mb-3">
          <label className="form-label">Sede:</label>
          <input type="text" className="form-control" placeholder="Sede" />
        </div>
        <div className="mb-3">
          <label className="form-label">Aula:</label>
          <input type="text" className="form-control" placeholder="Aula" />
        </div>
        <div className="mb-3">
          <label className="form-label">Hora:</label>
          <input type="text" className="form-control" placeholder="Hora" />
        </div>
      </form>
    </div>
  );
};

export default Asistencia;
