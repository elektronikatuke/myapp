import React, { useEffect, useState } from 'react';
import Fractions from '../../komponenty/Fractions';
import '../../App.css';
import Aos from "aos";
import 'aos/dist/aos.css';
import Example_6_5_1 from '../../examples/examples_6/Piata/example_6_5_1';
import Example_6_5_2 from '../../examples/examples_6/Piata/example_6_5_2';
import Example_6_5_3 from '../../examples/examples_6/Piata/example_6_5_3';


const Week_6_example_5 = () => {

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
                    Príklad č. 5
            </h1>


            <div data-aos="fade" className="flex_left">
                
                <p>Navrhnite CS JFET zosilňovač s napäťovým zosilnením A<sub>v</sub> = -4, R<sub>in</sub> = 100 kΩ, R<sub>L</sub> = 20 kΩ, I<sub>DSS</sub> = 6,67 mA, U<sub>p</sub> = -3,33 V a U<sub>DD</sub> = 20 V. Keďže nevieme, či budeme potrebovať R<sub>2</sub>, začnime s obrázkom 1.1. a bezrozmernými krivkami na obrázku 1.2.</p>     
                {Example_6_5_1()}
                <p><small>Obr. 1.1</small></p>
                {Example_6_5_2()}
                <p><small>Orb. 1.2</small></p>
            </div>

            <div className="flex_left" data-aos="fade" >
                <h2>Riešenie:</h2>

                <p onClick={hide_element_1} className="pointer">Riešenie</p>
            
            </div>

            <div id='reviel_1' className="reviel">
                <div data-aos="fade-left" className="flex_left">
                    <h2>Riešnie</h2>

                    <p><b>Krok 1.&emsp;</b>Bod Q je vybraný z obrázku 1.2 nasledovne:</p>.
                    
                    <div className='div_friction'>
                        <p>I<sub>DQ</sub> = </p>
                        <Fractions upper={<div>I<sub>DSS</sub></div>} lower={<div>2</div>} />
                        <p> = 3.33 mA</p>
                    </div>

                    <p>U<sub>GSQ</sub> = 0.3V<sub>p</sub> = -1 V</p>

                    <div className='div_friction'>
                        <p>U<sub>DSQ</sub> = </p>
                        <Fractions upper={<div>V<sub>DD</sub></div>} lower={<div>2</div>} />
                        <p> = 10 V</p>
                    </div>

                    <p>Potom:</p>
                    <div className='div_friction'>
                        <p>g<sub>m</sub> = 1.42</p>
                        <Fractions upper={<div>I<sub>DSS</sub></div>} lower={<div>U<sub>p</sub></div>} />
                        <p> = 2.86 * 10<sup>-3</sup>S</p>

                        <p>&emsp; a &emsp;</p>
                        <Fractions upper={<div>1</div>} lower={<div>g<sub>m</sub></div>} />
                        <p>= 350Ω</p>

                    </div>

                        
                </div>

                <div data-aos="fade-right" className="flex_left">
        
                    <p><b>Krok 2.&emsp;</b>Od kroku 2 v postupe návrhu máme:</p>.
                    
                    <div className='div_friction'>
                        <p>R<sub>D</sub> + R<sub>Sdc</sub> = </p>
                        <Fractions upper={<div>20 V - 10 V</div>} lower={<div>3.33 mA</div>} />
                        <p> = 3Ω = K<sub>1</sub></p>
                    </div>

                    <p><b>Krok 3.&emsp;</b>Pomocou rovnice zosilnenia striedavého prúdu získame:</p>.
                    
                    <div className='div_friction'>
                        <p>A<sub>v</sub> = </p>
                        <Fractions upper={<div>-(20 kΩ || R<sub>D</sub>)</div>} lower={<div>((3 kΩ - R<sub>D</sub>) + 350 Ω)</div>} />
                        <p> = -4</p>
                    </div>

                    <p>R<sub>D</sub><sup>2</sup> + (21.65 kΩ)R<sub>D</sub> - 67 MΩ<sup>2</sup> = 0</p>

                    <p>Z kvadratickej hodnoty Rp vyberieme kladný koreň</p>
                    <p>R<sub>D</sub> = 2.747 kΩ</p>
                        
                </div>

                <div data-aos="fade-left" className="flex_left">
                    <p><b>Krok 4.&emsp;</b>Toto množstvo je menšie ako K<sub>1</sub>, takže prejdeme na krok 4.</p>
                        <div className='div_friction'>
                            <p> R<sub>S</sub> nájdeme pomocou rovnice&emsp;</p>
                            <Fractions upper={<div> I<sub>DQ</sub> </div>} lower={<div>I<sub>DSS</sub></div>} /> =
                            <p className='font35'>(</p>
                            <p>1 - </p>
                            <Fractions upper={<div>U<sub>GSQ</sub></div>} lower={<div>U<sub>p</sub></div>} />
                            <p className='font35'>)</p>
                            <p><sup>2</sup></p>
                        </div>
                    
                    <p>R<sub>S</sub> = 3 kΩ - R<sub>D</sub> = 253Ω</p>

                    <p><b>Krok 5.&emsp;</b>Tento krok teraz prináša výsledky</p>
                        <p>U<sub>GG</sub> = -1 + 253(3.33 * 10<sup>-3</sup>) = -0.15V</p>
                    <p>Pretože toto záporné napätie nemožno získať rozdelením zdrojového napätia pomocou rezistorov, prejdeme na krok 7.</p>
                </div>


                <div data-aos="fade-right" className="flex_left">
                    <p><b>Krok 7.&emsp;</b>Nech</p>
                    <p>R<sub>2</sub>&rarr;∞</p>   
                    <p>Potom</p>
                    <p>U<sub>GG</sub> = 0 = U<sub>GSQ</sub> + I<sub>DQ</sub>R<sub>Sdc</sub></p>
                    <p>&emsp;= -1 + (3.33 * 10<sup>-3</sup>)R<sub>Sdc</sub></p>
                    <p>Získame riešenie pre R<sub>Sdc</sub></p>
                    <p>R<sub>Sdc</sub> = 3000Ω</p>
                    
                </div>


                <div data-aos="fade-left" className="flex_left">
                    <p><b>Krok 8.&emsp;</b>Tento krok poskytuje</p>
                    <p>R<sub>D</sub> = 3kΩ - R<sub>Sdc</sub> = 2.7 kΩ</p>   
                    <p>R<sub>Sac</sub> je určený z kroku 9.</p>
                    
                    <p><b>Krok 9.</b></p>
                        <div className='div_friction'>
                            <p> R<sub>Sac</sub> = - </p>
                            <Fractions upper={<div>R<sub>L</sub> || R<sub>D</sub></div>} lower={<div>A<sub>u</sub></div>} /> -
                            <Fractions upper="1" lower={<div>g<sub>m</sub></div>} /> = 
                            <Fractions upper="- (20 kΩ || 2.7 kΩ)" lower="-4" />
                            <p> - 350Ω = 245 Ω</p>
                        </div>

                    <p>Konečný obvod je znázornený na obr.1.3, kde sú hodnoty komponentov</p>
                    <p>R<sub>D</sub> = 2.7 kΩ</p>
                    <p>R<sub>S1</sub> R<sub>Sac</sub> = 245 Ω</p>
                    <p>R<sub>S2</sub> = R<sub>Sdc</sub> - R<sub>Sac</sub> = 300Ω - 245Ω = 55 Ω</p>
                    <p>R<sub>G</sub> = R<sub>in</sub> = R<sub>1</sub> = 100 kΩ</p>

                    {Example_6_5_3()}
                    <p><small>Obr. 1.3</small></p>
                    
                </div>


                

            </div>
        </div>
    );
}

export default Week_6_example_5;