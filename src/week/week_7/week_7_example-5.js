import React, { useEffect, useState } from "react";
import '../../App.css';
import Aos from "aos";
import 'aos/dist/aos.css';
import Fractions from '../../komponenty/Fractions';
import Example_7_5 from "../../examples/examples_7/Piata/example_7_5";



const Week_7_5 = () => {
  useEffect(() => {
    Aos.init({ duration: 2000});
  }, []);

  const [toggle, setToggle] = useState(false);

  function hide_elm(){
    setToggle(!toggle);
    console.log(toggle);
    if(toggle === true){
    document.getElementById("hide_elm").style.display = "none";
    }
    else{
      document.getElementById("hide_elm").style.display = "block"; 
    }
  }

    return(
        <>
            <h1 className="nadpis"> 
              Operačné zosilňovače - Príklad č.5
            </h1>
           
            <div data-aos="fade" className="flex_left">
              <p>
                Vypočítajte prenos napätia v obvode na obrázku ( Integračný obvod s operačným zosilňovačom
              </p>
             
            </div>
            
            <div data-aos="fade" className="flex_left">
              <h2>Riešenie:</h2>
              {Example_7_5()}
              <p onClick={hide_elm} style={{cursor: "pointer"}}>Zobraziť riešenie</p>
            </div>

            <div data-aos="fade-right" className="flex_left" id="hide_elm" style={{display: "none"}}>
             
              <div className="div_friction">

                <p>K<sub>U</sub> = </p>
                <Fractions upper={<div>U<sub>2</sub></div>} lower={<div>U<sub>1</sub></div>} />
                <p> = - </p>
                <Fractions upper="1 / pC" lower="R" />
                <p> = -</p>
                <Fractions upper={<div>1</div>} lower={<div>pCR</div>} />
              </div>
              
          
              <div className="div_friction">
                <p>u<sub>2(t)</sub> = - </p>
                <Fractions upper={<div>1</div>} lower={<div>CR</div>} />
                <p className="font35"> &int; </p>
                <p>u1(t)dt</p>
              </div>
          
            </div>

          </>
      );
}

export default Week_7_5;