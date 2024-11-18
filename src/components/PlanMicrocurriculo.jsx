import React from "react";

const PlanMicrocurriculo = () => {
  return (
    <div className="card p-4">
      <h2>Plan Microcurriculo</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Codigo Plan Microcurriculo:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Codigo Plan Microcurriculo"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Codigo Microcurriculo:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Codigo Microcurriculo"
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
          <label className="form-label">Correo:</label>
          <input type="text" className="form-control" placeholder="Correo" />
        </div>
        <div className="mb-3">
          <label className="form-label">Programa:</label>
          <input type="text" className="form-control" placeholder="Programa" />
        </div>
        <div className="mb-3">
          <label className="form-label">Facultad:</label>
          <input type="text" className="form-control" placeholder="Facultad" />
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
          <label className="form-label">Materia:</label>
          <input type="text" className="form-control" placeholder="Materia" />
        </div>
        <div className="mb-3">
          <label className="form-label">Creditos:</label>
          <input type="text" className="form-control" placeholder="Creditos" />
        </div>
        <div className="mb-3">
          <label className="form-label">Tipo Asignatura:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Tipo Asignatura"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Naturaleza Asignatura:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Naturaleza Asignatura"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Año Lectivo:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Año Lectivo"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Periodo Academico:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Periodo Academico"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Fecha Inicio:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Fecha Inicio"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Tota lHoras:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Total Horas"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Fecha Terminacion:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Fecha Terminacion"
          />
        </div>
      </form>
    </div>
  );
};

export default PlanMicrocurriculo;
