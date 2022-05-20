import React, { useEffect } from 'react';
import Fractions from '../../komponenty/Fractions';
import '../../App.css';
import Aos from "aos";
import 'aos/dist/aos.css';
import Example_6_2 from '../../examples/examples_6/Druha/example_6_2';
import Example_6_2_1 from '../../examples/examples_6/Druha/example_6_2_1';
const Week_6_example_2 = () => {

    useEffect(() => {
        Aos.init({ duration: 2000});
      }, []);

    return(
        <div>
        <h1 className="nadpis"> 
                Príklad č. 2
        </h1>


        <div data-aos="fade" className="flex_left">
            <p>Určte napäťové zosilnenie zosilňovača v triede A pre oblasť frekvencie v zapojení SS s tranzistorom JFET z obrázku. Hodnoty <b>R<sub>D</sub>  = 820 Ω, R<sub>S</sub> = 100 Ω, R<sub>G</sub> = 1 MΩ, U<sub>DD</sub> = 15 V, C<sub>vl</sub> = 10 µF, C<sub>b</sub> = 50 µF</b>, pokiaľ udáva katalóg súčiastok nasledujúce údaje: <b>y<sub>21S</sub> = 10 mA/V (min.), y<sub>21Smax</sub> = 20 mA/V (max.), y<sub>22S</sub> = 40 µS (typ.), I<sub>DSS</sub> = 19 mA, U<sub>GSOFF</sub>  = -2,2 V</b></p>.                  
            {Example_6_2()}
        </div>

        <div data-aos="fade-left" className="flex_left">
            <h2>Riešnie</h2>
            <p>Pre strednú oblasť frekvencie znamená hodnota blokovacieho kapacitora C<sub>b</sub> dostatočný skrat rezistoru R<sub>S</sub> a tým aj vyrazenie prípadnej zápornej spätnej väzby pre striedavé napätie. Napäťové zosilnenie bude preto dané vzťahom:   </p>
            <div className='div_friction'>
                <p>A<sub>u</sub> = </p>	
                <Fractions upper={<div>&#9651;u<sub>2</sub></div>} lower={<div>&#9651;u<sub>1</sub></div>}/>
                <p> = -y<sub>21S</sub> *</p>
                <p className='font35'>(</p>
                <p>R<sub>D</sub> || </p>
                <Fractions upper="1" lower={<div>y<sub>22s</sub></div>}/>
                <p className='font35'>)</p>
                <p>,&emsp; A<sub>u</sub> = -y<sub>21s</sub> * R<sub>D</sub>&emsp;pre R<sub>D</sub> &lt;&lt;</p>
                <Fractions upper="1" lower={<div>y<sub>22S</sub></div>}/>
            </div>  
            {Example_6_2_1()}
            <p>Hodnota y<sub>21s</sub> udávaná v katalógu pre U<sub>GS</sub> = 0 V, kedy je y<sub>21s</sub> najväčšie. Minimálna a maximálna hodnota pritom udáva rozptyl parametrov daný presnosťou výroby. Pre použitý tranzistor je závislosť y<sub>21s</sub> na U<sub>GS</sub> uvedená na obrázku pre prípad maximálnej dosiahnutej hodnoty y<sub>21s</sub></p>
            <p>V zadanom zapojení bude U<sub>GS</sub>= -0,8 V, pretože pracovný bod je približne zhodný s predchádzajúcimi príkladmi. Hodnota y<sub>21s</sub> potom bude zhruba 1/3 hodnoty uvádzanej pre U<sub>GS</sub> = 0 V. Pretože plati R, &lt;&lt; 1/y<sub>22s</sub>, bude zosilnený </p>
           
        </div>

        <div data-aos="fade-right" className="flex_left">
            <div className='div_friction'>
                    <p>A<sub>umax</sub> = </p>	
                    <Fractions upper={<div>&#9651;u<sub>2</sub></div>} lower={<div>&#9651;u<sub>1</sub></div>}/>
                    <p> = -y<sub>21Smax</sub> * R<sub>D</sub> = -6*10<sup>-3</sup> * 820 = <b>-4,9</b></p>
            </div>

            <div className='div_friction'>
                    <p>A<sub>umin</sub> = </p>	
                    <Fractions upper={<div>&#9651;u<sub>2</sub></div>} lower={<div>&#9651;u<sub>1</sub></div>}/>
                    <p> = -y<sub>21Smin</sub> * R<sub>D</sub> = -3*10<sup>-3</sup> * 820 = <b>-2,5</b></p>
            </div>         

            <p>V praxi obvykle nemáme uvedený graf y<sub>21s</sub> = f (U<sub>GS</sub>) k dispozícii, preto musíme pokles y<sub>21S</sub>, odhadnúť pomocou vzorca:</p>

                <div className='div_friction'>
                        <p>y<sub>21S</sub> = </p>	
                        <Fractions upper={<div>dl<sub>D</sub></div>} lower={<div>dU<sub>GS</sub></div>}/>
                        <p> = 2 *</p>
                        <Fractions upper={<div>I<sub>DSS</sub></div>} lower={<div>U<sup>2</sup><sub>GSOFF</sub></div>}/>
                        <p> * (U<sub>GS</sub> - U<sub>GSOFF</sub>) = konst. &radic;I<sub>D</sub>, kde konst. = </p>
                        <Fractions upper={<div>2 * &radic;I<sub>DSS</sub></div>} lower={<div>U<sub>GSOFF</sub></div>}/>
                </div>

                <p>Výsledok:</p>

                <div className='div_friction'>
                        <p>y<sub>21S</sub> = </p>	
                        <Fractions upper={<div>dl<sub>D</sub></div>} lower={<div>dU<sub>GS</sub></div>}/>
                        <p> = 2 *</p>
                        <Fractions upper={<div>I<sub>DSS</sub></div>} lower={<div>U<sup>2</sup><sub>GSOFF</sub></div>}/>
                        <p> * (U<sub>GS</sub> - U<sub>GSOFF</sub>) = 2 *</p>
                        <Fractions upper={<div>19*10<sup>-3</sup></div>} lower={<div>(-3)<sup>2</sup></div>}/>
                        <p>* [-0.8 - (-2.2)] = 6 [ma/V]</p>
                </div>

        </div>

    </div>
    );
}

export default Week_6_example_2;