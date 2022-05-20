import React from 'react';
import '../../../App.css';


const Prva_schema_skrat = () => {


  function startanime() {
     
     document.getElementById("hoverdiody").setAttribute('class', 'hoverdiod-action')
     setTimeout(() => {
      document.getElementById("hoverdiody").style.opacity = "0%"
      document.getElementById("hoverdiody").setAttribute('class', 'hoverdiod')
    }, 2000);
    setTimeout(() => {
      document.getElementById("hoverdiody").style.stroke = "black"
      document.getElementById("hoverdiody").style.opacity = "100%"
    }, 17000);
    
    /*Nastavenie vykreslenia vzorca*/
    setTimeout(() => {
      document.getElementById('hide').style.opacity = "100%";
    }, 4500);
    setTimeout(() => {
      document.getElementById('hide1').style.opacity = "100%"
    }, 8000);
    setTimeout(() => {
      document.getElementById('hide2').style.opacity = "100%"
    }, 9500);
   
    setTimeout(() => {
      document.getElementById('hide').style.opacity = '0%';
      document.getElementById('hide1').style.opacity = '0%';
      document.getElementById('hide2').style.opacity = '0%';
    }, 15000);
  }
 
  
  function AnimatedButton() {
    setTimeout(() => {
      document.getElementById("redarrow").setAttribute('class', 'shake')
    }, 2000);
    setTimeout(() => {
      document.getElementById("redarrow").setAttribute('class', 'null')}, 17000);
  }
    
    return( 
        <>
        <div className="anime" id='responsive'>
          <svg
            viewBox="0 0 600 350"
            width="100%"
            height="100%"
          >       
          <circle cx="8" cy="50" r="6" stroke="black" strokeWidth="2" fill="none"/>{/* Zdroj */}
            <circle cx="8" cy="250" r="6" stroke="black" strokeWidth="2" fill="none"/>{/* Zdroj */}
          
          <circle cx="300" cy="50" r="6" stroke="black" strokeWidth="2" fill="black"/>{/* Uzol */}
            <circle cx="300" cy="250" r="6" stroke="black" strokeWidth="2" fill="black"/>{/* Uzol */}
          
          <circle cx="514" cy="150" r="15" stroke="black" strokeWidth="2" fill="none"/>{/* Voltmeter */}
            <text x="538" y="157" fill="black" fontSize="24">U</text>{/* U0 */}
                <text x="555" y="157" fill="black" fontSize="16">0</text>{/* V0 */}
          
          <path fill="none"  d="M514 250H14" stroke="black" strokeWidth="2"></path>{/* Obvod */}
            <path fill="none"  d="M514 50H14" stroke="black" strokeWidth="2"></path>
                <path fill="none"  d="M514 50v200" stroke="black" strokeWidth="2"></path>
                    <path fill="none"  d="M300 50v200" stroke="black" strokeWidth="2"></path>

          <circle cx="300" cy="150" r="15" stroke="black" strokeWidth="2" fill="white"/>{/* Ampermeter */}
            <text x="320" y="157" fill="black" fontSize="24">I</text>{/* I0 */}
                <text x="330" y="157" fill="black" fontSize="16">0</text>{/* I0 */}
                    <path fill="none"  d="M315 60v50" stroke="black" strokeWidth="2"></path>
                        <polygon points="315,115 310,105 320,105"/>
                            <text x="320" y="100" fill="black" fontSize="24">I</text>{/* I */}
                                <text x="330" y="100" fill="black" fontSize="16">A</text>{/* A */}

          <g className="hoverdiod" id="hoverdiody">
            <rect x="485" y="175" rx="30" ry="30" width="60" height="60" opacity={0}/>
            <path d="M 494 220 l 20 -30" strokeWidth="2" fill="none" />{/* Dioda */}
              <path d="M 514 190 l 20 30" strokeWidth="2" fill="none"/>
                  <path d="M 493 220 l 42 0" strokeWidth="2" fill="none" />
                      <path d="M 493 190 l 42 0"  strokeWidth="2" fill="none" />
                  
            </g>

          <path fill="none"  d="M8 100v100" stroke="black" strokeWidth="2"></path>
            <polygon points="8,205 13,195 3,195"/>
                <text x="16" y="150" fill="black" fontSize="24">u</text>{/* u */}

          <path fill="none"  d="M8 40H48" stroke="black" strokeWidth="2"></path>
            <polygon points="55,40 45,35 45,45"/>
                <text x="20" y="36" fill="black" fontSize="24">I</text>{/* I */}

          
          <path fill="none"  d="M380 30H330" stroke="black" strokeWidth="2"></path>
            <polygon points="385,30 375,25 375,35"/> 
                <text x="340" y="27" fill="black" fontSize="24">I</text>{/* I B*/}
                    <text x="350" y="27" fill="black" fontSize="16">B</text>{/* I B*/}

          <path fill="white"  d="M150 40 L150 60 L200 60 L 200 40 Z" stroke="black" strokeWidth="2"></path> {/*R1*/}
            <text x="160" y="30" fill="black" fontSize="24">R 1</text>{/* R1 */}

          <path fill="white"  d="M504 70 L504 120 L524 120 L 524 70 Z" stroke="black" strokeWidth="2"></path> {/*R2*/}
            <text x="530" y="100" fill="black"fontSize="24">R 2</text>{/* R2 */}

          <svg>
            <path d="M46 6L36 0.226497V11.7735L46 6ZM0 7H37V5H0V7ZZ" fill="red" id='redarrow' className='redarrow' onClick={() => {
              startanime();
              AnimatedButton();  
            }}/>
            </svg>  
          <text x="50" y="320" fill='black' fontSize="24">u = </text>
          <text x="90" y="320" fill='black' fontSize="24" id='hide' className='hide'>i.R1</text>
          <text x="130" y="320" fill='black' fontSize="24" id='hide1' className='hide'>+ iB.R2</text>  
          <text x="215" y="320" fill='black' fontSize="24" id='hide2' className='hide'>+ U0</text>               
          </svg>
        </div>     
        </>
    );
}

export default Prva_schema_skrat;