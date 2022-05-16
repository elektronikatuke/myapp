import React from "react";
import '../../App.css';


const Neriesene_2_1 = () => {
  
    return(
        <>
            <h1 className="nadpis"> 
              Zenerove diódy - Neriešené príklady
            </h1>
           
            <div className="flex_left">
                <h2>Prvý príklad</h2>
                <p>Nakreslite jednoduchý Zenerov regulátor a určte rozsah hodnôt vstupného napätia V<sub>i</sub>, ktoré udržuje na výstupe referenčné napätie 20V. Je dané: R = 220Ω; V<sub>Z</sub>=20V; I<sub>ZM</sub> = 60mA; R<sub>L</sub> = 1.2kΩ.</p>
            </div>

            <div className="flex_left">
                <h2>Druhý príklad</h2>
                <p>2.	Nakreslite jednoduchý Zenerov regulátor a určte hodnoty <b>V<sub>L</sub>, I<sub>L</sub>, I<sub>Z</sub> a I<sub>R</sub></b> , ak R<sub>L</sub> = 470 Ω. Vypočítajte hodnotu <b>R<sub>L</sub></b>, ktorá nedovolí prekročenie maximálneho výkonového zaťaženia Zenerovej diódy a taktiež takú hodnotu <b>R<sub>L</sub></b>, pri ktorej je ešte  Zenerova dióda v „ON“ režime. Je dané: V<sub>i</sub> = 20V, R = 220Ω, V<sub>Z</sub> = 10 V, P<sub>ZM</sub> = 400 mW.</p>
            </div>
            
    </>
      );
}

export default Neriesene_2_1;