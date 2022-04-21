import React, { useState } from "react";

function Piata_schema_c_o(){

    const [toggle, setToggle] = useState(true);

    function Show_scheme_5(){
        
       setToggle(!toggle)   
       if(toggle === true){
           setTimeout(() => {
            document.getElementById("first_scheme_co").style.opacity = "0%";
            document.getElementById("first_scheme_co").style.position = "absolute";
        }, 1000);
        setTimeout(() => {
            document.getElementById("second_scheme_5_co").style.opacity = "100%";
            document.getElementById("second_scheme_5_co").style.position = "unset";
        }, 1000);
       }
       else{
        document.getElementById("second_scheme_5_co").style.cssText = 
        "opasity: 0%";
        document.getElementById("first_scheme_co").style.cssText = 
        "opacity: 100%; position: unset";
       }
    }

    return(
        <>
    <p onClick={Show_scheme_5} className="pointer">Zobraz schému</p>
    
    <svg 
        width="314" 
        height="238" 
        viewBox="0 0 314 238" 
        fill="none"
        id="first_scheme_co"
        >

        <path d="M191.5 45C191.5 48.0376 189.038 50.5 186 50.5C182.962 50.5 180.5 48.0376 180.5 45C180.5 41.9624 182.962 39.5 186 39.5C189.038 39.5 191.5 41.9624 191.5 45Z" fill="black" stroke="black"/>
        <path d="M191.5 231C191.5 234.038 189.038 236.5 186 236.5C182.962 236.5 180.5 234.038 180.5 231C180.5 227.962 182.962 225.5 186 225.5C189.038 225.5 191.5 227.962 191.5 231Z" fill="black" stroke="black"/>
        <path d="M96.0488 25L86.0488 19.2265V30.7735L96.0488 25ZM55 26H87.0488V24H55V26Z" fill="black"/>
        <path d="M71.5312 4.49023V14H69.2021V4.49023H71.5312ZM69.0439 2.00293C69.0439 1.65723 69.1611 1.37012 69.3955 1.1416C69.6357 0.913086 69.958 0.798828 70.3623 0.798828C70.7666 0.798828 71.0859 0.913086 71.3203 1.1416C71.5605 1.37012 71.6807 1.65723 71.6807 2.00293C71.6807 2.34277 71.5605 2.62695 71.3203 2.85547C71.0859 3.08398 70.7666 3.19824 70.3623 3.19824C69.958 3.19824 69.6357 3.08398 69.3955 2.85547C69.1611 2.62695 69.0439 2.34277 69.0439 2.00293Z" fill="black"/>
        <circle cx="27" cy="44" r="5" stroke="black" strokeWidth="2"/>
        <circle cx="27" cy="232" r="5" stroke="black" strokeWidth="2"/>
        <line x1="31" y1="44" x2="186.01" y2="44" stroke="black" strokeWidth="2"/>
        <line x1="187" y1="44" x2="287" y2="44" stroke="black" strokeWidth="2"/>
        <line x1="286" y1="232" x2="286" y2="155" stroke="black" strokeWidth="2"/>
        <line x1="286" y1="120" x2="286" y2="43" stroke="black" strokeWidth="2"/>
        <line x1="187" y1="231" x2="287" y2="231" stroke="black" strokeWidth="2"/>
        <path d="M27 188L32.7735 178H21.2265L27 188ZM28 179L28 88H26L26 179H28Z" fill="black"/>
        <line x1="31" y1="231" x2="185.013" y2="231" stroke="black" strokeWidth="2"/>
        <path d="M6.60938 144.724V137.49H9.14062V147H6.75879L6.60938 144.724ZM6.89062 142.772L7.6377 142.755C7.6377 143.388 7.56445 143.977 7.41797 144.521C7.27148 145.061 7.05176 145.529 6.75879 145.928C6.46582 146.32 6.09668 146.628 5.65137 146.851C5.20605 147.067 4.68164 147.176 4.07812 147.176C3.61523 147.176 3.1875 147.111 2.79492 146.982C2.4082 146.848 2.07422 146.64 1.79297 146.358C1.51758 146.071 1.30078 145.705 1.14258 145.26C0.990234 144.809 0.914062 144.267 0.914062 143.634V137.49H3.44531V143.651C3.44531 143.933 3.47754 144.17 3.54199 144.363C3.6123 144.557 3.70898 144.715 3.83203 144.838C3.95508 144.961 4.09863 145.049 4.2627 145.102C4.43262 145.154 4.62012 145.181 4.8252 145.181C5.34668 145.181 5.75684 145.075 6.05566 144.864C6.36035 144.653 6.57422 144.366 6.69727 144.003C6.82617 143.634 6.89062 143.224 6.89062 142.772Z" fill="black"/>
        <path d="M206.222 94.2031H210.871C211.844 94.2031 212.679 94.3496 213.376 94.6426C214.073 94.9355 214.609 95.3691 214.984 95.9434C215.359 96.5176 215.547 97.2236 215.547 98.0615C215.547 98.7236 215.43 99.2979 215.195 99.7842C214.961 100.271 214.63 100.678 214.202 101.006C213.78 101.334 213.282 101.592 212.708 101.779L211.952 102.166H207.848L207.83 100.259H210.897C211.396 100.259 211.809 100.171 212.137 99.9951C212.465 99.8193 212.711 99.5762 212.875 99.2656C213.045 98.9551 213.13 98.6006 213.13 98.2021C213.13 97.7744 213.048 97.4053 212.884 97.0947C212.72 96.7783 212.471 96.5352 212.137 96.3652C211.803 96.1953 211.381 96.1104 210.871 96.1104H208.639V107H206.222V94.2031ZM213.446 107L210.484 101.27L213.042 101.261L216.039 106.877V107H213.446Z" fill="black"/>
        <path d="M207.222 174.203H211.871C212.844 174.203 213.679 174.35 214.376 174.643C215.073 174.936 215.609 175.369 215.984 175.943C216.359 176.518 216.547 177.224 216.547 178.062C216.547 178.724 216.43 179.298 216.195 179.784C215.961 180.271 215.63 180.678 215.202 181.006C214.78 181.334 214.282 181.592 213.708 181.779L212.952 182.166H208.848L208.83 180.259H211.897C212.396 180.259 212.809 180.171 213.137 179.995C213.465 179.819 213.711 179.576 213.875 179.266C214.045 178.955 214.13 178.601 214.13 178.202C214.13 177.774 214.048 177.405 213.884 177.095C213.72 176.778 213.471 176.535 213.137 176.365C212.803 176.195 212.381 176.11 211.871 176.11H209.639V187H207.222V174.203ZM214.446 187L211.484 181.27L214.042 181.261L217.039 186.877V187H214.446Z" fill="black"/>
        <path d="M303.222 132.203H307.871C308.844 132.203 309.679 132.35 310.376 132.643C311.073 132.936 311.609 133.369 311.984 133.943C312.359 134.518 312.547 135.224 312.547 136.062C312.547 136.724 312.43 137.298 312.195 137.784C311.961 138.271 311.63 138.678 311.202 139.006C310.78 139.334 310.282 139.592 309.708 139.779L308.952 140.166H304.848L304.83 138.259H307.897C308.396 138.259 308.809 138.171 309.137 137.995C309.465 137.819 309.711 137.576 309.875 137.266C310.045 136.955 310.13 136.601 310.13 136.202C310.13 135.774 310.048 135.405 309.884 135.095C309.72 134.778 309.471 134.535 309.137 134.365C308.803 134.195 308.381 134.11 307.871 134.11H305.639V145H303.222V132.203ZM310.446 145L307.484 139.27L310.042 139.261L313.039 144.877V145H310.446Z" fill="black"/>
        <line x1="186" y1="80" x2="186" y2="43" stroke="black" strokeWidth="2"/>
        <line x1="186" y1="232" x2="186" y2="195" stroke="black" strokeWidth="2"/>
        <line x1="186" y1="160" x2="186" y2="115" stroke="black" strokeWidth="2"/>
        <rect x="178.5" y="81" width="13" height="33" stroke="black" strokeWidth="2"/>
        <rect x="279" y="121" width="13" height="33" stroke="black" strokeWidth="2"/>
        <rect x="178.5" y="161" width="13" height="33" stroke="black" strokeWidth="2"/>
    </svg>

    <svg 
        width="239" 
        height="238" 
        viewBox="0 0 239 238" 
        fill="none"
        className="absolute"
        id="second_scheme_5_co"
        >

        <path d="M228.222 131.203H232.871C233.844 131.203 234.679 131.35 235.376 131.643C236.073 131.936 236.609 132.369 236.984 132.943C237.359 133.518 237.547 134.224 237.547 135.062C237.547 135.724 237.43 136.298 237.195 136.784C236.961 137.271 236.63 137.678 236.202 138.006C235.78 138.334 235.282 138.592 234.708 138.779L233.952 139.166H229.848L229.83 137.259H232.897C233.396 137.259 233.809 137.171 234.137 136.995C234.465 136.819 234.711 136.576 234.875 136.266C235.045 135.955 235.13 135.601 235.13 135.202C235.13 134.774 235.048 134.405 234.884 134.095C234.72 133.778 234.471 133.535 234.137 133.365C233.803 133.195 233.381 133.11 232.871 133.11H230.639V144H228.222V131.203ZM235.446 144L232.484 138.27L235.042 138.261L238.039 143.877V144H235.446Z" fill="black"/>
        <path d="M96.0488 25L86.0488 19.2265V30.7735L96.0488 25ZM55 26H87.0488V24H55V26Z" fill="black"/>
        <path d="M71.5312 4.49023V14H69.2021V4.49023H71.5312ZM69.0439 2.00293C69.0439 1.65723 69.1611 1.37012 69.3955 1.1416C69.6357 0.913086 69.958 0.798828 70.3623 0.798828C70.7666 0.798828 71.0859 0.913086 71.3203 1.1416C71.5605 1.37012 71.6807 1.65723 71.6807 2.00293C71.6807 2.34277 71.5605 2.62695 71.3203 2.85547C71.0859 3.08398 70.7666 3.19824 70.3623 3.19824C69.958 3.19824 69.6357 3.08398 69.3955 2.85547C69.1611 2.62695 69.0439 2.34277 69.0439 2.00293Z" fill="black"/>
        <circle cx="27" cy="44" r="5" stroke="black" strokeWidth="2"/>
        <circle cx="27" cy="232" r="5" stroke="black" strokeWidth="2"/>
        <line x1="31" y1="44" x2="186.01" y2="44" stroke="black" strokeWidth="2"/>
        <line x1="185" y1="232" x2="185" y2="155" stroke="black" strokeWidth="2"/>
        <line x1="185" y1="120" x2="185" y2="43" stroke="black" strokeWidth="2"/>
        <path d="M27 188L32.7735 178H21.2265L27 188ZM28 179L28 88H26L26 179H28Z" fill="black"/>
        <line x1="31" y1="231" x2="185.013" y2="231" stroke="black" strokeWidth="2"/>
        <path d="M6.60938 144.724V137.49H9.14062V147H6.75879L6.60938 144.724ZM6.89062 142.772L7.6377 142.755C7.6377 143.388 7.56445 143.977 7.41797 144.521C7.27148 145.061 7.05176 145.529 6.75879 145.928C6.46582 146.32 6.09668 146.628 5.65137 146.851C5.20605 147.067 4.68164 147.176 4.07812 147.176C3.61523 147.176 3.1875 147.111 2.79492 146.982C2.4082 146.848 2.07422 146.64 1.79297 146.358C1.51758 146.071 1.30078 145.705 1.14258 145.26C0.990234 144.809 0.914062 144.267 0.914062 143.634V137.49H3.44531V143.651C3.44531 143.933 3.47754 144.17 3.54199 144.363C3.6123 144.557 3.70898 144.715 3.83203 144.838C3.95508 144.961 4.09863 145.049 4.2627 145.102C4.43262 145.154 4.62012 145.181 4.8252 145.181C5.34668 145.181 5.75684 145.075 6.05566 144.864C6.36035 144.653 6.57422 144.366 6.69727 144.003C6.82617 143.634 6.89062 143.224 6.89062 142.772Z" fill="black"/>
        <rect x="178" y="121" width="13" height="33" stroke="black" strokeWidth="2"/>
        <path d="M213.589 131.172V133H204.923V131.436L209.08 126.944C209.514 126.452 209.856 126.024 210.108 125.661C210.36 125.298 210.539 124.97 210.645 124.677C210.756 124.378 210.812 124.094 210.812 123.824C210.812 123.432 210.741 123.089 210.601 122.796C210.46 122.497 210.255 122.266 209.985 122.102C209.722 121.938 209.396 121.855 209.01 121.855C208.582 121.855 208.216 121.955 207.911 122.154C207.612 122.348 207.384 122.617 207.226 122.963C207.073 123.309 206.997 123.704 206.997 124.149H204.668C204.668 123.394 204.844 122.705 205.195 122.084C205.547 121.457 206.051 120.956 206.707 120.581C207.363 120.206 208.143 120.019 209.045 120.019C209.924 120.019 210.668 120.165 211.277 120.458C211.887 120.745 212.35 121.155 212.666 121.688C212.982 122.222 213.141 122.857 213.141 123.596C213.141 124.006 213.073 124.41 212.938 124.809C212.804 125.207 212.613 125.603 212.367 125.995C212.127 126.382 211.84 126.774 211.506 127.173C211.172 127.571 210.8 127.979 210.39 128.395L207.894 131.172H213.589Z" fill="black"/>
        <path d="M207.463 147.573H208.772C209.235 147.573 209.616 147.494 209.915 147.336C210.22 147.172 210.445 146.949 210.592 146.668C210.744 146.381 210.82 146.05 210.82 145.675C210.82 145.306 210.753 144.986 210.618 144.717C210.483 144.441 210.278 144.23 210.003 144.084C209.733 143.932 209.388 143.855 208.966 143.855C208.626 143.855 208.312 143.923 208.025 144.058C207.744 144.192 207.519 144.386 207.349 144.638C207.185 144.884 207.103 145.18 207.103 145.525H204.773C204.773 144.834 204.955 144.228 205.318 143.706C205.688 143.179 206.186 142.766 206.812 142.467C207.439 142.168 208.14 142.019 208.913 142.019C209.757 142.019 210.495 142.159 211.128 142.44C211.767 142.716 212.262 143.123 212.613 143.662C212.971 144.201 213.149 144.869 213.149 145.666C213.149 146.047 213.059 146.428 212.877 146.809C212.701 147.184 212.44 147.523 212.095 147.828C211.755 148.127 211.336 148.37 210.838 148.558C210.346 148.739 209.78 148.83 209.142 148.83H207.463V147.573ZM207.463 149.366V148.127H209.142C209.862 148.127 210.486 148.212 211.014 148.382C211.547 148.546 211.986 148.78 212.332 149.085C212.678 149.384 212.933 149.732 213.097 150.131C213.267 150.529 213.352 150.957 213.352 151.414C213.352 152.012 213.24 152.545 213.018 153.014C212.795 153.477 212.481 153.869 212.077 154.191C211.679 154.514 211.21 154.76 210.671 154.93C210.132 155.094 209.549 155.176 208.922 155.176C208.377 155.176 207.847 155.103 207.331 154.956C206.821 154.804 206.361 154.578 205.951 154.279C205.541 153.975 205.216 153.594 204.976 153.137C204.735 152.674 204.615 152.138 204.615 151.528H206.944C206.944 151.88 207.029 152.193 207.199 152.469C207.375 152.744 207.615 152.961 207.92 153.119C208.23 153.271 208.579 153.348 208.966 153.348C209.394 153.348 209.76 153.271 210.064 153.119C210.375 152.961 210.612 152.738 210.776 152.451C210.94 152.158 211.022 151.81 211.022 151.405C211.022 150.925 210.932 150.535 210.75 150.236C210.568 149.938 210.308 149.718 209.968 149.577C209.634 149.437 209.235 149.366 208.772 149.366H207.463Z" fill="black"/>
        <line x1="197" y1="138" x2="222" y2="138" stroke="black" strokeWidth="2"/>
    </svg>

        </>
    )
}

export default Piata_schema_c_o;