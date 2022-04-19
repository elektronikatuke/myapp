import React, { useEffect } from "react";
import '../../App.css';
import Aos from "aos";
import 'aos/dist/aos.css';
import Fractions from '../../komponenty/Fractions';
import Example_3_1 from "../../examples/examples_3/Prva/example_3_1";
import Example_3_2 from "../../examples/examples_3/Prva/example_3_2";
import Example_3_3 from "../../examples/examples_3/Prva/Example_3_3";
import Example_3_4 from "../../examples/examples_3/Prva/Example_3_4";
import {ReactComponent as Schema} from '../../images/week_3_img/schema.svg';



const Week_3_ex_3_1 = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);



    return (
        <>
            <h1 className="nadpis">
                Príklad č.1 - Bipolárne tranzistory
            </h1>

            <div data-aos="fade" className="flex_left">
                <h2>Zadanie úlohy:</h2>
                <p>Zistite vplyv zmeny h<sub>fe</sub> v intervale od 50 do 150 na prúdové zosilnenie A<sub>i</sub>, a vstupnú impedanciu R<sub>IN</sub>. Uvažujte, že napätie medzí bázou a emitorom kremíkového tranzistora je U<sub>BE</sub>=0,7V v zapojení zosilňovača so spoločným emitorom. <b>U<sub>BB</sub>= 1,7 V R<sub>BB</sub>= 100 Ω R<sub>E</sub>= 10 Ω R<sub>C</sub>= 100 Ω R<sub>L</sub>= 100 Ω.</b></p>
            </div>

            <div className="flex_left" data-aos="fade-left">
                <h2>Riešenie:</h2>
                <p>1. výpočet pracovného bodu</p>
                <p><b>
                    U<sub>BB</sub>= R<sub>B</sub> I<sub>B</sub> + U<sub>BE</sub> + R<sub>E</sub><br/> I<sub>E</sub> = I<sub>C</sub> + I<sub>B</sub><br />
                    U<sub>BB</sub> - U<sub>BE</sub> = R<sub>B</sub> I<sub>B</sub> + R<sub>E</sub> I<sub>B</sub> + R<sub>E</sub> I<sub>C</sub> ; I<sub>C</sub> = I<sub>B</sub> / 𝛽<br />
                    U<sub>BB</sub> - U<sub>BE</sub> = I<sub>C</sub> = ((R<sub>B</sub> + R<sub>E</sub> / 𝛽) + R<sub>E</sub>) <br />
                    I<sub>CQ</sub> = (U<sub>BB</sub> - U<sub>BE</sub>) / (R<sub>E</sub> + (R<sub>B</sub> / 𝛽) + (R<sub>E</sub> / 𝛽))<br />
                    I<sub>CQ</sub> = (1,7 - 0,7) / (10+((100+10)/𝛽) = 𝛽 / ( 10(𝛽+11) )
                </b></p>
                {Example_3_1()}
                <p>I<sub>CQ</sub>= (81,97 ; 93,17 ) mA</p>
                <p>  Simulácia: ( 75,13 ; 85,94 ) mA</p>

                {Example_3_2()}
            </div>

            <div className="flex_left" data-aos="fade-right">
                <p>2. Výpočet vstupného odporu</p>
                <p>R<sub>1</sub> = R<sub>B</sub> || (h<sub>IE</sub> + 0𝛽R<sub>E</sub>)</p>
                <div className="div_friction">
                    <Fractions upper={<div>h<sub>IE</sub></div>} lower="𝛽" />
                    <p>= h<sub>IB</sub> = </p>
                    <Fractions upper={<div>U<sub>T</sub></div>} lower={<div>|𝐼<sub>CQ</sub>|</div>} />
                    <p> ; U<sub>T</sub> = 26mVh<sub>IE</sub> = 0.0.26 * 10(𝛽+11)=0,26𝛽+2,86</p>
                </div>
                <div className="div_friction">
                    <p>R<sub>I</sub> = R<sub>B</sub> || (𝛽 </p>
                    <Fractions upper={<div>U<sub>T</sub></div>} lower={<div>|𝐼<sub>CQ</sub>|</div>} />
                    <p> + 0𝛽<sub>RE</sub>)</p>
                </div>
                <div className="div_friction">
                    <p>R<sub>I</sub> = </p>
                    <Fractions upper="100*(0,26𝛽+2,86)" lower="100+(0,26𝛽+2,86)" />

                </div>
                {Example_3_3()}
                <p>R<sub>IN</sub> = ( 13,68 ; 29,51 ) Ω</p>

                <p>h<sub>IE</sub> = ( 15,86 ; 41,86 ) Ω</p>

                <p>h<sub>IB</sub> = ( 0,279 ; 0,317 ) Ω</p>

                <p>Simulácia: Z<sub>IN</sub> ( 20 ; 40 ) Ω </p>
            </div>



            <div className="flex_left" data-aos="fade-left">
                <p>3. Výpočet napäťového a prúdového zosilnenia</p>
                <p>R || R = 0,5</p>
                <div className="div_friction">
                    <p>A<sub>U</sub> = </p>
                    <Fractions upper={<div>-R<sub>C</sub> || R<sub>L</sub></div>} lower={<div>h<sub>IB</sub> + 0R<sub>L</sub></div>} />
                    <p> = </p>
                    <Fractions upper="50" lower="0.026 * ( 10( 𝛽 + 11 ) / 𝛽) " />
                    <p> = </p>
                    <Fractions upper="192,308𝛽" lower="𝛽+11" />
                </div>

                <div className="div_friction">
                    <p>A<sub>i</sub> = </p>
                    <Fractions upper={<div>R<sub>i</sub></div>} lower={<div>R<sub>L</sub></div>} />
                    <p>A<sub>u</sub></p>
                </div>

                {Example_3_4()}

            </div>


            <div className="flex_left" data-aos="fade-right">

               <Schema/>
            </div>


        </>
    );
}

export default Week_3_ex_3_1;