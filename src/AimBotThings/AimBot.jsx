import "./AimBot.css";

// CREAR AIMLAB 

function AimBot() {
  //const [grid, setGrid] = useState({
   objeto: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
      { id: 9 },
      { id: 10 },
      { id: 11 },
      { id: 12 },
      { id: 13 },
      { id: 14 },
      { id: 15 },
      { id: 16 },
      { id: 17 },
      { id: 18 },
      { id: 19 },
      { id: 20 },
      { id: 21 },
      { id: 22 },
      { id: 23 },
      { id: 24 },
      { id: 25 },
      { id: 26 },
      { id: 27 },
      { id: 28 },
      { id: 29 },
      { id: 30 },
      { id: 31 },
      { id: 32 },
      { id: 33 },
      { id: 34 },
      { id: 35 },
      { id: 36 },
      { id: 37 },
      { id: 38 },
      { id: 39 },
      { id: 40 },
      { id: 41 },
      { id: 42 },
      { id: 43 },
      { id: 44 },
      { id: 45 },
      { id: 46 },
      { id: 47 },
      { id: 48 },
      { id: 49 },
      { id: 50 },
      { id: 51 },
      { id: 52 },
      { id: 53 },
      { id: 54 },
      { id: 55 },
      { id: 56 },
      { id: 57 },
      { id: 58 },
      { id: 59 },
      { id: 60 },
    ]
   //})

  // FUNCION QUE CAMBIE DE COLOR UN CIRCULO ALEATORIO
    const randomizer = (grid) => {
    Math.floor(Math.random * grid.objeto.length());
    setGrid(randomizer);
    }

    //const grillasId = grilla.map({
    //  return grilla + grid.id; 
    //})
      

  return (
    <main className="contenedor">
      <h1>Juego de tiros</h1>
      <section className="wrapper">
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
        <div className="grilla"></div>
      </section>
    </main>
  );
}

export default AimBot;

