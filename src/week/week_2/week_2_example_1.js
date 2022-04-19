import React, { useEffect } from 'react';
import Fractions from '../../komponenty/Fractions';
import '../../App.css';
import Aos from "aos";
import 'aos/dist/aos.css';
import Example_2_1 from '../../examples/examples_2/Prva/example_2_1';


const Week_2_example_1 = () => {

    useEffect(() => {
        Aos.init({ duration: 2000});
      }, []);

    return(
        <div>
        <h1 className="nadpis"> 
                Príklad č. 1 - Regulátor so Zenerovou diódou
        </h1>


        <div data-aos="fade" className="flex_left">
            <p>Navrhnite Zenerov regulátor (obr.) pre každú z nasledujúcich podmienok</p>
            {Example_2_1()}
            <p><b>a)</b> zaťažovací prúd sa pohybuje od <b>100 mA</b> do <b>200 mA</b> a napätie zdroja sa mení v rozsahu od <b>14 V</b> do <b>20 V</b>.</p>
            <p><b>b)</b> zaťažovací prúd sa pohybuje od <b>20 mA</b> do <b>200 mA</b> a napätie zdroja sa mení v rozsahu od <b>10,2 V</b> do <b>14 V</b>.</p>
            <p>V Zenerovom regulátore používame <b>10V</b> Zenerovu diódu.</p>
        </div>

        <div data-aos="fade-left" className="flex_left">
            <h2>Riešnie - a</h2>
            <p>Návrh pozostáva z výberu správnej hodnoty predradného odporu <b>Ri</b> a výpočtu menovitého výkonu pre Zenerovu diódu. </p>
            <p>Najskôr vypočítame hodnotu maximálneho prúdu Zenerovej diódy podľa rovnice, a potom vypočítame hodnotu vstupného odporu <b>Ri</b>.</p>
            <div className='div_friction'>
            <p>I<sub>Zmax</sub> = </p> 
            <Fractions upper="0.1(10-14) + 0.2(20-10)" lower="14 - 0.9 * 10 - 0.1 * 20"/>
            <p> = </p>
            <Fractions upper="1.6" lower="3" />
            <p> = 0.533 A</p>
            </div>
            <p>Potom z rovnice vypočítame hodnotu odporu <b>Ri</b>:</p>
            <div className='div_friction'>
                <p>R<sub>i</sub> = </p>
                <Fractions upper="U smax - U z" lower="I zmax"/>
                <p> = </p>
                <Fractions upper="20 - 10" lower="0.533 + 0.1"/>
                <p> = 15.8Ω</p>
            </div>
        </div>

        <div data-aos="fade-right" className="flex_left">
            <p>Pri návrhu stabilizátora nestačí vypočítať hodnotu predradného odporu <b>Ri</b>. Musíme tiež zistiť výkonovú záťaž reszistora.</p>
            <p>Maximálny výkon na odpore je daný súčinom napätia a prúdu, v oboch veličinách uvažujeme ich maximálne hodnoty</p>
            <p><b> 

                P<sub>R<sub>i</sub></sub> = I <sub>Rmax</sub> (U<sub>Smax</sub> - U<sub>Z</sub>) = (I<sub>Zmax</sub> - I<sub>Lmin</sub>) * (U<sub>Smax</sub> - U<sub>Z</sub>) = (0.53 + 0.1)(20 - 10) = 0.63 * 10 = 6.3 W

                </b></p>
            
            <p>Nakoniec určíme výkon Zenerovej diódy. Maximálny výkon rozptýlený v Zenerovej dióde je daný súčinom napätia a prúdu.</p>
            
            <p><b>
                
                P<sub>z</sub> = U<sub>z</sub> I<sub>zmax</sub> = 10.053 = 5.3 W

                </b></p>
        </div>

        <div data-aos="fade-left" className="flex_left">
            <h2> Riešnie - b </h2>
            <p>Zopakujeme výpočet hodnôt z bodu a):</p>
            <p>Vypočítame I<sub>Zmax</sub></p>
            <div className='div_friction'>
                <p>I<sub>Zmax</sub> = </p> 
                <Fractions upper="0.2(10 - 10.2) + 0.2(14-10)" lower="10.2 - 0.9 * 10 - 0.1 * 14"/>
                <p> = - 4 A</p>
            </div>

            <p>

            Záporná hodnota <b>I<sub>Zmax</sub></b> znamená, že rozsah hodnôt medzi <b>U<sub>Smin</sub></b> a <b>U<sub>Z</sub></b> nie je dostatočne veľký na to, 
            aby bolo reálne kolísanie zaťažovacieho prúdu. To znamená, že v prípade najhoršieho prípadu: najmenšieho vstupného napätia 10,2V a maximálnej hodnoty zaťažovacieho prúdu 200mA, 
            Zenerova dióda nedokáže stabilizovať napätie 10V na svojich svorkách a zároveň na výstupe stabilizátora.

            </p>

            <p>Preto regulátor nebude správne fungovať pri akejkoľvek hodnote odporu <b>Ri</b>.</p>
        
        

        </div>

    </div>
    );
}

export default Week_2_example_1;