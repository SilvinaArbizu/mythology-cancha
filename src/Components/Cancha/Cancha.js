import "./Cancha.css";
import Personaje from "../Personaje/Personaje";
import cancha from "../../assets/img/cancha.png";

function Cancha({ equipo }) {
  return (
    <div className="cancha" style={{ backgroundImage: `url(${cancha})`  }}>
      <div className="equipo">
       
      </div>
      <div className="jugadores">
        <div className="delantero">
          {equipo.jugadores.map((j, k) => {
            if (j.posicion === "delantero") {
              return <Personaje nombre={j.nombre} />; 
            }
          })}
        </div>
        <div className="volante">
          {equipo.jugadores.map((j, k) => {
            if (j.posicion === "volante") {
              return <Personaje nombre={j.nombre} />;
            }
          })}
        </div>
        <div className="defensa">
          {equipo.jugadores.map((j, k) => {
            if (j.posicion === "defensa") {
              return <Personaje nombre={j.nombre} />;
            }
          })}
        </div>
        <div className="arquero">
          {equipo.jugadores.map((j, k) => {
            if (j.posicion === "arquero") {
              return <Personaje nombre={j.nombre} />;
            }
          })}
        </div>
      </div>
      <h2>Suplentes</h2>
      <div className="suplentes">
          {equipo.suplentes.map((s, k) => {
            if (s.nombre !== "") {
              return <Personaje nombre={s.nombre} />;
            }
          })}
        </div>
        <h2>Cuerpo técnico</h2>
        <div className="CT">
          {equipo.cuerpotecnico.DT ? (
            <Personaje nombre={equipo.cuerpotecnico.DT} />
          ) : null}
          {equipo.cuerpotecnico.AT ? (
            <Personaje nombre={equipo.cuerpotecnico.AT} />
          ) : null}
          {equipo.cuerpotecnico.CM ? (
            <Personaje nombre={equipo.cuerpotecnico.CM} />
          ) : null}
         </div>
    </div>
  );
}

export default Cancha;