import React from "react";
import '../../App.css';
import Example_neriesene_1 from "../../examples/examples_1/Neriesene/example_neriesene_1";
import Example_neriesene_2 from "../../examples/examples_1/Neriesene/example_neriesene_2";

const Neriesene_1 = () => {
  
    return(
        <>
            <h1 className="nadpis"> 
              Diódy - Neriešený príklad č. 1
            </h1>
           
            <div className="flex_left">
              <p>Vypočítajte a nakreslite charakteristiku <b>i = f(v)</b> pre nasledujúci obvod s ideálnou diódou (vrátane podmienok). Predpokladajte: V<sub>1</sub> = 3V; V<sub>2</sub> = 2V; I<sub>1</sub> = 2A; R<sub>1</sub> = 1Ω; R<sub>2</sub> = 6Ω:</p>
                {Example_neriesene_1()}
            </div>

            <h1 className="nadpis"> 
              Diódy - Neriešený príklad č. 2
            </h1>
           
            <div className="flex_left">
                <p>Vypočítajte a nakreslite <b>i = f(u)</b> pre nasledujúce zapojenie. Predpokladajte, že dióda je ideálna. Súčasťou výpočtu je stanovenie podmienok platnosti predpokladaných stavov diódy a ich vyznačenie vo výslednej charakteristike.</p>
                {Example_neriesene_2()}
            </div>
            
    </>
      );
}

export default Neriesene_1;