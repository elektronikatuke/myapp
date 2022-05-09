import React, { useEffect } from "react";
import { scroller } from "react-scroll";
import '../../App.css';
import Prva_schema_skrat from "../../examples/examples_1/Prvá/Prva_schema_skrat";
import Prva_schema from "../../examples/examples_1/Prvá/Prva_schema";
import Prva_schema_2_stav from "../../examples/examples_1/Prvá/Prva_schema_2_stav";
import Aos from "aos";
import 'aos/dist/aos.css';
import {ReactComponent as Graf} from '../../images/week_1_img/GRAFY/Grafex1.svg';



const Example_1 = () => {
  useEffect(() => {
    Aos.init({ duration: 2000});
  }, []);

 const scrollToSection = (element) => {
    scroller.scrollTo(element, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
    return(
        <>
            <h1 className="nadpis"> 
              Diódy - Príklad č. 1
            </h1>
           
            <div data-aos="fade" className="flex_left">
              <p>Na príklade z obrázka č1. určite a prekreslite VA charakteristiku<br />
                A to je závislosť: <b> i = f(v), kde U0 = 2V, I0 = 2A, R1 = 2Ω, R2 = 2Ω.</b>
              </p>
            {Prva_schema()}
            </div>
            
            <div className="flex_left">
              <h2>Riešenie:</h2>
              <p>Predpokladajme že je dióda v ideálnom stave. Na riešenie použijeme metódu predpokladaných stavov (MPS) diódy, kde môžu nastať dva stavy:</p>
              <p className="pointer" onClick={() => {scrollToSection("firstlink")}}>I: D = O (diode is opened)</p>
              <p className="pointer" onClick={() => {scrollToSection("secondlink")}}>II: D = C (diode is closed)</p>
              </div>

              <div data-aos="fade-right" className="flex_left" id="firstlink">
              <p id="rlink"><b>Pre stav I. sa dióda D správa ako skrat, takže obvod na obr. 1 je možné prekresliť</b></p>
              <p>Klikni na červenú šípku pre spustenie ukážky upravenia schémy a 2 Kirchhoffovho zákona</p>
            {Prva_schema_skrat()}
          </div>

          <div className="flex_left" data-aos="fade-left">
            <p>Podľa schémy na obrázku môžme pomocou prvého Kirchhoffovho zákona pre prúdy odvodiť:</p>
            <p><b> i = iB + iA</b></p> 
            <p>z čoho si odvodíme: <b> iB= i - iA</b> kde <b>iA = i0 = 2A</b></p>
            <h3>Využijeme druhé pravidlo Kirchhoffovho zákona na určenie si rovnice</h3>
            <a href="#rlink">
            <b>u = i.R1 + iB.R2 + U0 </b>
            </a>
            <p>Po dosadení hodnôt R1, R2, i, and U0 dostaneme <b>u = i.2 + (i - 2).2 + 2</b></p>
            <p>Po úprave dostávame<b> i = (u + 2) / 4</b></p>
          </div>
          
          <div className="flex_left" data-aos="fade-right">
            <p>Daný stav nastane, keď iD = -iB ≥ 0. Preto vzorec napíšeme ako:</p>
            <p><b>iD=-iB=-(i-iA ) ≥ 0</b></p>
            <p>Nerovnosť je splnená ak: <b>i &lt; iA</b></p>
            <p>Po dosadení vzorca za iA = 2A dostaneme: <b>i &lt; 2A</b></p>
            <p>Vo vzťahu dosadíme za i vzorec iD=-iB=-(i-iA ) ≥ 0 a odvodíme nerovnosť pre v:</p>
            <p>i = <sup>(u + 2)</sup>/<sub>4</sub> &lt; 2</p>
            <p>Z čoho <b>u &lt; 6</b></p>
          </div>

          <div className="flex_left" data-aos="fade-left" id="secondlink"> 
          <h2>Dióda v druhom stave</h2>
          <p>Klikni na diodu pre spustenie</p>
          {Prva_schema_2_stav()}
          </div>
          <div className="flex_left" data-aos="fade-right"> 
          <p>V tomto stave diódou nepreteká prúd a obvod je v tomto mieste rozpojený. Potom platí, že i = I0 = 2A pre ľubovoľné u, čo znamená, že i je konštantné. Tento stav nastáva, ak</p>
          <p><b>iD = iB ≥ 0</b></p>
          <p>Z rovníc <b>iB = i - iA</b> a <b>iA = i0 = 2A</b> dostaneme</p>
          <p><b>iD = iB = i - 2 ≥ 0</b> z ktorej <b>i ≥ +2</b></p>
          <p>Za <b>i</b> dosadíme vzťah (zobraziť) a vyjadríme <b>v</b></p>
          <p><b>u≥6</b></p>
          <p>Súradnice čiary <b>i = (u + 2) / 4</b> sú <b>[u = -2, i = 1/2]</b> ak <b>i = 0</b></p>
          <p><b>i = (0 + 2) / 4</b> z čoho <b>u = -2</b></p>
          <p>Ak <b>u = 0 </b>tak potom z výpočtu <b>i = (0 + 2) / 4</b> sa <b>i = 1/2</b></p>
          </div>
          <div className="flex_left" data-aos="fade-left">
            <p>Priesečník čiar resp. bod zlomu <b>i = 2</b> a <b>i = (u + 2) / 4</b> je <b>[i = 2A, u = 6V]</b></p>
            <p>Na obrázku môžme vidieť VA charakteristiku</p>
           <Graf />
          </div>
          
    </>
      );
}

export default Example_1;