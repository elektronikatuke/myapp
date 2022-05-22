import React from "react";
import './App.css';
import Navbar from './things/Navbar';
import ScrollToTop from "./komponenty/ScrollToTop";
import Footer from "./komponenty/Footer";
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from "./Home";
import Docs from "./Docs";
import Testy from "./komponenty/Testy";


import intro_week_1 from "./week/week_1/intro_week_1";
import Example_1 from "./week/week_1/week_1_example-1";
import Example_2 from "./week/week_1/week_1_example-2";
import Example_4 from "./week/week_1/week_1_example-4";
import Example_3 from "./week/week_1/week_1_example-3";
import Example_5 from "./week/week_1/week_1_example-5";
import Neriesene_1 from "./week/week_1/week_1_neriesene_1";
import Quiz1 from "./week/week_1/quiz1";

import intro_week_2 from "./week/week_2/intro_week_2";
import Week_2_example_1 from "./week/week_2/week_2_example_1";
import Week1pdf from "./week/week_1/week_1_pdf";
import Week_2_example_2 from "./week/week_2/week_2_example_2";
import Week_2_example_3 from "./week/week_2/week_2_example_3";
import Week_2_example_4 from "./week/week_2/week_2_example_4";
import Week_2_example_5 from "./week/week_2/week_2_example_5";
import Neriesene_2_1 from "./week/week_2/week_2_neriesene_1";


import Week3pdf from "./week/week_3/week_3_pdf";
import intro_week_3 from "./week/week_3/intro_week_3";
import Week_3_ex_3_1 from "./week/week_3/week_3_example_3_1";
import Week_3_ex_3_2 from "./week/week_3/week_3_example_3_2";
import Week_3_ex_3_3 from "./week/week_3/week_3_example_3_3";
import Week_3_ex_3_4 from "./week/week_3/week_3_example_3_4";
import Neriesene_3 from "./week/week_3/week_3_neriesene";

import intro_week_4 from "./week/week_4/intro_week_4";
import Week4pdf from "./week/week_4/week_4_pdf";
import Week_4_example_1 from "./week/week_4/week_4_example_1";
import Week_4_example_2 from "./week/week_4/week_4_example_2";
import Week_4_example_3 from "./week/week_4/week_4_example_3";
import Week_4_example_4 from "./week/week_4/week_4_example_4";
import Week_4_example_5 from "./week/week_4/week_4_example_5";
import Neriesene_4 from "./week/week_4/week_4_neriesene";

import intro_week_6 from "./week/week_6/intro_week_6";
import Week6pdf from "./week/week_6/week_6_pdf";
import Week_6_example_1 from "./week/week_6/week_6_example_1";
import Week_6_example_2 from "./week/week_6/week_6_example_2";
import Week_6_example_3 from "./week/week_6/week_6_example_3";
import Week_6_example_4 from "./week/week_6/week_6_example_4";
import Week_6_example_5 from "./week/week_6/week_6_example_5";
import Neriesene_6 from "./week/week_6/week_6_neriesene";

import intro_week_7 from "./week/week_7/intro_week_7";
import Week_7_1 from "./week/week_7/week_7_example-1";
import Week_7_2 from "./week/week_7/week_7_example-2";
import Week_7_3 from "./week/week_7/week_7_example-3";
import Week_7_4 from "./week/week_7/week_7_example-4";
import Week_7_5 from "./week/week_7/week_7_example-5";


const First_page = () =>{
  return(
   
      <HashRouter>
        <Navbar />
        <ScrollToTop />
        
          <Switch>
            <Route exact path='/' component={Home}/>
           
            <Route path='/Docs' component={Docs}/>
            <Route path='/komponenty/Testy' component={Testy}/>
            
            <Route path='/week/week_1/week_1_example-1' component={Example_1} />
            <Route path='/week/week_1/week_1_example-2' component={Example_2} />
            <Route path='/week/week_1/week_1_example-3' component={Example_3} />
            <Route path='/week/week_1/week_1_example-4' component={Example_4} />
            <Route path='/week/week_1/week_1_example-5' component={Example_5} />
            <Route path='/week/week_1/intro_week_1' component={intro_week_1} />
            <Route path='/week/week_1/week_1_neriesene_1' component={Neriesene_1} />
            <Route path='/week/week_1/quiz1' component={Quiz1}/>
            <Route path='/week/week_1/week_1_pdf' component={Week1pdf}/>
          
            <Route path='/week/week_2/intro_week_2' component={intro_week_2} />
            <Route path='/week/week_2/week_2_example_1' component={Week_2_example_1} />
            <Route path='/week/week_2/week_2_example_2' component={Week_2_example_2}/>
            <Route path='/week/week_2/week_2_example_3' component={Week_2_example_3}/>
            <Route path='/week/week_2/week_2_example_4' component={Week_2_example_4}/>
            <Route path='/week/week_2/week_2_example_5' component={Week_2_example_5}/>
            <Route path='/week/week_2/week_2_neriesene_1' component={Neriesene_2_1}/>

            <Route path='/week/week_3/intro_week_3' component={intro_week_3} />
            <Route path='/week/week_3/week_3_pdf' component={Week3pdf}/>
            <Route path='/week/week_3/week_3_example_3_1' component={Week_3_ex_3_1}/>
            <Route path='/week/week_3/week_3_example_3_2' component={Week_3_ex_3_2}/>
            <Route path='/week/week_3/week_3_example_3_3' component={Week_3_ex_3_3}/>
            <Route path='/week/week_3/week_3_example_3_4' component={Week_3_ex_3_4}/>
            <Route path='/week/week_3/week_3_neriesene' component={Neriesene_3}/>
            

            <Route path='/week/week_4/intro_week_4' component={intro_week_4} />
            <Route path='/week/week_4/week_4_pdf' component={Week4pdf} />
            <Route path='/week/week_4/week_4_example_1' component={Week_4_example_1}/>
            <Route path='/week/week_4/week_4_example_2' component={Week_4_example_2}/>
            <Route path='/week/week_4/week_4_example_3' component={Week_4_example_3}/>
            <Route path='/week/week_4/week_4_example_4' component={Week_4_example_4}/>
            <Route path='/week/week_4/week_4_example_5' component={Week_4_example_5}/>
            <Route path='/week/week_4/week_4_neriesene' component={Neriesene_4}/>

            <Route path='/week/week_6/intro_week_6' component={intro_week_6} />
            <Route path='/week/week_6/week_6_pdf' component={Week6pdf} />
            <Route path='/week/week_6/week_6_example_1' component={Week_6_example_1}/>
            <Route path='/week/week_6/week_6_example_2' component={Week_6_example_2}/>
            <Route path='/week/week_6/week_6_example_3' component={Week_6_example_3}/>
            <Route path='/week/week_6/week_6_example_4' component={Week_6_example_4}/>
            <Route path='/week/week_6/week_6_example_5' component={Week_6_example_5}/>
            <Route path='/week/week_6/week_6_neriesene' component={Neriesene_6}/>

            <Route path='/week/week_7/intro_week_7' component={intro_week_7} />
            <Route path='/week/week_7/week_7_example-1' component={Week_7_1}/>
            <Route path='/week/week_7/week_7_example-2' component={Week_7_2}/>
            <Route path='/week/week_7/week_7_example-3' component={Week_7_3}/>
            <Route path='/week/week_7/week_7_example-4' component={Week_7_4}/>
            <Route path='/week/week_7/week_7_example-5' component={Week_7_5}/>


          </Switch>
        
        <Footer />
      </HashRouter>
     
    
  );
}


export default First_page;
