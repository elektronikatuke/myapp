import React, { useEffect, useState } from 'react';
import Fractions from '../../komponenty/Fractions';
import '../../App.css';
import Aos from "aos";
import 'aos/dist/aos.css';
import Example_3_5_1 from '../../examples/examples_3/Piata/example_3_5_1';

const Week_3_example_5 = () => {

    useEffect(() => {
        Aos.init({ duration: 2000});
      }, []);

      const [toggle_a, setToggle_a] = useState(false);
      
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
    
    return(
        <div>
            <h1 className="nadpis"> 
                    Príklad č. 5
            </h1>


            <div data-aos="fade" className="flex_left">
                <h2>Zadanie úlohy</h2>
                <p>V spínacom obvode s tranzistorom NPN (h<sub>21E</sub> = 20) na obrázku určite hodnoty R<sub>B</sub> a R<sub>C</sub>, ak je pre U<sub>1</sub> = 5V maximálna zaťažiteľnosť I<sub>#max</sub> = 1 mA. Vstupnú kapacitu obvodu #2 zanedbajme a jeho vstupný odpor uvažujme ako nekonečne veľký.</p>
                {Example_3_5_1()}
            </div>

            <div data-aos="fade-left" className="flex_left">
                <h2>Riešenie</h2>
                <p onClick={hide_elma} className="pointer">Zobraziť riešenie</p>
                
            </div>

            <div id='hide_elma' style={{display: 'none'}}>
                <div data-aos="fade-left" className="flex_left">
                    <h2>Riešnie</h2>

                        <p>Rezistor R<sub>B</sub> volíme tak, aby nedošlo k prekročeniu hodnoty I<sub>#MAX</sub>. Ak zvolíme</p>
                        
                        <div className="div_friction">
                            <p>R<sub>B</sub> &ge; </p>
                            <Fractions upper={<div>U<sub>1</sub> - U<sub>BE</sub></div>} lower={<div>I<sub>B</sub></div>} /> = 
                            <Fractions upper="5 - 0,7" lower={<div>10<sup>-3</sup></div>} />
                            <p> = 4,3 [kΩ],</p>
                        </div>

                        <p>Napr. R<sub>B</sub> = 4,7kΩ, potom pre U<sub>1</sub> = 5V spíname tranzistor prúdom I<sub>B</sub> = 0,91mA, čo musí vyvolať prúd kolektora I<sub>C</sub> = h<sub>21E</sub>I<sub>B</sub> = 18,2 mA. Ak má byť v zopnutom stave U<sub>2</sub> &lt; 1, potom musí byť</p>
                        
                        <div className="div_friction">
                            <p>R<sub>C</sub> &gt; </p>
                            <Fractions upper={<div>U<sub>RC</sub></div>} lower={<div>I<sub>C</sub></div>} /> = 
                            <Fractions upper={<div>U<sub>CC</sub> - U<sub>2</sub></div>} lower={<div>I<sup>C</sup></div>}/> = 
                            <Fractions upper="15 - 1" lower={<div>18,2 * 10<sup>-3</sup></div>}/>
                            <p> = 770 [Ω],</p>
                        </div>
                </div>

                <div data-aos="fade-left" className="flex_left">
                    <h2>Poznámka</h2>
                        <p>Čím väčší zvolíme odpor R<sub>C</sub> tým nižšie bude napätie U<sub>2</sub> - U<sub>CE</sub>. Od určitej hodnoty R<sub>C</sub> sa tranzistor dostane do saturácie a bude pomalšie vypínať. Rýchlosť spínania a vypínania tranzistora bude tiež obmedzená Millerovou kapacitou na vstupe tranzistora. Zrýchlenie je možné dosiahnuť paralelným pripojením kapacitora k rezistoru R<sub>B</sub>, ktorý zaistí rýchlejšie nabíjanie a vybíjanie tejto kapacity pri spínaní a vypínaní tranzistora</p>
                </div>

            </div>
        </div>
    );
}

export default Week_3_example_5;