import React from "react";
import '../../App.css';
import Example_6_neriesene_1 from "../../examples/examples_6/Neriesene/example_6_neriesene_1";
import Example_6_neriesene_2 from "../../examples/examples_6/Neriesene/example_6_neriesene_2";
import Example_6_neriesene_3 from "../../examples/examples_6/Neriesene/example_6_neriesene_3";


const Neriesene_6 = () => {
  
    return(
        <>
            <h1 className="nadpis"> 
                Unipolárny tranzistoe
            </h1>
           
            <div className="flex_left">
                <h2> Príklad č.1 </h2>
                <p>Výstupné charakteristiky n-kanálového FET v pracovnej oblasti sú aproximované nasledovnou rovnicou:</p>
                <p>i<sub>D</sub> = 0,5 * (4 + u<sub>GS</sub>)<sup>2</sup>mA</p>
                <p>ak zároveň platí: <b>R<sub>S</sub> = 500Ω, R<sub>D</sub>= 2kΩ, R<sub>IN</sub>= 100kΩ, I<sub>DQ</sub>= 5mA, U<sub>DD</sub>= 20V</b></p>
                <p>Vypočítajte nasledujúce parametre: <b>U<sub>GSQ</sub>, U<sub>D</sub>, U<sub>DSQ</sub>, R<sub>1</sub> a R<sub>2</sub></b></p>
                {Example_6_neriesene_1()}
            </div>

            <div className="flex_left">
                <h2> Príklad č.2 </h2>
                <p>Navrhnite zosilňovač s p-kanálovým JFET v zapojení CS (spoločný emitor), pričom je dané <b>A<sub>U</sub> = -10 a R<sub>IN</sub> = 20kΩ</b>. Pracovný bod je zvolený nasledovne: <b>I<sub>DQ</sub> = -1mA, U<sub>DSQ</sub> = -10V, U<sub>GSQ</sub> = 0,5V a g<sub>m</sub> = 1500μS.</b></p>
                <p>Vypočítajte A<sub>i</sub>, R<sub>1</sub>, R<sub>2</sub>, R<sub>S</sub> a R<sub>D</sub>. (Je možné, že budete musieť rozdeliť R<sub>S</sub> a časť premostiť kondenzátorom.)</p>
                {Example_6_neriesene_2()}
            </div>

            <div className="flex_left">
                <h2>Príklad č. 3</h2>
                <p>Analyzujte zosilňovač s n-kanálovým JFET-om podľa obrázku, ak je dané: <b>R<sub>L</sub>= 20kΩ, R<sub>D</sub>= 8kΩ, U<sub>DD</sub>= 24V a R<sub>IN</sub>= 50kΩ</b>. Pracovný bod je zvolený nasledovne: <b>U<sub>DSQ</sub>= 12V, U<sub>GSQ</sub>= -1,5V, I<sub>DQ</sub>= 1mA a g<sub>m</sub>= 2,83mS</b>. Určte všetky hodnoty súčiastok a vypočítajte A<sub>u</sub> a A<sub>i</sub>. </p>
                {Example_6_neriesene_3()}
            </div>

    </>
      );
}

export default Neriesene_6;