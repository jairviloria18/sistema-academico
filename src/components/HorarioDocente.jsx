import React from "react";

const HorarioDocente = () => {
  return (
    <div className="card p-4">
      <h2>Horario Docente</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Codigo Horario Docente:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Codigo Horario Docente"
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
          <label className="form-label">Nombre Aula:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nombre Aula"
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

export default HorarioDocente;
