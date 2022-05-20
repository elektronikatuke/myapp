import React, { useEffect } from "react";
import './App.css';
import './Home.css';
import Aos from "aos";
import 'aos/dist/aos.css';
import Kontainer from "./komponenty/Kontainer";


const Home = () => {
    useEffect(() => {
    Aos.init({ duration: 1500});
    }, []);
    
    return (
        <>
        <div className="home">
        <div className="nadpis-style">
        <h1>Vitaj na stránke, ktorá ti pomôže lepšie pochopiť základy elektroniky</h1>
        </div>
        </div>
        <div className="tables" data-aos="zoom-in-up">
            
            
            <Kontainer link="/week/week_1/intro_week_1" text="V tejto kapitole sa pozrieme na polovodičové diódy, výpočet a určovanie ich VA charakteristík z priložených príkladov"   text_link="1. Kapitola"/>
            
            <Kontainer link="/week/week_2/intro_week_2" text_link="2. Kapitola" text="V tejto kapitole sa pozrieme na zenerové diódy, výpočet a určovanie ich regulátorov"/>
            
            <Kontainer link="/week/week_3/intro_week_3" text_link="3. Kapitola" text="V tejto kapitole sa pozrieme na bipolárne tranzistory, ich charakteristiky, zatazovacie DC a AC priamky a pracovný bod"/>
           
            <Kontainer link="/week/week_4/intro_week_4" text_link="4. Kapitola" text="V  tejto kapitole sa pozrieme na bipolárne tranzistory ich nahradne striedave modely a výpočet striedaveho zisku"/>
            
            <Kontainer link="/week/week_6/intro_week_6" text_link="5. Kapitola" text="V  tejto kapitole sa pozrieme na Unipolarne tranzistory a návrh ich zosilnovačov "/>            
            
            <Kontainer link="/week/week_7/intro_week_7" text_link="6. Kapitola" text="V tejto kapitole sa pozrieme na operačné zosilňovače"/>
           
            
           
        </div>

        <div className="tables" data-aos="zoom-in-up">
            
            
            <Kontainer link="/komponenty/Testy" text="Všetky testy"   text_link="Testy"/>
            
            <Kontainer link="/Docs" text_link="Prídavné materiály" text="Doplňujúce materiály"/>
               
        </div>
      
        </>
      );

}
export default Home

