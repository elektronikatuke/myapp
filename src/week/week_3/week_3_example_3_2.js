import React, { useEffect } from "react";
import '../../App.css';
import Aos from "aos";
import 'aos/dist/aos.css';
import Fractions from '../../komponenty/Fractions';

import Example_3_2 from "../../examples/examples_3/Druha/example_3_2";
import Example_3_2_1 from "../../examples/examples_3/Druha/example_3_2_1";
import Example_3_2_2 from "../../examples/examples_3/Druha/example_3_2_2";
import Example_3_2_3 from "../../examples/examples_3/Druha/example_3_2_3";



const Week_3_ex_3_2 = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);



    return (
        <>
            <h1 className="nadpis">
                Príklad č.2 - Bipolárne tranzistory
            </h1>

            <div data-aos="fade" className="flex_left">
                <h2>Zadanie úlohy:</h2>
                <p>Určte pracovný bod tranzistoru v zapojení na obrázku <b>a)</b> vo výstupných charakteristikách podľa obrázku <b>b)</b> pre prípad <b>I<sub>B</sub> = 0 µA a I<sub>B</sub> = 30 µA</b>, ak je <b>U<sub>CC</sub> = 5 V a R<sub>C</sub> = 500 Ω</b></p>
                {Example_3_2()}
                <p><small>Obr. a)</small></p>
                {Example_3_2_1()}
                <p><small>Obr. b)</small></p>
            </div>

            <div className="flex_left" data-aos="fade-left">
                <h2>Riešenie:</h2>
                <p>Poloha pracovného bodu vo výstupných charakteristikách je daná priesečníkom zaťažovacej priamky a výstupnej charakteristiky pre daný prúd I<sub>B</sub>. Napätie naprázdno je U<sub>0</sub> = U<sub>CC</sub> = 5V a prúd nakrátko je I<sub>K</sub> = U<sub>0</sub> / R<sub>C</sub> = 5/500 = 10mA</p>
                <p>Pre prípad I<sub>B</sub> = 0 µA dostávame pracovný bod <b>P<sub>1</sub> = [U<sub>CE</sub> = 5V, I<sub>C</sub> = 0 mA], ktorý zodpovedá nevodivému režimu.</b></p>
                <p>Pre prípad I<sub>B</sub> = 30 µA odpočítame súradnice pracovného bodu <b>P<sub>2</sub> = [ U<sub>CE</sub> = 2,25 V, I<sub>C</sub> = 5,5 mA]</b>, ktorý zodpovedá normálnemu aktívnemu režimu.</p>
                {Example_3_2_2()}
            </div>

            <div className="flex_left" data-aos="fade-right">
                
                <p>S ohľadom na počet vývodov tranzistoru je jeho pracovný bod daný štyrmi hodnotami. V uvedenom zapojení sa potom jedná o <b> I<sub>C</sub>, U<sub>CE</sub>, I<sub>B</sub> a U<sub>BE</sub></b>. Pre kompletnú znalosť pracovného bodu ostáva určiť hodnotu napätia <b>U<sub>BE</sub></b></p>

                <p>Pre prípad <b>I<sub>B</sub> = 0 µA</b> bude <b>U<sub>BE</sub> = 0</b>. Pre prípad <b>I<sub>B</sub> = 30 µA</b> potrebujeme vstupnú charakteristiku <b>I<sub>B</sub> = f (U<sub>BE</sub>)</b>, čo nie je nič iné iba voltampérová charakteristika diódy báza-emitor ovplyvnená prechodom B-C. Ak je táto k dispozícií, určíme z nej graficky pre <b>I<sub>B</sub> = 30 µA</b> napätie na bázu U<sub>BE</sub> = 0,7 V.</p>
                <p>Ak nie je táto k dispozícií, budeme pre kremíkové tranzistory uvažovať hodnotu <b>U<sub>BE</sub> = 0,65 - 0,7 V</b>. Pracovné body tranzistorov potom sú <b>P<sub>1</sub> = [ U<sub>CE</sub> = 5 V, I<sub>C</sub> = 0 mA, I<sub>B</sub> = 0 µA, U<sub>BE</sub> = 0 V ]</b>, a <b>P<sub>2</sub> = [U<sub>CE</sub> = 2,25 V, I<sub>C</sub> = 5,5 mA, I<sub>B</sub> = 30 µA, U<sub>BE</sub> = 0,7 V ]</b></p>
                {Example_3_2_3()}
            </div>

        </>
    );
}

export default Week_3_ex_3_2;