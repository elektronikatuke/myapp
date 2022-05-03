import React, { useEffect } from 'react';
import Fractions from '../../komponenty/Fractions';
import '../../App.css';
import Aos from "aos";
import 'aos/dist/aos.css';
import Example_4_4 from '../../examples/examples_4/Stvrta/example_4_4';



const Week_4_example_4 = () => {

    useEffect(() => {
        Aos.init({ duration: 2000});
      }, []);

    return(
        <div>
        <h1 className="nadpis"> 
                Príklad č. 4
        </h1>


        <div data-aos="fade" className="flex_left">
            <p>Navrhnite stabilizovaný zosilňovač so ziskom 5, Z<sub>in</sub> 4 K a Z<sub>o</sub> s použitím germániového PNP tranzistora s β = 50 a V<sub>CC</sub> 12 V.</p>           
            {Example_4_4()}
            
            
        </div>

        <div data-aos="fade-left" className="flex_left">
            <h2>Riešnie</h2>
          
            <p>Ak Z<sub>o</sub> = 2 K, R<sub>C</sub> by mala byť 2 K alebo o niečo vyššia. Použije sa 2,2 K. Ak má byť A<sub>v</sub> 5, R<sub>E</sub> musí byť 2,2K/5 alebo 0,44 K.</p>
            
            <p>Najbližšia štandardná hodnota je 470 Ω. Základný vstupný odpor r<sub>b</sub> in je β x R<sub>E</sub> alebo 23,5K. To je oveľa vyššie ako špecifikovaný 4K Z<sub>in</sub>, takže R<sub>B2</sub> je o niečo väčší ako 4K, takže paralelná kombinácia r<sub>b in</sub>, R<sub>B2</sub> a R<sub>B1</sub> bude približne 4K. 5,6K je zvolených ako pravdepodobná štandardná hodnota. Zostáva určiť R<sub>B1</sub> a toto sa vyberie na nastavenie požadovaného bodu Q. Maximálne V<sub>C</sub> je samozrejme -12V. Minimum nie je nula, ale kvôli R<sub>E</sub>,</p>

            <div className='div_friction'>
                <Fractions upper={<div>V<sub>min</sub></div>} lower={<div>0.47K</div>} />
                <p> = </p>
                <Fractions upper="-12 V" lower="2.2 K + 0.47 K"/>
                <p>; V<sub>min</sub> = -2.1 V</p>
            </div>

            <p>Toto je kolektorové napätie určené napäťovým delením R<sub>C</sub> v sérii s R<sub>E</sub>, keď V<sub>CE</sub> = 0. Optimálny bod predpätia pre maximálny výkyv výstupného signálu je uprostred medzi -12V a -2,1 V, alebo približne -7 V na kolektore. To znamená, že V<sub>RC</sub> je 12 - 7 alebo 5 V.</p>

            <div className='div_friction'>
                <Fractions upper={<div>V<sub>R<sub>C</sub></sub></div>} lower={<div>R<sub>C</sub></div>} />
                <p> = </p>
                <Fractions upper={<div>V<sub>R<sub>E</sub></sub></div>} lower={<div>R<sub>E</sub></div>} />
                <p>; </p>
                <Fractions upper="5 V" lower="2.2 K" />
                <p> = </p>
                <Fractions upper={<div>V<sub>R<sub>E</sub></sub></div>} lower={<div>0.47 K</div>} />
                <p>; &emsp; V<sub>R<sub>E</sub></sub> = 1.07 V</p> 
            </div>
        </div>
           
        <div data-aos="fade-right" className="flex_left">
        
            <p>Základné napätie je vyššie ako emitor o 0,2V, takže požadované napätie na R<sub>B2</sub> je 1,27V. Napätie na R<sub>B1</sub> je 12 -1,27 = 10,73V.</p>

            <p>Ďalší jednoduchý pomer teraz dáva hodnotu R<sub>B1</sub>:</p>

            <div className='div_friction'>
                <Fractions upper={<div>V<sub>R<sub>B1</sub></sub></div>} lower={<div>R<sub>B1</sub></div>} />
                <p> = </p>
                <Fractions upper={<div>V<sub>R<sub>B2</sub></sub></div>} lower={<div>R<sub>B2</sub></div>} />
                <p> ; </p>
                <Fractions upper="10.73" lower={<div>R<sub>B1</sub></div>} />
                <p> = </p>
                <Fractions upper="1.27" lower="5.6K" />
            </div>

            <p>R<sub>B1</sub> = 47.5K</p>
            <p>Najbližšia štandardná hodnota je 47K.</p>
            <p>Pri kontrole Zin sa zistilo, že 47 K || 5,6 K || 23,5 K sa rovná <b>4,13 K</b>. Treba mať na pamäti, že hodnota <b>A<sub>V</sub> = 5</b> bola vypočítaná bez zaťažovacieho odporu a zníži sa, ak sa pridá R<sub>L</sub>.</p>

                   
        </div>
    </div>
    );
}

export default Week_4_example_4;