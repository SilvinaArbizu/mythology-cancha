import { useState } from "react";
import "./Cuerpotecnico.css";
import camiseta2 from "../../../assets/img/camiseta2.png";


function Cuerpotecnico({ cuerpoTecnico, manejarCuerpoTecnico}) {
  return (
    <>
    <h3>Seleccione su cuerpo tecnico</h3>
    <section className="medicos">
      <div>
      <img src={camiseta2} alt="camiseta" className='camiseta'/>
      <input
        className="input"
        name="DT"
        placeholder="Nombre de Director Tecnico"
        value={cuerpoTecnico.DT}
        onInput={(e) => manejarCuerpoTecnico(e)}
      />
      </div>
      <div>
      <img src={camiseta2} alt="camiseta" className='camiseta'/>
      <input
        className="input"
        name="AT"
        placeholder="Nombre de Asistente Tecnico"
        value={cuerpoTecnico.AT}
        onInput={(e) => manejarCuerpoTecnico(e)}
      />
      </div>
      <div>
      <img src={camiseta2} alt="camiseta" className='camiseta'/>
      <input
        className="input"
        name="CM"
        placeholder="Nombre de Medico"
        value={cuerpoTecnico.CM}
        onInput={(e) => manejarCuerpoTecnico(e)}
      />
      </div>
    </section>
    </>
  );
}

export default Cuerpotecnico;
