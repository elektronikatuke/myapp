import React from "react";
import './App.css';
import Navbar from './things/Navbar';
import ScrollToTop from "./komponenty/ScrollToTop";
import Footer from "./komponenty/Footer";
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from "./Home";
import Docs from "./Docs";


import intro_week_1 from "./week/week_1/intro_week_1";
import Example_1 from "./week/week_1/week_1_example-1";
import Example_2 from "./week/week_1/week_1_example-2";
import Example_4 from "./week/week_1/week_1_example-4";
import Example_3 from "./week/week_1/week_1_example-3";
import Example_5 from "./week/week_1/week_1_example-5";
import Quiz1 from "./week/week_1/quiz1";

import intro_week_2 from "./week/week_2/intro_week_2";
import Week_2_example_1 from "./week/week_2/week_2_example_1";
import Week1pdf from "./week/week_1/week_1_pdf";
import Week_2_example_2 from "./week/week_2/week_2_example_2";
import Week_2_example_3 from "./week/week_2/week_2_example_3";
import Week_2_example_4 from "./week/week_2/week_2_example_4";
import Week_2_example_5 from "./week/week_2/week_2_example_5";


import Week3pdf from "./week/week_3/week_3_pdf";
import intro_week_3 from "./week/week_3/intro_week_3";
import Week_3_ex_3_1 from "./week/week_3/week_3_example_3_1";

import intro_week_4 from "./week/week_4/intro_week_4";
import Week_4_example_1 from "./week/week_4/week_4_example_1";
import Week_4_example_2 from "./week/week_4/week_4_example_2";
import Week_4_example_3 from "./week/week_4/week_4_example_3";
import Week_4_example_4 from "./week/week_4/week_4_example_4";
import Week_4_example_5 from "./week/week_4/week_4_example_5";




const First_page = () =>{
  return(
   
      <HashRouter>
        <Navbar />
        <ScrollToTop />
        
          <Switch>
            <Route exact path='/' component={Home}/>
           
            <Route path='/Docs' component={Docs}/>
            
            <Route path='/week/week_1/week_1_example-1' component={Example_1} />
            <Route path='/week/week_1/week_1_example-2' component={Example_2} />
            <Route path='/week/week_1/week_1_example-3' component={Example_3} />
            <Route path='/week/week_1/week_1_example-4' component={Example_4} />
            <Route path='/week/week_1/week_1_example-5' component={Example_5} />
            <Route path='/week/week_1/intro_week_1' component={intro_week_1} />
            <Route path='/week/week_1/quiz1' component={Quiz1}/>
            <Route path='/week/week_1/week_1_pdf' component={Week1pdf}/>
          
            <Route path='/week/week_2/intro_week_2' component={intro_week_2} />
            <Route path='/week/week_2/week_2_example_1' component={Week_2_example_1} />
            <Route path='/week/week_2/week_2_example_2' component={Week_2_example_2}/>
            <Route path='/week/week_2/week_2_example_3' component={Week_2_example_3}/>
            <Route path='/week/week_2/week_2_example_4' component={Week_2_example_4}/>
            <Route path='/week/week_2/week_2_example_5' component={Week_2_example_5}/>

            <Route path='/week/week_3/intro_week_3' component={intro_week_3} />
            <Route path='/week/week_3/week_3_pdf' component={Week3pdf}/>
            <Route path='/week/week_3/week_3_example_3_1' component={Week_3_ex_3_1}/>

            <Route path='/week/week_4/intro_week_4' component={intro_week_4} />
            <Route path='/week/week_4/week_4_example_1' component={Week_4_example_1}/>
            <Route path='/week/week_4/week_4_example_2' component={Week_4_example_2}/>
            <Route path='/week/week_4/week_4_example_3' component={Week_4_example_3}/>
            <Route path='/week/week_4/week_4_example_4' component={Week_4_example_4}/>
            <Route path='/week/week_4/week_4_example_5' component={Week_4_example_5}/>

          </Switch>
        
        <Footer />
      </HashRouter>
     
    
  );
}


export default First_page;
