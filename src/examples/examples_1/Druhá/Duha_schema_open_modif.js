import React, { useState }  from "react";
import '../../../App.css';

function Druha_schema_open_modif(){

    const [toggle, setToggle] = useState(false);
    
    function Show_schema(){
         setToggle(!toggle);
            if(toggle === false){
              document.getElementById("prva_varianta_open").style.opacity = "0%";
              document.getElementById("druha_varianta_open").style.opacity = "100%"; 
              }
              else{
                document.getElementById("prva_varianta_open").style.opacity = "100%";
                document.getElementById("druha_varianta_open").style.opacity = "0%"; 
              }
        
    }

    return(
        <>
        <p className="pointer" onClick={Show_schema}>Zobraziť</p>
        <svg 
        width="455" 
        height="308" 
        viewBox="0 0 455 308" fill="none">
            <circle cx="424" cy="53" r="6" stroke="black" strokeWidth="2"/>
            <circle cx="424" cy="276" r="6" stroke="black" strokeWidth="2"/>
            <path d="M187.5 276C187.5 279.59 184.59 282.5 181 282.5C177.41 282.5 174.5 279.59 174.5 276C174.5 272.41 177.41 269.5 181 269.5C184.59 269.5 187.5 272.41 187.5 276Z" fill="black" stroke="black"/>
            <path d="M329.5 276C329.5 279.59 326.59 282.5 323 282.5C319.41 282.5 316.5 279.59 316.5 276C316.5 272.41 319.41 269.5 323 269.5C326.59 269.5 329.5 272.41 329.5 276Z" fill="black" stroke="black"/>
            <path d="M329.5 54C329.5 57.5899 326.59 60.5 323 60.5C319.41 60.5 316.5 57.5899 316.5 54C316.5 50.4101 319.41 47.5 323 47.5C326.59 47.5 329.5 50.4101 329.5 54Z" fill="black" stroke="black"/>
            <path d="M187.5 53C187.5 56.5899 184.59 59.5 181 59.5C177.41 59.5 174.5 56.5899 174.5 53C174.5 49.4101 177.41 46.5 181 46.5C184.59 46.5 187.5 49.4101 187.5 53Z" fill="black" stroke="black"/>
            <line x1="183" y1="53" x2="223" y2="53" stroke="black" strokeWidth="2"/>
            <line x1="262" y1="53" x2="417" y2="53" stroke="black" strokeWidth="2"/>
            <line x1="181" y1="276" x2="319" y2="276" stroke="black" strokeWidth="2"/>
            <line x1="327" y1="276" x2="417" y2="276" stroke="black" strokeWidth="2"/>
            <line x1="181" y1="278" x2="181" y2="184" stroke="black" strokeWidth="2"/>
            <line x1="323" y1="271" x2="323" y2="138" stroke="black" strokeWidth="2"/>
            <line x1="323" y1="97.5" x2="323" y2="60" stroke="black" strokeWidth="2"/>
            <line x1="181" y1="87.5" x2="181" y2="56" stroke="black" strokeWidth="2"/>
            <line x1="181" y1="144.5" x2="181" y2="126" stroke="black" strokeWidth="2"/>
            <line x1="181" y1="183.5" x2="181" y2="142" stroke="black" strokeWidth="2"/>
            <line x1="221" y1="53" x2="263" y2="53" stroke="black" strokeWidth="2"></line>
            <path d="M339.5 237C339.5 245.809 332.14 253 323 253C313.86 253 306.5 245.809 306.5 237C306.5 228.191 313.86 221 323 221C332.14 221 339.5 228.191 339.5 237Z" stroke="black" strokeWidth="2"/>
            <path d="M198 231C198 239.809 190.64 247 181.5 247C172.36 247 165 239.809 165 231C165 222.191 172.36 215 181.5 215C190.64 215 198 222.191 198 231Z" stroke="black" strokeWidth="2"/>
            <path d="M424 226L429.774 216H418.226L424 226ZM423 101V217H425V101H423Z" fill="black"/>
            <path d="M444.609 163.724V156.49H447.141V166H444.759L444.609 163.724ZM444.891 161.772L445.638 161.755C445.638 162.388 445.564 162.977 445.418 163.521C445.271 164.061 445.052 164.529 444.759 164.928C444.466 165.32 444.097 165.628 443.651 165.851C443.206 166.067 442.682 166.176 442.078 166.176C441.615 166.176 441.188 166.111 440.795 165.982C440.408 165.848 440.074 165.64 439.793 165.358C439.518 165.071 439.301 164.705 439.143 164.26C438.99 163.809 438.914 163.267 438.914 162.634V156.49H441.445V162.651C441.445 162.933 441.478 163.17 441.542 163.363C441.612 163.557 441.709 163.715 441.832 163.838C441.955 163.961 442.099 164.049 442.263 164.102C442.433 164.154 442.62 164.181 442.825 164.181C443.347 164.181 443.757 164.075 444.056 163.864C444.36 163.653 444.574 163.366 444.697 163.003C444.826 162.634 444.891 162.224 444.891 161.772Z" fill="black"/>
            <path d="M299 256L304.774 246H293.226L299 256ZM298 220V247H300V220H298Z" fill="black"/>
            <path d="M454.458 169.578V171H447.718V169.783L450.951 166.29C451.288 165.907 451.555 165.575 451.751 165.292C451.947 165.009 452.086 164.754 452.168 164.526C452.255 164.294 452.298 164.073 452.298 163.863C452.298 163.558 452.243 163.291 452.134 163.063C452.024 162.831 451.865 162.651 451.655 162.523C451.45 162.396 451.197 162.332 450.896 162.332C450.564 162.332 450.279 162.41 450.042 162.564C449.81 162.715 449.632 162.924 449.509 163.193C449.39 163.462 449.331 163.77 449.331 164.116H447.52C447.52 163.528 447.656 162.993 447.93 162.51C448.203 162.022 448.595 161.632 449.105 161.341C449.616 161.049 450.222 160.903 450.924 160.903C451.607 160.903 452.186 161.017 452.66 161.245C453.134 161.468 453.494 161.787 453.74 162.202C453.986 162.617 454.109 163.111 454.109 163.686C454.109 164.005 454.057 164.319 453.952 164.629C453.847 164.939 453.699 165.246 453.508 165.552C453.321 165.853 453.098 166.158 452.838 166.468C452.578 166.778 452.289 167.094 451.97 167.418L450.028 169.578H454.458Z" fill="black"/>
            <path d="M351.209 235.203H353.837V243.658C353.837 244.643 353.626 245.472 353.204 246.146C352.788 246.819 352.211 247.326 351.473 247.666C350.74 248.006 349.896 248.176 348.941 248.176C347.986 248.176 347.137 248.006 346.393 247.666C345.654 247.326 345.074 246.819 344.652 246.146C344.236 245.472 344.028 244.643 344.028 243.658V235.203H346.665V243.658C346.665 244.232 346.756 244.701 346.938 245.064C347.119 245.428 347.38 245.694 347.72 245.864C348.065 246.034 348.473 246.119 348.941 246.119C349.422 246.119 349.829 246.034 350.163 245.864C350.503 245.694 350.761 245.428 350.937 245.064C351.118 244.701 351.209 244.232 351.209 243.658V235.203Z" fill="black"/>
            <path d="M359.458 251.578V253H352.718V251.783L355.951 248.29C356.288 247.907 356.555 247.575 356.751 247.292C356.947 247.009 357.086 246.754 357.168 246.526C357.255 246.294 357.298 246.073 357.298 245.863C357.298 245.558 357.243 245.291 357.134 245.063C357.024 244.831 356.865 244.651 356.655 244.523C356.45 244.396 356.197 244.332 355.896 244.332C355.564 244.332 355.279 244.41 355.042 244.564C354.81 244.715 354.632 244.924 354.509 245.193C354.39 245.462 354.331 245.77 354.331 246.116H352.52C352.52 245.528 352.656 244.993 352.93 244.51C353.203 244.022 353.595 243.632 354.105 243.341C354.616 243.049 355.222 242.903 355.924 242.903C356.607 242.903 357.186 243.017 357.66 243.245C358.134 243.468 358.494 243.787 358.74 244.202C358.986 244.617 359.109 245.111 359.109 245.686C359.109 246.005 359.057 246.319 358.952 246.629C358.847 246.939 358.699 247.246 358.508 247.552C358.321 247.853 358.098 248.158 357.838 248.468C357.578 248.778 357.289 249.094 356.97 249.418L355.028 251.578H359.458Z" fill="black"/>
            <path d="M340.222 112.203H344.871C345.844 112.203 346.679 112.35 347.376 112.643C348.073 112.936 348.609 113.369 348.984 113.943C349.359 114.518 349.547 115.224 349.547 116.062C349.547 116.724 349.43 117.298 349.195 117.784C348.961 118.271 348.63 118.678 348.202 119.006C347.78 119.334 347.282 119.592 346.708 119.779L345.952 120.166H341.848L341.83 118.259H344.897C345.396 118.259 345.809 118.171 346.137 117.995C346.465 117.819 346.711 117.576 346.875 117.266C347.045 116.955 347.13 116.601 347.13 116.202C347.13 115.774 347.048 115.405 346.884 115.095C346.72 114.778 346.471 114.535 346.137 114.365C345.803 114.195 345.381 114.11 344.871 114.11H342.639V125H340.222V112.203ZM347.446 125L344.484 119.27L347.042 119.261L350.039 124.877V125H347.446Z" fill="black"/>
            <path d="M354.509 130.42L353.066 130.071L353.62 125.047H359.096V126.544H355.117L354.857 128.868C354.999 128.782 355.204 128.695 355.473 128.608C355.746 128.517 356.054 128.472 356.396 128.472C356.869 128.472 357.293 128.549 357.667 128.704C358.041 128.854 358.357 129.073 358.617 129.36C358.882 129.647 359.08 129.998 359.212 130.413C359.349 130.823 359.417 131.288 359.417 131.808C359.417 132.263 359.349 132.692 359.212 133.093C359.08 133.489 358.877 133.842 358.604 134.152C358.33 134.458 357.986 134.699 357.571 134.877C357.157 135.05 356.669 135.137 356.108 135.137C355.685 135.137 355.277 135.075 354.885 134.952C354.497 134.825 354.149 134.64 353.839 134.398C353.529 134.152 353.281 133.852 353.094 133.496C352.911 133.141 352.811 132.733 352.793 132.272H354.577C354.609 132.578 354.691 132.838 354.823 133.052C354.955 133.266 355.129 133.43 355.343 133.544C355.562 133.658 355.814 133.715 356.102 133.715C356.361 133.715 356.585 133.667 356.771 133.571C356.963 133.471 357.12 133.332 357.243 133.154C357.366 132.977 357.457 132.767 357.517 132.525C357.576 132.284 357.605 132.02 357.605 131.732C357.605 131.454 357.571 131.201 357.503 130.974C357.435 130.741 357.33 130.541 357.188 130.372C357.047 130.203 356.869 130.074 356.655 129.982C356.446 129.891 356.2 129.846 355.917 129.846C355.539 129.846 355.247 129.903 355.042 130.017C354.841 130.131 354.664 130.265 354.509 130.42Z" fill="black"/>
            <rect x="173" y="87" width="16" height="39" stroke="black" strokeWidth="2"/>
            <rect x="315" y="98" width="16" height="39" stroke="black" strokeWidth="2"/>
            
        <g className="tranzition" id="prva_varianta_open">

        <path d="M229.222 14.2031H233.871C234.844 14.2031 235.679 14.3496 236.376 14.6426C237.073 14.9355 237.609 15.3691 237.984 15.9434C238.359 16.5176 238.547 17.2236 238.547 18.0615C238.547 18.7236 238.43 19.2979 238.195 19.7842C237.961 20.2705 237.63 20.6777 237.202 21.0059C236.78 21.334 236.282 21.5918 235.708 21.7793L234.952 22.166H230.848L230.83 20.2588H233.897C234.396 20.2588 234.809 20.1709 235.137 19.9951C235.465 19.8193 235.711 19.5762 235.875 19.2656C236.045 18.9551 236.13 18.6006 236.13 18.2021C236.13 17.7744 236.048 17.4053 235.884 17.0947C235.72 16.7783 235.471 16.5352 235.137 16.3652C234.803 16.1953 234.381 16.1104 233.871 16.1104H231.639V27H229.222V14.2031ZM236.446 27L233.484 21.2695L236.042 21.2607L239.039 26.877V27H236.446Z" fill="black"></path>
        <path d="M248.629 33.3701V34.792H241.458L241.383 33.6982L245.601 27.0469H247.043L245.484 29.6924L243.222 33.3701H248.629ZM247.446 27.0469V37H245.635V27.0469H247.446Z" fill="black"></path>
        <rect x="223" y="60" width="15" height="39" transform="rotate(-90 223 60)" stroke="black" strokeWidth="2"></rect>
        <circle cx="291" cy="276" r="6" stroke="black" strokeWidth="2"></circle>
        <path d="M293.168 300.395H288.809L288.785 298.121H292.523C293.164 298.121 293.699 298.031 294.129 297.852C294.559 297.672 294.883 297.41 295.102 297.066C295.328 296.723 295.441 296.305 295.441 295.812C295.441 295.266 295.336 294.82 295.125 294.477C294.922 294.133 294.602 293.883 294.164 293.727C293.727 293.562 293.172 293.48 292.5 293.48H289.852V308H286.629V290.938H292.5C293.469 290.938 294.332 291.031 295.09 291.219C295.855 291.398 296.504 291.68 297.035 292.062C297.566 292.445 297.969 292.926 298.242 293.504C298.523 294.082 298.664 294.77 298.664 295.566C298.664 296.27 298.5 296.918 298.172 297.512C297.852 298.098 297.355 298.574 296.684 298.941C296.02 299.309 295.176 299.52 294.152 299.574L293.168 300.395ZM293.027 308H287.859L289.207 305.469H293.027C293.668 305.469 294.195 305.363 294.609 305.152C295.031 304.941 295.344 304.652 295.547 304.285C295.758 303.91 295.863 303.48 295.863 302.996C295.863 302.465 295.77 302.004 295.582 301.613C295.402 301.223 295.113 300.922 294.715 300.711C294.324 300.5 293.809 300.395 293.168 300.395H289.816L289.84 298.121H294.105L294.844 299C295.828 299.008 296.629 299.203 297.246 299.586C297.871 299.969 298.332 300.461 298.629 301.062C298.926 301.664 299.074 302.312 299.074 303.008C299.074 304.102 298.836 305.02 298.359 305.762C297.891 306.504 297.203 307.062 296.297 307.438C295.398 307.812 294.309 308 293.027 308Z" fill="black"></path>
        <circle cx="291" cy="53" r="6" stroke="black" strokeWidth="2"></circle>
        <path d="M212.209 231.203H214.837V239.658C214.837 240.643 214.626 241.472 214.204 242.146C213.788 242.819 213.211 243.326 212.473 243.666C211.74 244.006 210.896 244.176 209.941 244.176C208.986 244.176 208.137 244.006 207.393 243.666C206.654 243.326 206.074 242.819 205.652 242.146C205.236 241.472 205.028 240.643 205.028 239.658V231.203H207.665V239.658C207.665 240.232 207.756 240.701 207.938 241.064C208.119 241.428 208.38 241.694 208.72 241.864C209.065 242.034 209.473 242.119 209.941 242.119C210.422 242.119 210.829 242.034 211.163 241.864C211.503 241.694 211.761 241.428 211.937 241.064C212.118 240.701 212.209 240.232 212.209 239.658V231.203Z" fill="black"/>        
        <path d="M227 217L221.226 227H232.774L227 217ZM228 253V226H226V253H228Z" fill="black"></path>
        <path d="M218.366 239.02V249H216.555V241.132L214.155 241.925V240.462L218.161 239.02H218.366Z" fill="black"></path>
        <rect x="173" y="144" width="16" height="39" stroke="black" strokeWidth="2"/>
        <path d="M145.222 149.203H149.871C150.844 149.203 151.679 149.35 152.376 149.643C153.073 149.936 153.609 150.369 153.984 150.943C154.359 151.518 154.547 152.224 154.547 153.062C154.547 153.724 154.43 154.298 154.195 154.784C153.961 155.271 153.63 155.678 153.202 156.006C152.78 156.334 152.282 156.592 151.708 156.779L150.952 157.166H146.848L146.83 155.259H149.897C150.396 155.259 150.809 155.171 151.137 154.995C151.465 154.819 151.711 154.576 151.875 154.266C152.045 153.955 152.13 153.601 152.13 153.202C152.13 152.774 152.048 152.405 151.884 152.095C151.72 151.778 151.471 151.535 151.137 151.365C150.803 151.195 150.381 151.11 149.871 151.11H147.639V162H145.222V149.203ZM152.446 162L149.484 156.27L152.042 156.261L155.039 161.877V162H152.446Z" fill="black"/>
        <path d="M159.693 166.224H160.712C161.072 166.224 161.368 166.162 161.601 166.039C161.838 165.911 162.013 165.738 162.127 165.52C162.245 165.296 162.305 165.039 162.305 164.747C162.305 164.46 162.252 164.212 162.147 164.002C162.043 163.788 161.883 163.624 161.669 163.51C161.459 163.391 161.19 163.332 160.862 163.332C160.598 163.332 160.354 163.384 160.131 163.489C159.912 163.594 159.737 163.744 159.604 163.94C159.477 164.132 159.413 164.362 159.413 164.631H157.602C157.602 164.093 157.743 163.621 158.025 163.216C158.312 162.806 158.7 162.484 159.188 162.252C159.675 162.02 160.22 161.903 160.821 161.903C161.478 161.903 162.052 162.013 162.544 162.231C163.041 162.446 163.426 162.762 163.699 163.182C163.977 163.601 164.116 164.12 164.116 164.74C164.116 165.036 164.046 165.333 163.904 165.629C163.768 165.921 163.565 166.185 163.296 166.422C163.032 166.654 162.706 166.843 162.318 166.989C161.936 167.131 161.496 167.201 160.999 167.201H159.693V166.224ZM159.693 167.618V166.654H160.999C161.56 166.654 162.045 166.72 162.455 166.853C162.87 166.98 163.212 167.162 163.48 167.399C163.749 167.632 163.948 167.903 164.075 168.213C164.207 168.523 164.273 168.855 164.273 169.211C164.273 169.676 164.187 170.09 164.014 170.455C163.84 170.815 163.597 171.12 163.282 171.371C162.972 171.622 162.608 171.813 162.188 171.945C161.769 172.073 161.316 172.137 160.828 172.137C160.404 172.137 159.992 172.08 159.591 171.966C159.194 171.847 158.837 171.672 158.518 171.439C158.199 171.202 157.946 170.906 157.759 170.551C157.572 170.191 157.479 169.774 157.479 169.3H159.29C159.29 169.573 159.356 169.817 159.488 170.031C159.625 170.245 159.812 170.414 160.049 170.537C160.29 170.656 160.562 170.715 160.862 170.715C161.195 170.715 161.48 170.656 161.717 170.537C161.958 170.414 162.143 170.241 162.271 170.018C162.398 169.79 162.462 169.519 162.462 169.204C162.462 168.83 162.391 168.527 162.25 168.295C162.109 168.062 161.906 167.892 161.642 167.782C161.382 167.673 161.072 167.618 160.712 167.618H159.693Z" fill="black"/>
        <path d="M196.222 95.2031H200.871C201.844 95.2031 202.679 95.3496 203.376 95.6426C204.073 95.9355 204.609 96.3691 204.984 96.9434C205.359 97.5176 205.547 98.2236 205.547 99.0615C205.547 99.7236 205.43 100.298 205.195 100.784C204.961 101.271 204.63 101.678 204.202 102.006C203.78 102.334 203.282 102.592 202.708 102.779L201.952 103.166H197.848L197.83 101.259H200.897C201.396 101.259 201.809 101.171 202.137 100.995C202.465 100.819 202.711 100.576 202.875 100.266C203.045 99.9551 203.13 99.6006 203.13 99.2021C203.13 98.7744 203.048 98.4053 202.884 98.0947C202.72 97.7783 202.471 97.5352 202.137 97.3652C201.803 97.1953 201.381 97.1104 200.871 97.1104H198.639V108H196.222V95.2031ZM203.446 108L200.484 102.27L203.042 102.261L206.039 107.877V108H203.446Z" fill="black"/>
        <path d="M215.458 116.578V118H208.718V116.783L211.951 113.29C212.288 112.907 212.555 112.575 212.751 112.292C212.947 112.009 213.086 111.754 213.168 111.526C213.255 111.294 213.298 111.073 213.298 110.863C213.298 110.558 213.243 110.291 213.134 110.063C213.024 109.831 212.865 109.651 212.655 109.523C212.45 109.396 212.197 109.332 211.896 109.332C211.564 109.332 211.279 109.41 211.042 109.564C210.81 109.715 210.632 109.924 210.509 110.193C210.39 110.462 210.331 110.77 210.331 111.116H208.52C208.52 110.528 208.656 109.993 208.93 109.51C209.203 109.022 209.595 108.632 210.105 108.341C210.616 108.049 211.222 107.903 211.924 107.903C212.607 107.903 213.186 108.017 213.66 108.245C214.134 108.468 214.494 108.787 214.74 109.202C214.986 109.617 215.109 110.111 215.109 110.686C215.109 111.005 215.057 111.319 214.952 111.629C214.847 111.939 214.699 112.246 214.508 112.552C214.321 112.853 214.098 113.158 213.838 113.468C213.578 113.778 213.289 114.094 212.97 114.418L211.028 116.578H215.458Z" fill="black"/>
        <path d="M131.209 252.203H133.837V260.658C133.837 261.643 133.626 262.472 133.204 263.146C132.788 263.819 132.211 264.326 131.473 264.666C130.74 265.006 129.896 265.176 128.941 265.176C127.986 265.176 127.137 265.006 126.393 264.666C125.654 264.326 125.074 263.819 124.652 263.146C124.236 262.472 124.028 261.643 124.028 260.658V252.203H126.665V260.658C126.665 261.232 126.756 261.701 126.938 262.064C127.119 262.428 127.38 262.694 127.72 262.864C128.065 263.034 128.473 263.119 128.941 263.119C129.422 263.119 129.829 263.034 130.163 262.864C130.503 262.694 130.761 262.428 130.937 262.064C131.118 261.701 131.209 261.232 131.209 260.658V252.203Z" fill="black"/>
            <path d="M139.308 264.169V265.844C139.308 266.609 139.23 267.263 139.075 267.806C138.92 268.348 138.697 268.792 138.405 269.139C138.114 269.48 137.765 269.733 137.359 269.897C136.954 270.057 136.503 270.137 136.006 270.137C135.609 270.137 135.24 270.087 134.898 269.986C134.557 269.882 134.249 269.722 133.976 269.508C133.707 269.289 133.474 269.011 133.278 268.674C133.087 268.337 132.939 267.933 132.834 267.464C132.734 266.994 132.684 266.454 132.684 265.844V264.169C132.684 263.403 132.761 262.752 132.916 262.214C133.076 261.676 133.301 261.236 133.593 260.895C133.884 260.553 134.233 260.304 134.639 260.149C135.044 259.99 135.495 259.91 135.992 259.91C136.393 259.91 136.762 259.96 137.1 260.061C137.441 260.161 137.747 260.318 138.016 260.532C138.289 260.742 138.521 261.015 138.713 261.353C138.904 261.685 139.05 262.086 139.15 262.556C139.255 263.021 139.308 263.558 139.308 264.169ZM137.503 266.09V263.916C137.503 263.533 137.48 263.201 137.435 262.918C137.394 262.631 137.332 262.387 137.25 262.187C137.168 261.986 137.065 261.824 136.942 261.701C136.819 261.574 136.678 261.48 136.519 261.421C136.359 261.362 136.184 261.332 135.992 261.332C135.755 261.332 135.543 261.38 135.356 261.476C135.17 261.567 135.012 261.713 134.885 261.913C134.757 262.114 134.659 262.38 134.591 262.713C134.527 263.041 134.495 263.442 134.495 263.916V266.09C134.495 266.473 134.516 266.808 134.557 267.095C134.602 267.382 134.666 267.628 134.748 267.833C134.835 268.038 134.937 268.207 135.056 268.339C135.179 268.466 135.32 268.562 135.479 268.626C135.639 268.685 135.814 268.715 136.006 268.715C136.247 268.715 136.459 268.667 136.642 268.571C136.828 268.476 136.986 268.325 137.113 268.12C137.241 267.91 137.337 267.639 137.4 267.307C137.469 266.969 137.503 266.564 137.503 266.09Z" fill="black"/>
            <line x1="125" y1="53" x2="175" y2="53" stroke="black" strokeWidth="2"/>
            <path d="M198 17C198 25.8094 190.64 33 181.5 33C172.36 33 165 25.8094 165 17C165 8.19057 172.36 1 181.5 1C190.64 1 198 8.19057 198 17Z" stroke="black" strokeWidth="2"/>
            <path d="M182.899 11.168V24H180.57V13.8838L177.485 14.9033V13.0225L182.636 11.168H182.899Z" fill="black"/>
            <path d="M291.414 28.5273L286.551 43H283.141L289.516 25.9375H291.695L291.414 28.5273ZM295.48 43L290.594 28.5273L290.301 25.9375H292.492L298.902 43H295.48ZM295.258 36.6602V39.2031H286.105V36.6602H295.258Z" fill="black"/>
            <path d="M327.589 22.1719V24H318.923V22.4355L323.08 17.9443C323.514 17.4521 323.856 17.0244 324.108 16.6611C324.36 16.2979 324.539 15.9697 324.645 15.6768C324.756 15.3779 324.812 15.0938 324.812 14.8242C324.812 14.4316 324.741 14.0889 324.601 13.7959C324.46 13.4971 324.255 13.2656 323.985 13.1016C323.722 12.9375 323.396 12.8555 323.01 12.8555C322.582 12.8555 322.216 12.9551 321.911 13.1543C321.612 13.3477 321.384 13.6172 321.226 13.9629C321.073 14.3086 320.997 14.7041 320.997 15.1494H318.668C318.668 14.3936 318.844 13.7051 319.195 13.084C319.547 12.457 320.051 11.9561 320.707 11.5811C321.363 11.2061 322.143 11.0186 323.045 11.0186C323.924 11.0186 324.668 11.165 325.277 11.458C325.887 11.7451 326.35 12.1553 326.666 12.6885C326.982 13.2217 327.141 13.8574 327.141 14.5957C327.141 15.0059 327.073 15.4102 326.938 15.8086C326.804 16.207 326.613 16.6025 326.367 16.9951C326.127 17.3818 325.84 17.7744 325.506 18.1729C325.172 18.5713 324.8 18.9785 324.39 19.3945L321.894 22.1719H327.589Z" fill="black"/>
            <path d="M340 17C340 25.8094 332.64 33 323.5 33C314.36 33 307 25.8094 307 17C307 8.19057 314.36 1 323.5 1C332.64 1 340 8.19057 340 17Z" stroke="black" strokeWidth="2"/>
            <path d="M73.7969 146.203V159H71.3799V146.203H73.7969Z" fill="black"/>
            <path d="M82.3662 156.02V166H80.5547V158.132L78.1553 158.925V157.462L82.1611 156.02H82.3662Z" fill="black"/>
            <circle cx="28" cy="54" r="6" stroke="black" strokeWidth="2"/>
            <circle cx="28" cy="277" r="6" stroke="black" strokeWidth="2"/>
            <line x1="35" y1="53" x2="85" y2="53" stroke="black" strokeWidth="2"/>
            <line x1="35" y1="276" x2="185" y2="276" stroke="black" strokeWidth="2"/>
            <path d="M28 227L33.7735 217H22.2265L28 227ZM27 102L27 218H29L29 102H27Z" fill="black"/>
            <path d="M6.60938 160.724V153.49H9.14062V163H6.75879L6.60938 160.724ZM6.89062 158.772L7.6377 158.755C7.6377 159.388 7.56445 159.977 7.41797 160.521C7.27148 161.061 7.05176 161.529 6.75879 161.928C6.46582 162.32 6.09668 162.628 5.65137 162.851C5.20605 163.067 4.68164 163.176 4.07812 163.176C3.61523 163.176 3.1875 163.111 2.79492 162.982C2.4082 162.848 2.07422 162.64 1.79297 162.358C1.51758 162.071 1.30078 161.705 1.14258 161.26C0.990234 160.809 0.914062 160.267 0.914062 159.634V153.49H3.44531V159.651C3.44531 159.933 3.47754 160.17 3.54199 160.363C3.6123 160.557 3.70898 160.715 3.83203 160.838C3.95508 160.961 4.09863 161.049 4.2627 161.102C4.43262 161.154 4.62012 161.181 4.8252 161.181C5.34668 161.181 5.75684 161.075 6.05566 160.864C6.36035 160.653 6.57422 160.366 6.69727 160.003C6.82617 159.634 6.89062 159.224 6.89062 158.772Z" fill="black"/>
            <path d="M14.3662 160.02V170H12.5547V162.132L10.1553 162.925V161.462L14.1611 160.02H14.3662Z" fill="black"/>
            <path d="M94.2217 16.2031H98.8711C99.8438 16.2031 100.679 16.3496 101.376 16.6426C102.073 16.9355 102.609 17.3691 102.984 17.9434C103.359 18.5176 103.547 19.2236 103.547 20.0615C103.547 20.7236 103.43 21.2979 103.195 21.7842C102.961 22.2705 102.63 22.6777 102.202 23.0059C101.78 23.334 101.282 23.5918 100.708 23.7793L99.9521 24.166H95.8477L95.8301 22.2588H98.8975C99.3955 22.2588 99.8086 22.1709 100.137 21.9951C100.465 21.8193 100.711 21.5762 100.875 21.2656C101.045 20.9551 101.13 20.6006 101.13 20.2021C101.13 19.7744 101.048 19.4053 100.884 19.0947C100.72 18.7783 100.471 18.5352 100.137 18.3652C99.8027 18.1953 99.3809 18.1104 98.8711 18.1104H96.6387V29H94.2217V16.2031ZM101.446 29L98.4844 23.2695L101.042 23.2607L104.039 28.877V29H101.446Z" fill="black"/>
            <path d="M111.366 29.0195V39H109.555V31.1318L107.155 31.9248V30.4619L111.161 29.0195H111.366Z" fill="black"/>
            <rect x="86" y="60" width="15" height="39" transform="rotate(-90 86 60)" stroke="black" strokeWidth="2"/>
            <path d="M152.5 257L149.4 245.877L141.317 254.123L152.5 257ZM167.891 62.2069C123.001 96.6844 110.684 136.536 112.971 171.524C115.254 206.439 132.069 236.431 145.325 251.364L146.82 250.036C133.811 235.381 117.216 205.796 114.967 171.394C112.723 137.066 124.753 97.8607 169.109 63.7931L167.891 62.2069Z" fill="black"/>
            <path d="M55 235L66.4191 233.286L59.2255 224.254L55 235ZM62.6853 230.157C94.3267 203.207 100.119 172.533 95.6889 146.811C93.4785 133.975 88.7278 122.39 83.4079 113.12C78.0962 103.865 72.1817 96.859 67.595 93.2169L66.3513 94.7831C70.6789 98.2195 76.4421 105.001 81.6732 114.116C86.8962 123.216 91.5534 134.581 93.7179 147.15C98.038 172.236 92.4475 202.18 61.3885 228.634L62.6853 230.157Z" fill="black"/>
                   
        </g>
        
        <g className="tranzition_hide" id="druha_varianta_open">
        
        <path d="M159 257L164.774 247H153.226L159 257ZM158 221V248H160V221H158Z" fill="black"/>
        <path d="M143.209 224.203H145.837V232.658C145.837 233.643 145.626 234.472 145.204 235.146C144.788 235.819 144.211 236.326 143.473 236.666C142.74 237.006 141.896 237.176 140.941 237.176C139.986 237.176 139.137 237.006 138.393 236.666C137.654 236.326 137.074 235.819 136.652 235.146C136.236 234.472 136.028 233.643 136.028 232.658V224.203H138.665V232.658C138.665 233.232 138.756 233.701 138.938 234.064C139.119 234.428 139.38 234.694 139.72 234.864C140.065 235.034 140.473 235.119 140.941 235.119C141.422 235.119 141.829 235.034 142.163 234.864C142.503 234.694 142.761 234.428 142.937 234.064C143.118 233.701 143.209 233.232 143.209 232.658V224.203Z" fill="black"/>
        <path d="M146.584 236.183V242H144.779V234.604H146.475L146.584 236.183ZM146.297 238.035H145.764C145.768 237.497 145.841 237.01 145.982 236.572C146.124 236.135 146.322 235.759 146.577 235.444C146.837 235.13 147.145 234.888 147.5 234.72C147.855 234.551 148.252 234.467 148.689 234.467C149.045 234.467 149.366 234.517 149.653 234.617C149.94 234.717 150.187 234.877 150.392 235.096C150.601 235.314 150.761 235.602 150.87 235.957C150.984 236.308 151.041 236.741 151.041 237.256V242H149.223V237.242C149.223 236.905 149.173 236.638 149.072 236.442C148.977 236.246 148.835 236.107 148.648 236.025C148.466 235.943 148.241 235.902 147.972 235.902C147.694 235.902 147.45 235.959 147.24 236.073C147.035 236.183 146.862 236.335 146.721 236.531C146.584 236.727 146.479 236.953 146.406 237.208C146.333 237.463 146.297 237.739 146.297 238.035Z" fill="black"/>
        <path d="M145.222 94.2031H149.871C150.844 94.2031 151.679 94.3496 152.376 94.6426C153.073 94.9355 153.609 95.3691 153.984 95.9434C154.359 96.5176 154.547 97.2236 154.547 98.0615C154.547 98.7236 154.43 99.2979 154.195 99.7842C153.961 100.271 153.63 100.678 153.202 101.006C152.78 101.334 152.282 101.592 151.708 101.779L150.952 102.166H146.848L146.83 100.259H149.897C150.396 100.259 150.809 100.171 151.137 99.9951C151.465 99.8193 151.711 99.5762 151.875 99.2656C152.045 98.9551 152.13 98.6006 152.13 98.2021C152.13 97.7744 152.048 97.4053 151.884 97.0947C151.72 96.7783 151.471 96.5352 151.137 96.3652C150.803 96.1953 150.381 96.1104 149.871 96.1104H147.639V107H145.222V94.2031ZM152.446 107L149.484 101.27L152.042 101.261L155.039 106.877V107H152.446Z" fill="black"/>
        <path d="M159.584 111.183V117H157.779V109.604H159.475L159.584 111.183ZM159.297 113.035H158.764C158.768 112.497 158.841 112.01 158.982 111.572C159.124 111.135 159.322 110.759 159.577 110.444C159.837 110.13 160.145 109.888 160.5 109.72C160.855 109.551 161.252 109.467 161.689 109.467C162.045 109.467 162.366 109.517 162.653 109.617C162.94 109.717 163.187 109.877 163.392 110.096C163.601 110.314 163.761 110.602 163.87 110.957C163.984 111.308 164.041 111.741 164.041 112.256V117H162.223V112.242C162.223 111.905 162.173 111.638 162.072 111.442C161.977 111.246 161.835 111.107 161.648 111.025C161.466 110.943 161.241 110.902 160.972 110.902C160.694 110.902 160.45 110.959 160.24 111.073C160.035 111.183 159.862 111.335 159.721 111.531C159.584 111.727 159.479 111.953 159.406 112.208C159.333 112.463 159.297 112.739 159.297 113.035Z" fill="black"/>
        <path d="M182.168 297.395H177.809L177.785 295.121H181.523C182.164 295.121 182.699 295.031 183.129 294.852C183.559 294.672 183.883 294.41 184.102 294.066C184.328 293.723 184.441 293.305 184.441 292.812C184.441 292.266 184.336 291.82 184.125 291.477C183.922 291.133 183.602 290.883 183.164 290.727C182.727 290.562 182.172 290.48 181.5 290.48H178.852V305H175.629V287.938H181.5C182.469 287.938 183.332 288.031 184.09 288.219C184.855 288.398 185.504 288.68 186.035 289.062C186.566 289.445 186.969 289.926 187.242 290.504C187.523 291.082 187.664 291.77 187.664 292.566C187.664 293.27 187.5 293.918 187.172 294.512C186.852 295.098 186.355 295.574 185.684 295.941C185.02 296.309 184.176 296.52 183.152 296.574L182.168 297.395ZM182.027 305H176.859L178.207 302.469H182.027C182.668 302.469 183.195 302.363 183.609 302.152C184.031 301.941 184.344 301.652 184.547 301.285C184.758 300.91 184.863 300.48 184.863 299.996C184.863 299.465 184.77 299.004 184.582 298.613C184.402 298.223 184.113 297.922 183.715 297.711C183.324 297.5 182.809 297.395 182.168 297.395H178.816L178.84 295.121H183.105L183.844 296C184.828 296.008 185.629 296.203 186.246 296.586C186.871 296.969 187.332 297.461 187.629 298.062C187.926 298.664 188.074 299.312 188.074 300.008C188.074 301.102 187.836 302.02 187.359 302.762C186.891 303.504 186.203 304.062 185.297 304.438C184.398 304.812 183.309 305 182.027 305Z" fill="black"/>
        <path d="M181.414 28.5273L176.551 43H173.141L179.516 25.9375H181.695L181.414 28.5273ZM185.48 43L180.594 28.5273L180.301 25.9375H182.492L188.902 43H185.48ZM185.258 36.6602V39.2031H176.105V36.6602H185.258Z" fill="black"/>
        <path d="M266.797 143.203V156H264.38V143.203H266.797Z" fill="black"/>
        <path d="M277.458 161.578V163H270.718V161.783L273.951 158.29C274.288 157.907 274.555 157.575 274.751 157.292C274.947 157.009 275.086 156.754 275.168 156.526C275.255 156.294 275.298 156.073 275.298 155.863C275.298 155.558 275.243 155.291 275.134 155.063C275.024 154.831 274.865 154.651 274.655 154.523C274.45 154.396 274.197 154.332 273.896 154.332C273.564 154.332 273.279 154.41 273.042 154.564C272.81 154.715 272.632 154.924 272.509 155.193C272.39 155.462 272.331 155.77 272.331 156.116H270.52C270.52 155.528 270.656 154.993 270.93 154.51C271.203 154.022 271.595 153.632 272.105 153.341C272.616 153.049 273.222 152.903 273.924 152.903C274.607 152.903 275.186 153.017 275.66 153.245C276.134 153.468 276.494 153.787 276.74 154.202C276.986 154.617 277.109 155.111 277.109 155.686C277.109 156.005 277.057 156.319 276.952 156.629C276.847 156.939 276.699 157.246 276.508 157.552C276.321 157.853 276.098 158.158 275.838 158.468C275.578 158.778 275.289 159.094 274.97 159.418L273.028 161.578H277.458Z" fill="black"/>
        <path d="M248 232L259.419 230.286L252.226 221.254L248 232ZM255.685 227.157C287.327 200.207 293.119 169.533 288.689 143.811C286.478 130.975 281.728 119.39 276.408 110.12C271.096 100.865 265.182 93.859 260.595 90.2169L259.351 91.7831C263.679 95.2195 269.442 102.001 274.673 111.116C279.896 120.216 284.553 131.581 286.718 144.15C291.038 169.236 285.448 199.18 254.388 225.634L255.685 227.157Z" fill="black"/>
           
        </g>

        </svg>

        </>
    )
}

export default Druha_schema_open_modif