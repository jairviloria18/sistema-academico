import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Administrador from "./components/Administrador";
import Aula from "./components/Aula";
import Asistencia from "./components/Asistencia";
import DetalleAsistencia from "./components/DetalleAsistencia";
import SensorAsistencia from "./components/SensorAsistencia";
import Coordinador from "./components/Coordinador";
import Programa from "./components/Programa";
import Microcurriculo from "./components/Microcurriculo";
import ContenidoCompetenciasEspecificas from "./components/ContenidoCompetenciasEspecificas";
import PlanMicrocurriculo from "./components/PlanMicrocurriculo";
import CargaAcademica from "./components/CargaAcademica";
import Facultad from "./components/Facultad";
import Estudiante from "./components/Estudiante";
import HorarioEstudiante from "./components/HorarioEstudiante";
import Materia from "./components/Materia";
import Docente from "./components/Docente";
import MateriaDocente from "./components/MateriaDocente";
import HorarioDocente from "./components/HorarioDocente";

function App() {
  return (
    <Router>
      <div className="container mt-3">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top mb-4">
          <Link className="navbar-brand" to="/">
            Sistema Académico
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/administrador">
                  Administrador
                </Link>
              </li>
              <li className="nav-item" dropdown>
                <Link
                  className="nav-link"
                  dropdown-toggle
                  to="/aula"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Aula
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/aula">
                      Aula
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/asistencia">
                      Asistencia
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/detalleasistencia">
                      Detalle Asistencia
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/sensorasistencia">
                      Sensor Asistencia
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/coordinador">
                  Coordinador
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  dropdown-toggle
                  to="/programa"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Programa
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/programa">
                      Programa
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/microcurriculo">
                      Microcurriculo
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/contenidocompetenciasespecificas"
                    >
                      Contenido Competencias Especificas
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/planmicrocurriculo">
                      Plan Microcurriculo
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/cargaacademica">
                      Carga Academica
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/facultad">
                  Facultad
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  dropdown-toggle
                  to="/estudiante"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Estudiante
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/estudiante">
                      Estudiante
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/horarioestudiante">
                      Horario Estudiante
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/materia">
                      Materia
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  dropdown-toggle
                  to="/docente"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Docente
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/docente">
                      Docente
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/materiadocente">
                      Materia Docente
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/horariodocente">
                      Horario Docente
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/administrador" element={<Administrador />} />
          <Route path="/aula" element={<Aula />} />
          <Route path="/asistencia" element={<Asistencia />} />
          <Route path="/detalleasistencia" element={<DetalleAsistencia />} />
          <Route path="/sensorasistencia" element={<SensorAsistencia />} />
          <Route path="/coordinador" element={<Coordinador />} />
          <Route path="/programa" element={<Programa />} />
          <Route path="/microcurriculo" element={<Microcurriculo />} />
          <Route
            path="/contenidocompetenciasespecificas"
            element={<ContenidoCompetenciasEspecificas />}
          />
          <Route path="/planmicrocurriculo" element={<PlanMicrocurriculo />} />
          <Route path="/cargaacademica" element={<CargaAcademica />} />
          <Route path="/facultad" element={<Facultad />} />
          <Route path="/estudiante" element={<Estudiante />} />
          <Route path="/horarioestudiante" element={<HorarioEstudiante />} />
          <Route path="/materia" element={<Materia />} />
          <Route path="/docente" element={<Docente />} />
          <Route path="/materiadocente" element={<MateriaDocente />} />
          <Route path="/horariodocente" element={<HorarioDocente />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
