import React from "react";
import '../../Home.css';
import '../../App.css';
import Kontainerintro from "../../komponenty/Kontajner_intro";

import example_1 from "../../images/week_3_img/example_1.png";
import example_2 from "../../images/week_3_img/example_2.png";
import example_3 from "../../images/week_3_img/example_3.png";
import example_4 from "../../images/week_3_img/example_4.png";




const intro_week_3 = () => {
    return(
        <div>
            <div className="home">
                <div className="nadpis-style">
                    <h1>Bipolárne tranzistory</h1>
                    <h2>V tejto kapitole sa pozrieme na bipolárne tranzistory, ich charakteristiky, zaťažovacie DC a AC priamky a pracovný bod.</h2>
                </div>
            </div>
        <div className="pozadie">
            <h2 className="stred">Teoretická časť</h2>
            
                <div className="tables">
                    <Kontainerintro link="./week_3_pdf" text_link="Prednaska" text="Prezentácia"/>
                </div>
            
                <h2 className="stred">Podrobnejšie vysvetlenie na príkladoch</h2>
                
                <div className="tables">
                    
                    <Kontainerintro link="week_3_example_3_1" text_link={<img src={example_1} alt="Schema1"></img>} text="Prvý príklad"/>

                    <Kontainerintro link="week_3_example_3_2" text_link={<img src={example_2} alt="Schema1"></img>} text="Druhý príklad"/>
                
                    <Kontainerintro link="week_3_example_3_3" text_link={<img src={example_3} alt="Schema1"></img>} text="Tretí príklad"/>
                        
                </div>
                
                <h2 className="stred">Teraz skús viac sám</h2>
                
                <div className="tables">
                    
                <Kontainerintro link="week_3_example_3_4" text_link={<img src={example_4} alt="Schema1"></img>} text="Prvý príklad"/>
                    
                <Kontainerintro link="week_3_example_5" text_link={"LINK"} text="Druhá schéma"/>
            
                </div>

            
                <h2 className="stred">Teraz skús viac sám</h2>
                
                <div className="tables">
                        
                <Kontainerintro link="week_3_neriesene" text_link="Neriešené príklady - zaťažovacie priamky a iné" text="Neriešené príklady"/>
            
                </div>
                
                <h2 className="stred">Otestuj sa</h2>
                <div className="tables">
                    
                    <Kontainerintro link="" text_link="QUIZ" text="Test"/>
                        
                </div> 
            </div>
        </div>
    );
}

export default intro_week_3;