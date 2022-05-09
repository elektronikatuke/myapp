import React, { useEffect } from "react";
import '../../App.css';
import Aos from "aos";
import 'aos/dist/aos.css';
import Fractions from '../../komponenty/Fractions';
import Example_7_3 from "../../examples/examples_7/Tretia/example_7_3";



const Week_7_3 = () => {
  useEffect(() => {
    Aos.init({ duration: 2000});
  }, []);

    return(
        <>
            <h1 className="nadpis"> 
              Operačné zosilňovače - Príklad č.3
            </h1>
           
            <div data-aos="fade" className="flex_left">
              <p>
                Vypočítajte napäťový prenos v zapojení na obrázku (Neinvertujúce zapojenie s operačným zosilňovačom) 
              </p>
             
            </div>
            
            <div data-aos="fade" className="flex_left">
              <h2>Riešenie:</h2>
              <p>Klikni na šípku pre zobrazenie animácie pre výpočet U<sub>1</sub></p>
              {Example_7_3()}
            </div>

            <div data-aos="fade-right" className="flex_left">
             
              <div className="div_friction">

                <p>K = </p>
                <Fractions upper={<div>U<sub>2</sub></div>} lower={<div>U<sub>1</sub></div>} />
                <p> = 1 + </p>
                <Fractions upper={<div>R<sub>2</sub></div>} lower={<div>R<sub>1</sub></div>} />
              </div>
              
              <p>- U<sub>1</sub> - I<sub>1</sub>R<sub>1</sub> = 0 </p>
              
              <p>I<sub>1</sub>R<sub>1</sub> + I<sub>1</sub>R<sub>2</sub> + U<sub>2</sub> = 0 </p>
              

              <div className="div_friction">
                <p>I<sub>1</sub> = -</p>
                <Fractions upper={<div>U<sub>1</sub></div>} lower={<div>R<sub>1</sub></div>} />
              </div>
            

              <div className="div_friction">
                
                - <Fractions upper={<div>U<sub>1</sub></div>} lower={<div>R<sub>1</sub></div>} />
                <p>R<sub>1</sub> - </p>
                <Fractions upper={<div>U<sub>1</sub></div>} lower={<div>R<sub>1</sub></div>} />
                <p>R<sub>2</sub> + U<sub>2</sub> = 0</p>
               
              </div>

              <div className="div_friction">
                
                <p>- U<sub>1</sub> (</p>
                <Fractions upper={<div>R<sub>1</sub></div>} lower={<div>R<sub>1</sub></div>} />
                <p> + </p>
                <Fractions upper={<div>R<sub>1</sub></div>} lower={<div>R<sub>2</sub></div>} />
                <p>) + U<sub>2</sub> = 0</p>
               
              </div>

              <div className="div_friction">
                <Fractions upper={<div>U<sub>2</sub></div>} lower={<div>U<sub>1</sub></div>} />
                <p> = 1 + </p>
                <Fractions upper={<div>R<sub>2</sub></div>} lower={<div>R<sub>1</sub></div>} />
                
                
              </div>

            </div>

          </>
      );
}

export default Week_7_3;