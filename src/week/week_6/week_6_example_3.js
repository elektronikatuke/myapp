import React, { useEffect } from 'react';
import Fractions from '../../komponenty/Fractions';
import '../../App.css';
import Aos from "aos";
import 'aos/dist/aos.css';
import Example_6_3_1 from '../../examples/examples_6/Tretia/example_6_3_1';
import Example_6_3_2 from '../../examples/examples_6/Tretia/example_6_3_2';

const Week_6_example_3 = () => {

    useEffect(() => {
        Aos.init({ duration: 2000});
      }, []);

    return(
        <div>
        <h1 className="nadpis"> 
                Príklad č. 3
        </h1>


        <div data-aos="fade" className="flex_left">
            <p>Určite pracovný bod tranzistora <b>MOSFET</b> s indukovaným kanálom N a hodnoty R<sub>1</sub> a R<sub>2</sub> v zapojení zosilňovača napätia na obrázku pre U<sub>DD</sub> = 10 V, R<sub>D</sub> = 5 kΩ, U<sub>T</sub>= 1 V, ak je požadovaný čo najväčší rozkmit napätia na výstupe. K dispozícii sú výstupné charakteristiky na obr 1.2</p>.                  
            {Example_6_3_1()}
            <p><small>Obr. 1.1</small></p>
            <p>Výstupné charakteristiky</p>
            {Example_6_3_2()}
            <p><small>Obr. 1.2</small></p>
        </div>

        <div data-aos="fade-left" className="flex_left">
            <h2>Riešnie</h2>
            <p>Najväčší rozkmit napätia by sme mali dosiahnuť pre U<sub>DS</sub> = U<sub>DD</sub>/2 = 5 V. Priesečník U<sub>DS</sub> = 5 V a zaťažovacia priamka dáva I<sub>D</sub> = 1 mA. Pre napätie U<sub>GS</sub> pre nastavenie pracovného bodu <b>P</b> odčítame približne 3,5 V. Pre napäťový delič v obvode na obr. 1.1 platí</p>
            <div className='div_friction'>
                <p>U<sub>GS</sub> = U<sub>DD</sub> * </p>	
                <Fractions upper={<div>R<sub>2</sub></div>} lower={<div>R<sub>1</sub> + R<sub>2</sub></div>}/>
            </div>  
                       
        </div>

        <div data-aos="fade-right" className="flex_left">
            <p>Prúd deličom R-R, by mal byť s ohľadom na energetickú účinnosť zapojenia aspoň o rád menší ako I<sub>D</sub>. Aby bol delič tvrdý, mal by byť prúd deličom aspoň o rád väčší ako prúd I<sub>G</sub>, ktorý je možné odhadnúť v rade jednotiek nA pri teplote 25 °C.</p> 
            <p>Ohľad je tiež potrebné brať na požadovaný vstupný odpor zosilňovača R<sub>VST</sub> = R<sub>1</sub> ||R<sub>2</sub>, ktorý s rastúcim prúdom deliča klesá, pričom najväčší odpor bežne dostupných rezistorov je 5 M. Prúd deličom zvolíme napr. 1x = 10 µA, odkiaľ:</p>
            <div className='div_friction'>
                <p>R<sub>1</sub> + R<sub>2</sub> = </p>	
                <Fractions upper={<div>U<sub>DD</sub></div>} lower={<div>I<sub>R</sub></div>}/>
                <p> = 1 MΩ &emsp; Potom &emsp; R<sub>2</sub> = (R<sub>1</sub> + R<sub>2</sub>)</p>
                <Fractions upper={<div>U<sub>GS</sub></div>} lower={<div>U<sub>DD</sub></div>}/>
                <p> = 350 kΩ</p>
            </div>

            <p>R<sub>1</sub> = 1 MΩ - 350 kΩ = 750 kΩ</p>
        </div>

        <div data-aos="fade-left" className="flex_left">
            <p>Maximálny možný rozkmit napätia na výstupe vyplýva z predpokladu, že tranzistor v úlohe zosilňovača malého signálu musí pracovať trvale v saturácii, kedy podľa <br/><b>U<sub>DSsat</sub> = U<sub>GS</sub> - U<sub>T</sub></b><br/> bude U<sub>DSsat</sub> &ge; U<sub>GS</sub> - U<sub>T</sub>= 3,5 - 1 = 2,5 V.</p>
            <p> Maximálny možný rozkmit výstupného napätia bude dvojnásobok rozdielu U<sub>DS</sub> - U<sub>DSsat</sub> tj. 2.(5 - 2,5) = 5 V<sub>šš</sub></p>
        </div>

    </div>
    );
}

export default Week_6_example_3;