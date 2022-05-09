import React, { useEffect } from "react";
import '../../App.css';
import Aos from "aos";
import 'aos/dist/aos.css';
import Fractions from '../../komponenty/Fractions';
import Example_3_3_1 from "../../examples/examples_3/Tretia/example_3_3_1";
import Example_3_2_1 from "../../examples/examples_3/Druha/example_3_2_1";
import Example_3_3_2 from "../../examples/examples_3/Tretia/example_3_3_2";



const Week_3_ex_3_3 = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);



    return (
        <>
            <h1 className="nadpis">
                Príklad č.3 - Bipolárne tranzistory
            </h1>

            <div data-aos="fade" className="flex_left">
                <h2>Zadanie úlohy:</h2>
                <p>Určte hodnotu odporu R<sub>B</sub> v zapojení tranzistoru NPN na priloženom obrázku <b>A)</b>, aby došlo k nastaveniu pracovného bodu P = [I<sub>C</sub>, U<sub>CC</sub>]/2 vo výstupných charakteristikách z obrázku <b>b)</b></p>
                {Example_3_3_1()}
                <p><small>Obr. a)</small></p>
                {Example_3_2_1()}
                <p><small>Obr. b)</small></p>
            </div>

            <div className="flex_left" data-aos="fade-left">
                <h2>Riešenie:</h2>
                <p>Zaťažovacia priamka vo výstupných charakteristikách prechádza bodmi <b>[ 0 mA, U<sub>0</sub> = U<sub>CC</sub> = 5 V]</b> a <b>[I<sub>K</sub> = 5 mA, 0V]</b></p>
                <p>Pracovný bod pre <b>U<sub>CC</sub> / 2 = 2,5 V</b> vyžaduje podľa výstupných charakteristýk nastavenia prúdu do bázy <b>I<sub>B</sub> = 15 µA</b>.</p>
                <p>To sa dá urobiť napríklad rezistorom <b>R<sub>B</sub></b> o hodnote <b>R<sub>B</sub> = (U<sub>CC</sub> - U<sub>BE</sub>) / I<sub>B</sub> = (5 - 0,7) / 15*10<sup>-6</sup> = 286 kΩ</b></p>
                {Example_3_3_2()}
            </div>

            <div className="flex_left" data-aos="fade-right">
                <h2>Poznámka:</h2>

                <ol>
                    <li>
                        <p>Uvedené zapojenie sa dá použiť pre nastavenie pracovného bodu zosilovača s tranzistorom v triede <b>A</b>. Tu je požadovaný pracovný bod <b>P = [I<sub>C</sub>, U<sub>CC</sub>/2]</b> v strede výstupných charakteristík, aby bolo možné zosilovať obe pol vlny vstupného sínusového napätia privádzaného medzi bázu a emitor jedným tranzistorom.</p>
                    </li>
                    <li>
                    Pretože U<sub>CC</sub> &gt; U<sub>BE</sub> a R<sub>E</sub> má veľkú hodnotu odporu, odpovedá napájanie bázy napájaniu zo zdroja prúdu. 
                    </li>
                    <li>  
                        Výhodou zapojenia je nízka spotreba pre nastavenie pracovného bodu. Nevýhodou je zlá teplotná stabilita polohy pracovného bodu. Nepríjemná môže byť taktiež závislosť polohy pracovného bodu na hodnote h<sub>21E</sub> = I<sub>C</sub>/I<sub>B</sub>.
                    </li>
                </ol>

            </div>

        </>
    );
}

export default Week_3_ex_3_3;