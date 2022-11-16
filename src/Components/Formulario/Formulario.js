import { useState } from "react";
import Agregarjugador from "./Agregarjugador/Agregarjugador";
import Alineacion from "./Alineacion/Alineacion";
import Cuerpotecnico from "./CuerpoTecnico/Cuerpotecnico";
import Dt from "./DT/Dt";
import "./Formulario.css";
import team from "../../assets/img/team.png";


function Formulario({ equipo, setEquipo }) {
  const [aviso, setAviso] = useState("");
  const [jugador, setJugador] = useState({
    nombre: "",
    posicion: "",
  });
  let alineacion = {
    delantero: parseInt(equipo.alineacion.split("-")[0]),
    volante: parseInt(equipo.alineacion.split("-")[1]),
    defensa: parseInt(equipo.alineacion.split("-")[2]),
    arquero: 1,
  };
  let numeroEnPosicion = equipo.jugadores.filter(
    (j) => j.posicion === jugador.posicion
  );

  const manejarDT = (e) => {
    setEquipo({ ...equipo, directorTecnico: e.target.value });
  };

  const manejarCuerpoTecnico = (e) => {
    setEquipo({
      ...equipo,
      cuerpotecnico: {
        ...equipo.cuerpotecnico,
        [e.target.name]: e.target.value,
      },
    });
  };

  const manejarAlineacion = (e) => {
    setEquipo({
      ...equipo,
      alineacion: e.target.value,
    });
  };

  const manejarJugador = (e) => {
    setJugador({ ...jugador, [e.target.name]: e.target.value });
  };
  
  const crearJugador = (e) => {
    setAviso("");

    if (numeroEnPosicion.length === alineacion[jugador.posicion] - 1) {
      setAviso(
        "Ultimo titular en esta posicion, el resto sera enviado a suplente"
      );
    }
    if (numeroEnPosicion.length > alineacion[jugador.posicion] - 1) {
      if (equipo.suplentes.length >= 7) {
        setAviso("Maximo de suplentes agregados");
      } else {
        setEquipo({ ...equipo, suplentes: [...equipo.suplentes, jugador] });
      }
    } else {
      if (e.target.name === "titular") {
        if (equipo.jugadores[0].nombre === "") {
          setEquipo({ ...equipo, jugadores: [jugador] });
        } else {
          setEquipo({ ...equipo, jugadores: [...equipo.jugadores, jugador] });
        }
      } else if (e.target.name === "suplente") {
        if (equipo.suplentes.length >= 7) {
          setAviso("Maximo de suplentes agregados");
          return;
        }
        if (equipo.suplentes[0].nombre === "") {
          setEquipo({ ...equipo, suplentes: [jugador] });
        } else {
          setEquipo({ ...equipo, suplentes: [...equipo.suplentes, jugador] });
        }
      }
    }
  };

  return (
    <div className="formulario">
    <img src={team} alt="logo" className="logo"/>
      <Dt nombreDT={equipo.directorTecnico} manejarDT={manejarDT} />
      <Alineacion
        alineacion={equipo.alineacion}
        manejarAlineacion={manejarAlineacion}
      />
      <Agregarjugador
        jugador={jugador}
        manejarJugador={manejarJugador}
        crearJugador={crearJugador}
        disabled={equipo.alineacion}
      />
      {aviso ? aviso : null}
      <Cuerpotecnico
        cuerpoTecnico={equipo.cuerpotecnico}
        manejarCuerpoTecnico={manejarCuerpoTecnico}
      />
    </div>
  );
}

export default Formulario;
