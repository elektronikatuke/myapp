import React, { useEffect } from "react";
import '../../App.css';
import Druha_schema from "../../examples/examples_1/Druhá/Druha_schema";
import Druha_schema_open from "../../examples/examples_1/Druhá/Druha_schema_open";
import Druha_schema_open_modif from "../../examples/examples_1/Druhá/Duha_schema_open_modif";
import Druha_schema_close from "../../examples/examples_1/Druhá/Druha_schema_close";
import {ReactComponent as Grafex3} from '../../images/week_1_img/GRAFY/Graf_3.svg';
import Aos from "aos";
import 'aos/dist/aos.css';




const Example_2 = () => {
  useEffect(() => {
    Aos.init({ duration: 2000});
  }, []);

    return(
        <>
            <h1 className="nadpis"> 
              Diódy - Príklad č. 2
            </h1>
           
            <div data-aos="fade" className="flex_left">
              <p>Pre obvod na obrázku vypočítajte a nakreslite charakteristiku<br />
                <b className="font"> u2 = f/u1/, pokiaľ U2 = 3V, I0 = 1A, R1 = 3Ω, R2 = 1 Ω, R3 = 2 Ω, R4 = 1 Ω, R5 = 2 Ω. </b>
              </p>
            {Druha_schema()}
            </div>
            
            <div className="flex_left">
              <h2>Riešenie:</h2>
              <p>Predpokladajme že je dióda v ideálnom stave. Na riešenie použijeme metódu predpokladaných stavov (MPS) diódy, kde môžu nastať dva stavy:</p>
              <a href="#firstlink"><p>I: D = O (diode is opened)</p></a>
              <a href="#secondlink"><p>II: D = C (diode is closed)</p></a>
              </div>

              <div data-aos="fade-right" className="flex_left" id="firstlink">
              <p id="rlink">Pre stav I. môžeme prekresliť obvod nasledovne, kde prúdový zdroj I0 s paralelným rezistorom R3 je nahradený zdrojom napätia v sérii s rezistorom R3.</p>
              <p>Napätie <b>U1 = I0 * R3</b></p>
              <p>Po substitúcií <b>U1 = 1 * 2 = 2V</b></p>
              {Druha_schema_open()}
          </div>

          <div className="flex_left" data-aos="fade-left">
            <p>Obvod medzi svorkami <b>A</b> a <b>B</b> nahradíme ekvivalentným obvodom, napr. s ideálnym zdrojom napätia, ktorý je v sérii s vnútorným odporom, pomocou <b>Theweninovej vety.</b></p>
            <p>Z obrázka môžeme vidieť že <b>Un = i1R2 + i1R3 - U1</b><small> (1.1)</small></p>
            <p>Z obrázka môžeme napísať túto rovnicu pre pokles napätia</p>
            <p><b>i1 (R1 + R2 + R3)- u1 - U1 = 0</b><small> (1.2)</small></p>
            <p>Z čoho <b> i1 = <sup>(u1 + U1)</sup>/<sub>R1 + R2 + R3</sub> </b> <small> (1.3)</small></p>
            <p>Po aplikovaní <span className="tooltip" data_text=" i1 = (u1 + U1) / (R1 + R2 + R3)"> (1.3)</span> do <span className="tooltip" data_text="Un = i1R2 + i1R3 - U1"> (1.1)</span> dostaneme:</p>
            <p><b>Un = <sup>(u1 + U1)</sup>/<sub>R1 + R2 + R3</sub> * (R2 + R3) - U1</b> <small> (1.4)</small> a po enumerácií: <b>Un = <sup>u1</sup>/<sub>2</sub> - 1</b> <small>(1.5)</small></p>
            <p>Vnútorný odpor Rn vyhodnotíme výmenou zdrojov napätia za skrat v nahradenom obvode.</p>
            <p><b>Rn = <sup>R1 * (R2 + R3)</sup>/<sub>R1 + R2 + R3</sub> + R4</b></p>
            <p>Po enumerácií dostaneme <b>Rn = 2.5Ω</b></p>
          </div>
          <div className="flex_left" data-aos="fade-right">
            {Druha_schema_open_modif()}
          </div>

          <div className="flex_left" data-aos="fade-left">
            <p>Použitím druhého Kirchhoffovho zákoná na upravenú schému vieme povedať že:</p>
            <p><b>u2 = i2*R5 + U2</b><small> (1.6)</small> a <b>i2R5 + U2 - Un + i2*Rn = 0</b><small> (1.7)</small></p> 
            <p>Modifikáciou vzťahu <span className="tooltip" data_text="i2R5 + U2 - Un + i2*Rn = 0"> (1.7)</span> dostaneme <b>i2 = <sup>Un - U2</sup>/ <sub>Rn + R5</sub></b><small> (1.8)</small></p>
            <p>Aplikujeme vzťah <span className="tooltip" data_text="i2 = (Un - U2) / (Rn + R5)"> (1.8)</span> do vzťahu <span className="tooltip" data_text="u2 = i2*R5 + U2"> (1.6)</span> a dostaneme:</p>
            <p><b>u2 = <sup>U2 - U2</sup>/ <sub>Rn + R5</sub> * R5 + U2</b> <small> (1.9)</small></p>
            <p>Po výpočte dostaneme <b>u2 = ( 2(u1) + 11 ) / 9</b></p>
          </div>
          
          <div className="flex_left" data-aos="fade-right" id="secondlink"> 
          <h2>Dióda v druhom stave</h2>
          <p>Ak je dióda zatvorená, čo zodpovedá sate II, môžeme obvod prekresliť nasledovne:</p>
          {Druha_schema_close()}
          <p>Podľa obrázka vieme určiť <b>u2 = i(R2 + R3) - U1</b><small> (1.10)</small></p>
          <p>kde <b>i = i1</b>. Vzťah <span className="tooltip" data_text="i1 = (u1 + U1) / (R1 + R2 + R3)"> (1.3)</span> aplikujeme na <span className="tooltip" data_text="u2 = i(R2 + R3) - U1"> (1.10)</span> a po dosadení hodnôt R1, R2 a R3 dostaneme:</p>
          <p><b>u2 = <sup>U1</sup> / <sub>2</sub> - 1</b><small> (1.11)</small></p>
          </div>

          <div className="flex_left" data-aos="fade-left"> 
          <p>Stav <b>I. D = C</b> nastane, keď: <b>i2 ≥ 0</b> <small> (1.12)</small></p>
          <p>Zo vzťahu <span className="tooltip" data_text="u2 = (U1 - 2) - 1"> (1.11)</span> vieme to:</p>
          <p><b>i2 = (u2-U2) / R5 ≥ 0</b> <small>(1.13)</small>. Nerovnosť <span className="tooltip" data_text="i2 ≥ 0">(1.12)</span> je splnená ak <b>u2 ≥ 3U</b></p>
         </div>

          <div className="flex_left" data-aos="fade-left">
            <p>Môžeme vidieť závislosť u2 = f/u1/</p>
            <Grafex3 />
          </div>
         
    </>
      );
}

export default Example_2;