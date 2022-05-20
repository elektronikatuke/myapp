import React from "react";

const Prva_schema = () => {
    return<svg
        width="600"
        height="300"
        viewBox="0 0 600 300"
        className="svg-path"
      >       
    <circle cx="8" cy="50" r="6" stroke="black" strokeWidth="2" fill="none"/>{/* Zdroj */}
      <circle cx="8" cy="250" r="6" stroke="black" strokeWidth="2" fill="none"/>{/* Zdroj */}
    
    <circle cx="300" cy="50" r="6" stroke="black" strokeWidth="2" fill="black"/>{/* Uzol */}
      <circle cx="300" cy="250" r="6" stroke="black" strokeWidth="2" fill="black"/>{/* Uzol */}
    
    <circle cx="514" cy="150" r="15" stroke="black" strokeWidth="2" fill="none"/>{/* Voltmeter */}
      <text x="538" y="157" fill="black" fontSize="24">U</text>{/* U0 */}
          <text x="555" y="157" fill="black" fontSize="16">0</text>{/* V0 */}
    
    <path fill="none"  d="M514 250H14" stroke="black" strokeWidth="2"></path>
    <path fill="none"  d="M514 50H14" stroke="black" strokeWidth="2"></path>
    <path fill="none"  d="M514 50v200" stroke="black" strokeWidth="2"></path>
    <path fill="none"  d="M300 50v200" stroke="black" strokeWidth="2"></path>

    <circle cx="300" cy="150" r="15" stroke="black" strokeWidth="2" fill="rgb(235, 235, 235)"/>{/* Ampermeter */}
      <text x="320" y="157" fill="black" fontSize="24">I</text>{/* I0 */}
          <text x="330" y="157" fill="black" fontSize="16">0</text>{/* I0 */}
              <path fill="none"  d="M315 60v50" stroke="black" strokeWidth="2"></path>
                  <polygon points="315,115 310,105 320,105"/>
                      <text x="320" y="100" fill="black" fontSize="24">I</text>{/* I */}
                          <text x="330" y="100" fill="black" fontSize="16">A</text>{/* A */}
    
    <path fill="none"  d="M8 100v100" stroke="black" strokeWidth="2"></path>
      <polygon points="8,205 13,195 3,195"/>
          <text x="16" y="150" fill="black" fontSize="24">u</text>{/* u */}

    <path fill="none"  d="M8 30H48" stroke="black" strokeWidth="2"></path>
      <polygon points="55,30 45,25 45,35"/>
          <text x="20" y="20" fill="black" fontSize="24">I</text>{/* I */}

    
    <path fill="none"  d="M380 30H330" stroke="black" strokeWidth="2"></path>
      <polygon points="385,30 375,25 375,35"/> 
          <text x="340" y="20" fill="black" fontSize="24">I</text>{/* I B*/}
              <text x="350" y="20" fill="black" fontSize="16">B</text>{/* I B*/}
    <a href="#firstlink">
    <g className="hoverdiod" id="hoverdiod">
    <rect x="485" y="175" rx="30" ry="30" width="60" height="60" opacity={0}/>
    <path d="M 494 220 l 20 -30" strokeWidth="2" fill="none" />{/* Dioda */}
      <path d="M 514 190 l 20 30" strokeWidth="2" fill="none"/>
          <path d="M 493 220 l 42 0" strokeWidth="2" fill="none" />
              <path d="M 493 190 l 42 0"  strokeWidth="2" fill="none" />
           
    </g>
    </a>
                    <text x="545" y="215" fill="black" fontSize="24">I</text>{/* I D */}
                      <text x="555" y="215" fill="black" fontSize="16">D</text>{/* I D */}
                          <path fill="none"  d="M480 180v50" stroke="black" strokeWidth="2"></path>
                              <polygon points="480,170 485,180 475,180"/>
     
    <path fill="rgb(235, 235, 235)"  d="M150 40 L150 60 L200 60 L 200 40 Z" stroke="black" strokeWidth="2"></path> {/*R1*/}
      <text x="160" y="30" fill="black" fontSize="24">R 1</text>{/* R1 */}

    <path fill="rgb(235, 235, 235)"  d="M504 70 L504 120 L524 120 L 524 70 Z" stroke="black" strokeWidth="2"></path> {/*R2*/}
      <text x="530" y="100" fill="black"fontSize="24">R 2</text>{/* R2 */}
                    
  
    <text x="340" y="20" fill="black" fontSize="24">I</text>{/* I B*/}
      <text x="350" y="20" fill="black" fontSize="16">B</text>{/* I B*/}
    
   


    </svg> 
}

export default Prva_schema;