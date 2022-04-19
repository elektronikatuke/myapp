import React, { useEffect, useState } from 'react';
import Fractions from '../../komponenty/Fractions';
import '../../App.css';
import Aos from "aos";
import 'aos/dist/aos.css';
import Example_2_2 from '../../examples/examples_2/Druha/example_2_2';
import zenerova_ex_2_cm from"../../images/week_2_img/zenerova_ex_2_cm.png"

const Week_2_example_2 = () => {

    useEffect(() => {
        Aos.init({ duration: 2000});
      }, []);

    const [toggle, setToggle] = useState(false);

    function hide_elm(){
        setToggle(!toggle);
        console.log(toggle);
        if(toggle === true){
        document.getElementById("hide_elm").style.display = "none";
        }
        else{
          document.getElementById("hide_elm").style.display = "block"; 
        }
      }

    return(
        <div>
            <h1 className="nadpis"> 
                    Príklad č. 4
            </h1>


            <div data-aos="fade" className="flex_left">
                <p>Zadanie: Vypočítajte hodnotu odporu <b>R<sub>S</sub></b> z obr. , ak napätie zdroja je <b>U<sub>S</sub>=20V</b> a napätie Zenerovej diódy je <b>U<sub>Z</sub>=12V</b>.</p>
                {Example_2_2()}
                <p>Skús si zadanie vypočítať sám. Ak nevieš klikni nižšie pre zobrazenie správneho postupu</p>
            </div>

            <div data-aos="fade-left" className="flex_left">

                <p onClick={hide_elm} className="pointer">Zobraziť riešenie</p>

                <div id='hide_elm' style={{display: 'none'}}> 
                    <h2>Riešenie</h2>
                    <p>U<sub>R<sub>S</sub></sub> = U<sub>S</sub> - U<sub>Z</sub> = 20 - 12 = 8V</p>
                    <p>Podľa katalógu je prúd <b>I<sub>Z</sub> = 50mA</b></p>
                    <div className='div_friction'>
                        <p>R<sub>S</sub> = </p> 
                        <Fractions upper={<div>U<sub>R<sub>S</sub></sub></div>} lower={<div>I<sub>Z</sub></div>}/>
                        <p> = </p>
                        <Fractions upper="8" lower="0.05" />
                        <p> = 160Ω</p>
                    </div>
                    <p>U<sub>R<sub>S</sub></sub> je napätie na predradnom odpore R<sub>S</sub></p>
                    <p>I<sub>Z</sub> je dovolený prúd diódou</p>
                    <p>Obrázok vstupného a výstupného signálu k zadaniu</p>
                    <img src={zenerova_ex_2_cm} alt="Schema1" style={{width: '90%'}}></img>
                </div>
                
            </div>

            <div data-aos="fade-right" className="flex_left">
            

            </div>

        </div>
    );
}

export default Week_2_example_2;