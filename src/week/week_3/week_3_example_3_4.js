import React, { useEffect } from "react";
import '../../App.css';
import Aos from "aos";
import 'aos/dist/aos.css';
import Fractions from '../../komponenty/Fractions';

import Example_3_4_1 from "../../examples/examples_3/Stvrta/example_3_4_1";


const Week_3_ex_3_4 = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);



    return (
        <>
            <h1 className="nadpis">
                Príklad č.4 - Bipolárne tranzistory
            </h1>

            <div data-aos="fade" className="flex_left">
                <h2>Zadanie úlohy:</h2>
                <p>Navrhnite zapojenie zdroja kladného prúdu <b>10 mA</b> pre ľubovoľné napätie v rozsahu od 0 - 10 V s bipolárnym  tranzistorom <b>(h<sub>21e</sub> = 200).</b></p>
            </div>

            <div className="flex_left" data-aos="fade-left">
                <h2>Riešenie:</h2>
                <p>
                Požiadavka kladného prúdu znamená, že prúd bude zo zdroja vytekať a záťaž bude pripojená proti zemi. Preto si zvolíme zapojenie s PNP tranzistorom v zapojení SB (vstup do emitoru, výstup z kolektoru) podľa obrázku. 
                </p>
                {Example_3_4_1()}
                <p>
                Keďže platí U<sub>EB</sub> = 0,7 V, U<sub>RB2</sub> = konst. a vtedy 
                </p>
               
                <div className="div_friction">
                    <p>I<sub>Z</sub> = I<sub>C</sub> = I<sub>E</sub> = </p>
                    <Fractions upper={<div>U<sub>CC</sub> - U<sub>EB</sub> - U<sub>RB2</sub></div>} lower={<div>R<sub>E</sub></div>} />
                    <p>= konst.</p>
                </div>

                <p>
                Jedná sa skutočne o zdroj konštantného prúdu I<sub>Z</sub> nezávisle na napätí U<sub>EC</sub>. Napájacie napätie vyplýva z požiadavky až 10 V na záťaži.  
                </p>

                <p><b
                    >U<sub>CC</sub> = U<sub>RE</sub> + U<sub>EC</sub> + U<sub>Rz</sub> = 1 + 1 + 10 = 12 [V]
                </b></p>

            </div>

            <div className="flex_left" data-aos="fade-right">
                <p>Z dôvodov dobrej teplotnej stability pracovného bodu sme zapojili R<sub>E</sub> a zvolili U<sub>RE</sub> = 1 V. Aby sa tranzistor nedostal do saturácie, kde klesá h<sub>21E</sub> a rastie I<sub>B</sub>, požadujeme U<sub>EC</sub> &gt; 0 V, tj. volíme z rezervou U<sub>EC</sub> = 1 V. Potom pri platnosti I<sub>E</sub> = I<sub>c</sub> = I<sub>z</sub> = 10 mA dostaneme </p>
                
                <div className="div_friction">
                    <p>R<sub>E</sub> = </p>
                    <Fractions upper={<div>U<sub>RE</sub></div>} lower={<div>I<sub>Z</sub></div>} />
                    <p> = </p>
                    <Fractions upper="1" lower="0,01"/>
                    <p> = 100 &#8486;</p>
                </div>
            </div>


            <div className="flex_left" data-aos="fade-left">

                <p>Pre návrh R<sub>B1</sub> vyjdeme z požiadaviek tvrdého deliča napätia (I<sub>RB1</sub> &gt;&gt; I<sub>1</sub>) a volíme:</p>

                <div className="div_friction">
                    <p>I<sub>RE1</sub> = 10 * I<sub>B</sub> = 10 * </p>
                    <Fractions upper={<div>I<sub>C</sub></div>} lower={<div>h<sub>21</sub></div>} />
                    <p> = 10 * </p>
                    <Fractions upper="0,01" lower="200"/>
                    <p> = 0,5 A </p>
                </div>

                <div className="div_friction">
                    <p>R<sub>B1</sub> = </p>
                    <Fractions upper={<div>U<sub>RB1</sub></div>} lower={<div>I<sub>B</sub></div>} />
                    <p> = </p>
                    <Fractions upper={<div>U<sub>RE</sub> + U<sub>EB</sub></div>} lower={<div> I<sub>B</sub></div>}/>
                    <p> = </p>
                    <Fractions upper="1 + 0,7" lower={<div>0,5 * 10<sup>-3</sup></div>}/>
                    <p> = 3400 &#8486; ≈ 3k3</p>
                </div>

                <div className="div_friction">
                    <p>R<sub>B2</sub> = </p>
                    <Fractions upper={<div>U<sub>RB2</sub></div>} lower={<div>I<sub>B</sub> + I<sub>RB1</sub></div>} />
                    <p> = </p>
                    <Fractions upper={<div>U<sub>CC</sub> - U<sub>RE</sub> - U<sub>EB</sub></div>} lower={<div> I<sub>C</sub> / h<sub>21E</sub> + I<sub>RB1</sub></div>}/>
                    <p> = </p>
                    <Fractions upper="10,3" lower={<div> 25*10<sup>-6</sup> + 5*10<sup>-4</sup> </div>}/>
                    <p> = 19619 &#8486;</p>
                </div>
                
                <p>Najväčšia hodnota rezistoru R<sub>Z</sub>, ktorú bude možné pripojiť na výstup zdraja bude</p>
                <div className="div_friction">
                    <p>R<sub>Z</sub> &lt; </p>
                    <Fractions upper={<div>U<sub>RZ</sub></div>} lower={<div>I<sub>RZ</sub></div>} />
                    <p> = </p>
                    <Fractions upper="10" lower="0,01"/>
                    <p> = 1000 &#8486;</p>
                </div>
            </div>


        </>
    );
}

export default Week_3_ex_3_4;