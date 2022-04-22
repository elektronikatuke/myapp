import React, { useEffect } from 'react';
import Fractions from '../../komponenty/Fractions';
import '../../App.css';
import Aos from "aos";
import 'aos/dist/aos.css';
import Example_4_3 from '../../examples/examples_4/Tretia/example_4_3';




const Week_4_example_3 = () => {

    useEffect(() => {
        Aos.init({ duration: 2000});
      }, []);

    return(
        <div>
        <h1 className="nadpis"> 
                Príklad č. 3
        </h1>


        <div data-aos="fade" className="flex_left">
            <p>Analyzujte zobrazený obvod pre V<sub>C</sub>, Z<sub>in</sub>, A<sub>v</sub> a Z<sub>o</sub>.</p>
           
            {Example_4_3()}
            
            
        </div>

        <div data-aos="fade-left" className="flex_left">
            <h2>Riešnie</h2>
            <p>Toto je príklad predpojatosti kolektora</p>
            <div className='div_friction'>
                <p><b>V<sub>C</sub></b> = </p> 
                <Fractions upper={<div>R<sub>B</sub>V<sub>CC</sub> + βR<sub>C</sub>V<sub>BE</sub></div>} lower={<div>R<sub>B</sub> + βR<sub>C</sub></div>} />
                <p> = </p>
                <Fractions upper="(100K * 9)+(60 * 2.2K * 0.6)" lower="100K + (60 * 2.2K)"/>
                <p> = 4.2V</p>
            </div>

            <div className='div_friction'>
                <p><b>I<sub>B</sub></b> = </p> 
                <Fractions upper={<div>V<sub>C</sub> - B<sub>BE</sub></div>} lower={<div>R<sub>B</sub></div>} />
                <p> = </p>
                <Fractions upper="4.2 - 0.6" lower="100K"/>
                <p> = 0.036 mA</p>   
            </div>
 
            <p>r<sub>c out</sub> = 2.2K || 1K = 0.688K</p>
                
            <div className='div_friction'>
                <p><b>Z<sub>in</sub></b> = </p>  
                <Fractions upper={<div>0.03R<sub>B</sub></div>} lower={<div>I<sub>B</sub>( βr<sub>c out</sub> ) + R<sub>B</sub></div>} />
                <p> = </p>
                <Fractions upper="0.03 * 100K" lower="0.036mA(60 * 0.688K + 100K)" />
                <p> = 590 Ω</p>
            </div>

        </div>

        <div data-aos="fade-right" className="flex_left">
        
            <div className='div_friction'>
                <p><b>v<sub>in</sub></b> = v<sub>S</sub></p>
                <Fractions upper={<div>Z<sub>in</sub></div>} lower={<div>Z<sub>S</sub>Z<sub>in</sub></div>} />
                <p> = 0.2</p>
                <Fractions upper="0.59" lower="1K + 0.59K" />
                <p> = 0.074V &emsp; p-p</p>
            </div>

            <div className='div_friction'>
                <p><b>I<sub>C</sub></b> = </p>
                <Fractions upper={<div>V<sub>CC</sub> - V<sub>C</sub></div>} lower={<div>R<sub>C</sub></div>} />
                <p> = </p>
                <Fractions upper="9 - 4.2" lower="2.2K" />
                <p> = 2.2mA </p>
            </div>

            <div className='div_friction'>
                <p><b>r<sub>ej</sub></b> = </p>
                <Fractions upper="0.03" lower={<div>I<sub>C</sub></div>} />
                <p> = </p>
                <Fractions upper="0.03" lower="0.0022" />
                <p> = 13.6 Ω </p>
            </div>

            <div className='div_friction'>
                <p><b>A<sub>V</sub></b> = </p>
                <Fractions upper={<div>r<sub>c out</sub></div>} lower={<div>r<sub>ej</sub></div>} />
                <p> = </p>
                <Fractions upper={<div>R<sub>C</sub> || R<sub>L</sub></div>} lower={<div>r<sub>ej</sub></div>} />
                <p> = </p>
                <Fractions upper="688 Ω" lower="13.6 Ω" />
            </div>

            <p><b>v<sub>0</sub></b> = v<sub>RL</sub> = v<sub>in</sub>A<sub>V</sub> = 0.074 * 50.6 = 3.74 V &emsp; p-p</p>

            <p>Ak chceme vedieť, aká hodnota RL by poskytla najlepšiu impedančnú zhodu s výstupom zosilňovača použijeme výpočet</p>

            <div className='div_friction'>
                <p><b>Z<sub>0</sub></b> = R<sub>C</sub></p>
                <Fractions upper={<div>0.03 + Z<sub>S</sub>I<sub>B</sub></div>} lower={<div>0.03 + 2Z<sub>S</sub>I<sub>B</sub></div>} />
                <p> = 2.2</p>
                <Fractions upper="0.03 + 0.036" lower="0.03 + 2 * 0.036" />
                <p> = 1.42K</p>
            </div>

            
        </div>
    </div>
    );
}

export default Week_4_example_3;