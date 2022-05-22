import React from "react";
import Kontainerintro from "./Kontajner_intro";

const Testy = () => {
    return(
        <div>
            <div className="home">
                <div className="nadpis-style">
                    <h1>Testy</h1>
                    <h2>Tu nájdeš všetky testy pohromade</h2>
              
                
                </div>
            </div>
            <div className="pozadie">
                            
                <div className="tables">
                    
                    <Kontainerintro link="../week/week_1/quiz1" text_link="Test kapitola 1." text="Kapitola 1."/>

                    <Kontainerintro link="../week/week_2/quiz2" text_link="Test kapitola 2." text="Kapitola 2."/>

                    <Kontainerintro link="../week/week_3/quiz3" text_link="Test kapitola 3." text="Kapitola 3."/>

                    <Kontainerintro link="../week/week_4/quiz4" text_link="Test kapitola 4." text="Kapitola 4."/>

                    <Kontainerintro link="../week/week_6/quiz5" text_link="Test kapitola 5." text="Kapitola 5."/>

                    <Kontainerintro link="../week/week_7/quiz6" text_link="Test kapitola 6." text="Kapitola 6."/>

                    
                        
                </div>
                
            </div>
        </div>
    );
}

export default Testy;