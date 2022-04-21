import React from "react";
import '../../Home.css';
import schema_4 from '../../images/week_1_img/Schema_2.png';
import schema_1 from '../../images/week_1_img/prva_schema.png';
import schema_2 from '../../images/week_1_img/Tretia_schema.png';
import schema_3 from '../../images/week_1_img/Piata_schema.png';
import schema_6 from '../../images/week_1_img/Siesta_schema.png'
import '../../App.css';
import Kontainerintro from "../../komponenty/Kontainer_intro";




const intro_week_1 = () => {
    return(
        <div>
            <div className="home">
                <div className="nadpis-style">
                    <h1>Polovodiče. Polovodičové diódy</h1>
                    <h2>V tejto kapitole sa pozrieme na polovodičové diódy, výpočet a určovanie ich <b>VA</b> charakteristík z priložených príkladov</h2>
                </div>
            </div>

            <h2 className="stred">Teoretická časť</h2>

            <div className="tables">
                <Kontainerintro link="./week_1_pdf" text_link="Prednaska" text="Prezentácia"/>
            </div>
            
            
            
            <h2 className="stred">Podrobnejšie vysvetlenie na príkladoch</h2>
            
            <div className="tables">
                
                <Kontainerintro link="../week_1/week_1_example-1" text_link={<img src={schema_1} alt="schema1"></img>} text="Prvý príklad"/>

                <Kontainerintro link="../week_1/week_1_example-2" text_link={ <img src={schema_2} alt="schema2"></img>} text="Druhý príklad"/>
            
                <Kontainerintro link="../week_1/week_1_example-3" text_link={<img src={schema_3} alt="schema3"></img>} text="Tretí príklad"/>
                       
            </div>
            
            <h2 className="stred">Teraz skús viac sám</h2>
            
            <div className="tables">
                
                <Kontainerintro link="../week_1/week_1_example-4" text_link={<img src={schema_4} alt="schema2"></img>} text="Prvá schéma"/>
                
                <Kontainerintro link="../week_1/week_1_example-5" text_link={<img src={schema_6} alt="schema6"></img>} text="Druhá schéma"/>
        
            </div>
            
        <h2 className="stred">Otestuj sa</h2>
            <div className="tables">
               
               <Kontainerintro link="../week_1/quiz1" text_link="QUIZ" text="Test"/>
                
            </div> 
        </div>
    );
}

export default intro_week_1;