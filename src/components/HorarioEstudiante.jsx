import React from "react";

const HorarioEstudiante = () => {
  return (
    <div className="card p-4">
      <h2>Horario Estudiante</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Codigo Horario:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Codigo Horario"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Id Estudiante:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Id Estudiante"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Nombre Estudiante:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nombre Estudiante"
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
      </form>
    </div>
  );
};

export default HorarioEstudiante;
