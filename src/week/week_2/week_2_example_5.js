import React, { useEffect, useState } from 'react';
import Fractions from '../../komponenty/Fractions';
import '../../App.css';
import Aos from "aos";
import 'aos/dist/aos.css';
import Example_2_5 from '../../examples/examples_2/Piata/example_2_5';
import Example_2_5_1 from '../../examples/examples_2/Piata/example_2_5_1';
import Example_2_5_2 from '../../examples/examples_2/Piata/example_2_5_2';
import Example_2_5_3 from '../../examples/examples_2/Piata/example_2_5_3';





const Week_2_example_5 = () => {

    useEffect(() => {
        Aos.init({ duration: 2000});
      }, []);

      const [toggle_a, setToggle_a] = useState(false);
      const [toggle_b, setToggle_b] = useState(false);

    function hide_elma(){
        setToggle_a(!toggle_a);
        console.log(toggle_a);
        if(toggle_a === true){
        document.getElementById("hide_elma").style.display = "none";
        }
        else{
          document.getElementById("hide_elma").style.display = "block"; 
        }
      }
    function hide_elmb(){
        setToggle_b(!toggle_b);
        console.log(toggle_b);
        if(toggle_b === true){
        document.getElementById("hide_elmb").style.display = "none";
        }
        else{
          document.getElementById("hide_elmb").style.display = "block"; 
        }
    }

    return(
        <div>
            <h1 className="nadpis"> 
                    Príklad č. 5
            </h1>


            <div data-aos="fade" className="flex_left">

                <p>
                <b>a)</b> Pre Zenerovú diódu na obr. určte V<sub>L</sub>, V<sub>R</sub>, I<sub>z</sub> a P<sub>z</sub>.
                </p>
                <p>
                <b>b)</b> Opakujte časť (a) s RL = 3 kΩ.
                </p>
                {Example_2_5()}
                <p><small>Obr. 1.</small></p>
            </div>

            <div data-aos="fade-left" className="flex_left">

                <p onClick={hide_elma} className="pointer">Zobraziť riešenie a)</p>
                <p onClick={hide_elmb} className="pointer">Zobraziť riešenie b)</p>

            </div>

            <div id='hide_elma' style={{display: 'none'}}>
                <div data-aos="fade-left" className="flex_left">
                    <h2>Riešnie a)</h2>
                        <p>Prekreslíme sieť nasledovne:</p> 
                        {Example_2_5_1()}
                        <p><small>Obr. 2.</small></p>
                        <p>Aplikujeme rovnicu</p>
                        
                        <div className='div_friction'>
                            <p>V = V<sub>L</sub> = </p> 
                            <Fractions upper={<div>R<sub>L</sub>V<sub>i</sub></div>} lower={<div>R + R<sub>L</sub></div>}/>
                        </div>
                        
                        <p>Z čoho dostaneme:</p>
                        
                        <div className='div_friction'>
                            <p>V = </p> 
                            <Fractions upper={<div>R<sub>L</sub>V<sub>i</sub></div>} lower={<div>R + R<sub>L</sub></div>}/>
                            <p> = </p> 
                            <Fractions upper="1.2 kΩ (16V)" lower="1 kΩ+1.2 kΩ"/>
                            <p>= 8.73 V</p>
                        </div>
                </div>

                <div data-aos="fade-right" className="flex_left">
                    <p>Pretože <b>V = 8,73 V</b> je menšie ako <b>VZ = 10 V</b>, dióda je vo vypnutom stave, ako je znázornené na charakteristike na obr. 3. Nahradením ekvivalentu otvoreného obvodu dostaneme rovnakú sieť ako na obr. kde to nájdeme</p>
                    {Example_2_5_2()}
                    <p><small>Obr. 3.</small></p>

                    <p>V<sub>L</sub> = V = <b>8.73 V</b></p>
                    <p>V<sub>R</sub> = V<sub>i</sub> - V<sub>L</sub> = 16 V - 8.73 V = <b> 7.27 V</b></p>
                    <p>I<sub>Z</sub> = <b> 0 A</b></p>
                    <p>P<sub>Z</sub> = V<sub>Z</sub>I<sub>Z</sub> = V<sub>Z</sub> (0 A)= <b> 0 W</b></p>


                </div>
            </div>
            <div id='hide_elmb' style={{display: 'none'}}>
                <div data-aos="fade-left" className="flex_left">

                    <h2>Riešnie b)</h2>

                    <div className='div_friction'>
                            <p>V = </p> 
                            <Fractions upper={<div>R<sub>L</sub>V<sub>i</sub></div>} lower={<div>R + R<sub>L</sub></div>}/>
                            <p> = </p> 
                            <Fractions upper="3 kΩ (16V)" lower="1 kΩ + 3 kΩ"/>
                            <p>= 12 V</p>
                    </div>

                    <p>Pretože V = 12 V je väčšie ako Vz = 10 V, dióda je v stave "zapnuté" a sieť z obr.4. je výsledkom.</p>

                    <p>V<sub>L</sub> = V<sub>Z</sub> = <b>10 V</b></p>
                    <p>V<sub>R</sub> = V<sub>i</sub> - V<sub>L</sub> = 16 V - 10 V = <b> 6 V</b></p>
                    
                    <div className='div_friction'>
                        <p>I<sub>L</sub> = </p>
                        <Fractions upper={<div>V<sub>L</sub></div>} lower={<div>R<sub>L</sub></div>}/>
                        <p> = </p> 
                        <Fractions upper="10 V" lower=" 3 kΩ"/>
                        <p>= 3.33 mA</p>
                    </div>

                    <div className='div_friction'>
                        <p>I<sub>R</sub> = </p>
                        <Fractions upper={<div>V<sub>R</sub></div>} lower={<div>R</div>}/>
                        <p> = </p> 
                        <Fractions upper="6 V" lower=" 1 kΩ"/>
                        <p>= 6 mA</p>
                    </div>

                    <p>I<sub>Z</sub> = I<sub>R</sub> - I<sub>L</sub> = 6 mA - 3.33 mA = <b> 2.7 mA</b></p>
                
                </div>

                <div data-aos="fade-right" className="flex_left">
                    {Example_2_5_3()}
                    <p><smal>Obr. 4.</smal></p>

                    <p>Rozptýlený výkon je</p>
                    <p>P<sub>Z</sub> = V<sub>Z</sub>I<sub>Z</sub> = (10 V)(2.67 mA) = <b>26.7 W</b></p>
                    <p>čo je menej ako špecifikovaný P<sub>zm</sub> = 30 mW.</p>
                </div>
            </div>
        </div>
    );
}

export default Week_2_example_5;