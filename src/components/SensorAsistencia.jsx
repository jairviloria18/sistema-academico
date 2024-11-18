import React from "react";

const SensorAsistencia = () => {
  return (
    <div className="card p-4">
      <h2>Sensor Asistencia</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Codigo Sensor:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Codigo Sensor"
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

export default SensorAsistencia;
