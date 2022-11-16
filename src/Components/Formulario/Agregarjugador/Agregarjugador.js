import { useState } from "react";
import "./Agregarjugador.css";
import camiseta2 from "../../../assets/img/camiseta2.png";

function Agregarjugador({ jugador, manejarJugador, crearJugador, disabled }) {
  return (
    <>
    <h3>Agrega tus jugadores</h3>
    <section className="formulario">
      <div className="jugadores">
      <img src={camiseta2} alt="camiseta" className='camiseta'/>
      <input
        className="input"
        name="nombre"
        placeholder="Nombre"
        value={jugador.nombre}
        onInput={(e) => manejarJugador(e)}
      />
      <select
        className="input"
        name="posicion"
        value={jugador.posicion}
        onChange={(e) => manejarJugador(e)}>
        <option value="" disabled>
          Posicion
        </option>
        <option value="delantero">Delantero</option>
        <option value="volante">Volante</option>
        <option value="defensa">Defensa</option>
        <option value="arquero">Arquero</option>
      </select>
      <div>
      <button
        className="boton"
        name="titular"
        onClick={(e) => crearJugador(e)}
        disabled={disabled ? false : true}>
        TITULAR
      </button>
      <button
        className="boton"
        name="suplente"
        onClick={(e) => crearJugador(e)}
        disabled={disabled ? false : true}>
        SUPLENTE
      </button>
      </div>
      </div>
    </section>
    </>
  );
}

export default Agregarjugador;
