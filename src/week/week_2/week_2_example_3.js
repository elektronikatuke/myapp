import React, { useEffect } from 'react';
import Fractions from '../../komponenty/Fractions';
import '../../App.css';
import Aos from "aos";
import 'aos/dist/aos.css';
import Example_2_3 from '../../examples/examples_2/Tretia/example_2_3';


const Week_2_example_3 = () => {

    useEffect(() => {
        Aos.init({ duration: 2000});
      }, []);

    return(
        <div>
            <h1 className="nadpis"> 
                    Príklad č. 2
            </h1>


            <div data-aos="fade" className="flex_left">
                <p>Určte referenčné napätia poskytované sieťou z obrázka, ktorá používa bielu LED na indikáciu zapnutého napájania.</p> 
                <p>Aká je úroveň prúdu cez LED a výkon dodávaný napájaním?</p> 
                <p>Aký je výkon absorbovaný LED v porovnaní s výkonom 6-V Zenerovej diódy?</p>
                {Example_2_3()}
            
            </div>

            <div data-aos="fade-left" className="flex_left">
                <h2>Riešnie</h2>
                <p>Najprv musíme skontrolovať, či je k dispozícii dostatočné napätie na zapnutie všetkých sériových diódových prvkov. <b>Biela LED</b>bude mať úbytok asi <b>4 V</b> naprieč, <b>6-V a 3,3-V</b> Zenerove diódy majú celkom <b>9,3 V</b> a dopredu predpätá kremíková dióda má <b>0,7 V, spolu 14 V</b>. aplikovaných 40 V potom postačuje na zapnutie všetkých prvkov a dúfajme, že nastaví správny prevádzkový prúd.</p>
                <p>Všimnite si, že kremíková dióda bola použitá na vytvorenie referenčného napätia <b>4 V</b>, pretože:</p>
                <p><b>V<sub>o<sub>1</sub></sub> = V <sub>Z<sub>1</sub></sub> + V<sub>K</sub> = 3.3V + 0.7V = 4 V</b></p>
            
            </div>

            <div data-aos="fade-right" className="flex_left">
                <p>Výsledkom kombinácie napätia 6-V Zenerovej diódy s 4V</p>
                <p><b>V<sub>o<sub>2</sub></sub> = V<sub>o<sub>1</sub></sub> + V<sub>Z<sub>1</sub></sub> = 4V + 6V = 10 V</b></p>
                <p>Nakoniec, <b>4V</b> cez bielu LED ponechajú na rezistore napätie <b>40V - 14V = 26V</b>, čo vytvorí správny jas pre LED.</p>
                
                <div className='div_friction'>
                    <p>I<sub>R</sub> = I<sub>LED</sub> = </p> 
                    <Fractions upper={<div>V<sub>R</sub></div>} lower="R"/>
                    <p> = </p>
                    <Fractions upper={<div>40V - V<sub>o<sub>1</sub></sub> - V<sub>LED</sub></div>} lower="1.3 kΩ"/>
                    <p> = </p>
                    <Fractions upper={<div>40V - 10V - 4V</div>} lower="1.3 kΩ"/>
                    <p> = </p>
                    <Fractions upper="26V" lower="1.3 kΩ"/>
                    <p> = 20mA</p>
                </div>

                <p>Výkon dodávaný zdrojom je jednoducho súčinom napájacieho napätia a odberu prúdu nasledovne:</p>
                <p>P<sub>S</sub> = EI<sub>S</sub>+EI<sub>R</sub> = (40 V)(20 mA) = 800 mW</p>

            </div>

            <div data-aos="fade-left" className="flex_left">

                <p>Výkon absorbovaný LED je</p>
                <p>P<sub>LED</sub> = V<sub>LED</sub>I<sub>LED</sub> = (4 V)(20mA) = 80 mW</p>
                <p>a výkon absorbovaný 6-V Zenerovou diódou je</p>
                <p>P<sub>Z</sub> = V<sub>Z</sub>I<sub>Z</sub>=(6 V)(20mA) = 120 mW</p>
                <p><b>Výkon absorbovaný Zenerovou diódou prevyšuje výkon LED o 40 mW.</b></p>
            </div>
        </div>
    );
}

export default Week_2_example_3;