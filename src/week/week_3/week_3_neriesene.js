import React from "react";
import '../../App.css';

import Example_3_neriesene from "../../examples/examples_3/Neriesene/example_3_neriesene";
import Example_3_neriesene_2 from "../../examples/examples_3/Neriesene/example_3_neriesene_2";
import Example_3_neriesene_3 from "../../examples/examples_3/Neriesene/example_3_neriesene_3";


const Neriesene_3 = () => {
  
    return(
        <>
            <h1 className="nadpis"> 
                Bipolárny tranzistor-zaťažovacie priamky: Neriešený príklad č. 1
            </h1>
           
            <div className="flex_left">
                <p>Nakreslite AC a DC zaťažovacie priamky pre zosilňovač na obrázku. Predpokladajte, že R<sub>B</sub> = 0,1βR<sub>E</sub></p>
                {Example_3_neriesene()}
            </div>

            <h1 className="nadpis"> 
                Bipolárny tranzistor-pracovný bod: Neriešené príklady
            </h1>

            <div className="flex_left">
                <h2>príklad č. 1</h2>
                <p>Vypočítajte parametre pracovného bodu <b>I<sub>BQ</sub> , I<sub>CQ</sub>, V<sub>CEQ</sub></b>  a nájdite hodnoty <b>V<sub>B</sub>, V<sub>C</sub>, V<sub>E</sub> a V<sub>BC</sub></b>. Dané je ß=120.</p>
                {Example_3_neriesene_2()}
            </div>
            
            <div className="flex_left">
                <h2>príklad č. 2</h2>
                <p>Pre obvod na obrázku vypočítajte <b>I<sub>C</sub>, V<sub>B</sub>, R<sub>B</sub> a ẞ</b>, ak je dané <b>I<sub>B</sub> = 20 μA, I<sub>E</sub> = 4 mA, V<sub>CE</sub> = 7.2 V</b></p>
                {Example_3_neriesene_3()}
            </div>
            
    </>
      );
}

export default Neriesene_3;