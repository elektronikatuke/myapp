import React, { useEffect } from 'react';
import Fractions from '../../komponenty/Fractions';
import '../../App.css';
import Aos from "aos";
import 'aos/dist/aos.css';
import Example_4_2 from '../../examples/examples_4/Druha/example_4_2';




const Week_4_example_2 = () => {

    useEffect(() => {
        Aos.init({ duration: 2000});
      }, []);

    return(
        <div>
        <h1 className="nadpis"> 
                Príklad č. 2
        </h1>


        <div data-aos="fade" className="flex_left">
            <p>Určite A<sub>v</sub>, A<sub>i</sub>, Z<sub>i</sub> a Z<sub>o</sub> pre zobrazenú sieť</p>
            {Example_4_2()}
            
            
        </div>

        <div data-aos="fade-left" className="flex_left">
            <h2>Riešnie</h2>
            <p>A<sub>v</sub> : Pre sieť, ako je znázornená, by nemalo byť potrebné prekresľovať sieť pre každý výpočet. Preto pre podmienky jednosmerného prúdu:</p>
            
            <div className='div_friction'>
                <p>I<sub>B</sub> = </p> 
                <Fractions upper={<div>V<sub>CC</sub> - V<sub>BE</sub></div>} lower={<div>R<sub>B</sub></div>} />
                <p> = </p>
                <Fractions upper="10 - 0.7" lower="200 K"/>
                <p> = </p>
                <Fractions upper="9.3" lower="200 k"/>
                <p> = 46.5 μA</p>  
            </div>

            <p>a</p>
            <p>I<suv>E</suv> ≅ I<sub>C</sub> = βI<sub>B</sub> = 50(46.5 * 10<sup>-6</sup> ) = 2.325 mA</p>
            <p>takže</p>
            <p></p>

            <div className='div_friction'>
                <p>r<sub>e</sub> = </p> 
                <Fractions upper="26 mV" lower={<div>I<sub>E</sub></div>} />
                <p> = </p>
                <Fractions upper="26" lower="2.325"/>
                <p> = 11.18 Ω</p>   
            </div>

            <p>Pre <b>ac</b> podmienky: &emsp;<b>r<sub>i</sub> = βr<sub>e</sub></b></p>
            
            <div className='div_friction'>
                <p>a taktiež: &emsp;<b>I<sub>b</sub></b></p>
                <Fractions upper={<div><b>V<sub>e</sub></b></div>} lower={<div><b>βr<sub>e</sub></b></div>} />
            </div>

            <div className='div_friction'>
                <p>takže: &emsp;<b>
                    V<sub>0</sub> = -I<sub>C</sub>R<sub>C</sub> = βI<sub>b</sub>R<sub>C</sub> = β
                </b></p>
                <Fractions upper={<div><b>V<sub>i</sub></b></div>} lower={<div><b>βr<sub>e</sub></b></div>} />
                <p><b>
                    R<sub>C</sub> = - 
                </b></p>
                <Fractions upper={<div><b>R<sub>C</sub></b></div>} lower={<div><b>r<sub>e</sub></b></div>} />
                <p><b>V<sub>i</sub></b></p>
            </div>

            <div className='div_friction'>
                <p>spoločne s: &emsp;<b>
                    A<sub>V</sub> = 
                </b></p>
                <Fractions upper={<div><b>V<sub>0</sub></b></div>} lower={<div><b>V<sub>t</sub></b></div>} />
                <p><b> = - </b></p>
                <Fractions upper={<div><b>R<sub>C</sub></b></div>} lower={<div><b>r<sub>e</sub></b></div>} />
                
            </div>
            
            
        </div>

        <div data-aos="fade-right" className="flex_left">
            <p>Dosadením čísel dostaneme</p>

            <div className='div_friction'>
                <p><b>
                    A<sub>V</sub> = -
                </b></p>
                <Fractions upper={<div><b>R<sub>C</sub></b></div>} lower={<div><b>r<sub>e</sub></b></div>} />
                <p><b> = - </b></p>
                <Fractions upper={<div><b>4 K</b></div>} lower={<div><b>11.2</b></div>} />
                <p><b>357.14</b></p>
            </div>

            <p><b>A<sub>i</sub>:</b> &emsp;R<sub>B</sub> ||r<sub>i</sub> = R<sub>B</sub> ||βr<sub>e</sub> ≅ βr<sub>e</sub></p>
            <p>
                preto &emsp;<b> I<sub>b</sub> ≅ I<sub>i</sub> </b>
                &emsp;
                a 
                &emsp;
                <b>I<sub>0</sub> = h<sub>fe</sub>I<sub>b</sub> = h<sub>fe</sub>I<sub>i</sub></b>
             </p>

             <div className='div_friction'>
                <p>
                    s &emsp;
                </p>
                <Fractions upper={<div><b>I<sub>0</sub></b></div>} lower={<div><b>I<sub>i</sub></b></div>} />
                <p><b> = h<sub>fe</sub></b></p>
                <p>
                    a &emsp; <b>A<sub>i</sub> = 50</b>
                </p>
            </div>

            <p><b>
            Z<sub>i</sub>:&emsp;
            &emsp;Z<sub>i</sub> ≅ βr<sub>e</sub> = (50)(11.2) = 560 Ω
            </b></p>

            <p><b>
            Z<sub>0</sub>:&emsp;
            &emsp;Z<sub>0</sub> ≅ R<sub>C</sub> = 4 K
            </b></p>
        </div>
    </div>
    );
}

export default Week_4_example_2;