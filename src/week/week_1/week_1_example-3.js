import React, { useEffect } from "react";
import '../../App.css';
import Aos from "aos";
import 'aos/dist/aos.css';
import Piata_schema from "../../examples/examples_1/Piata/Piata_schema";
import Piata_schema_c_c from "../../examples/examples_1/Piata/Piata_schema_c_c";
import Piata_schema_o_c from "../../examples/examples_1/Piata/Piata_schema_o_c";
import Piata_schema_o_o from "../../examples/examples_1/Piata/Piata_schema_o_o";
import Piata_schema_c_o from "../../examples/examples_1/Piata/Piata_schema_c_o";
import {ReactComponent as Grafex5} from '../../images/week_1_img/GRAFY/Graf_5.svg';



const Example_3 = () => {
  useEffect(() => {
    Aos.init({ duration: 2000});
  }, []);

    return(
        <>
            <h1 className="nadpis"> 
              Diódy - Príklad č. 3
            </h1>
           
            <div data-aos="fade" className="flex_left">
              <p>Na príklade na obrázku určte a nakreslite VA charakteristiky, t.j. závislosť i = f(u).</p>
              {Piata_schema()}
            </div>
            
            <div className="flex_left">
              <h2>Riešenie:</h2>
              <p><b>Riešenie:</b> použijeme metódu MPS a budeme mať 4 stavy.</p>
            <a href="#firstlink"><p>stav I. D1 = zatvorená, D2 = zatvorená</p></a>
            <a href="#secondlink"><p>stav II. D1 = otvorená, D2 = zatvorená</p></a>
            <a href="#thirdlink"><p>stav III. D1 = Otvorená, D2 = Otvorená</p></a>
            <a href="#fourthlink"><p>stav IV. D1 = zatvorená, D2 = otvorená</p></a>
            </div>

            <div data-aos="fade-right" className="flex_left" id="firstlink">
              <h2>Stav 1</h2>
              <p>môžeme prekresliť obvod nasledovne</p>
                {Piata_schema_c_c()}
              <p>Podľa Ohmovho zákona vieme, že: <b>i = <sup>u</sup> / <sub>R</sub></b></p>
            </div>

            <div className="flex_left" data-aos="fade-left" id="secondlink">
                <h2>Stav 2</h2>
                <p>zodpovedá obvodu na obrázku.</p>
                {Piata_schema_o_c()}
                <p>Pomocou druhého Kirchhoffovho zákona vieme</p>
                <p><b>i<sub>1</sub>R + iR = u</b><small>(1.1)</small></p> 
                <p><b>i<sub>1</sub>R = i<sub>2</sub>R-U<sub>0</sub></b><small>(1.2)</small></p>
                <p>Pre prúdy môžeme napísať: <b>i = i<sub>1</sub> + i<sub>2</sub></b> <small>(1.3)</small> z ktorých <b>i<sub>2</sub> = i - i<sub>1</sub></b><small> (1.4)</small></p>
                <p>Aplikujeme rovnicu <span className="tooltip" data_text="i2 = i - i1"> (1.4)</span> do rovnice <span className="tooltip" data_text="i1R = i2R - U0">(1.2) </span></p>
                <p><b>i<sub>1</sub>R = iR - i<sub>1</sub>R - U<sub>0</sub></b></p> 
                <p>z ktorých <b> i<sub>1</sub> = (2<sub>u</sub> + U<sub>0</sub>) / 3R</b> <small>(1.5)</small></p>
                <p>Aplikujeme rovnicu <span className="tooltip" data_text="i1 = (2u + U0) / 3R">(1.5)</span> do rovnice <span className="tooltip" data_text="i1R + iR = u">(1.1)</span> a po úprave dostaneme:</p>
                <p><b>i = (2<sub>u</sub> + U<sub>0</sub>) / 3R</b> <small>(1.6)</small></p>
                <p><b><sub></sub></b><small></small></p>
            </div>

            <div className="flex_left" data-aos="fade-right">
                <p>Aby sa dióda D1 otvorila, musí byť splnená nasledujúca nerovnosť:</p>
                <p><b>i2≥0</b> <small>(1.7)</small></p>
                <p>Pomocou rovníc <span className="tooltip" data_text="i2 = i - i1"> (1.4)</span>, <span className="tooltip" data_text="i1 = (2u + U0) / 3R">(1.5)</span> a <span className="tooltip" data_text="i = (2U + U0) / 3R">(1.6)</span> dostaneme</p>
                <p><b>i<sub>2</sub> = (u + 2U<sub>0</sub>) / 3R</b> <small>(1.8)</small></p>
                <p>Aby nerovnosť <span className="tooltip" data_text="i2≥0"> (1.7)</span> bola pravdivá, u + 2U<sub>0</sub> ≥ 0, z čoho vieme, že: <b>u ≥ -2U<sub>0</sub></b><small>(1.9)</small></p>
                <p>Aby bola dióda D2 zatvorená, napätie u<sub>BA</sub> musí byť: <b>u<sub>BA</sub> &lt; 0</b> <small>(1.10)</small></p>
            </div>

            <div className="flex_left" data-aos="fade-left">
                <p>Pomocou druhého Kirchhoffovho zákona môžeme napísať rovnicu pre aktuálnu schému</p>
                <p><b>U<sub>0</sub>+ u <sub>BA</sub> - iR=0</b> z ktorého <b>u<sub>BA</sub> = (2(u - U<sub>0</sub>) / 3)</b> <small>(1.11)</small></p>
                <p> Nerovnosť <b>u<sub>BA</sub> &lt; 0</b> bude splnená, ak <b>u - U<sub>0</sub> &lt; 0</b>, teda keď: <b> u &lt; U<sub>0</sub></b> <small>(1.12)</small></p>
                <p>Stav II. nastane, ak sú splnené nerovnosti <span className="tooltip" data_text="u ≥ -2U0">(1.9)</span> a <span className="tooltip" data_text="u &lt; U0">(1.12)</span>, teda keď:</p>
                <p><b>-2U<sub>0</sub> ≤ u &lt; U0</b></p>
                <p>Stav I. nastáva, keď <b>u &lt; 2U<sub>0</sub></b></p>
            </div>
          
            <div className="flex_left" data-aos="fade-right" id="thirdlink"> 
            
                <h2>Stav 3</h2>
                {Piata_schema_o_o()}
                <p>Môžeme napísať nasledujúce tri rovnice</p>
                
                <p><b>2<sub>i</sub>R + i<sub>2</sub>R + i<sub>3</sub>R = u</b><small>(1.13)</small></p>
                    <p><b>iR + 2<sub>i2</sub>R = - U<sub>0</sub></b><small>(1.14)</small></p>
                    <p><b>iR + i<sub>3</sub>R = U<sub>0</sub></b><small>(1.15)</small></p>
                
                <p>Z rovnice <span className="tooltip" data_text="iR+i3R=U0">(1.15)</span> to vieme že</p>
                <p><b>i<sub>3</sub> = (U<sub>0</sub> - iR) / R</b> <small>(1.16)</small></p>
                
                <p>Pomocou rovnice <span className="tooltip" data_text="iR + 2i2R = -U0">(1.14)</span> môžeme vyjadriť prúd i<sub>2</sub>:</p>
                <p><b>i<sub>2</sub> = (U<sub>0</sub> - iR) / 2R</b> <small>(1.17)</small></p>
                
                <p>Rovnice <span className="tooltip" data_text="i3 = (U0- iR) / R">(1.16)</span> a <span className="tooltip" data_text="i2 = (-U0 -iR) / 2R">(1.17)</span> aplikujeme do rovnice <span className="tooltip" data_text="2iR + i2R + i3R = u">(1.13)</span> a po úprave dostaneme:</p>
                <p><b>i<sub>1</sub> = (2u - U<sub>0</sub>) / R</b><small>(1.18)</small></p>
            
            </div>  
        
            <div className="flex_left" data-aos="fade-left"> 
            <p>Aby sa dióda D2 otvorila, u musí byť u≥U0. Aby sa dióda D1 otvorila, i musí byť iD1≤0. Podľa obrázka vieme</p>
            <p><b>i<sub>D1</sub> = i<sub>2</sub> - i<sub>3</sub></b> <small>(1.19)</small></p>
            <p>Po aplikovaní rovníc <span className="tooltip" data_text="i3 = (U0- iR) / R">(1.16)</span>, <span className="tooltip" data_text="i2 = (-U0 -iR) / 2R">(1.17)</span> a <span className="tooltip" data_text="i1 = (2u - U0) / R">(1.18)</span> do rovnice <span className="tooltip" data_text="iD1 = i2 - i3">(1.19)</span> dostaneme</p>
            <p><b>i<sub>D1</sub> = (u - 2U<sub>0</sub>) / R</b><small>(1.20)</small></p>
            <p>Aby i<sub>D1≤0</sub> bola splnená nasledujúca nerovnosť: <b>u ≤ 2U<sub>0</sub></b> <small>(1.21)</small></p>
            <p>Stav III. dôjde v intervale: <b>U<sub>0</sub> ≤ u ≤ 2U<sub>0</sub></b></p>
            </div>

          <div className="flex_left" data-aos="fade-right" id="fourthlink">
            <h2>Stav 4</h2>
            {Piata_schema_c_o()}
            <p>Prúd <b>i</b> určíme pomocou Ohmovho zákona <b>i = 3u / 2R</b></p>
            <p>Aby sa dióda D1 zatvorila, <b>u</b> musí byť <b>u&gt;2U<sub>0</sub></b>.</p>
            <p>Aby sa dióda D2 otvorila, <b>u</b> musí byť <b>u&gt;U0</b>. </p>
            <p>Preto stav IV. môže nastať pre: <b>u &gt; 2U</b></p>
          </div>

          <div className="flex_left" data-aos="fade-left">
            <p>VA characteristic</p>
            <Grafex5 />
          </div>
          
    </>
      );
}

export default Example_3;