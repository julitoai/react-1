import { useState } from "react";
import "./Contador.css";


 function Contador() {
   const [contador, setContador] = useState(0)
   // usar la 'c' para llamar al valor anterior (updater function
   const sumar = () => {
     setContador((c) => c + 1);
   }
   const restar = () => {
     setContador((c) => c - 1);
   }
   const reset = () => {
     setContador(0);
   }
   return (
     <>
       <div className="contenedor-contenedor">
         <div className="contenedor-contador">
           <h1 className="h1-contador">Contador</h1>
           <button className="sumar-contador" onClick={sumar}>
             +
           </button>
           <p className="contador-numero">{contador}</p>
           <button className="restar-contador" onClick={restar}>
             -
           </button>
           &nbsp;
           <button className="reset-contador" onClick={reset}>
             Reset
           </button>
         </div>
       </div>
     </>
   );
   }

export default Contador;
