import React from "react";
import '../../Home.css';
import '../../App.css';
import Kontainerintro from "../../komponenty/Kontainer_intro";




const intro_week_4 = () => {
    return(
        <div>
            <div className="home">
                <div className="nadpis-style">
                    <h1>Kapitola 4.</h1>
                
                </div>
            </div>

            <h2 className="stred">Teoretická časť</h2>

            <div className="tables">
                <Kontainerintro link="./week_4_pdf" text_link="Prednaska" text="Prezentácia"/>
            </div>
            
            
            <h2 className="stred">Podrobnejšie vysvetlenie na príkladoch</h2>
            
            <div className="tables">
                
                <Kontainerintro link="./week_4_example_1" text_link="Link" text="Prvý príklad"/>

                <Kontainerintro link="./week_4_example_2" text_link="Link" text="Druhý príklad"/>
            
                <Kontainerintro link="./week_4_example_3" text_link="Link" text="Tretí príklad"/>
                       
            </div>
            
            <h2 className="stred">Teraz skús viac sám</h2>
            
            <div className="tables">
                
                <Kontainerintro link="./week_4_example_4" text_link="Link" text="Prvá schéma"/>
                
                <Kontainerintro link="./week_4_example_5" text_link="Link" text="Druhá schéma"/>
        
            </div>
            
        <h2 className="stred">Otestuj sa</h2>
            <div className="tables">
               
               <Kontainerintro link="/quiz_4" text_link="QUIZ" text="Test"/>
                
            </div> 
        </div>
    );
}

export default intro_week_4;