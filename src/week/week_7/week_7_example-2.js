import React, { useEffect } from "react";
import '../../App.css';
import Aos from "aos";
import 'aos/dist/aos.css';
import Fractions from '../../komponenty/Fractions';
import Example_7_2 from "../../examples/examples_7/Druha/example_7_2";



const Week_7_2 = () => {
  useEffect(() => {
    Aos.init({ duration: 2000});
  }, []);

    return(
        <>
            <h1 className="nadpis"> 
              Operačné zosilňovače - Príklad č.2
            </h1>
           
            <div data-aos="fade" className="flex_left">
              <p>
                Vypočítajte prenos napätia a vstupný odpor zosilňovača na obr. (Invertujúce zapojenie s operačným zosilňovačom) 
              </p>
             

            </div>
            
            <div data-aos="fade" className="flex_left">
              <h2>Riešenie:</h2>
              <p>Klikni na šípku pre zobrazenie animácie pre výpočet U<sub>1</sub></p>
              {Example_7_2()}
            </div>

            <div data-aos="fade-right" className="flex_left">
              <p>Napíšeme sústavu dvoch rovníc, a z týchto rovníc vyjadríme prenos.</p>

              <p>U<sub>1</sub> = I<sub>1</sub> ( R<sub>1</sub> + R<sub>2</sub> ) + U<sub>2</sub></p>

              <div className="div_friction">
                <p><b>U<sub>1</sub> = I<sub>1</sub>R<sub>1</sub></b> =&gt; R<sub>VST</sub> = </p>
                <Fractions upper={<div><b>U<sub>1</sub></b></div>} lower={<div><b>I<sub>1</sub></b></div>} />
                <p><b> = R<sub>1</sub></b></p>
              </div>
            
              <div className="div_friction">
                <p>U<sub>1</sub> = </p>
                <Fractions upper={<div>U<sub>1</sub></div>} lower={<div>R<sub>1</sub></div>} />
                <p>(R<sub>1</sub> + R<sub>2</sub>) + U<sub>2</sub></p>
              </div>

              <div className="div_friction">
                <p>U<sub>1</sub> - U<sub>1</sub>( 1 + </p>
                <Fractions upper={<div>R<sub>2</sub></div>} lower={<div>R<sub>1</sub></div>} />
                <p> ) = U<sub>2</sub></p>
              </div>

              <div className="div_friction">
                <p>- U<sub>1</sub></p>
                <Fractions upper={<div>R<sub>2</sub></div>} lower={<div>R<sub>1</sub></div>} />
                <p> = U<sub>2</sub></p>
              </div>

              <div className="div_friction">
                <p>- </p>
                <Fractions upper={<div><b>R<sub>2</sub></b></div>} lower={<div><b>R<sub>1</sub></b></div>} />
                <p> = </p>
                <Fractions upper={<div><b>U<sub>2</sub></b></div>} lower={<div><b>U<sub>1</sub></b></div>} />
              </div>

            </div>

          </>
      );
}

export default Week_7_2;