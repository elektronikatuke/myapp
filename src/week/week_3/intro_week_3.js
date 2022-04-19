import React from "react";
import '../../Home.css';
import '../../App.css';
import Kontainerintro from "../../komponenty/Kontainer_intro";




const intro_week_3 = () => {
    return(
        <div>
            <div className="home">
                <div className="nadpis-style">
                    <h1>Bipolárne tranzistory</h1>
                    <h2>V tejto kapitole sa pozrieme na bipolárne tranzistory.</h2>
                </div>
            </div>

            <h2 className="stred">Teoretická časť</h2>
            
            <div className="tables">
                <Kontainerintro link="./week_3_pdf" text_link="Prednaska" text="Prezentácia"/>
            </div>
        
            <h2 className="stred">Podrobnejšie vysvetlenie na príkladoch</h2>
            
            <div className="tables">
                
                <Kontainerintro link="week_3_example_3_1" text_link={"Link"} text="Prvý príklad"/>

                <Kontainerintro link="" text_link={""} text="Druhý príklad"/>
            
                <Kontainerintro link="" text_link={""} text="Tretí príklad"/>
                       
            </div>
            
            <h2 className="stred">Teraz skús viac sám</h2>
            
            <div className="tables">
                
                <Kontainerintro link="" text_link={""} text="Prvá schéma"/>
                
                <Kontainerintro link="" text_link={""} text="Druhá schéma"/>
        
            </div>
            
        <h2 className="stred">Otestuj sa</h2>
            <div className="tables">
               
               <Kontainerintro link="" text_link="QUIZ" text="Test"/>
                
            </div> 
        </div>
    );
}

export default intro_week_3;