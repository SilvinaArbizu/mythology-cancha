import { useState } from "react";
import "./Alineacion.css";

function Alineacion({ alineacion, manejarAlineacion }) {
  const alineaciones = ["3-4-3", "4-3-3", "5-4-1"];

  return (
    <section  className="formulario">
      <p>Elige una alineación</p>
      <select
        className="input"
        name="alineaciones"
        value={alineacion}
        onChange={(e) => manejarAlineacion(e)}>
        <option value="" className="input" disabled selected>
          Elija una alineacion
        </option>
        {alineaciones.map((a, k) => {
          return (
            <option key={k} value={a}>
              {a}
            </option>
          );
        })}
      </select>
    </section>
  );
}

export default Alineacion;
