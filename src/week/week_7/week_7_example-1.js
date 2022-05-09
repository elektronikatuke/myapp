import React, { useEffect } from "react";
import '../../App.css';
import Aos from "aos";
import 'aos/dist/aos.css';
import Fractions from '../../komponenty/Fractions';
import Example_7_1 from "../../examples/examples_7/Prva/example_7_1";
import Example_7_1_2 from "../../examples/examples_7/Prva/example_7_1_2";


const Week_7_1 = () => {
  useEffect(() => {
    Aos.init({ duration: 2000});
  }, []);

    return(
        <>
            <h1 className="nadpis"> 
              Operačné zosilňovače - Príklad č.1
            </h1>
           
            <div data-aos="fade" className="flex_left">
              <p>
                Vypočítajte vstupnú impedanciu obvodu na obr.
              </p>
              {Example_7_1()}

            </div>
            
            <div data-aos="fade" className="flex_left">
              <h2>Riešenie:</h2>
              <p>Z<sub>VST</sub> je možné vyriešiť metódou tzv. princípu virtuálnej nuly.</p>
              <p>V tejto metóde predpokladáme, že prúdy tečúce do invertujúceho a neinvertujúceho vstupu I+ a I- v ideálnom operačnom zosilňovači sú nulové a napätie medzi týmito svorkami je taktiež nulové. V schéme si označíme tečúce prúdy a napätia ako na obr. a napíšeme sústavu rovníc.  </p>
            </div>

            <div data-aos="fade-right" className="flex_left">
              <p>Klikni na šípku pre zobrazenie animácie pre výpočet U<sub>1</sub></p>
              {Example_7_1_2()}

            <p>U<sub>1</sub> = I<sub>1</sub>R<sub>1</sub> + I<sub>2</sub>R<sub>2</sub> + I<sub>2</sub>R<sub>3</sub></p>
            
            <div className="div_friction">
              <p>I<sub>1</sub>R<sub>1</sub> + I<sub>2</sub>R<sub>2</sub> = 0 =&gt; = I<sub>2</sub> = -</p>
              <Fractions upper={<div>I<sub>1</sub>R<sub>1</sub></div>} lower={<div>R<sub>2</sub></div>} />
            </div>
            
            <div className="div_friction">
              <p>U<sub>1</sub> = I<sub>1</sub>R<sub>1</sub> - </p>
              <Fractions upper={<div>I<sub>1</sub>R<sub>1</sub></div>} lower={<div>R<sub>2</sub></div>} />
              <p>(R<sub>2</sub> + R<sub>3</sub>) = I<sub>1</sub> [ R<sub>1</sub> - </p>
              <Fractions upper={<div>R<sub>1</sub></div>} lower={<div>R<sub>2</sub></div>} />
              <p>(R<sub>2</sub> + R<sub>3</sub>) ]</p>
            </div>

            <div className="div_friction">
              <p>U<sub>1</sub> = I<sub>1</sub> [ R<sub>1</sub> - R<sub>1</sub> - </p>
              <Fractions upper={<div>R<sub>1</sub>R<sub>3</sub></div>} lower={<div>R<sub>2</sub></div>} />
              <p> ] = I<sub>1</sub> ( - </p>
              <Fractions upper={<div>R<sub>1</sub>R<sub>3</sub></div>} lower={<div>R<sub>2</sub></div>} />
              <p>)</p>
            </div>

            <div className="div_friction">
              <Fractions upper={<div>U<sub>1</sub></div>} lower={<div>I<sub>1</sub></div>} />
              <p> = -</p>
              <Fractions upper={<div><b>R<sub>1</sub>R<sub>3</sub></b></div>} lower={<div><b>R<sub>2</sub></b></div>} />
            </div>

            </div>

          </>
      );
}

export default Week_7_1;