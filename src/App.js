import './App.css'
import React, { useState } from 'react';
import LoginForm from './komponenty/LoginForm';
import First_page from './First_page';



function App(){

  const adminUser = {
    password: "elektronika"
  }

  const [user, SetUser] = useState({password: ""});
  const [error, setError] = useState("");
  
  


  const Login = details => {
   /* console.log(details) */  
   
    if (details.password === adminUser.password || sessionStorage.getItem('Password') === adminUser.password){
      console.log("Logged in");
      console.log(user.details);
        SetUser({
        password: details.password
        })
        sessionStorage.setItem('Password', user.password);
      } 
      else {
        console.log("Nesedí"); 
        console.log(user.details);
        setError("Nesprávne heslo");
      }
  }


  return(
   <div>
    {(user.password === adminUser.password || user.password === sessionStorage.getItem('Password')) ? (
      <div>
      <First_page />
      </div>
    ) : (
      <>
      <LoginForm Login={Login} error={error}/>
    
      </>
    )}
   </div>
  );
}

export default App;
