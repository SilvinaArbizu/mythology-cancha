import { useState } from "react";
import "./App.css";
import Cancha from "./Components/Cancha/Cancha";
import Formulario from "./Components/Formulario/Formulario";
import Personaje from "./Components/Personaje/Personaje";

function App() {
  const [equipo, setEquipo] = useState({
    directorTecnico: "",
    alineacion: "",
    jugadores: [
      {
        nombre: "",
        posicion: "",
      },
    ],
    suplentes: [
      {
        nombre: "",
        posicion: "",
      },
    ],
    cuerpotecnico: {
      DT: "",
      AT: "",
      CM: "",
    },
  });
  return (
    
    <div className="App">
      <Formulario equipo={equipo} setEquipo={setEquipo} />
      <Cancha equipo={equipo} />
    </div>
  
    
  );
}

export default App;

