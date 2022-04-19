import React, { useEffect, useState } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import Stvrta_schema from "../../examples/examples_1/Štvrtá/Stvrta_schema";
import Stvrta_schema_open from "../../examples/examples_1/Štvrtá/Stvrta_schema_open";
import Stvrta_schema_close from "../../examples/examples_1/Štvrtá/Stvrta_schema_close";
import {ReactComponent as Grafex2} from '../../images/week_1_img/GRAFY/Graf_ex_2.svg';
import '../../App.css';


const Example_4 = () => {
  useEffect(() => {
    Aos.init({ duration: 2000});
  }, []);

 
  const [toggle, setToggle] = useState(false);

  const [hideelement1, setElement1] = useState(false);
  const [hideelement2, setElement2] = useState(false);

  function hide_element_1(){
    setElement1(!hideelement1);
    if(hideelement1 === true){ 
      document.getElementById("reviel_1").style.display = "none";
      }
      else{
        document.getElementById("reviel_1").style.display = "block"; 
      }
  }

  function hide_element_2(){
    setElement2(!hideelement2);
    if(hideelement2 === true){
      document.getElementById("reviel_2").style.display = "none";
      }
      else{
        document.getElementById("reviel_2").style.display = "block"; 
      }
  }

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
              Diódy - Príklad č. 4
            </h1>
           
            <div data-aos="fade" className="flex_left">
              <p>Na príklade z obrázka určite a prekreslite VA charakteristiku<br />
                A to je závislosť: <b className="font">i = f(u) kde U1 = 3V, U2 = 2V, I1 = 2A, R1 = 1Ω, R2 = 6Ω. </b>
              </p>
            {Stvrta_schema()}
            </div>
            
      

            <div className="flex_left">
              <h2>Riešenie:</h2>
              <p>Predpokladajme že je dióda v ideálnom stave. Na riešenie použijeme metódu predpokladaných stavov (MPS) diódy, kde môžu nastať dva stavy:</p>
              <p>Stlačením na stav diódy sa ti zobrazí vypracovaný príklad</p>
              <p onClick={hide_element_1} className="pointer">I : D = O (diode is opened)</p>
              <p className="pointer" onClick={hide_element_2}>II : D = C (diode is closed)</p>
            </div>
      
      <div className="reviel" id="reviel_1">
              <div data-aos="fade-right" className="flex_left" id="firstlink">
              <p id="rlink"><b>Pre stav I. sa dióda D správa ako skrat, takže obvod na obr. 1 je možné prekresliť</b></p>
                {Stvrta_schema_open()}
          </div>

          <div className="flex_left" data-aos="fade-left">
            <p>Pre I stav(dióda je otvorená) môžme pomocov druhého Kirchhoffovho zákona určiť vzorec</p>
            <p><b>u= -U1 + i1R1 + U2 </b><small> (1.1)</small></p> 
            <p>Pre prúdy: <b> i = i1 + i2</b><small> (1.2) </small> z ktorých <b> i1 = i - i2 </b><small> (1.3) </small> kde <b> i2 = I1 = 2A </b><small> (1.4) </small></p>
            <p>Ak aplikujeme rovnicu <span data_text="i1 = i - i2" className="tooltip"> (1.3) </span> do rovnice <span data_text="u= -U1 + i1R1 + U2" className="tooltip"> (1.1) </span> tak potom dostaneme vzorec</p>
            <p><b>u = -U1 + (i - i2)R1 + U2</b></p>
          </div>
          
          <div className="flex_left" data-aos="fade-right">
            <p>Po úprave a dosadení hodnôt dostaneme</p>
            <p><b>i = u + 3 </b><small onClick={hide_elm} className="pointer">(1.4)</small></p>
            <div id="hide_elm" className="hide_elm">
              <p>u = -3 + (i - 2)*1 + 2</p> 
              <p>u = -3 + i - 2 + 2 </p>
              <p>u = -3 + i /-i </p>
              <p>u - i = - 3 / - u </p>
              <p>-i = -3 - u /* (+1)</p>
              <p>i = u + 3</p>
            </div>
            <p>Dióda je otvorená, ak je splnená nasledujúca nerovnosť: <b>i1 &lt; 0</b><small> (1.5)</small></p>
            <p>Predpokladajme, že nerovnosť <span className="tooltip" data_text="i1 &lt; 0">(1.5)</span> platí. Rovnicu <span className="tooltip" data_text="i = u + 3"> (1.4)</span> aplikujeme na rovnicu <span className="tooltip" data_text="i = i1 + i2"> (1.2)</span>, kde i2 = 2A</p>
            <p><b>i1 = u + 3 - 2 &lt; 0</b> <small>(1.6)</small></p>
            <p>čo znamená, že rovnica <span className="tooltip" data_text="i1 = u + 3 - 2 &lt; 0"> (1.6) </span> je splnená, ak: <b> u &gt; -1</b></p>
          </div>

      </div>

      <div className="reviel" id="reviel_2">
          <div className="flex_left" data-aos="fade-left" id="secondlink"> 
          <h2>Dióda v druhom stave</h2>
          {Stvrta_schema_close()}
          </div>

          <div className="flex_left" data-aos="fade-right"> 
          <p>V tomto stave diódou nepreteká prúd a obvod je v tomto mieste rozpojený.</p>
          <p><b>i = I1 = 2A = konštantné</b></p>
          <p>Dióda je uzavretá ak <b>i1 ≤ 0 </b><small> (1.7)</small></p>
          
          </div>
          <div className="flex_left" data-aos="fade-left">
            <p>Nerovnosť <b>i1 ≤ 0 </b><small>(1.7)</small> je splnená, ak <b>i ≤ 2</b>. Môžeme vidieť graf závislosti <b>i = f(u)</b> na obrázku</p>
            <Grafex2 />
          </div>
    </div>
          
    </>
      );
}

export default Example_4;