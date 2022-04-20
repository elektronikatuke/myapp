import React, { useEffect } from 'react';
import Fractions from '../../komponenty/Fractions';
import '../../App.css';
import Aos from "aos";
import 'aos/dist/aos.css';
import Example_4_1 from '../../examples/examples_4/Prva/example_4_1';
import Example_4_1_1 from '../../examples/examples_4/Prva/example_4_1_1';



const Week_4_example_1 = () => {

    useEffect(() => {
        Aos.init({ duration: 2000});
      }, []);

    return(
        <div>
        <h1 className="nadpis"> 
                Príklad č. 1
        </h1>


        <div data-aos="fade" className="flex_left">
            <p>Určte <b>V<sub>in</sub>, V<sub>out</sub> a A<sub>e</sub></b> pre zosilňovač znázornený na obr.</p>
            {Example_4_1()}
            
        </div>

        <div data-aos="fade-left" className="flex_left">
            <h2>Riešnie</h2>
            <p>Prvým krokom pri určovaní hodnôt úrovne signálu je nakreslenie zjednodušeného modelu (obr. 1.2). Potom sa číselné hodnoty prenesú z obvodu do modelu pre R<sub>S</sub>, R<sub>C</sub> a E<sub>S</sub>. Potom sa R<sub>B</sub> prenesie do modelu ako R<sub>B</sub> / (1 + A<sub>V</sub>), pretože R<sub>B</sub> predstavuje spätnú väzbu z výstupu na vstup. V tomto bode sú R<sub>B</sub> / (1 + A<sub>V</sub>), r<sub>in</sub>, A<sub>v</sub> a V<sub>out</sub> umiestnené na modeli ako neznáme. Teraz musíme určiť tieto neznáme hodnoty. Tento model predpokladá, že vlastná vstupná impedancia tranzistora (h<sub>ie</sub>) je dostatočne malá na to, aby sa zanedbala.</p>
            {Example_4_1_1()}
            <p><small>Obr. 1.2 - zjednodušená schéma</small></p>
        </div>

        <div data-aos="fade-right" className="flex_left">
            <p>Vstupný odpor r<sub>in</sub> do zosilňovača so spoločným emitorom s emitorovou spätnou väzbou je</p>
            <p><b>r<sub>in</sub> = (1+β)(r'<sub>e</sub> + R<sub>E</sub>) = 101(50 Ω + 100 Ω) = 15,150 Ω</b></p>
            <p>Napäťové zosilnenie A<sub>V</sub> na zosilňovači sa získa z:</p>
            
            <div className='div_friction'>
                <p>A<sub>V</sub> = </p> 
                <Fractions upper={<div>R<sub>C</sub></div>} lower={<div>r'<sub>e</sub> + R<sub>E</sub></div>}/>
                <p> = </p>
                <Fractions upper="6000 Ω" lower="50 Ω + 100 Ω"/>
                <p> = 40</p>
            </div>

            <p>Predpätý rezistor R<sub>B</sub> je transformovaný Millerovou vetou na: </p>
            
            <div className='div_friction'>
                <p>R<sub>in</sub> = </p> 
                <Fractions upper={<div>R<sub>B</sub></div>} lower={<div>1 + A<sub>V</sub></div>}/>
                <p> = </p>
                <Fractions upper="500 000 Ω" lower="1 + 40"/>
                <p> = 12,195 Ω</p>
            </div>
        
        </div>

        <div data-aos="fade-left" className="flex_left">
           <p>Paralelná kombinácia r<sub>in</sub> a r<sub>in</sub> je r'<sub>in</sub></p>

           <div className='div_friction'>
                <p>r'<sub>in</sub> = </p> 
                <Fractions upper={<div>r<sub>in</sub>R<sub>in</sub></div>} lower={<div>r<sub>in</sub> + R<sub>in</sub></div>} />
                <p> = </p>
                <Fractions upper="15,150 Ω * 12,195 Ω" lower="15,150 Ω + 12,195 Ω"/>
                <p> = 6756 Ω</p>
            </div>

            <p>V<sub>in</sub> možno nájsť z deliča napätia vo vstupnom obvode.</p>

            <div className='div_friction'>
                <p>V<sub>in</sub> = </p> 
                <Fractions upper={<div>r'<sub>in</sub></div>} lower={<div>r'<sub>in</sub> + R<sub>S</sub></div>} /><p>E<sub>S</sub></p>
                <p> = </p>
                <Fractions upper="6756 Ω" lower="6756 Ω+10,000 Ω"/>
                <p>20 mV</p>
                <p> = 8 mV</p>
            </div>

            <p>a výstupné napätie V<sub>out</sub> je:</p>
            <p><b>V<sub>out</sub> = V<sub>in</sub>A<sub>V</sub> = 8 mV * 40 = 320 mV</b></p>

            <p>Celkový zisk je:</p>

            <div className='div_friction'>
              
                <p><b> A<sub>e</sub> = </b></p> 
                <Fractions upper={<div><b>V<sub>out</sub></b></div>} lower={<div><b>E<sub>S</sub></b></div>} />
                <p><b> = </b></p>
                <Fractions upper={<div><b>320 mV</b></div>} lower={<div><b>20 mV</b></div>}/>
                <p><b> = 16</b></p>
               
            </div>

        </div>

    </div>
    );
}

export default Week_4_example_1;