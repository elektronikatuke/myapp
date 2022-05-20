import React, { useEffect, useState } from 'react';
import Fractions from '../../komponenty/Fractions';
import '../../App.css';
import Aos from "aos";
import 'aos/dist/aos.css';
import Example_6_4 from '../../examples/examples_6/Stvrta/example_6_4';


const Week_6_example_4 = () => {

    const [hideelement1, setElement1] = useState(false);
    

    useEffect(() => {
        Aos.init({ duration: 2000});
      }, []);

    function hide_element_1(){
        setElement1(!hideelement1);
        if(hideelement1 === true){
          document.getElementById("reviel_1").style.display = "none";
          }
          else{
            document.getElementById("reviel_1").style.display = "block"; 
          }
      }

    return(
        <div>
            <h1 className="nadpis"> 
                    Príklad č. 4
            </h1>


            <div data-aos="fade" className="flex_left">
                <p>MOSFET s kanálom <b>P</b> v zapojení na obrázku má U<sub>T</sub> = 1 V, µ<sub>p</sub>.C<sub>ox</sub> = 10 µA/V<sup>2</sup> a w/L = 50. Pre napájacie napätie U<sub>SS</sub> = 12 V a pracovný bod U<sub>DS</sub> = U<sub>SS</sub>/2 pri I<sub>D</sub> = 200 µA určite R<sub>D</sub>, R<sub>1</sub>, R<sub>2</sub>, a maximálny rozkmit výstupného napätia v lineárnej oblasti.</p>
                {Example_6_4()}
            </div>

            <div className="flex_left" data-aos="fade" >
                <h2>Riešenie:</h2>

                <p onClick={hide_element_1} className="pointer">Riešenie</p>
            
            </div>

            <div id='reviel_1' className="reviel">
                <div data-aos="fade-left" className="flex_left">
                    <h2>Riešnie</h2>

                    <p>Pre <b>ss</b> napätie U<sub>DS</sub> platí <b>U<sub>DS</sub> = U<sub>SS</sub> - R<sub>D</sub> * I<sub>D</sub></b>&emsp;odkiaľ:</p>
                    
                    <div className='div_friction'>
                        <p>R<sub>D</sub> = </p>
                        <Fractions upper={<div>U<sub>DD</sub> - U<sub>DS</sub></div>} lower={<div>I<sub>D</sub></div>} />
                        <p> = </p>
                        <Fractions upper="12 - 6" lower={<div>0.2 * 10<sup>-3</sup></div>}/>
                        <p>= 30 kΩ</p>
                    </div>

                    <p>Napätie U<sub>GS</sub> MOSFETU v saturácii pri I<sub>D</sub> = 200 µA určíme z rovnice</p>
                        
                    <div className='div_friction'>
                        <p>I<sub>D</sub> = </p>
                        <Fractions upper={<div>w * µ<sub>n</sub> * C<sub>ox</sub></div>} lower={<div>2 * L</div>} />
                        <p> * [U<sub>GS</sub> - U<sub>T</sub>]<sup>2</sup>, &emsp; kde &emsp; U<sub>DS</sub> &ge; U<sub>DSsat</sub></p>
                    </div>
                    
                    <p>odkiaľ</p>

                    <div className='div_friction'>
                        <p>U<sub>GS</sub> = U<sub>T</sub> + </p>
                        <p className='font35'>√</p>
                        <Fractions upper={<div>2 * I<sub>D</sub></div>} lower={<div>µ<sub>n</sub> * C<sub>ox</sub> * w / L</div>} />
                        <p> = 1 + 0.9 = 1.9 V</p>
                    </div>

                    <p>Prúd deliča R<sub>1</sub>-R<sub>2</sub> by mal byť v rozmedzí 10.I<sub>G</sub> &lt; I<sub>R</sub> &lt; 0,1.I<sub>D</sub> a zvolíme jej I<sub>R</sub> = 10 µA</p>
                    <p>Odkiaľ</p>

                    <div className='div_friction'>
                        <p>R<sub>1</sub> + R<sub>2</sub> = </p>
                        <Fractions upper={<div>U<sub>DD</sub></div>} lower={<div>I<sub>R</sub></div>} />
                        <p> = </p>
                        <Fractions upper="12" lower={<div>10<sup>-5</sup></div>} />
                        <p> = 1.2 MΩ</p>
                    </div>
                    
                    <div className='div_friction'>
                        <p>R<sub>2</sub> = </p>
                        <Fractions upper={<div>U<sub>GS</sub></div>} lower={<div>I<sub>R</sub></div>} />
                        <p> = </p>
                        <Fractions upper="1,9" lower={<div>10<sup>-5</sup></div>} />
                        <p> = 190 kΩ</p>
                    </div>

                    <p>R<sub>1</sub> = 1,2 MΩ - 190kΩ &asymp; 1MΩ</p>
                
                
                    



                    
                    
                </div>

               
            </div>
        </div>
    );
}

export default Week_6_example_4;