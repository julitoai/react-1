import AudiImg from "./assets/images/audi.jpg";
import MercedesImg from "./assets/images/mercedes.jpg";
import "./Autos.css"
import { useState } from "react";

function Autos() {
    const [car, setCar] = useState({
      año: 1985,
      fabricante: "Audi",
      modelo: "Quattro",
    });
  
    function handleAñoChange(e) {
      setCar((c) => ({ ...c, año: e.target.value }));
    }
  
    function handleFabricanteChange(e) {
      setCar((car) => ({ ...car, fabricante: e.target.value }));
    }
    function handleModeloChange(e) {
      setCar((c) => ({ ...c, modelo: e.target.value }));
    }
    return (
      <div className="contenedor-autos">
        <h1 className="h1-autos">
          Auto: {car.año} {car.fabricante} {car.modelo}
        </h1>
        {car.fabricante === "Audi" ? (
          <img className="imgs" src={AudiImg} alt="foto-audi" />
        ) : (
          <img className="imgs" src={MercedesImg} alt="foto-mercedes" />
        )}
  
        <input type="number" value={car.año} onChange={handleAñoChange} />
        <select value={car.fabricante} onChange={handleFabricanteChange}>
          <option type="text">Audi</option>
          <option type="text">Mercedes</option>
        </select>
        <input type="text" value={car.modelo} onChange={handleModeloChange} />
      </div>
    );
  }

  export default Autos;