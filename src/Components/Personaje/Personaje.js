import "./Personaje.css";
import camiseta2 from "/Users/Admin/Desktop/cancha-mythology/src/assets/img/camiseta2.png";

function Personaje({ nombre }) {
  return (
   
    <div className="personaje">
    <img src={camiseta2} alt="camiseta" className='camiseta'/>
    <p>{nombre}</p>
    </div>
    
  )
}

export default Personaje;
