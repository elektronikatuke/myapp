import React from "react";
import '../../Home.css';
import '../../App.css';
import Kontainerintro from "../../komponenty/Kontajner_intro";
import orb_1 from "../../images/week_7_img/prva.png"
import orb_2 from "../../images/week_7_img/druha.png"
import orb_3 from "../../images/week_7_img/tretia.png"
import orb_4 from "../../images/week_7_img/stvrta.png"
import orb_5 from "../../images/week_7_img/piata.png"




const intro_week_7 = () => {
    return(
        <div>
            <div className="home">
                <div className="nadpis-style">
                    <h1>Operačné zosilňovače</h1>
                    <h2>V tejto kapitole sa pozrieme na operačné zosilňovače</h2>
                </div>
            </div>
            <div className="pozadie">
            <h2 className="stred">Teoretická časť</h2>

            <div className="tables">
                <Kontainerintro link="./week_7_pdf" text_link="Prednaska" text="Prezentácia"/>
            </div>
            
            
            
            <h2 className="stred">Podrobnejšie vysvetlenie na príkladoch</h2>
            
            <div className="tables">
                
                <Kontainerintro link="../week_7/week_7_example-1" text_link={<img src={orb_1} alt="Schema1"></img>} text="Prvý príklad"/>

                <Kontainerintro link="../week_7/week_7_example-2" text_link={<img src={orb_2} alt="Schema1"></img>} text="Druhý príklad"/>
            
                <Kontainerintro link="../week_7/week_7_example-3" text_link={<img src={orb_5} alt="Schema1"></img>} text="Tretí príklad"/>
                       
            </div>
            
            <h2 className="stred">Teraz skús viac sám</h2>
            
            <div className="tables">
                
                <Kontainerintro link="../week_7/week_7_example-4" text_link={<img src={orb_3} alt="Schema1"></img>} text="Prvá schéma"/>
                
                <Kontainerintro link="../week_7/week_7_example-5" text_link={<img src={orb_4} alt="Schema1"></img>} text="Druhá schéma"/>
        
            </div>
            
        <h2 className="stred">Otestuj sa</h2>
            <div className="tables">
               
               <Kontainerintro link="../week_7/quiz7" text_link="QUIZ" text="Test"/>
                
            </div> 
        </div>
        </div>
    );
}

export default intro_week_7;