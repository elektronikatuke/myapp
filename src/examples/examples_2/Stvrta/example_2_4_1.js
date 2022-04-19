import React, { useState } from "react";
import "../Week_example_2.css"


function Example_2_4_1(){


    return(
        <>
        
        <svg width="508" height="183" viewBox="0 0 508 183" fill="none">
            <circle cx="9.5" cy="26.5" r="7.5" stroke="black" strokeWidth="2"/>
            <circle cx="9.5" cy="167.5" r="7.5" stroke="black" strokeWidth="2"/>
            <line x1="17" y1="26" x2="112" y2="26" stroke="black" strokeWidth="2"/>
            <path d="M17 168H120" stroke="black" strokeWidth="2"/>
            <line x1="281" y1="168" x2="281" y2="27" stroke="black" strokeWidth="2"/>
            <line x1="455" y1="78" x2="455" y2="27" stroke="black" strokeWidth="2"/>
            <line x1="455" y1="169" x2="455" y2="129" stroke="black" strokeWidth="2"/>
            <line x1="145" y1="26" x2="456" y2="26" stroke="black" strokeWidth="2"/>
            <line x1="145" y1="168" x2="456" y2="168" stroke="black" strokeWidth="2"/>
            <rect x="112" y="21" width="32" height="10" stroke="black" strokeWidth="2"/>
            <line x1="119.5" y1="182.009" x2="119.5" y2="154.991" stroke="black" strokeWidth="2"/>
            <line x1="120" y1="168" x2="147.019" y2="168" stroke="black" strokeWidth="2"/>
            <line x1="146" y1="182.019" x2="146" y2="155" stroke="black" strokeWidth="2"/>
            <line x1="267" y1="113" x2="294.019" y2="113" stroke="black" strokeWidth="2"/>
            <line x1="268" y1="86" x2="295.019" y2="86" stroke="black" strokeWidth="2"/>
            <line x1="119.54" y1="168.112" x2="146.54" y2="154.112" stroke="black" strokeWidth="2"/>
            <line x1="120.474" y1="168.12" x2="146.474" y2="182.12" stroke="black" strokeWidth="2"/>
            <line x1="280.822" y1="86.9932" x2="281.007" y2="114.011" stroke="black" strokeWidth="2"/>
            <line x1="280.707" y1="86.5336" x2="294.891" y2="113.437" stroke="black" strokeWidth="2"/>
            <line x1="280.706" y1="87.4681" x2="266.884" y2="113.563" stroke="black" strokeWidth="2"/>
            <line x1="269.158" y1="85.6565" x2="264.754" y2="90.7166" stroke="black" strokeWidth="2"/>
            <line x1="298.158" y1="80.6565" x2="293.754" y2="85.7166" stroke="black" strokeWidth="2"/>
            <rect x="405" y="79" width="102" height="51" stroke="black" strokeWidth="2"/>
            <path d="M125.792 15V3.36364H129.724C130.633 3.36364 131.379 3.51894 131.962 3.82955C132.546 4.13636 132.978 4.55871 133.258 5.09659C133.538 5.63447 133.678 6.24621 133.678 6.93182C133.678 7.61742 133.538 8.22538 133.258 8.75568C132.978 9.28598 132.548 9.70265 131.968 10.0057C131.388 10.3049 130.648 10.4545 129.746 10.4545H126.565V9.18182H129.701C130.322 9.18182 130.822 9.09091 131.201 8.90909C131.584 8.72727 131.86 8.4697 132.031 8.13636C132.205 7.79924 132.292 7.39773 132.292 6.93182C132.292 6.46591 132.205 6.05871 132.031 5.71023C131.856 5.36174 131.578 5.0928 131.195 4.90341C130.813 4.71023 130.307 4.61364 129.678 4.61364H127.201V15H125.792ZM131.269 9.77273L134.133 15H132.496L129.678 9.77273H131.269Z" fill="black"/>
            <path d="M304.205 109V107.977L308.045 103.773C308.496 103.28 308.867 102.852 309.159 102.489C309.451 102.121 309.667 101.777 309.807 101.455C309.951 101.129 310.023 100.788 310.023 100.432C310.023 100.023 309.924 99.6686 309.727 99.3693C309.534 99.0701 309.269 98.839 308.932 98.6761C308.595 98.5133 308.216 98.4318 307.795 98.4318C307.348 98.4318 306.958 98.5246 306.625 98.7102C306.295 98.892 306.04 99.1477 305.858 99.4773C305.68 99.8068 305.591 100.193 305.591 100.636H304.25C304.25 99.9545 304.407 99.3561 304.722 98.8409C305.036 98.3258 305.464 97.9242 306.006 97.6364C306.551 97.3485 307.163 97.2045 307.841 97.2045C308.523 97.2045 309.127 97.3485 309.653 97.6364C310.18 97.9242 310.593 98.3125 310.892 98.8011C311.191 99.2898 311.341 99.8333 311.341 100.432C311.341 100.86 311.263 101.278 311.108 101.688C310.956 102.093 310.691 102.545 310.312 103.045C309.938 103.542 309.417 104.148 308.75 104.864L306.136 107.659V107.75H311.545V109H304.205ZM317.688 109.159C316.831 109.159 316.102 108.926 315.5 108.46C314.898 107.991 314.438 107.311 314.119 106.42C313.801 105.527 313.642 104.447 313.642 103.182C313.642 101.924 313.801 100.85 314.119 99.9602C314.441 99.0663 314.903 98.3845 315.506 97.9148C316.112 97.4413 316.839 97.2045 317.688 97.2045C318.536 97.2045 319.261 97.4413 319.864 97.9148C320.47 98.3845 320.932 99.0663 321.25 99.9602C321.572 100.85 321.733 101.924 321.733 103.182C321.733 104.447 321.574 105.527 321.256 106.42C320.938 107.311 320.477 107.991 319.875 108.46C319.273 108.926 318.544 109.159 317.688 109.159ZM317.688 107.909C318.536 107.909 319.195 107.5 319.665 106.682C320.134 105.864 320.369 104.697 320.369 103.182C320.369 102.174 320.261 101.316 320.045 100.608C319.833 99.8996 319.527 99.3598 319.125 98.9886C318.727 98.6174 318.248 98.4318 317.688 98.4318C316.847 98.4318 316.189 98.8466 315.716 99.6761C315.242 100.502 315.006 101.67 315.006 103.182C315.006 104.189 315.112 105.045 315.324 105.75C315.536 106.455 315.841 106.991 316.239 107.358C316.64 107.725 317.123 107.909 317.688 107.909ZM329.074 97.3636L332.528 107.159H332.665L336.119 97.3636H337.597L333.324 109H331.869L327.597 97.3636H329.074Z" fill="black"/>
            <path d="M238.98 96.3636L242.435 106.159H242.571L246.026 96.3636H247.503L243.23 108H241.776L237.503 96.3636H238.98Z" fill="black"/>
            <path d="M247.517 112V111.233L252.222 104.21H247.466V103.273H253.483V104.04L248.778 111.062H253.534V112H247.517Z" fill="black"/>
            <path d="M7.98011 96.3636L11.4347 106.159H11.571L15.0256 96.3636H16.5028L12.2301 108H10.7756L6.50284 96.3636H7.98011Z" fill="black"/>
            <path d="M16.9966 111V104.455H18.0023V111H16.9966ZM17.508 103.364C17.312 103.364 17.1429 103.297 17.0009 103.163C16.8617 103.03 16.7921 102.869 16.7921 102.682C16.7921 102.494 16.8617 102.334 17.0009 102.2C17.1429 102.067 17.312 102 17.508 102C17.704 102 17.8716 102.067 18.0108 102.2C18.1529 102.334 18.2239 102.494 18.2239 102.682C18.2239 102.869 18.1529 103.03 18.0108 103.163C17.8716 103.297 17.704 103.364 17.508 103.364Z" fill="black"/>
            <path d="M435.07 100.273C435.001 99.697 434.725 99.25 434.24 98.9318C433.755 98.6136 433.161 98.4545 432.456 98.4545C431.941 98.4545 431.49 98.5379 431.104 98.7045C430.721 98.8712 430.422 99.1004 430.206 99.392C429.994 99.6837 429.888 100.015 429.888 100.386C429.888 100.697 429.962 100.964 430.109 101.188C430.261 101.407 430.454 101.591 430.689 101.739C430.924 101.883 431.17 102.002 431.428 102.097C431.685 102.187 431.922 102.261 432.138 102.318L433.32 102.636C433.623 102.716 433.96 102.826 434.331 102.966C434.706 103.106 435.064 103.297 435.405 103.54C435.75 103.778 436.034 104.085 436.257 104.46C436.481 104.835 436.592 105.295 436.592 105.841C436.592 106.47 436.428 107.038 436.098 107.545C435.772 108.053 435.295 108.456 434.666 108.756C434.041 109.055 433.282 109.205 432.388 109.205C431.554 109.205 430.833 109.07 430.223 108.801C429.617 108.532 429.14 108.157 428.791 107.676C428.446 107.195 428.251 106.636 428.206 106H429.661C429.698 106.439 429.846 106.803 430.104 107.091C430.365 107.375 430.695 107.587 431.092 107.727C431.494 107.864 431.926 107.932 432.388 107.932C432.926 107.932 433.409 107.845 433.837 107.67C434.265 107.492 434.604 107.246 434.854 106.932C435.104 106.614 435.229 106.242 435.229 105.818C435.229 105.432 435.121 105.117 434.905 104.875C434.689 104.633 434.405 104.436 434.053 104.284C433.7 104.133 433.32 104 432.911 103.886L431.479 103.477C430.57 103.216 429.85 102.843 429.32 102.358C428.789 101.873 428.524 101.239 428.524 100.455C428.524 99.803 428.7 99.2348 429.053 98.75C429.409 98.2614 429.886 97.8826 430.484 97.6136C431.087 97.3409 431.759 97.2045 432.501 97.2045C433.251 97.2045 433.918 97.339 434.501 97.608C435.085 97.8731 435.547 98.2367 435.888 98.6989C436.232 99.161 436.414 99.6856 436.433 100.273H435.07ZM439.591 112.273C439.364 112.273 439.161 112.254 438.983 112.216C438.805 112.182 438.682 112.148 438.614 112.114L438.955 110.932C439.28 111.015 439.568 111.045 439.818 111.023C440.068 111 440.29 110.888 440.483 110.688C440.68 110.491 440.86 110.17 441.023 109.727L441.273 109.045L438.045 100.273H439.5L441.909 107.227H442L444.409 100.273H445.864L442.159 110.273C441.992 110.723 441.786 111.097 441.54 111.392C441.294 111.691 441.008 111.913 440.682 112.057C440.36 112.201 439.996 112.273 439.591 112.273ZM453.815 102.227L452.611 102.568C452.535 102.367 452.423 102.172 452.276 101.983C452.132 101.79 451.935 101.631 451.685 101.506C451.435 101.381 451.115 101.318 450.724 101.318C450.19 101.318 449.745 101.441 449.389 101.688C449.037 101.93 448.861 102.239 448.861 102.614C448.861 102.947 448.982 103.21 449.224 103.403C449.467 103.597 449.846 103.758 450.361 103.886L451.656 104.205C452.437 104.394 453.018 104.684 453.401 105.074C453.783 105.46 453.974 105.958 453.974 106.568C453.974 107.068 453.83 107.515 453.543 107.909C453.259 108.303 452.861 108.614 452.349 108.841C451.838 109.068 451.243 109.182 450.565 109.182C449.675 109.182 448.938 108.989 448.355 108.602C447.772 108.216 447.402 107.652 447.247 106.909L448.52 106.591C448.641 107.061 448.87 107.413 449.207 107.648C449.548 107.883 449.993 108 450.543 108C451.168 108 451.664 107.867 452.031 107.602C452.402 107.333 452.588 107.011 452.588 106.636C452.588 106.333 452.482 106.08 452.27 105.875C452.058 105.667 451.732 105.511 451.293 105.409L449.838 105.068C449.039 104.879 448.452 104.585 448.077 104.188C447.705 103.786 447.52 103.284 447.52 102.682C447.52 102.189 447.658 101.754 447.935 101.375C448.215 100.996 448.596 100.699 449.077 100.483C449.562 100.267 450.111 100.159 450.724 100.159C451.588 100.159 452.266 100.348 452.759 100.727C453.255 101.106 453.607 101.606 453.815 102.227ZM459.788 100.273V101.409H455.266V100.273H459.788ZM456.584 98.1818H457.925V106.5C457.925 106.879 457.98 107.163 458.089 107.352C458.203 107.538 458.347 107.663 458.521 107.727C458.699 107.788 458.887 107.818 459.084 107.818C459.232 107.818 459.353 107.811 459.447 107.795C459.542 107.777 459.618 107.761 459.675 107.75L459.947 108.955C459.857 108.989 459.73 109.023 459.567 109.057C459.404 109.095 459.197 109.114 458.947 109.114C458.569 109.114 458.197 109.032 457.834 108.869C457.474 108.706 457.175 108.458 456.936 108.125C456.701 107.792 456.584 107.371 456.584 106.864V98.1818ZM465.371 109.182C464.53 109.182 463.804 108.996 463.195 108.625C462.589 108.25 462.121 107.727 461.791 107.057C461.465 106.383 461.303 105.598 461.303 104.705C461.303 103.811 461.465 103.023 461.791 102.341C462.121 101.655 462.579 101.121 463.166 100.739C463.757 100.352 464.446 100.159 465.234 100.159C465.689 100.159 466.138 100.235 466.581 100.386C467.024 100.538 467.428 100.784 467.791 101.125C468.155 101.462 468.445 101.909 468.661 102.466C468.876 103.023 468.984 103.708 468.984 104.523V105.091H462.257V103.932H467.621C467.621 103.439 467.522 103 467.325 102.614C467.132 102.227 466.856 101.922 466.496 101.699C466.14 101.475 465.719 101.364 465.234 101.364C464.7 101.364 464.238 101.496 463.848 101.761C463.462 102.023 463.164 102.364 462.956 102.784C462.748 103.205 462.643 103.655 462.643 104.136V104.909C462.643 105.568 462.757 106.127 462.984 106.585C463.215 107.04 463.536 107.386 463.945 107.625C464.354 107.86 464.829 107.977 465.371 107.977C465.723 107.977 466.041 107.928 466.325 107.83C466.613 107.727 466.861 107.576 467.07 107.375C467.278 107.17 467.439 106.917 467.553 106.614L468.848 106.977C468.712 107.417 468.482 107.803 468.161 108.136C467.839 108.466 467.441 108.723 466.967 108.909C466.494 109.091 465.962 109.182 465.371 109.182ZM471.024 109V100.273H472.32V101.636H472.433C472.615 101.17 472.909 100.809 473.314 100.551C473.719 100.29 474.206 100.159 474.774 100.159C475.35 100.159 475.829 100.29 476.212 100.551C476.598 100.809 476.899 101.17 477.115 101.636H477.206C477.429 101.186 477.765 100.828 478.212 100.562C478.659 100.294 479.195 100.159 479.82 100.159C480.6 100.159 481.238 100.403 481.734 100.892C482.231 101.377 482.479 102.133 482.479 103.159V109H481.138V103.159C481.138 102.515 480.962 102.055 480.609 101.778C480.257 101.502 479.842 101.364 479.365 101.364C478.751 101.364 478.276 101.549 477.939 101.92C477.602 102.288 477.433 102.754 477.433 103.318V109H476.07V103.023C476.07 102.527 475.909 102.127 475.587 101.824C475.265 101.517 474.85 101.364 474.342 101.364C473.994 101.364 473.668 101.456 473.365 101.642C473.066 101.828 472.823 102.085 472.638 102.415C472.456 102.741 472.365 103.117 472.365 103.545V109H471.024Z" fill="black"/>
            <path d="M132.273 142.273C132.205 141.697 131.928 141.25 131.443 140.932C130.958 140.614 130.364 140.455 129.659 140.455C129.144 140.455 128.693 140.538 128.307 140.705C127.924 140.871 127.625 141.1 127.409 141.392C127.197 141.684 127.091 142.015 127.091 142.386C127.091 142.697 127.165 142.964 127.312 143.188C127.464 143.407 127.657 143.591 127.892 143.739C128.127 143.883 128.373 144.002 128.631 144.097C128.888 144.187 129.125 144.261 129.341 144.318L130.523 144.636C130.826 144.716 131.163 144.826 131.534 144.966C131.909 145.106 132.267 145.297 132.608 145.54C132.953 145.778 133.237 146.085 133.46 146.46C133.684 146.835 133.795 147.295 133.795 147.841C133.795 148.47 133.631 149.038 133.301 149.545C132.975 150.053 132.498 150.456 131.869 150.756C131.244 151.055 130.485 151.205 129.591 151.205C128.758 151.205 128.036 151.07 127.426 150.801C126.82 150.532 126.343 150.157 125.994 149.676C125.65 149.195 125.455 148.636 125.409 148H126.864C126.902 148.439 127.049 148.803 127.307 149.091C127.568 149.375 127.898 149.587 128.295 149.727C128.697 149.864 129.129 149.932 129.591 149.932C130.129 149.932 130.612 149.845 131.04 149.67C131.468 149.492 131.807 149.246 132.057 148.932C132.307 148.614 132.432 148.242 132.432 147.818C132.432 147.432 132.324 147.117 132.108 146.875C131.892 146.633 131.608 146.436 131.256 146.284C130.903 146.133 130.523 146 130.114 145.886L128.682 145.477C127.773 145.216 127.053 144.843 126.523 144.358C125.992 143.873 125.727 143.239 125.727 142.455C125.727 141.803 125.903 141.235 126.256 140.75C126.612 140.261 127.089 139.883 127.688 139.614C128.29 139.341 128.962 139.205 129.705 139.205C130.455 139.205 131.121 139.339 131.705 139.608C132.288 139.873 132.75 140.237 133.091 140.699C133.436 141.161 133.617 141.686 133.636 142.273H132.273ZM135.93 151V142.273H137.271V151H135.93ZM136.612 140.818C136.351 140.818 136.125 140.729 135.936 140.551C135.75 140.373 135.658 140.159 135.658 139.909C135.658 139.659 135.75 139.445 135.936 139.267C136.125 139.089 136.351 139 136.612 139C136.874 139 137.097 139.089 137.283 139.267C137.472 139.445 137.567 139.659 137.567 139.909C137.567 140.159 137.472 140.373 137.283 140.551C137.097 140.729 136.874 140.818 136.612 140.818Z" fill="black"/>
            <line x1="10" y1="152" x2="19" y2="152" stroke="black" strokeWidth="2"/>
            <line x1="8" y1="49" x2="20" y2="49" stroke="black" strokeWidth="2"/>
            <line x1="14" y1="55" x2="14" y2="43" stroke="black" strokeWidth="2"/>
        </svg>

        </>
    );

}
export default Example_2_4_1;