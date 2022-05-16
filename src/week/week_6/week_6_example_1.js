import React, { useEffect } from 'react';
import Fractions from '../../komponenty/Fractions';
import '../../App.css';
import Aos from "aos";
import 'aos/dist/aos.css';
import Example_6_1 from '../../examples/examples_6/Prva/example_6_1';

const Week_6_example_1 = () => {

    useEffect(() => {
        Aos.init({ duration: 2000});
      }, []);

    return(
        <div>
        <h1 className="nadpis"> 
                Príklad č. 1
        </h1>


        <div data-aos="fade" className="flex_left">
            <p>Určte hodnoty R<sub>S</sub> a R<sub>D</sub> v zapojení na obrázku tak, aby došlo ku nastaveniu pracovného bodu zosilňovača v triede <b>A</b>, ak sú dané I<sub>D</sub> = 7,5 mA, U<sub>DD</sub> = 15 V, I<sub>DSS</sub> = 19 mA, U<sub>GSOFF</sub> = - 2,2 V. V-A charakteristiky tranzistoru nie sú k dispozícií.</p>
            {Example_6_1()}
        </div>

        <div data-aos="fade-left" className="flex_left">
            <h2>Riešnie</h2>

            <div className='div_friction'>
                <p>Z rovnice: &emsp; I<sub>D</sub> = I<sub>DSS</sub> * </p>
                <p className='font35'>(</p>
                <p> 1 - </p>
                <Fractions upper={<div>U<sub>GS</sub></div>} lower={<div>U<sub>GSOFF</sub></div>}/>
                <p className='font35'>)</p>
                <p><sup>2</sup>&emsp; Dostaneme pre I<sub>D</sub> = 7,5 mA</p>
            </div>  

            <div className='div_friction'>
                <p>U<sub>GS</sub> = </p>
                <p className='font35'>(</p>
                <p> 1 - </p>
                <Fractions upper={<div>I<sub>D</sub></div>} lower={<div>I<sub>DSS</sub></div>}/>
                <p className='font35'>)</p>
                <p><sup>2</sup> * U<sub>GSOFF</sub> = </p>
                <p className='font35'>(</p>
                <p> 1 - </p>
                <Fractions upper="7,5" lower="19"/>
                <p className='font35'>)</p>
                <p><sup>2</sup> * (-2,2) = -0,8 [V]</p>
            </div>  
        </div>

        <div data-aos="fade-right" className="flex_left">
            <p>Z rovnice U<sub>GS</sub> + R<sub>S</sub> * I<sub>D</sub> = 0 vyplýva <b>R<sub>S</sub> = - U<sub>GS</sub> / R<sub>S</sub> = 0,8 / 7,5*10<sup>-3</sup> = 106&#8486;</b>, zvolíme R<sub>S</sub> = 100&#8486;</p>
            <p>Z rovnice pre výstupný obvod U<sub>DD</sub> = (R<sub>D</sub> + R<sub>S</sub>) * I<sub>D</sub> + U<sub>DS</sub> dostaneme</p>
            
            <div className='div_friction'>
                <p>R<sub>D</sub> = </p>
                <Fractions upper={<div>U<sub>DD</sub> - U<sub>DS</sub></div>} lower={<div>I<sub>D</sub></div>}/>
                <p><sup>2</sup> * U<sub>GSOFF</sub> = </p>
                <p> -  R<sub>S</sub> = </p>
                <Fractions upper="15 - 7,5" lower={<div>7,5 * 10<sup>-3</sup></div>}/>
                <p> - 100 = 1000 - 100 = 900 [&#8486;]</p>
            </div>

        </div>

        <div data-aos="fade-left" className="flex_left">
            <h2>Poznámka</h2>
            <p>Rezistor R<sub>G</sub> volíme v podadí M&#8486; s ohľadom na dosiahnutie veľkej hodnoty vstupného odporu. Hodnota R<sub>G</sub> bude obmedzená z hora za predpokladu, že budeme uvažovať s nenulovým prúdom I<sub>G</sub>. Za vysokých teplôt dochádza k nárastu záverného prúdu kremíkového P-N priechodu G-S na dvojnásobok pre každých 10 °C. V prípade výskytu pracovného bodu pri súčasne vysokých napätiach Uds a prúdoch I<sub>D</sub> zase dochádza k nárastu I<sub>G</sub> zvýšenou nárazovou ionizáciou. Najväčšiu hodnotu R<sub>G</sub> potom zistíme z podmienky, aby napätie na R<sub>G</sub> pri I<sub>G</sub> != 0 nebolo väčšie než zvolené napätie U<sub>GR</sub>. Napríklad pre U<sub>GR</sub> do 20 mV pri I<sub>GSS</sub> = 50 nA bude R<sub>G</sub> &lt; U<sub>RG</sub> / I<sub>G</sub> = 0,02 / 5*10<sup>-9</sup> = 4 m&#8486;</p>
        </div>


    </div>
    );
}

export default Week_6_example_1;