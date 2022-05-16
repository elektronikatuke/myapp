import React from "react";
import "./Example_7_1.css"

function Example_7_1_2(){

    function AnimatedButton() {

        setTimeout(() => {
            document.getElementById("U1").style.opacity = '0%';
          }, 1000);
        setTimeout(() => {
            document.getElementById("U1").style.opacity = '100%';
          }, 14000);

        setTimeout(() => {
          document.getElementById("u1_arrow").setAttribute('class', 'U1_anime')
        }, 2000);
        setTimeout(() => {
          document.getElementById("u1_arrow").setAttribute('class', 'null')}, 
          14000);
      }
    
    return(
        <>
            <svg width="600" height="350" viewBox="-50 -25 600 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="65" y1="75" x2="118" y2="75" stroke="black" strokeWidth="2"/>
                <line x1="127" y1="75" x2="167" y2="75" stroke="black" strokeWidth="2"/>
                <line x1="121" y1="137" x2="121" y2="79" stroke="black" strokeWidth="2"/>
                <line x1="121" y1="237" x2="121" y2="191" stroke="black" strokeWidth="2"/>
                <line x1="193" y1="259" x2="193" y2="188" stroke="black" strokeWidth="2"/>
                <line x1="272" y1="163" x2="272" y2="78" stroke="black" strokeWidth="2"/>
                <line x1="414" y1="236" x2="414" y2="78" stroke="black" strokeWidth="2"/>
                <line x1="236" y1="164" x2="273" y2="164" stroke="black" strokeWidth="2"/>
                <line x1="120" y1="236" x2="415" y2="236" stroke="black" strokeWidth="2"/>
                <line x1="120" y1="191" x2="148" y2="191" stroke="black" strokeWidth="2"/>
                <line x1="120" y1="138" x2="148" y2="138" stroke="black" strokeWidth="2"/>
                <line x1="228" y1="75" x2="269" y2="75" stroke="black" strokeWidth="2"/>
                <line x1="275" y1="75" x2="316" y2="75" stroke="black" strokeWidth="2"/>
                <line x1="379" y1="75" x2="414" y2="75" stroke="black" strokeWidth="2"/>
                <line x1="419" y1="75" x2="469" y2="75" stroke="black" strokeWidth="2"/>
                <line x1="196" y1="263" x2="468" y2="263" stroke="black" strokeWidth="2"/>
                <line x1="64" y1="263" x2="190" y2="263" stroke="black" strokeWidth="2"/>
                <line x1="468" y1="138" x2="468" y2="75" stroke="black" strokeWidth="2"/>
                <line x1="468" y1="264" x2="468" y2="200" stroke="black" strokeWidth="2"/>
                <rect x="167" y="66" width="61" height="18" stroke="black" strokeWidth="2"/>
                <rect x="317" y="66" width="61" height="18" stroke="black" strokeWidth="2"/>
                <rect x="459" y="200" width="61" height="18" transform="rotate(-90 459 200)" stroke="black" strokeWidth="2"/>
                <path d="M51.5489 255.892C52.0417 256.142 52.6433 255.944 52.8925 255.451L56.9527 247.419C57.2019 246.926 57.0043 246.325 56.5114 246.075C56.0185 245.826 55.417 246.024 55.1678 246.517L51.5587 253.656L44.4191 250.047C43.9262 249.798 43.3246 249.996 43.0755 250.489C42.8263 250.981 43.0239 251.583 43.5168 251.832L51.5489 255.892ZM51.0517 82.6826C39.5099 117.162 34.0892 143.878 34.2775 170.223C34.4658 196.566 40.2619 222.467 51.0499 255.312L52.9501 254.688C42.1904 221.93 36.4636 196.254 36.2775 170.209C36.0913 144.167 41.4444 117.684 52.9483 83.3174L51.0517 82.6826Z" fill="black"/>
                <path d="M281.08 254.391C281.296 254.9 281.883 255.136 282.391 254.92L290.674 251.399C291.182 251.183 291.419 250.596 291.203 250.088C290.987 249.58 290.4 249.343 289.891 249.559L282.529 252.689L279.399 245.326C279.183 244.818 278.596 244.581 278.088 244.797C277.58 245.013 277.343 245.6 277.559 246.109L281.08 254.391ZM289.038 101.273C298.029 132.932 301.681 156.977 300.28 180.101C298.878 203.225 292.418 225.502 281.073 253.626L282.927 254.374C294.308 226.162 300.855 203.655 302.276 180.222C303.696 156.787 299.985 132.5 290.962 100.727L289.038 101.273Z" fill="black"/>
                <path d="M414.034 254.256C414.175 254.79 414.723 255.108 415.257 254.966L423.955 252.655C424.489 252.513 424.806 251.965 424.665 251.432C424.523 250.898 423.975 250.58 423.441 250.722L415.71 252.776L413.655 245.045C413.513 244.511 412.966 244.193 412.432 244.335C411.898 244.477 411.581 245.024 411.722 245.558L414.034 254.256ZM422.093 101.421C436.652 132.717 442.842 156.543 441.342 179.589C439.842 202.644 430.639 225.05 414.135 253.498L415.865 254.501C432.42 225.965 441.808 203.236 443.338 179.719C444.869 156.195 438.53 132.013 423.907 100.578L422.093 101.421Z" fill="black"/>
                <circle cx="59.5" cy="74.5" r="5.5" stroke="black" strokeWidth="2"/>
                <circle cx="59.5" cy="263.5" r="5.5" stroke="black" strokeWidth="2"/>
                <circle cx="121.5" cy="74.5" r="5.5" fill="black" stroke="black" strokeWidth="2"/>
                <circle cx="272.5" cy="75.5" r="5.5" fill="black" stroke="black" strokeWidth="2"/>
                <circle cx="414.5" cy="76.5" r="5.5" fill="black" stroke="black" strokeWidth="2"/>
                <circle cx="192.5" cy="263.5" r="5.5" fill="black" stroke="black" strokeWidth="2"/>
                <line x1="148" y1="119" x2="148" y2="211" stroke="black" strokeWidth="2"/>
                <line x1="147.455" y1="118.11" x2="237.455" y2="164.11" stroke="black" strokeWidth="2"/>
                <line x1="238.467" y1="163.884" x2="147.467" y2="211.884" stroke="black" strokeWidth="2"/>
                <path d="M103.707 85.7071C104.098 85.3166 104.098 84.6834 103.707 84.2929L97.3431 77.9289C96.9526 77.5384 96.3195 77.5384 95.9289 77.9289C95.5384 78.3195 95.5384 78.9526 95.9289 79.3431L101.586 85L95.9289 90.6569C95.5384 91.0474 95.5384 91.6805 95.9289 92.0711C96.3195 92.4616 96.9526 92.4616 97.3431 92.0711L103.707 85.7071ZM69 86H103V84H69V86Z" fill="black"/>
                <path d="M311.707 85.7071C312.098 85.3166 312.098 84.6834 311.707 84.2929L305.343 77.9289C304.953 77.5384 304.319 77.5384 303.929 77.9289C303.538 78.3195 303.538 78.9526 303.929 79.3431L309.586 85L303.929 90.6569C303.538 91.0474 303.538 91.6805 303.929 92.0711C304.319 92.4616 304.953 92.4616 305.343 92.0711L311.707 85.7071ZM277 86H311V84H277V86Z" fill="black"/>
                <path d="M458.707 85.7071C459.098 85.3166 459.098 84.6834 458.707 84.2929L452.343 77.9289C451.953 77.5384 451.319 77.5384 450.929 77.9289C450.538 78.3195 450.538 78.9526 450.929 79.3431L456.586 85L450.929 90.6569C450.538 91.0474 450.538 91.6805 450.929 92.0711C451.319 92.4616 451.953 92.4616 452.343 92.0711L458.707 85.7071ZM424 86H458V84H424V86Z" fill="black"/>
                <path d="M120.972 47.2727V56H119.915V48.3807H119.864L117.733 49.7955V48.7216L119.915 47.2727H120.972Z" fill="black"/>
                <path d="M163.477 144.403V138.778H164.432V144.403H163.477ZM161.142 142.068V141.114H166.767V142.068H161.142Z" fill="black"/>
                <path d="M164.67 186.79V187.727H160.852V186.79H164.67Z" fill="black"/>
                <path d="M92.4773 139.403V133.778H93.4318V139.403H92.4773ZM90.142 137.068V136.114H95.767V137.068H90.142Z" fill="black"/>
                <path d="M88.1136 128.273V137H87.0568V128.273H88.1136ZM97.2553 131.835V130.915H102.505V131.835H97.2553ZM97.2553 134.358V133.438H102.505V134.358H97.2553ZM110.961 137.119C110.319 137.119 109.772 136.945 109.32 136.595C108.869 136.243 108.523 135.733 108.285 135.065C108.046 134.395 107.927 133.585 107.927 132.636C107.927 131.693 108.046 130.888 108.285 130.22C108.526 129.55 108.873 129.038 109.325 128.686C109.779 128.331 110.325 128.153 110.961 128.153C111.597 128.153 112.141 128.331 112.593 128.686C113.048 129.038 113.394 129.55 113.633 130.22C113.874 130.888 113.995 131.693 113.995 132.636C113.995 133.585 113.876 134.395 113.637 135.065C113.398 135.733 113.053 136.243 112.602 136.595C112.15 136.945 111.603 137.119 110.961 137.119ZM110.961 136.182C111.597 136.182 112.092 135.875 112.444 135.261C112.796 134.648 112.972 133.773 112.972 132.636C112.972 131.881 112.891 131.237 112.729 130.706C112.57 130.175 112.34 129.77 112.039 129.491C111.741 129.213 111.381 129.074 110.961 129.074C110.33 129.074 109.837 129.385 109.482 130.007C109.127 130.626 108.95 131.503 108.95 132.636C108.95 133.392 109.029 134.034 109.188 134.562C109.347 135.091 109.576 135.493 109.874 135.768C110.175 136.044 110.538 136.182 110.961 136.182Z" fill="black"/>
                <path d="M93.6705 210.79V211.727H89.8523V210.79H93.6705Z" fill="black"/>
                <path d="M88.1136 203.273V212H87.0568V203.273H88.1136ZM97.2553 206.835V205.915H102.505V206.835H97.2553ZM97.2553 209.358V208.438H102.505V209.358H97.2553ZM110.961 212.119C110.319 212.119 109.772 211.945 109.32 211.595C108.869 211.243 108.523 210.733 108.285 210.065C108.046 209.395 107.927 208.585 107.927 207.636C107.927 206.693 108.046 205.888 108.285 205.22C108.526 204.55 108.873 204.038 109.325 203.686C109.779 203.331 110.325 203.153 110.961 203.153C111.597 203.153 112.141 203.331 112.593 203.686C113.048 204.038 113.394 204.55 113.633 205.22C113.874 205.888 113.995 206.693 113.995 207.636C113.995 208.585 113.876 209.395 113.637 210.065C113.398 210.733 113.053 211.243 112.602 211.595C112.15 211.945 111.603 212.119 110.961 212.119ZM110.961 211.182C111.597 211.182 112.092 210.875 112.444 210.261C112.796 209.648 112.972 208.773 112.972 207.636C112.972 206.881 112.891 206.237 112.729 205.706C112.57 205.175 112.34 204.77 112.039 204.491C111.741 204.213 111.381 204.074 110.961 204.074C110.33 204.074 109.837 204.385 109.482 205.007C109.127 205.626 108.95 206.503 108.95 207.636C108.95 208.392 109.029 209.034 109.188 209.562C109.347 210.091 109.576 210.493 109.874 210.768C110.175 211.044 110.538 211.182 110.961 211.182Z" fill="black"/>
                <path d="M6.78409 147.273H7.84091V153.051C7.84091 153.648 7.70028 154.18 7.41903 154.649C7.14063 155.115 6.74716 155.483 6.23864 155.753C5.73011 156.02 5.13352 156.153 4.44886 156.153C3.7642 156.153 3.16761 156.02 2.65909 155.753C2.15057 155.483 1.75568 155.115 1.47443 154.649C1.19602 154.18 1.05682 153.648 1.05682 153.051V147.273H2.11364V152.966C2.11364 153.392 2.20739 153.771 2.39489 154.104C2.58239 154.433 2.84943 154.693 3.19602 154.884C3.54545 155.071 3.96307 155.165 4.44886 155.165C4.93466 155.165 5.35227 155.071 5.7017 154.884C6.05114 154.693 6.31818 154.433 6.50284 154.104C6.69034 153.771 6.78409 153.392 6.78409 152.966V147.273Z" fill="black"/>
                <path d="M11.3097 152.727V160H10.429V153.651H10.3864L8.6108 154.83V153.935L10.429 152.727H11.3097Z" fill="black"/>
                <path d="M85.1136 92.2727V101H84.0568V92.2727H85.1136Z" fill="black"/>
                <path d="M91.3097 97.7273V105H90.429V98.6506H90.3864L88.6108 99.8295V98.9347L90.429 97.7273H91.3097Z" fill="black"/>
                <path d="M295.114 92.2727V101H294.057V92.2727H295.114Z" fill="black"/>
                <path d="M298.753 105V104.361L301.153 101.733C301.435 101.425 301.667 101.158 301.849 100.93C302.032 100.701 302.167 100.485 302.254 100.284C302.344 100.08 302.389 99.8674 302.389 99.6449C302.389 99.3892 302.328 99.1679 302.205 98.9808C302.084 98.7938 301.918 98.6494 301.707 98.5476C301.497 98.4458 301.26 98.3949 300.997 98.3949C300.718 98.3949 300.474 98.4529 300.266 98.5689C300.06 98.6825 299.9 98.8423 299.786 99.0483C299.675 99.2543 299.619 99.4957 299.619 99.7727H298.781C298.781 99.3466 298.879 98.9725 299.076 98.6506C299.272 98.3286 299.54 98.0777 299.879 97.8977C300.219 97.7178 300.602 97.6278 301.026 97.6278C301.452 97.6278 301.829 97.7178 302.158 97.8977C302.487 98.0777 302.746 98.3203 302.933 98.6257C303.12 98.9311 303.213 99.2708 303.213 99.6449C303.213 99.9124 303.165 100.174 303.067 100.43C302.973 100.683 302.807 100.966 302.57 101.278C302.336 101.589 302.01 101.967 301.594 102.415L299.96 104.162V104.219H303.341V105H298.753Z" fill="black"/>
                <path d="M316.784 155.273H317.841V161.051C317.841 161.648 317.7 162.18 317.419 162.649C317.141 163.115 316.747 163.483 316.239 163.753C315.73 164.02 315.134 164.153 314.449 164.153C313.764 164.153 313.168 164.02 312.659 163.753C312.151 163.483 311.756 163.115 311.474 162.649C311.196 162.18 311.057 161.648 311.057 161.051V155.273H312.114V160.966C312.114 161.392 312.207 161.771 312.395 162.104C312.582 162.433 312.849 162.693 313.196 162.884C313.545 163.071 313.963 163.165 314.449 163.165C314.935 163.165 315.352 163.071 315.702 162.884C316.051 162.693 316.318 162.433 316.503 162.104C316.69 161.771 316.784 161.392 316.784 160.966V155.273Z" fill="black"/>
                <path d="M318.753 168V167.361L321.153 164.733C321.435 164.425 321.667 164.158 321.849 163.93C322.032 163.701 322.167 163.485 322.254 163.284C322.344 163.08 322.389 162.867 322.389 162.645C322.389 162.389 322.328 162.168 322.205 161.981C322.084 161.794 321.918 161.649 321.707 161.548C321.497 161.446 321.26 161.395 320.997 161.395C320.718 161.395 320.474 161.453 320.266 161.569C320.06 161.683 319.9 161.842 319.786 162.048C319.675 162.254 319.619 162.496 319.619 162.773H318.781C318.781 162.347 318.879 161.973 319.076 161.651C319.272 161.329 319.54 161.078 319.879 160.898C320.219 160.718 320.602 160.628 321.026 160.628C321.452 160.628 321.829 160.718 322.158 160.898C322.487 161.078 322.746 161.32 322.933 161.626C323.12 161.931 323.213 162.271 323.213 162.645C323.213 162.912 323.165 163.174 323.067 163.43C322.973 163.683 322.807 163.966 322.57 164.278C322.336 164.589 322.01 164.967 321.594 165.415L319.96 167.162V167.219H323.341V168H318.753Z" fill="black"/>
                <path d="M489.057 172V163.273H492.006C492.688 163.273 493.247 163.389 493.685 163.622C494.122 163.852 494.446 164.169 494.656 164.572C494.866 164.976 494.972 165.435 494.972 165.949C494.972 166.463 494.866 166.919 494.656 167.317C494.446 167.714 494.124 168.027 493.689 168.254C493.254 168.479 492.699 168.591 492.023 168.591H489.636V167.636H491.989C492.455 167.636 492.83 167.568 493.114 167.432C493.401 167.295 493.608 167.102 493.736 166.852C493.866 166.599 493.932 166.298 493.932 165.949C493.932 165.599 493.866 165.294 493.736 165.033C493.605 164.771 493.396 164.57 493.109 164.428C492.822 164.283 492.443 164.21 491.972 164.21H490.114V172H489.057ZM493.165 168.08L495.312 172H494.085L491.972 168.08H493.165Z" fill="black"/>
                <path d="M499.21 176.099C498.741 176.099 498.324 176.019 497.957 175.858C497.592 175.697 497.302 175.473 497.087 175.187C496.874 174.898 496.758 174.563 496.739 174.182H497.634C497.652 174.416 497.733 174.619 497.875 174.789C498.017 174.957 498.203 175.087 498.433 175.18C498.662 175.272 498.917 175.318 499.196 175.318C499.509 175.318 499.786 175.264 500.027 175.155C500.268 175.046 500.458 174.894 500.595 174.7C500.732 174.506 500.801 174.281 500.801 174.026C500.801 173.758 500.735 173.522 500.602 173.319C500.47 173.113 500.276 172.952 500.02 172.836C499.764 172.72 499.452 172.662 499.082 172.662H498.5V171.881H499.082C499.371 171.881 499.625 171.829 499.842 171.724C500.063 171.62 500.234 171.473 500.357 171.284C500.483 171.095 500.545 170.872 500.545 170.616C500.545 170.37 500.491 170.156 500.382 169.974C500.273 169.791 500.119 169.649 499.92 169.548C499.724 169.446 499.492 169.395 499.224 169.395C498.973 169.395 498.737 169.441 498.514 169.533C498.294 169.623 498.114 169.755 497.974 169.928C497.835 170.098 497.759 170.304 497.747 170.545H496.895C496.909 170.164 497.024 169.83 497.239 169.544C497.455 169.255 497.737 169.03 498.085 168.869C498.435 168.708 498.82 168.628 499.239 168.628C499.688 168.628 500.074 168.719 500.396 168.901C500.718 169.081 500.966 169.319 501.138 169.615C501.311 169.911 501.398 170.231 501.398 170.574C501.398 170.983 501.29 171.333 501.075 171.621C500.862 171.91 500.571 172.11 500.205 172.222V172.278C500.664 172.354 501.022 172.549 501.281 172.864C501.539 173.177 501.668 173.564 501.668 174.026C501.668 174.421 501.56 174.776 501.344 175.091C501.131 175.403 500.84 175.65 500.471 175.83C500.102 176.009 499.681 176.099 499.21 176.099Z" fill="black"/>
                <path d="M436.114 92.2727V101H435.057V92.2727H436.114Z" fill="black"/>
                <path d="M439.753 106V105.361L442.153 102.733C442.435 102.425 442.667 102.158 442.849 101.93C443.032 101.701 443.167 101.485 443.254 101.284C443.344 101.08 443.389 100.867 443.389 100.645C443.389 100.389 443.328 100.168 443.205 99.9808C443.084 99.7938 442.918 99.6494 442.707 99.5476C442.497 99.4458 442.26 99.3949 441.997 99.3949C441.718 99.3949 441.474 99.4529 441.266 99.5689C441.06 99.6825 440.9 99.8423 440.786 100.048C440.675 100.254 440.619 100.496 440.619 100.773H439.781C439.781 100.347 439.879 99.9725 440.076 99.6506C440.272 99.3286 440.54 99.0777 440.879 98.8977C441.219 98.7178 441.602 98.6278 442.026 98.6278C442.452 98.6278 442.829 98.7178 443.158 98.8977C443.487 99.0777 443.746 99.3203 443.933 99.6257C444.12 99.9311 444.213 100.271 444.213 100.645C444.213 100.912 444.165 101.174 444.067 101.43C443.973 101.683 443.807 101.966 443.57 102.278C443.336 102.589 443.01 102.967 442.594 103.415L440.96 105.162V105.219H444.341V106H439.753Z" fill="black"/>
                <path d="M341.057 56V47.2727H344.006C344.688 47.2727 345.247 47.3892 345.685 47.6222C346.122 47.8523 346.446 48.169 346.656 48.5724C346.866 48.9759 346.972 49.4347 346.972 49.9489C346.972 50.4631 346.866 50.919 346.656 51.3168C346.446 51.7145 346.124 52.027 345.689 52.2543C345.254 52.4787 344.699 52.5909 344.023 52.5909H341.636V51.6364H343.989C344.455 51.6364 344.83 51.5682 345.114 51.4318C345.401 51.2955 345.608 51.1023 345.736 50.8523C345.866 50.5994 345.932 50.2983 345.932 49.9489C345.932 49.5994 345.866 49.294 345.736 49.0327C345.605 48.7713 345.396 48.5696 345.109 48.4276C344.822 48.2827 344.443 48.2102 343.972 48.2102H342.114V56H341.057ZM345.165 52.0795L347.312 56H346.085L343.972 52.0795H345.165Z" fill="black"/>
                <path d="M348.753 60V59.3608L351.153 56.733C351.435 56.4252 351.667 56.1577 351.849 55.9304C352.032 55.7008 352.167 55.4853 352.254 55.2841C352.344 55.0805 352.389 54.8674 352.389 54.6449C352.389 54.3892 352.328 54.1679 352.205 53.9808C352.084 53.7938 351.918 53.6494 351.707 53.5476C351.497 53.4458 351.26 53.3949 350.997 53.3949C350.718 53.3949 350.474 53.4529 350.266 53.5689C350.06 53.6825 349.9 53.8423 349.786 54.0483C349.675 54.2543 349.619 54.4957 349.619 54.7727H348.781C348.781 54.3466 348.879 53.9725 349.076 53.6506C349.272 53.3286 349.54 53.0777 349.879 52.8977C350.219 52.7178 350.602 52.6278 351.026 52.6278C351.452 52.6278 351.829 52.7178 352.158 52.8977C352.487 53.0777 352.746 53.3203 352.933 53.6257C353.12 53.9311 353.213 54.2708 353.213 54.6449C353.213 54.9124 353.165 55.174 353.067 55.4297C352.973 55.683 352.807 55.9659 352.57 56.2784C352.336 56.5885 352.01 56.9673 351.594 57.4148L349.96 59.1619V59.2188H353.341V60H348.753Z" fill="black"/>
                <path d="M422.784 155.273H423.841V161.051C423.841 161.648 423.7 162.18 423.419 162.649C423.141 163.115 422.747 163.483 422.239 163.753C421.73 164.02 421.134 164.153 420.449 164.153C419.764 164.153 419.168 164.02 418.659 163.753C418.151 163.483 417.756 163.115 417.474 162.649C417.196 162.18 417.057 161.648 417.057 161.051V155.273H418.114V160.966C418.114 161.392 418.207 161.771 418.395 162.104C418.582 162.433 418.849 162.693 419.196 162.884C419.545 163.071 419.963 163.165 420.449 163.165C420.935 163.165 421.352 163.071 421.702 162.884C422.051 162.693 422.318 162.433 422.503 162.104C422.69 161.771 422.784 161.392 422.784 160.966V155.273Z" fill="black"/>
                <path d="M427.21 168.099C426.741 168.099 426.324 168.019 425.957 167.858C425.592 167.697 425.302 167.473 425.087 167.187C424.874 166.898 424.758 166.563 424.739 166.182H425.634C425.652 166.416 425.733 166.619 425.875 166.789C426.017 166.957 426.203 167.087 426.433 167.18C426.662 167.272 426.917 167.318 427.196 167.318C427.509 167.318 427.786 167.264 428.027 167.155C428.268 167.046 428.458 166.894 428.595 166.7C428.732 166.506 428.801 166.281 428.801 166.026C428.801 165.758 428.735 165.522 428.602 165.319C428.47 165.113 428.276 164.952 428.02 164.836C427.764 164.72 427.452 164.662 427.082 164.662H426.5V163.881H427.082C427.371 163.881 427.625 163.829 427.842 163.724C428.063 163.62 428.234 163.473 428.357 163.284C428.483 163.095 428.545 162.872 428.545 162.616C428.545 162.37 428.491 162.156 428.382 161.974C428.273 161.791 428.119 161.649 427.92 161.548C427.724 161.446 427.492 161.395 427.224 161.395C426.973 161.395 426.737 161.441 426.514 161.533C426.294 161.623 426.114 161.755 425.974 161.928C425.835 162.098 425.759 162.304 425.747 162.545H424.895C424.909 162.164 425.024 161.83 425.239 161.544C425.455 161.255 425.737 161.03 426.085 160.869C426.435 160.708 426.82 160.628 427.239 160.628C427.688 160.628 428.074 160.719 428.396 160.901C428.718 161.081 428.966 161.319 429.138 161.615C429.311 161.911 429.398 162.231 429.398 162.574C429.398 162.983 429.29 163.333 429.075 163.621C428.862 163.91 428.571 164.11 428.205 164.222V164.278C428.664 164.354 429.022 164.549 429.281 164.864C429.539 165.177 429.668 165.564 429.668 166.026C429.668 166.421 429.56 166.776 429.344 167.091C429.131 167.403 428.84 167.65 428.471 167.83C428.102 168.009 427.681 168.099 427.21 168.099Z" fill="black"/>
                <path d="M269.903 57V56.233L272.784 53.0795C273.122 52.7102 273.401 52.3892 273.619 52.1165C273.838 51.8409 274 51.5824 274.105 51.3409C274.213 51.0966 274.267 50.8409 274.267 50.5739C274.267 50.267 274.193 50.0014 274.045 49.777C273.901 49.5526 273.702 49.3793 273.449 49.2571C273.196 49.1349 272.912 49.0739 272.597 49.0739C272.261 49.0739 271.969 49.1435 271.719 49.2827C271.472 49.419 271.28 49.6108 271.143 49.858C271.01 50.1051 270.943 50.3949 270.943 50.7273H269.938C269.938 50.2159 270.055 49.767 270.291 49.3807C270.527 48.9943 270.848 48.6932 271.254 48.4773C271.663 48.2614 272.122 48.1534 272.631 48.1534C273.142 48.1534 273.595 48.2614 273.99 48.4773C274.385 48.6932 274.695 48.9844 274.919 49.3509C275.143 49.7173 275.256 50.125 275.256 50.5739C275.256 50.8949 275.197 51.2088 275.081 51.5156C274.967 51.8196 274.768 52.1591 274.484 52.5341C274.203 52.9062 273.812 53.3608 273.312 53.8977L271.352 55.9943V56.0625H275.409V57H269.903Z" fill="black"/>
                <path d="M415.852 57.1193C415.29 57.1193 414.788 57.0227 414.348 56.8295C413.911 56.6364 413.563 56.3679 413.304 56.0241C413.048 55.6776 412.909 55.2756 412.886 54.8182H413.96C413.983 55.0994 414.08 55.3423 414.25 55.5469C414.42 55.7486 414.643 55.9048 414.919 56.0156C415.195 56.1264 415.5 56.1818 415.835 56.1818C416.21 56.1818 416.543 56.1165 416.832 55.9858C417.122 55.8551 417.349 55.6733 417.514 55.4403C417.679 55.2074 417.761 54.9375 417.761 54.6307C417.761 54.3097 417.682 54.027 417.523 53.7827C417.364 53.5355 417.131 53.3423 416.824 53.2031C416.517 53.0639 416.142 52.9943 415.699 52.9943H415V52.0568H415.699C416.045 52.0568 416.349 51.9943 416.611 51.8693C416.875 51.7443 417.081 51.5682 417.229 51.3409C417.379 51.1136 417.455 50.8466 417.455 50.5398C417.455 50.2443 417.389 49.9872 417.259 49.7685C417.128 49.5497 416.943 49.3793 416.705 49.2571C416.469 49.1349 416.19 49.0739 415.869 49.0739C415.568 49.0739 415.284 49.1293 415.017 49.2401C414.753 49.348 414.537 49.5057 414.369 49.7131C414.202 49.9176 414.111 50.1648 414.097 50.4545H413.074C413.091 49.9972 413.229 49.5966 413.487 49.2528C413.746 48.9062 414.084 48.6364 414.501 48.4432C414.922 48.25 415.384 48.1534 415.886 48.1534C416.426 48.1534 416.889 48.2628 417.276 48.4815C417.662 48.6974 417.959 48.983 418.166 49.3381C418.374 49.6932 418.477 50.0767 418.477 50.4886C418.477 50.9801 418.348 51.3991 418.089 51.7457C417.834 52.0923 417.486 52.3324 417.045 52.4659V52.5341C417.597 52.625 418.027 52.8594 418.337 53.2372C418.646 53.6122 418.801 54.0767 418.801 54.6307C418.801 55.1051 418.672 55.5312 418.413 55.9091C418.158 56.2841 417.808 56.5795 417.365 56.7955C416.922 57.0114 416.418 57.1193 415.852 57.1193Z" fill="black"/>
                <path d="M193.057 56V47.2727H196.006C196.688 47.2727 197.247 47.3892 197.685 47.6222C198.122 47.8523 198.446 48.169 198.656 48.5724C198.866 48.9759 198.972 49.4347 198.972 49.9489C198.972 50.4631 198.866 50.919 198.656 51.3168C198.446 51.7145 198.124 52.027 197.689 52.2543C197.254 52.4787 196.699 52.5909 196.023 52.5909H193.636V51.6364H195.989C196.455 51.6364 196.83 51.5682 197.114 51.4318C197.401 51.2955 197.608 51.1023 197.736 50.8523C197.866 50.5994 197.932 50.2983 197.932 49.9489C197.932 49.5994 197.866 49.294 197.736 49.0327C197.605 48.7713 197.396 48.5696 197.109 48.4276C196.822 48.2827 196.443 48.2102 195.972 48.2102H194.114V56H193.057ZM197.165 52.0795L199.312 56H198.085L195.972 52.0795H197.165Z" fill="black"/>
                <path d="M203.31 52.7273V60H202.429V53.6506H202.386L200.611 54.8295V53.9347L202.429 52.7273H203.31Z" fill="black"/>
                
                <g className="U1" id="U1">
                <path d="M400.341 58.9401C400.86 58.7518 401.128 58.1783 400.94 57.6591L397.872 49.1982C397.684 48.679 397.11 48.4107 396.591 48.5989C396.072 48.7872 395.804 49.3607 395.992 49.8799L398.719 57.4008L391.198 60.1278C390.679 60.3161 390.411 60.8896 390.599 61.4088C390.787 61.928 391.361 62.1963 391.88 62.008L400.341 58.9401ZM148.331 43.9437C198.432 26.3847 237.146 18.8846 275.346 21.3711C313.552 23.858 351.337 36.3402 399.576 58.9058L400.424 57.0942C352.092 34.4854 314.044 21.8858 275.476 19.3753C236.902 16.8645 197.901 24.4516 147.669 42.0563L148.331 43.9437Z" fill="black"/>
                <path d="M262.784 3.27273H263.841V9.05114C263.841 9.64773 263.7 10.1804 263.419 10.6491C263.141 11.1151 262.747 11.483 262.239 11.7528C261.73 12.0199 261.134 12.1534 260.449 12.1534C259.764 12.1534 259.168 12.0199 258.659 11.7528C258.151 11.483 257.756 11.1151 257.474 10.6491C257.196 10.1804 257.057 9.64773 257.057 9.05114V3.27273H258.114V8.96591C258.114 9.39205 258.207 9.77131 258.395 10.1037C258.582 10.4332 258.849 10.6932 259.196 10.8835C259.545 11.071 259.963 11.1648 260.449 11.1648C260.935 11.1648 261.352 11.071 261.702 10.8835C262.051 10.6932 262.318 10.4332 262.503 10.1037C262.69 9.77131 262.784 9.39205 262.784 8.96591V3.27273ZM269.599 6.83523V5.91477H274.849V6.83523H269.599ZM269.599 9.35795V8.4375H274.849V9.35795H269.599ZM283.305 12.1193C282.663 12.1193 282.116 11.9446 281.664 11.5952C281.212 11.2429 280.867 10.733 280.629 10.0653C280.39 9.39489 280.271 8.58523 280.271 7.63636C280.271 6.69318 280.39 5.88778 280.629 5.22017C280.87 4.54972 281.217 4.03835 281.668 3.68608C282.123 3.33097 282.668 3.15341 283.305 3.15341C283.941 3.15341 284.485 3.33097 284.937 3.68608C285.391 4.03835 285.738 4.54972 285.977 5.22017C286.218 5.88778 286.339 6.69318 286.339 7.63636C286.339 8.58523 286.219 9.39489 285.981 10.0653C285.742 10.733 285.397 11.2429 284.945 11.5952C284.494 11.9446 283.947 12.1193 283.305 12.1193ZM283.305 11.1818C283.941 11.1818 284.435 10.875 284.788 10.2614C285.14 9.64773 285.316 8.77273 285.316 7.63636C285.316 6.88068 285.235 6.23722 285.073 5.70597C284.914 5.17472 284.684 4.76989 284.383 4.49148C284.085 4.21307 283.725 4.07386 283.305 4.07386C282.674 4.07386 282.181 4.38494 281.826 5.0071C281.471 5.62642 281.293 6.50284 281.293 7.63636C281.293 8.39205 281.373 9.03409 281.532 9.5625C281.691 10.0909 281.92 10.4929 282.218 10.7685C282.519 11.044 282.881 11.1818 283.305 11.1818Z" fill="black"/>
                </g>

                <svg>
                <path d="M121.007 18L106.007 9.33975V26.6603L121.007 18ZM49 19.5H107.507V16.5H49V19.5Z" fill="#DE0000" id="u1_arrow" onClick={AnimatedButton} style={{cursor: "pointer"}} />
                </svg>

            </svg>
        </>
    ); 
            
}



export default Example_7_1_2;