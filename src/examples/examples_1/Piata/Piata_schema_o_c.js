import React, { useState } from "react";

function Piata_schema_o_c(){

    const [toggle, setToggle] = useState(true);

    function Show_scheme_5(){
        
       setToggle(!toggle)   
       if(toggle === true){
           document.getElementById("first_diod_5").style.opacity = "0%";
           setTimeout(() => {
            document.getElementById("second_link_5").style.opacity = "0%";
        }, 2000);
           setTimeout(() => {
            document.getElementById("first_scheme_5").style.opacity = "0%";
            document.getElementById("first_scheme_5").style.position = "absolute";
        }, 4000);
        setTimeout(() => {
            document.getElementById("second_scheme_5").style.opacity = "100%";
            document.getElementById("second_scheme_5").style.position = "unset";
        }, 4000);
       }
       else{
        document.getElementById("second_scheme_5").style.cssText = 
        "opasity: 0%";
        document.getElementById("first_scheme_5").style.cssText = 
        "opacity: 100%; position: unset";
        document.getElementById("first_diod_5").style.opacity = "100%";
        document.getElementById("second_link_5").style.opacity = "100%";
        
        

       }
    }

    return(
        <>
    <p onClick={Show_scheme_5} className="pointer">Zobraz schému</p>
        <svg 
    width="283" 
    height="232" 
    viewBox="0 0 283 232" 
    fill="none"
    className="spodok"
    id="first_scheme_5">
    <circle cx="24" cy="38" r="5" stroke="black" strokeWidth="2"/>
    <circle cx="24" cy="226" r="5" stroke="black" strokeWidth="2"/>
    <path d="M92.5 132C92.5 135.038 90.0376 137.5 87 137.5C83.9624 137.5 81.5 135.038 81.5 132C81.5 128.962 83.9624 126.5 87 126.5C90.0376 126.5 92.5 128.962 92.5 132Z" fill="black" stroke="black"/>
    <path d="M282.5 132C282.5 135.038 280.038 137.5 277 137.5C273.962 137.5 271.5 135.038 271.5 132C271.5 128.962 273.962 126.5 277 126.5C280.038 126.5 282.5 128.962 282.5 132Z" fill="black" stroke="black"/>
    <path d="M188.5 226C188.5 229.038 186.038 231.5 183 231.5C179.962 231.5 177.5 229.038 177.5 226C177.5 222.962 179.962 220.5 183 220.5C186.038 220.5 188.5 222.962 188.5 226Z" fill="black" stroke="black"/>
    <path d="M188.5 38C188.5 41.0376 186.038 43.5 183 43.5C179.962 43.5 177.5 41.0376 177.5 38C177.5 34.9624 179.962 32.5 183 32.5C186.038 32.5 188.5 34.9624 188.5 38Z" fill="black" stroke="black"/>
    <line x1="29.9935" y1="226" x2="184.006" y2="226" stroke="black" strokeWidth="2"/>
    <line x1="147.293" y1="72.6482" x2="182.648" y2="37.2929" stroke="black" strokeWidth="2"/>
    <line x1="182.707" y1="36.2929" x2="218.062" y2="71.6482" stroke="black" strokeWidth="2"/>
    <line x1="88.2929" y1="131.648" x2="123.648" y2="96.2929" stroke="black" strokeWidth="2"/>
    <line x1="242.707" y1="95.2929" x2="278.062" y2="130.648" stroke="black" strokeWidth="2"/>
    <line x1="88" y1="132" x2="272" y2="132" stroke="black" strokeWidth="2"/>
    <circle cx="220" cy="132" r="14" stroke="black" strokeWidth="2"/>
    <path d="M6.60938 132.724V125.49H9.14062V135H6.75879L6.60938 132.724ZM6.89062 130.772L7.6377 130.755C7.6377 131.388 7.56445 131.977 7.41797 132.521C7.27148 133.061 7.05176 133.529 6.75879 133.928C6.46582 134.32 6.09668 134.628 5.65137 134.851C5.20605 135.067 4.68164 135.176 4.07812 135.176C3.61523 135.176 3.1875 135.111 2.79492 134.982C2.4082 134.848 2.07422 134.64 1.79297 134.358C1.51758 134.071 1.30078 133.705 1.14258 133.26C0.990234 132.809 0.914062 132.267 0.914062 131.634V125.49H3.44531V131.651C3.44531 131.933 3.47754 132.17 3.54199 132.363C3.6123 132.557 3.70898 132.715 3.83203 132.838C3.95508 132.961 4.09863 133.049 4.2627 133.102C4.43262 133.154 4.62012 133.181 4.8252 133.181C5.34668 133.181 5.75684 133.075 6.05566 132.864C6.36035 132.653 6.57422 132.366 6.69727 132.003C6.82617 131.634 6.89062 131.224 6.89062 130.772Z" fill="black"/>
    <path d="M83.0488 25L73.0488 19.2265V30.7735L83.0488 25ZM42 26H74.0488V24H42V26Z" fill="black"/>
    <path d="M245.031 112L235.002 106.276L235.059 117.823L245.031 112ZM192.005 113.262L236.036 113.044L236.026 111.045L191.995 111.262L192.005 113.262Z" fill="black"/>
    <path d="M58.5312 4.49023V14H56.2021V4.49023H58.5312ZM56.0439 2.00293C56.0439 1.65723 56.1611 1.37012 56.3955 1.1416C56.6357 0.913086 56.958 0.798828 57.3623 0.798828C57.7666 0.798828 58.0859 0.913086 58.3203 1.1416C58.5605 1.37012 58.6806 1.65723 58.6806 2.00293C58.6806 2.34277 58.5605 2.62695 58.3203 2.85547C58.0859 3.08398 57.7666 3.19824 57.3623 3.19824C56.958 3.19824 56.6357 3.08398 56.3955 2.85547C56.1611 2.62695 56.0439 2.34277 56.0439 2.00293Z" fill="black"/>
    <path d="M83.0488 216L73.0488 210.226V221.774L83.0488 216ZM42 217H74.0488V215H42V217Z" fill="black"/>
    <path d="M58.5312 195.49V205H56.2021V195.49H58.5312ZM56.0439 193.003C56.0439 192.657 56.1611 192.37 56.3955 192.142C56.6357 191.913 56.958 191.799 57.3623 191.799C57.7666 191.799 58.0859 191.913 58.3203 192.142C58.5605 192.37 58.6806 192.657 58.6806 193.003C58.6806 193.343 58.5605 193.627 58.3203 193.855C58.0859 194.084 57.7666 194.198 57.3623 194.198C56.958 194.198 56.6357 194.084 56.3955 193.855C56.1611 193.627 56.0439 193.343 56.0439 193.003Z" fill="black"/>
    <path d="M202.341 90.2031H204.758V98.7021C204.758 99.6807 204.547 100.504 204.125 101.172C203.703 101.834 203.129 102.335 202.402 102.675C201.676 103.009 200.85 103.176 199.924 103.176C198.986 103.176 198.151 103.009 197.419 102.675C196.687 102.335 196.112 101.834 195.696 101.172C195.28 100.504 195.072 99.6807 195.072 98.7021V90.2031H197.489V98.7021C197.489 99.2998 197.589 99.7891 197.788 100.17C197.987 100.545 198.269 100.823 198.632 101.005C198.995 101.187 199.426 101.277 199.924 101.277C200.428 101.277 200.858 101.187 201.216 101.005C201.579 100.823 201.857 100.545 202.051 100.17C202.244 99.7891 202.341 99.2998 202.341 98.7021V90.2031Z" fill="black"/>
    <path d="M210.308 103.169V104.844C210.308 105.609 210.23 106.263 210.075 106.806C209.92 107.348 209.697 107.792 209.405 108.139C209.114 108.48 208.765 108.733 208.359 108.897C207.954 109.057 207.503 109.137 207.006 109.137C206.609 109.137 206.24 109.087 205.898 108.986C205.557 108.882 205.249 108.722 204.976 108.508C204.707 108.289 204.474 108.011 204.278 107.674C204.087 107.337 203.939 106.933 203.834 106.464C203.734 105.994 203.684 105.454 203.684 104.844V103.169C203.684 102.403 203.761 101.752 203.916 101.214C204.076 100.676 204.301 100.236 204.593 99.8945C204.884 99.5527 205.233 99.3044 205.639 99.1494C206.044 98.9899 206.495 98.9102 206.992 98.9102C207.393 98.9102 207.762 98.9603 208.1 99.0605C208.441 99.1608 208.747 99.318 209.016 99.5322C209.289 99.7419 209.521 100.015 209.713 100.353C209.904 100.685 210.05 101.086 210.15 101.556C210.255 102.021 210.308 102.558 210.308 103.169ZM208.503 105.09V102.916C208.503 102.533 208.48 102.201 208.435 101.918C208.394 101.631 208.332 101.387 208.25 101.187C208.168 100.986 208.065 100.824 207.942 100.701C207.819 100.574 207.678 100.48 207.519 100.421C207.359 100.362 207.184 100.332 206.992 100.332C206.755 100.332 206.543 100.38 206.356 100.476C206.17 100.567 206.012 100.713 205.885 100.913C205.757 101.114 205.659 101.38 205.591 101.713C205.527 102.041 205.495 102.442 205.495 102.916V105.09C205.495 105.473 205.516 105.808 205.557 106.095C205.602 106.382 205.666 106.628 205.748 106.833C205.835 107.038 205.937 107.207 206.056 107.339C206.179 107.466 206.32 107.562 206.479 107.626C206.639 107.685 206.814 107.715 207.006 107.715C207.247 107.715 207.459 107.667 207.642 107.571C207.828 107.476 207.986 107.325 208.113 107.12C208.241 106.91 208.337 106.639 208.4 106.307C208.469 105.969 208.503 105.564 208.503 105.09Z" fill="black"/>
    <path d="M119.222 63.2031H123.871C124.844 63.2031 125.679 63.3496 126.376 63.6426C127.073 63.9355 127.609 64.3691 127.984 64.9434C128.359 65.5176 128.547 66.2236 128.547 67.0615C128.547 67.7236 128.43 68.2979 128.195 68.7842C127.961 69.2705 127.63 69.6777 127.202 70.0059C126.78 70.334 126.282 70.5918 125.708 70.7793L124.952 71.166H120.848L120.83 69.2588H123.897C124.396 69.2588 124.809 69.1709 125.137 68.9951C125.465 68.8193 125.711 68.5762 125.875 68.2656C126.045 67.9551 126.13 67.6006 126.13 67.2021C126.13 66.7744 126.048 66.4053 125.884 66.0947C125.72 65.7783 125.471 65.5352 125.137 65.3652C124.803 65.1953 124.381 65.1104 123.871 65.1104H121.639V76H119.222V63.2031ZM126.446 76L123.484 70.2695L126.042 70.2607L129.039 75.877V76H126.446Z" fill="black"/>
    <path d="M117.222 184.203H121.871C122.844 184.203 123.679 184.35 124.376 184.643C125.073 184.936 125.609 185.369 125.984 185.943C126.359 186.518 126.547 187.224 126.547 188.062C126.547 188.724 126.43 189.298 126.195 189.784C125.961 190.271 125.63 190.678 125.202 191.006C124.78 191.334 124.282 191.592 123.708 191.779L122.952 192.166H118.848L118.83 190.259H121.897C122.396 190.259 122.809 190.171 123.137 189.995C123.465 189.819 123.711 189.576 123.875 189.266C124.045 188.955 124.13 188.601 124.13 188.202C124.13 187.774 124.048 187.405 123.884 187.095C123.72 186.778 123.471 186.535 123.137 186.365C122.803 186.195 122.381 186.11 121.871 186.11H119.639V197H117.222V184.203ZM124.446 197L121.484 191.27L124.042 191.261L127.039 196.877V197H124.446Z" fill="black"/>
    <path d="M241.222 63.2031H245.871C246.844 63.2031 247.679 63.3496 248.376 63.6426C249.073 63.9355 249.609 64.3691 249.984 64.9434C250.359 65.5176 250.547 66.2236 250.547 67.0615C250.547 67.7236 250.43 68.2979 250.195 68.7842C249.961 69.2705 249.63 69.6777 249.202 70.0059C248.78 70.334 248.282 70.5918 247.708 70.7793L246.952 71.166H242.848L242.83 69.2588H245.897C246.396 69.2588 246.809 69.1709 247.137 68.9951C247.465 68.8193 247.711 68.5762 247.875 68.2656C248.045 67.9551 248.13 67.6006 248.13 67.2021C248.13 66.7744 248.048 66.4053 247.884 66.0947C247.72 65.7783 247.471 65.5352 247.137 65.3652C246.803 65.1953 246.381 65.1104 245.871 65.1104H243.639V76H241.222V63.2031ZM248.446 76L245.484 70.2695L248.042 70.2607L251.039 75.877V76H248.446Z" fill="black"/>
    <rect x="142.749" y="68.4142" width="13" height="33" transform="rotate(45 142.749 68.4142)" stroke="black" strokeWidth="2"/>
    <line x1="87.7071" y1="131.293" x2="123.062" y2="166.648" stroke="black" strokeWidth="2"/>
    <line x1="147.707" y1="190.293" x2="183.062" y2="225.648" stroke="black" strokeWidth="2"/>
    <rect x="119.414" y="171.607" width="13" height="33" transform="rotate(-45 119.414 171.607)" stroke="black" strokeWidth="2"/>
    <rect x="214.414" y="76.6066" width="13" height="33" transform="rotate(-45 214.414 76.6066)" stroke="black" strokeWidth="2"/>

    <line x1="178" y1="38" x2="28" y2="38" stroke="black" strokeWidth="2"/>

    <g id="first_diod_5" className="tranzition">
        <line x1="129" y1="147" x2="129" y2="119" stroke="black" strokeWidth="2"/>
        <path d="M147.5 147.289L127.639 132L147.5 116.711V147.289Z" stroke="black" strokeWidth="2"/>
        <path d="M156.045 112H153.285L153.303 110.102H156.045C156.789 110.102 157.413 109.938 157.917 109.609C158.421 109.275 158.802 108.798 159.06 108.177C159.317 107.55 159.446 106.8 159.446 105.927V105.268C159.446 104.594 159.373 103.999 159.227 103.483C159.08 102.968 158.863 102.534 158.576 102.183C158.295 101.831 157.946 101.564 157.53 101.383C157.114 101.201 156.637 101.11 156.098 101.11H153.232V99.2031H156.098C156.953 99.2031 157.732 99.3467 158.436 99.6338C159.145 99.9209 159.757 100.334 160.272 100.873C160.794 101.406 161.192 102.045 161.468 102.789C161.749 103.533 161.89 104.365 161.89 105.285V105.927C161.89 106.841 161.749 107.673 161.468 108.423C161.192 109.167 160.794 109.806 160.272 110.339C159.757 110.872 159.142 111.282 158.427 111.569C157.712 111.856 156.918 112 156.045 112ZM154.639 99.2031V112H152.222V99.2031H154.639Z" fill="black"></path>
        <path d="M167.366 107.02V117H165.555V109.132L163.155 109.925V108.462L167.161 107.02H167.366Z" fill="black"></path>
    </g>
    
    <g id="second_link_5" className="tranzition">
        <path d="M245.166 184.201L220.311 187.434L223.544 162.58L245.166 184.201Z" stroke="black" strokeWidth="2"></path>
        <line x1="209.707" y1="177.293" x2="229.506" y2="197.092" stroke="black" strokeWidth="2"></line>
        <path d="M248.045 206H245.285L245.303 204.102H248.045C248.789 204.102 249.413 203.938 249.917 203.609C250.421 203.275 250.802 202.798 251.06 202.177C251.317 201.55 251.446 200.8 251.446 199.927V199.268C251.446 198.594 251.373 197.999 251.227 197.483C251.08 196.968 250.863 196.534 250.576 196.183C250.295 195.831 249.946 195.564 249.53 195.383C249.114 195.201 248.637 195.11 248.098 195.11H245.232V193.203H248.098C248.953 193.203 249.732 193.347 250.436 193.634C251.145 193.921 251.757 194.334 252.272 194.873C252.794 195.406 253.192 196.045 253.468 196.789C253.749 197.533 253.89 198.365 253.89 199.285V199.927C253.89 200.841 253.749 201.673 253.468 202.423C253.192 203.167 252.794 203.806 252.272 204.339C251.757 204.872 251.142 205.282 250.427 205.569C249.712 205.856 248.918 206 248.045 206ZM246.639 193.203V206H244.222V193.203H246.639Z" fill="black"></path>
        <path d="M262.458 209.578V211H255.718V209.783L258.951 206.29C259.288 205.907 259.555 205.575 259.751 205.292C259.947 205.009 260.086 204.754 260.168 204.526C260.255 204.294 260.298 204.073 260.298 203.863C260.298 203.558 260.243 203.291 260.134 203.063C260.024 202.831 259.865 202.651 259.655 202.523C259.45 202.396 259.197 202.332 258.896 202.332C258.564 202.332 258.279 202.41 258.042 202.564C257.81 202.715 257.632 202.924 257.509 203.193C257.39 203.462 257.331 203.77 257.331 204.116H255.52C255.52 203.528 255.656 202.993 255.93 202.51C256.203 202.022 256.595 201.632 257.105 201.341C257.616 201.049 258.222 200.903 258.924 200.903C259.607 200.903 260.186 201.017 260.66 201.245C261.134 201.468 261.494 201.787 261.74 202.202C261.986 202.617 262.109 203.111 262.109 203.686C262.109 204.005 262.057 204.319 261.952 204.629C261.847 204.939 261.699 205.246 261.508 205.552C261.321 205.853 261.098 206.158 260.838 206.468C260.578 206.778 260.289 207.094 259.97 207.418L258.028 209.578H262.458Z" fill="black"></path>
        <line x1="183.293" y1="224.648" x2="275.217" y2="132.724" stroke="black" strokeWidth="2"></line>
    </g>

    </svg>


        <svg 
        width="337" 
        height="232" 
        viewBox="0 0 337 232" 
        fill="none"
        id="second_scheme_5"
        className="absolute">
        <path d="M191.5 38C191.5 41.0376 189.038 43.5 186 43.5C182.962 43.5 180.5 41.0376 180.5 38C180.5 34.9624 182.962 32.5 186 32.5C189.038 32.5 191.5 34.9624 191.5 38Z" fill="black" stroke="black"/>
        <path d="M191.5 133C191.5 136.038 189.038 138.5 186 138.5C182.962 138.5 180.5 136.038 180.5 133C180.5 129.962 182.962 127.5 186 127.5C189.038 127.5 191.5 129.962 191.5 133Z" fill="black" stroke="black"/>
        <circle cx="261" cy="132" r="14" stroke="black" strokeWidth="2"/>
        <path d="M93.0488 25L83.0488 19.2265V30.7735L93.0488 25ZM52 26H84.0488V24H52V26Z" fill="black"/>
        <path d="M68.5312 4.49023V14H66.2021V4.49023H68.5312ZM66.0439 2.00293C66.0439 1.65723 66.1611 1.37012 66.3955 1.1416C66.6357 0.913086 66.958 0.798828 67.3623 0.798828C67.7666 0.798828 68.0859 0.913086 68.3203 1.1416C68.5605 1.37012 68.6806 1.65723 68.6806 2.00293C68.6806 2.34277 68.5605 2.62695 68.3203 2.85547C68.0859 3.08398 67.7666 3.19824 67.3623 3.19824C66.958 3.19824 66.6357 3.08398 66.3955 2.85547C66.1611 2.62695 66.0439 2.34277 66.0439 2.00293Z" fill="black"/>
        <path d="M166 88.0488L171.774 78.0488H160.226L166 88.0488ZM165 47V79.0488H167V47H165Z" fill="black"/>
        <path d="M144.507 58.4902V68H142.178V58.4902H144.507ZM142.02 56.0029C142.02 55.6572 142.137 55.3701 142.371 55.1416C142.611 54.9131 142.934 54.7988 143.338 54.7988C143.742 54.7988 144.062 54.9131 144.296 55.1416C144.536 55.3701 144.656 55.6572 144.656 56.0029C144.656 56.3428 144.536 56.627 144.296 56.8555C144.062 57.084 143.742 57.1982 143.338 57.1982C142.934 57.1982 142.611 57.084 142.371 56.8555C142.137 56.627 142.02 56.3428 142.02 56.0029Z" fill="black"/>
        <path d="M290.031 111L280.002 105.276L280.059 116.823L290.031 111ZM237.005 112.262L281.036 112.044L281.026 110.045L236.995 110.262L237.005 112.262Z" fill="black"/>
        <path d="M247.341 89.2031H249.758V97.7021C249.758 98.6807 249.547 99.5039 249.125 100.172C248.703 100.834 248.129 101.335 247.402 101.675C246.676 102.009 245.85 102.176 244.924 102.176C243.986 102.176 243.151 102.009 242.419 101.675C241.687 101.335 241.112 100.834 240.696 100.172C240.28 99.5039 240.072 98.6807 240.072 97.7021V89.2031H242.489V97.7021C242.489 98.2998 242.589 98.7891 242.788 99.1699C242.987 99.5449 243.269 99.8232 243.632 100.005C243.995 100.187 244.426 100.277 244.924 100.277C245.428 100.277 245.858 100.187 246.216 100.005C246.579 99.8232 246.857 99.5449 247.051 99.1699C247.244 98.7891 247.341 98.2998 247.341 97.7021V89.2031Z" fill="black"/>
        <path d="M284.341 204.203H286.758V212.702C286.758 213.681 286.547 214.504 286.125 215.172C285.703 215.834 285.129 216.335 284.402 216.675C283.676 217.009 282.85 217.176 281.924 217.176C280.986 217.176 280.151 217.009 279.419 216.675C278.687 216.335 278.112 215.834 277.696 215.172C277.28 214.504 277.072 213.681 277.072 212.702V204.203H279.489V212.702C279.489 213.3 279.589 213.789 279.788 214.17C279.987 214.545 280.269 214.823 280.632 215.005C280.995 215.187 281.426 215.277 281.924 215.277C282.428 215.277 282.858 215.187 283.216 215.005C283.579 214.823 283.857 214.545 284.051 214.17C284.244 213.789 284.341 213.3 284.341 212.702V204.203Z" fill="black"/>
        <path d="M255.308 102.169V103.844C255.308 104.609 255.23 105.263 255.075 105.806C254.92 106.348 254.697 106.792 254.405 107.139C254.114 107.48 253.765 107.733 253.359 107.897C252.954 108.057 252.503 108.137 252.006 108.137C251.609 108.137 251.24 108.087 250.898 107.986C250.557 107.882 250.249 107.722 249.976 107.508C249.707 107.289 249.474 107.011 249.278 106.674C249.087 106.337 248.939 105.933 248.834 105.464C248.734 104.994 248.684 104.454 248.684 103.844V102.169C248.684 101.403 248.761 100.752 248.916 100.214C249.076 99.6761 249.301 99.2363 249.593 98.8945C249.884 98.5527 250.233 98.3044 250.639 98.1494C251.044 97.9899 251.495 97.9102 251.992 97.9102C252.393 97.9102 252.762 97.9603 253.1 98.0605C253.441 98.1608 253.747 98.318 254.016 98.5322C254.289 98.7419 254.521 99.0153 254.713 99.3525C254.904 99.6852 255.05 100.086 255.15 100.556C255.255 101.021 255.308 101.558 255.308 102.169ZM253.503 104.09V101.916C253.503 101.533 253.48 101.201 253.435 100.918C253.394 100.631 253.332 100.387 253.25 100.187C253.168 99.986 253.065 99.8242 252.942 99.7012C252.819 99.5736 252.678 99.4801 252.519 99.4209C252.359 99.3617 252.184 99.332 251.992 99.332C251.755 99.332 251.543 99.3799 251.356 99.4756C251.17 99.5667 251.012 99.7126 250.885 99.9131C250.757 100.114 250.659 100.38 250.591 100.713C250.527 101.041 250.495 101.442 250.495 101.916V104.09C250.495 104.473 250.516 104.808 250.557 105.095C250.602 105.382 250.666 105.628 250.748 105.833C250.835 106.038 250.937 106.207 251.056 106.339C251.179 106.466 251.32 106.562 251.479 106.626C251.639 106.685 251.814 106.715 252.006 106.715C252.247 106.715 252.459 106.667 252.642 106.571C252.828 106.476 252.986 106.325 253.113 106.12C253.241 105.91 253.337 105.639 253.4 105.307C253.469 104.969 253.503 104.564 253.503 104.09Z" fill="black"/>
        <path d="M289.765 218.563H287.222L287.208 217.237H289.389C289.762 217.237 290.075 217.185 290.325 217.08C290.576 216.975 290.765 216.823 290.893 216.622C291.025 216.422 291.091 216.178 291.091 215.891C291.091 215.572 291.029 215.312 290.906 215.111C290.788 214.911 290.601 214.765 290.346 214.674C290.09 214.578 289.767 214.53 289.375 214.53H287.83V223H285.95V213.047H289.375C289.94 213.047 290.444 213.102 290.886 213.211C291.332 213.316 291.711 213.48 292.021 213.703C292.33 213.926 292.565 214.207 292.725 214.544C292.889 214.881 292.971 215.282 292.971 215.747C292.971 216.157 292.875 216.535 292.684 216.882C292.497 217.224 292.207 217.502 291.815 217.716C291.428 217.93 290.936 218.053 290.339 218.085L289.765 218.563ZM289.683 223H286.668L287.454 221.523H289.683C290.056 221.523 290.364 221.462 290.605 221.339C290.852 221.216 291.034 221.047 291.152 220.833C291.275 220.614 291.337 220.364 291.337 220.081C291.337 219.771 291.282 219.502 291.173 219.274C291.068 219.047 290.899 218.871 290.667 218.748C290.439 218.625 290.138 218.563 289.765 218.563H287.81L287.823 217.237H290.312L290.742 217.75C291.316 217.755 291.784 217.868 292.144 218.092C292.508 218.315 292.777 218.602 292.95 218.953C293.123 219.304 293.21 219.682 293.21 220.088C293.21 220.726 293.071 221.261 292.793 221.694C292.52 222.127 292.118 222.453 291.59 222.672C291.066 222.891 290.43 223 289.683 223ZM298.795 214.558L295.958 223H293.969L297.688 213.047H298.959L298.795 214.558ZM301.167 223L298.316 214.558L298.146 213.047H299.424L303.163 223H301.167ZM301.037 219.302V220.785H295.698V219.302H301.037Z" fill="black"/>
        <path d="M151.366 64.0195V74H149.555V66.1318L147.155 66.9248V65.4619L151.161 64.0195H151.366Z" fill="black"/>
        <circle cx="27" cy="38" r="5" stroke="black" strokeWidth="2"/>
        <circle cx="311.5" cy="132" r="5" stroke="black" strokeWidth="2"/>
        <circle cx="186" cy="225" r="5" stroke="black" strokeWidth="2"/>
        <circle cx="27" cy="226" r="5" stroke="black" strokeWidth="2"/>
        <line x1="31" y1="38" x2="185.013" y2="38" stroke="black" strokeWidth="2"/>
        <line x1="192" y1="38" x2="312" y2="38" stroke="black" strokeWidth="2"/>
        <line x1="186" y1="132" x2="312" y2="132" stroke="black" strokeWidth="2"/>
        <path d="M27 182L32.7735 172H21.2265L27 182ZM28 173L28 82H26L26 173H28Z" fill="black"/>
        <line x1="31" y1="225" x2="185.013" y2="225" stroke="black" strokeWidth="2"/>
        <path d="M6.60938 138.724V131.49H9.14062V141H6.75879L6.60938 138.724ZM6.89062 136.772L7.6377 136.755C7.6377 137.388 7.56445 137.977 7.41797 138.521C7.27148 139.061 7.05176 139.529 6.75879 139.928C6.46582 140.32 6.09668 140.628 5.65137 140.851C5.20605 141.067 4.68164 141.176 4.07812 141.176C3.61523 141.176 3.1875 141.111 2.79492 140.982C2.4082 140.848 2.07422 140.64 1.79297 140.358C1.51758 140.071 1.30078 139.705 1.14258 139.26C0.990234 138.809 0.914062 138.267 0.914062 137.634V131.49H3.44531V137.651C3.44531 137.933 3.47754 138.17 3.54199 138.363C3.6123 138.557 3.70898 138.715 3.83203 138.838C3.95508 138.961 4.09863 139.049 4.2627 139.102C4.43262 139.154 4.62012 139.181 4.8252 139.181C5.34668 139.181 5.75684 139.075 6.05566 138.864C6.36035 138.653 6.57422 138.366 6.69727 138.003C6.82617 137.634 6.89062 137.224 6.89062 136.772Z" fill="black"/>
        <path d="M199.222 85.2031H203.871C204.844 85.2031 205.679 85.3496 206.376 85.6426C207.073 85.9355 207.609 86.3691 207.984 86.9434C208.359 87.5176 208.547 88.2236 208.547 89.0615C208.547 89.7236 208.43 90.2979 208.195 90.7842C207.961 91.2705 207.63 91.6777 207.202 92.0059C206.78 92.334 206.282 92.5918 205.708 92.7793L204.952 93.166H200.848L200.83 91.2588H203.897C204.396 91.2588 204.809 91.1709 205.137 90.9951C205.465 90.8193 205.711 90.5762 205.875 90.2656C206.045 89.9551 206.13 89.6006 206.13 89.2021C206.13 88.7744 206.048 88.4053 205.884 88.0947C205.72 87.7783 205.471 87.5352 205.137 87.3652C204.803 87.1953 204.381 87.1104 203.871 87.1104H201.639V98H199.222V85.2031ZM206.446 98L203.484 92.2695L206.042 92.2607L209.039 97.877V98H206.446Z" fill="black"/>
        <path d="M326.222 84.2031H330.871C331.844 84.2031 332.679 84.3496 333.376 84.6426C334.073 84.9355 334.609 85.3691 334.984 85.9434C335.359 86.5176 335.547 87.2236 335.547 88.0615C335.547 88.7236 335.43 89.2979 335.195 89.7842C334.961 90.2705 334.63 90.6777 334.202 91.0059C333.78 91.334 333.282 91.5918 332.708 91.7793L331.952 92.166H327.848L327.83 90.2588H330.897C331.396 90.2588 331.809 90.1709 332.137 89.9951C332.465 89.8193 332.711 89.5762 332.875 89.2656C333.045 88.9551 333.13 88.6006 333.13 88.2021C333.13 87.7744 333.048 87.4053 332.884 87.0947C332.72 86.7783 332.471 86.5352 332.137 86.3652C331.803 86.1953 331.381 86.1104 330.871 86.1104H328.639V97H326.222V84.2031ZM333.446 97L330.484 91.2695L333.042 91.2607L336.039 96.877V97H333.446Z" fill="black"/>
        <path d="M207.222 168.203H211.871C212.844 168.203 213.679 168.35 214.376 168.643C215.073 168.936 215.609 169.369 215.984 169.943C216.359 170.518 216.547 171.224 216.547 172.062C216.547 172.724 216.43 173.298 216.195 173.784C215.961 174.271 215.63 174.678 215.202 175.006C214.78 175.334 214.282 175.592 213.708 175.779L212.952 176.166H208.848L208.83 174.259H211.897C212.396 174.259 212.809 174.171 213.137 173.995C213.465 173.819 213.711 173.576 213.875 173.266C214.045 172.955 214.13 172.601 214.13 172.202C214.13 171.774 214.048 171.405 213.884 171.095C213.72 170.778 213.471 170.535 213.137 170.365C212.803 170.195 212.381 170.11 211.871 170.11H209.639V181H207.222V168.203ZM214.446 181L211.484 175.27L214.042 175.261L217.039 180.877V181H214.446Z" fill="black"/>
        <line x1="186" y1="74" x2="186" y2="37" stroke="black" strokeWidth="2"/>
        <line x1="186" y1="226" x2="186" y2="189" stroke="black" strokeWidth="2"/>
        <line x1="186" y1="154" x2="186" y2="109" stroke="black" strokeWidth="2"/>
        <line x1="312" y1="72" x2="312" y2="37" stroke="black" strokeWidth="2"/>
        <line x1="312" y1="133" x2="312" y2="106" stroke="black" strokeWidth="2"/>
        <rect x="178.5" y="75" width="13" height="33" stroke="black" strokeWidth="2"/>
        <rect x="305" y="72" width="13" height="33" stroke="black" strokeWidth="2"/>
        <rect x="178.5" y="155" width="13" height="33" stroke="black" strokeWidth="2"/>
        <path d="M207 222.598L217.479 227.449L216.44 215.949L207 222.598ZM305 154.02C305.029 155.511 304.555 157.578 303.516 160.118C302.485 162.64 300.927 165.559 298.865 168.733C294.743 175.079 288.644 182.389 280.834 189.515C265.211 203.769 242.817 217.219 215.832 220.797L216.095 222.78C243.582 219.135 266.339 205.447 282.182 190.992C290.105 183.763 296.319 176.324 300.542 169.822C302.654 166.571 304.277 163.541 305.367 160.875C306.45 158.227 307.037 155.867 307 153.98L305 154.02Z" fill="black"/>
        </svg>


        </>
    )
}

export default Piata_schema_o_c;