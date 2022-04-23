import React, { useEffect, useState } from 'react';
import Fractions from '../../komponenty/Fractions';
import '../../App.css';
import Aos from "aos";
import 'aos/dist/aos.css';
import Example_4_5 from '../../examples/examples_4/Piata/example_4_5';
import Example_4_5_1 from '../../examples/examples_4/Piata/example_4_5_1';
import Example_4_5_2 from '../../examples/examples_4/Piata/example_4_5_2';



const Week_4_example_5 = () => {

    const [hideelement1, setElement1] = useState(false);
    const [hideelement2, setElement2] = useState(false);

    useEffect(() => {
        Aos.init({ duration: 2000});
      }, []);

    function hide_element_1(){
        setElement1(!hideelement1);
        if(hideelement1 === true){
          document.getElementById("reviel_1").style.display = "none";
          }
          else{
            document.getElementById("reviel_1").style.display = "block"; 
          }
      }
    
    function hide_element_2(){
        setElement2(!hideelement2);
        if(hideelement2 === true){
          document.getElementById("reviel_2").style.display = "none";
          }
          else{
            document.getElementById("reviel_2").style.display = "block"; 
          }
      }

    return(
        <div>
            <h1 className="nadpis"> 
                    Príklad č. 5
            </h1>


            <div data-aos="fade" className="flex_left">
                <p>Ak má obvod na obr. R<sub>B</sub> = 30 kΩ, R<sub>C</sub> = 20 kΩ, R<sub>E</sub> = 10 kΩ, R<sub>L</sub> = 80 kΩ, V<sub>CC</sub> = 30 V, V<sub>EE</sub> = 10 V, tranzistor β = 100 a v<sub>s</sub> = 100 µV ( rms),</p>
                <p><b>a)</b> nájdite hodnoty A<sub>e</sub>, A<sub>p</sub> a v<sub>o</sub>, keď je R<sub>E</sub> obídený pomocou C3</p>
                <p><b>b)</b> nájsť tieto hodnoty, keď RE nie je obídený.</p>
                {Example_4_5()}
            </div>

            <div className="flex_left" data-aos="fade" >
                <h2>Riešenie:</h2>
                
                <p onClick={hide_element_1} className="pointer">Riešenie a)</p>
                
                <p className="pointer" onClick={hide_element_2}>Riešenie b)</p>
                
                </div>

            <div id='reviel_1' className="reviel">
                <div data-aos="fade-left" className="flex_left">
                    <h2>Riešnie a)</h2>

                    <p>R<sub>E</sub> je teda premostený, pretože r<sub>L</sub> ≅ R<sub>C</sub> ∥ R<sub>L</sub> = 20 kΩ ∥ 80kΩ = 16 kΩ a prúd pokojového emitora je I<sub>E</sub> ≅ V<sub>EE</sub>/R<sub>E</sub> = (10 V)/(10 kΩ) = 1 mA. Potom:</p>
                    
                    <div className='div_friction'>
                        <p>r'<sub>e</sub> ≅ </p>
                        <Fractions upper="25 mV" lower={<div>I<sub>E</sub></div>} />
                        <p> ≅ </p>
                        <Fractions upper="25 mV" lower="1 mA"/>
                        <p>= 25Ω</p>
                    </div>

                    <p>Ekvivalentný obvod je znázornený na obr.</p>
                    {Example_4_5_1()}
                    
                </div>

                <div data-aos="fade-right" className="flex_left">
                    
                    <p>Keďže &emsp; v<sub>0</sub> = -i<sub>C</sub>r<sub>L</sub> , &emsp; r'<sub>b</sub> = βr'<sub>e</sub> , &emsp; i<sub>C</sub> = βi<sub>b</sub></p>
                    
                    <div className='div_friction'>
                        <p>a &emsp;</p>
                        <p>i<sub>b</sub> = </p>
                        <Fractions upper={<div>v<sub>S</sub></div>} lower={<div>( R<sub>B</sub> ∥ βr'<sub>e</sub>)</div>} />
                    </div>

                    <div className='div_friction'>
                        <p>Máme &emsp;</p>
                        <p>v<sub>0</sub> = </p>
                        <Fractions upper={<div>βr<sub>L</sub></div>} lower={<div>R<sub>B</sub> ∥ βr'<sub>e</sub></div>} />
                        <p>v<sub>S</sub></p>
                    </div>

                    <p>Pretože &emsp; βr'<sub>e</sub> = 2,5 kΩ ≪ R<sub>B</sub>, R<sub>B</sub> ∥ βr'<sub>e</sub> = βr'<sub>e</sub></p>
                    <p>Takže</p>

                    <div className='div_friction'>
                        <p>A<sub>e</sub> = </p>
                        <Fractions upper={<div>V<sub>0</sub></div>} lower={<div>V<sub>S</sub></div>} />
                        <p> = </p>
                        <Fractions upper={<div>βr<sub>L</sub></div>} lower={<div>βr'<sub>e</sub></div>} />
                    </div>

                    <div className='div_friction'>
                        <p>A<sub>e</sub> ≅ </p>
                        <Fractions upper={<div>r<sub>L</sub></div>} lower={<div>r'<sub>e</sub></div>} />
                        <p> = </p>
                        <Fractions upper="16,000" lower="25" />
                        <p> = 640</p>
                    </div>

                    <p>Taktiež &emsp; A<sub>p</sub> = A<sub>e</sub>A<sub>i</sub> ≅ A<sub>e</sub>β ≅ 640(100) = 64,000</p>
                    <p> a nakoniec &emsp; v<sub>0</sub> = A<sub>e</sub>v<sub>s</sub> ≅ 640(100 μV) = 64 mV (rms)</p>

                </div>
            </div>   

            <div id='reviel_2' className="reviel">
                <div data-aos="fade-right" className="flex_left">
                    <h2> Riešenie b)</h2>
                    <p>Ak R<sub>E</sub> nie je premostený, je použiteľný ekvivalentný obvod na obr. </p>
                    {Example_4_5_2()}
                    <p>Vstupné napätie je</p>
                    <p>v<sub>S</sub> = β(R<sub>E</sub> +r'<sub>e</sub> ) ≈ βR<sub>E</sub>i<sub>b</sub></p>      
                    <p>Výstupné napätie je</p>      
                    <p>v<sub>0</sub> = i<sub>C</sub>r<sub>L</sub> = βr<sub>L</sub>i<sub>b</sub></p> 
                    <p>Preto je zisk napätia</p>

                    <div className='div_friction'>
                        <p>A<sub>e</sub> ≅ </p>
                        <Fractions upper={<div>r<sub>L</sub></div>} lower={<div>R<sub>E</sub></div>} />
                        <p> = </p>
                        <Fractions upper="16 kΩ" lower="10 kΩ" />
                        <p> = 1.6</p>
                    </div>

                    <p>a &emsp; A<sub>p</sub> = A<sub>e</sub>A<sub>i</sub> = A<sub>e</sub>β ≅ 1.6(100) = 160</p>
                    <p> a nakoniec</p>
                    <p>v<sub>0</sub> = A<sub>e</sub>v<sub>S</sub> ≅ 1.6(100 μV) = 160 μV  (rms)</p>
                
                </div>
            </div>
        </div>
    );
}

export default Week_4_example_5;