import React from "react";

const Estudiante = () => {
  return (
    <div className="card p-4">
      <h2>Estudiante</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Id Estudiante:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Id Estudiante"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Tipo Documento:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Tipo Documento"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Fecha Expedicion:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Fecha Expedicion"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Nombre:</label>
          <input type="text" className="form-control" placeholder="Nombre" />
        </div>
        <div className="mb-3">
          <label className="form-label">Apellido:</label>
          <input type="text" className="form-control" placeholder="Apellido" />
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
          <label className="form-label">Estado Civil:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Estado Civil"
          />
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
          <label className="form-label">País:</label>
          <input type="text" className="form-control" placeholder="País" />
        </div>
        <div className="mb-3">
          <label className="form-label">Puntaje ICFES:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Puntaje ICFES"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Nombre Acudiente:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nombre Acudiente"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Apellido Acudiente:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Apellido Acudiente"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Celular Acudiente:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Celular Acudiente"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">SISBEN:</label>
          <input type="text" className="form-control" placeholder="SISBEN" />
        </div>
        <div className="mb-3">
          <label className="form-label">Codigo Facultad:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Codigo Facultad"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Nombre Facultad:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nombre Facultad"
          />
        </div>
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
      </form>
    </div>
  );
};

export default Estudiante;
