import React from "react";

const ContenidoCompetenciasEspecificas = () => {
  return (
    <div className="card p-4">
      <h2>Contenido Competencias Especificas</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Codigo Competencia:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Codigo Competencia"
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
          <label className="form-label">Unidad Tematica:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Unidad Tematica"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Competencias Especificas:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Competencias Especificas"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Resultados DeAprendizaje:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Resultados DeAprendizaje"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Nivel Superior:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nivel Superior"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Nivel Normal:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nivel Normal"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Nivel Bajo:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nivel Bajo"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Nivel Deficiente:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nivel Deficiente"
          />
        </div>
      </form>
    </div>
  );
};

export default ContenidoCompetenciasEspecificas;
