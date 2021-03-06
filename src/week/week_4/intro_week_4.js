import React from "react";
import '../../Home.css';
import '../../App.css';
import Kontainerintro from "../../komponenty/Kontajner_intro";
import prva_schema_4 from"../../images/week_4_img/prva_schema_4.png";
import druha_schema_4 from"../../images/week_4_img/druha_schema_4.png";
import tretia_schema_4 from"../../images/week_4_img/tretia_schema_4.png";
import stvrta_schema_4 from"../../images/week_4_img/stvrta_schema_4.png";
import piata_schema_4 from"../../images/week_4_img/piata_schema_4.png";




const intro_week_4 = () => {
    return(
        <div>
            <div className="home">
                <div className="nadpis-style">
                    <h1>Bipolarne tranzistory</h1>
                    <h2>V tejto kapitole sa pozrieme na bipolárne tranzistory ich náhradné striedavé modely a výpočet striedavého zisku, návrh zosilňovačov</h2>
                
                </div>
            </div>
            <div className="pozadie">
                <h2 className="stred">Teoretická časť</h2>

                <div className="tables">
                    <Kontainerintro link="./week_4_pdf" text_link="Prednaska" text="Prezentácia"/>
                </div>
                
                
                <h2 className="stred">Podrobnejšie vysvetlenie na príkladoch</h2>
                
                <div className="tables">
                    
                    <Kontainerintro link="./week_4_example_1" text_link={<img src={prva_schema_4} alt="Schema1"></img>} text="Prvý príklad"/>

                    <Kontainerintro link="./week_4_example_2" text_link={<img src={druha_schema_4} alt="Schema2"></img>} text="Druhý príklad"/>
                
                    <Kontainerintro link="./week_4_example_3" text_link={<img src={tretia_schema_4} alt="Schema3"></img>} text="Tretí príklad"/>
                        
                </div>
                
                <h2 className="stred">Teraz skús viac sám</h2>
                
                <div className="tables">
                    
                    <Kontainerintro link="./week_4_example_4" text_link={<img src={stvrta_schema_4} alt="Schema4"></img>} text="Prvá schéma"/>
                    
                    <Kontainerintro link="./week_4_example_5" text_link={<img src={piata_schema_4} alt="Schema4"></img>} text="Druhá schéma"/>
            
                </div>
                
                <h2 className="stred">Neriešené príklady</h2>
                <div className="tables">
                    <Kontainerintro link="./week_4_neriesene" text_link="Neriešené príklady ku tejto kapitole" text="Neriešené príklady"/>    
                </div>  

                <h2 className="stred">Otestuj sa</h2>
                <div className="tables">
                    <Kontainerintro link="./quiz4" text_link="QUIZ" text="Test"/>  
                </div> 
            
            </div>
        </div>
    );
}

export default intro_week_4;