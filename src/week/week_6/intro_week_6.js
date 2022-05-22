import React from "react";
import '../../Home.css';
import '../../App.css';
import Kontainerintro from "../../komponenty/Kontajner_intro";

const intro_week_6 = () => {
    return(
        <div>
            <div className="home">
                <div className="nadpis-style">
                    <h1>Unipolarne tranzistory, navrh zosilnovacov</h1>
                    <h2>V tejto kapitole sa pozrieme na unipolárne tranzistory a ich návrh zosilňovačov</h2>
              
                
                </div>
            </div>
            <div className="pozadie">
                <h2 className="stred">Teoretická časť</h2>

                <div className="tables">
                    <Kontainerintro link="./week_6_pdf" text_link="Prednaska" text="Prezentácia"/>
                </div>
                
                
                <h2 className="stred">Podrobnejšie vysvetlenie na príkladoch</h2>
                
                <div className="tables">
                    
                    <Kontainerintro link="./week_6_example_1" text_link="Link" text="Prvý príklad"/>

                    <Kontainerintro link="./week_6_example_2" text_link="Link_2" text="Druhý príklad"/>
                
                    <Kontainerintro link="./week_6_example_3" text_link="Link_3" text="Tretí príklad"/>
                        
                </div>
                
                <h2 className="stred">Teraz skús viac sám</h2>
                
                <div className="tables">
                    
                    <Kontainerintro link="./week_6_example_4" text_link="Link_4" text="Prvý príklad"/>
                    
                    <Kontainerintro link="./week_6_example_5" text_link="Link5" text="Druhá schéma"/>
            
                </div>

            <h2 className="stred">Neriešené príklady</h2>
                <div className="tables">
                    <Kontainerintro link="./week_6_neriesene" text_link="Neriešené príklady - unipolárne tranzistory" text="Neriešené príklady"/>     
                </div>

             
            <h2 className="stred">Otestuj sa</h2>
                <div className="tables">
                    <Kontainerintro link="" text_link="QUIZ" text="Test"/>     
                </div>

            </div>
        </div>
    );
}

export default intro_week_6;