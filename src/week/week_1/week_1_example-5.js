import React, { useEffect, useState } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import '../../App.css';
import siesta_schema from "../../examples/examples_1/Tretia/siesta_schema";
import siesta_schema_2 from "../../examples/examples_1/Tretia/siesta_schema_2";
import siesta_schema_3 from "../../examples/examples_1/Tretia/siesta_schema_3";
import siesta_schema_4 from "../../examples/examples_1/Tretia/siesta_schema_4";
import siesta_schema_5 from "../../examples/examples_1/Tretia/siesta_schema_5";
import {ReactComponent as Grafex6} from '../../images/week_1_img/GRAFY/Grafex_6.svg';

const Example_5 = () => {
  useEffect(() => {
    Aos.init({ duration: 2000});
  }, []);

 
  const [toggle, setToggle] = useState(false);

  const [hideelement1, setElement1] = useState(false);
  const [hideelement2, setElement2] = useState(false);
  const [hideelement3, setElement3] = useState(false);
  const [hideelement4, setElement4] = useState(false);

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
  
  function hide_element_3(){
    setElement3(!hideelement3);
    if(hideelement3 === true){
      document.getElementById("reviel_3").style.display = "none";
      }
      else{
        document.getElementById("reviel_3").style.display = "block"; 
      }
  }

  function hide_element_4(){
    setElement4(!hideelement4);
    if(hideelement4 === true){
      document.getElementById("reviel_4").style.display = "none";
      }
      else{
        document.getElementById("reviel_4").style.display = "block"; 
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
              Di??dy - Pr??klad ??. 5
            </h1>
           
        <div data-aos="fade" className="flex_left">
            <p>Na pr??klade z obr??zka nakreslite i = f(u)<br /></p>
            {siesta_schema()}
        </div>
            
        <div className="flex_left" data-aos="fade-left">
            <p>Zdroj pr??du vymen??me za zdroj nap??tia a obvod prekresl??me n??sledovne</p>
            {siesta_schema_2()}
        </div>

            <div className="flex_left">
              <h2>Rie??enie:</h2>
              <p>Pou??ijeme met??du MPS. M????u nasta?? nasleduj??ce stavy:</p>
              <p>Stla??en??m na stav di??dy sa ti zobraz?? vypracovan?? pr??klad</p>

              <p onClick={hide_element_1} className="pointer">stav I. D1 = zatvoren??, D2 = zatvoren??</p>
              
              <p className="pointer" onClick={hide_element_2}>stav II. D1 = otvoren??, D2 = zatvoren??</p>
              
              <p onClick={hide_element_3} className="pointer">stav III. D1 = Otvoren??, D2 = Otvoren??</p>
              
              <p className="pointer" onClick={hide_element_4}>stav IV. D1 = zatvoren??, D2 = otvoren??</p>
            
            </div>
      
     

    <div className="reviel" id="reviel_1">
            
        <div className="flex_left" data-aos="fade-right">
            <h2>Pre 1. stav</h2>
            <p><b>D1 = zatvoren??, D2 = zatvoren?? </b></p> 
            <p>1. Bez oh??adu na <b>v</b>, je pr??d v obvode ur??en?? zdrojom pr??du, t.j. <b>i = 3 mA.</b></p>
            <p>2. Aby sa D1 uzavrela: <b>i . 10<sup>3</sup>+1 &gt; 0</b> a po dosaden?? za <b>i</b> dostaneme: <b>3 + 1 &gt; 0</b></p>
            <p>3. Aby sa D2 uzavrel: <b>u<sub>x</sub> &gt; 0</b> <small>(1.1)</small></p>
        </div>

        <div className="flex_left" data-aos="fade-left">
            <p>Pomocou druh??ho Kirchhoffovho z??kona vieme, ??e pre obvod ni????ie plat??:</p>
            {siesta_schema_3()}
            <p>Plat?? <b>3 + 1 + u<sub>x</sub> = u</b> z ktor??ho <b>u<sub>x</sub> = u - 4</b> <small>(1.2)</small></p>
            <p>Po aplikovan?? <span data_text="ux = u - 4" className="tooltip"> (1.2)</span> do<span data_text="ux > 0" className="tooltip"> (1.1)</span></p>
            <p><b>u - 4 &gt; 0</b>, po ??prave dostaneme <b>u &gt; 4V</b></p>
            <h3><b>Stav I. nast??va ak u &gt; 4V</b></h3>
          
        </div>
    </div>
    <div className="reviel" id="reviel_2">
          <div className="flex_left" data-aos="fade-right">
                <h2>Stav 2</h2>
                <p>Stav 2. <b>D1 = Otvoren??, D2 = Zatvoren??</b> sa zobraz?? na obr??zku ni????ie</p>
                {siesta_schema_4()}
                <p>Pr??d pretekaj??ci obvodom je <b>i = 3 mA</b>. Tento stav nast??va pre:<b> u &gt; 4V </b></p>
          </div>
    </div>

    <div className="reviel" id="reviel_3">
          <div className="flex_left" data-aos="fade-left"> 
            <h2>Stav 3.</h2>
            <p><b>D1 = Otvoren??, D2 = Otvoren??</b>. Obe di??dy sa spr??vaj?? ako skrat.</p>
            <p>Pre aktu??lne <b>i</b> plat??: <b>i = - &infin;</b></p>
            <p>Stav 3. nastane, ak: <b>u &lt; 0</b></p>
          </div>
          
        </div>


        <div className="reviel" id="reviel_4">
            <div className="flex_left" data-aos="fade-right"> 
            
            <h2>Stav 4</h2>
            
            <p>Stav 4. D1 = Zatvoren??, D2 = Otvoren??</p>
            {siesta_schema_5()}
            <p>Pomocou druh??ho Kirchhoffovho z??kona vieme: <b>i * 1 * 10<sup>3</sup> + 1 = u</b></p>
            <p>Ktor?? si vieme upravi??: <b>i = /u - 1/ * 10<sup>-3</sup> </b><small>(1.3)</small></p>
            <p><b>D2</b> bude otvoren?? ak <b>u &lt; 4V </b><small>(1.4)</small></p>
            <p>Aby sa <b>D1</b> uzavrela, mus?? by?? splnen?? nasleduj??ca nerovnos??:</p>
            <p><b>i * 10<sup>3</sup> + 1 &gt; 0</b></p>
            <p>Po aplikovan??  <span data_text="i = /u - 1/ * 10^-3" className="tooltip"> (1.3)</span> do  <span data_text="u < 4V" className="tooltip"> (1.4)</span>: <b>u - 1 + 1 &gt; 0</b> z ktor??ho <b>u &gt; 0 </b><small>(1.5)</small></p>
            <p>Aby nastal <b>Stav 4</b> musia by?? splnen?? nerovnosti <span data_text="i = /u - 1/ * 10^-3" className="tooltip"> (1.3)</span> a <span data_text="u > 0" className="tooltip"> (1.5)</span>: <b>u &lt; 0 &lt; 4V</b></p>
            </div>   
        </div>

        <div className="flex_left" data-aos="fade-right"> 
            <p>Z??vislos?? <b>i = f /u/</b> je zobrazen?? ni????ie</p>
            <Grafex6 />
       </div>   
        
        
    </>
      );
}

export default Example_5;