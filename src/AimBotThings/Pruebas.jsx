import React, { useEffect, useRef, useState } from "react";
import "./AimBot.css";
import CirculoGrilla from "./CirculoGrilla";

function Pruebas() {
  const [grillaAleatoria, setGrillaAleatoria] = useState(null);
  const elementoRef = useRef(null);

  useEffect(() => {
    const grillaAleatoria = Math.floor(Math.random() * 60);
    setGrillaAleatoria(grillaAleatoria);
  }, []);

  useEffect(() => {
    if (grillaAleatoria !== null && elementoRef.current) {
      const elemento = elementoRef.current.querySelector(
        `[id="${grillaAleatoria}"]`
      );
      if (elemento) {
        elemento.style.backgroundColor = "red";
      }
    }
  }, [grillaAleatoria]);

  return (
    <main className="contenedor">
      <h1>Juego de tiros</h1>
      <section className="wrapper" ref={elementoRef}>
        {Array.from({ length: 60 }).map((_, index) => (
          <CirculoGrilla key={index} id={index} />
        ))}
      </section>
    </main>
  );
}

export default Pruebas;
