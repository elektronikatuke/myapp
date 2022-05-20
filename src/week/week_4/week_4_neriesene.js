import React from "react";
import '../../App.css';
import Example_4_neriesene_1 from "../../examples/examples_4/Neriesene/examples_4_neriesene_1";


const Neriesene_4 = () => {
  
    return(
        <>
            <h1 className="nadpis"> 
                Bipolárny tranzistor - návrh zosilňovačov
            </h1>
           
            <div className="flex_left">
                <p>Navrhnite zosilňovač v zapojení SC (obrázok), pre ktorý platí: <b>A<sub>i</sub> = 15, U<sub>CC</sub> = 18V, R<sub>L</sub> = 200Ω, ẞ=100, U<sub>BE</sub> = 0,7V</b>. Vypočítajte hodnotu neskresleného rozkmitu výstupného napätia.</p>
                {Example_4_neriesene_1()}
            </div>
    </>
      );
}

export default Neriesene_4;