import { useState } from "react";
import "./Dt.css";

function Dt({ nombreDT, manejarDT }) {

  return (
    <section>
      <input 
        className="input"
        placeholder="Nombre del DT"
        value={nombreDT}
        onInput={(e) => manejarDT(e)}
      />
      <h2>Bienvenido DT {nombreDT}</h2>
    </section>
  );
}

export default Dt;
