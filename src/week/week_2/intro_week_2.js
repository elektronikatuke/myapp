import React from "react";
import '../../Home.css';
import '../../App.css';
import Kontainerintro from "../../komponenty/Kontainer_intro";
import zenerova_ex_1 from"../../images/week_2_img/zenerova_ex_1.png";
import zenerova_ex_2 from"../../images/week_2_img/zenerova_ex_2.png";
import zenerova_ex_3 from"../../images/week_2_img/zenerova_ex_3.png";
import zenerova_ex_4 from"../../images/week_2_img/zenerova_ex_4.png";




const intro_week_2 = () => {
    return(
        <div>
            <div className="home">
                <div className="nadpis-style">
                    <h1>Zenerova dioda</h1>
                    <h2>V tejto kapitole sa pozrieme na zenerové diódy, výpočet a určovanie ich regulátorov...</h2>
                </div>
            </div>

            <h2 className="stred">Teoretická časť</h2>
            <div className="tables">
                <Kontainerintro text="Prednáška"/>
            
            </div>
            
            
            <h2 className="stred">Podrobnejšie vysvetlenie na príkladoch</h2>
            
            <div className="tables">

                <Kontainerintro link="week_2_example_1" text_link={<img src={zenerova_ex_1} alt="Schema1"></img>} text="Prvý príklad"/>
                
                <Kontainerintro link="week_2_example_3" text_link={<img src={zenerova_ex_3} alt="Schema3"></img>} text="Druhý príklad"/>

                <Kontainerintro link="week_2_example_4" text_link={<img src={zenerova_ex_4} alt="Schema3"></img>} text="Tretí príklad"/>

                       
                </div>
                       
                   <h2 className="stred">Teraz skús viac sám</h2>
                       
                   <div className="tables">
                           
                        <Kontainerintro text="Prvý príklad" link="week_2_example_2" text_link={<img src={zenerova_ex_2} alt="Schema2"></img>}/>    
                       
                        <Kontainerintro text="Druhá schéma"/>
                   
                       </div>
                       
                   <h2 className="stred">Otestuj sa</h2>
                       <div className="tables">
                          
                          <Kontainerintro text_link="QUIZ" text="Test"/>
                           
                       </div> 
                   </div>
    );
}

export default intro_week_2;